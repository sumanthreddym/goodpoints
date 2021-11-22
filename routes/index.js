const express = require("express");
const { v4: uuidv4 } = require("uuid");
const url = require("url");
const {
  catalogApi,
  locationsApi,
  loyaltyApi,
  getLoyaltyAccountByPhoneNumber,
  getLoyaltyRewardInformation
} = require("../util/square-client");

const router = express.Router();
const CatalogList = require("../models/catalog-list");
const LocationInfo = require("../models/location-info");

router.get("/", async (req, res, next) => {
  const {
    locationId,
    loyaltyAccountId
  } = req.query;
  const types = "ITEM,IMAGE"; 
  try {
    // Retrieves locations in order to display the store name
    const { result: { locations } } = await locationsApi.listLocations();
    // Get CatalogItem and CatalogImage object
    const { result: { objects } } = await catalogApi.listCatalog(undefined, types);
    let loyaltyRewardInfo = {loyaltyAccountId: loyaltyAccountId};
    if(loyaltyAccountId){
      loyaltyRewardInfo = await getLoyaltyRewardInformation(loyaltyAccountId);
    }
    // Renders index view, with catalog and location information
    res.render("index", {
      items: new CatalogList(objects).items,
      locationInfo: new LocationInfo(locations[0]), // take the first location for the sake of simplicity.
      loyaltyRewardInfo: loyaltyRewardInfo
    });
  } catch (error) {
    next(error);
  }
});

router.get("/transactions", async (req, res, next) => {
  const {
    locationId,
    loyaltyAccountId
  } = req.query;

  try {
    const { result: { locations } } = await locationsApi.listLocations();

    const loyaltyRequestBody = {
      query: {
        filter: {
          loyaltyAccountFilter:{
            loyaltyAccountId: loyaltyAccountId
          }
        }
      }
    };
    const transactions = await loyaltyApi.searchLoyaltyEvents(loyaltyRequestBody);

    

    let loyaltyRewardInfo = {loyaltyAccountId: loyaltyAccountId};
    if(loyaltyAccountId){
      loyaltyRewardInfo = await getLoyaltyRewardInformation(loyaltyAccountId);
    }
    console.log(JSON.parse(transactions['body'])['events'][0])
    // Renders index view, with catalog and location information
    res.render("transactions", {
      transactions: JSON.parse(transactions['body'])['events'],
      locationInfo: new LocationInfo(locations[0]), // take the first location for the sake of simplicity.
      loyaltyRewardInfo: loyaltyRewardInfo
    });
  } catch (error) {
    next(error);
  }
});



router.post("/add-loyalty-account", async (req, res, next) => {
  const {
    locationId,
    phoneNumber
  } = req.body;

  try {
    const formatedPhoneNumber = `+1${phoneNumber}`;
    const currentLoyaltyAccount = await getLoyaltyAccountByPhoneNumber(formatedPhoneNumber);

    if (currentLoyaltyAccount) {
      // Get the referrer path and redirect back with the loyalty account id
      const referrerPath = url.parse(req.get("referrer")).pathname;
      res.redirect(`${referrerPath}?locationId=${locationId}&loyaltyAccountId=${currentLoyaltyAccount && currentLoyaltyAccount.id}`);
    } else {
      // Go back to confirmation page
      res.redirect(req.get("referrer"));
    }

  } catch (error) {
    next(error);
  }
});


router.post("/redeem-points", async (req, res, next) => {

  const {
    itemName,
    itemId,
    locationId,
    accountId,
    redeemedPoints
  } = req.body;
  let reason = `redeemed ${redeemedPoints} points for donation to ${itemName}(${itemId})`;
  try {
    const loyaltyRequestBody = {
      idempotencyKey: uuidv4(), // Unique identifier for request
      adjustPoints: {
        points: -redeemedPoints,
        reason: reason
      }
    };

    const { result: { event } } = await loyaltyApi.adjustLoyaltyPoints(accountId, loyaltyRequestBody);

    loyaltyRewardInfo = await getLoyaltyRewardInformation(accountId);
    const { result: { locations } } = await locationsApi.listLocations();
    res.render("donation-confirmation", {
      locationInfo: new LocationInfo(locations[0]), 
      loyaltyRewardInfo: loyaltyRewardInfo,
      donationInfo: event
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
