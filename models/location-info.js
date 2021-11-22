class LocationInfo {
  constructor(locationObj) {
    this.locationObj = locationObj;
  }

  // Returns the id of the location
  get id() {
    return this.locationObj.id;
  }

  // Returns the store name stored in the locationObj
  get storeName() {
    return this.locationObj.businessName || this.locationObj.name;
  }

  // Returns Address Line 1
  get addressLine() {
    const { address } = this.locationObj;
    return address ? address.addressLine1 : "";
  }

  // Returns formatted city, state, and zip code as one string
  get cityStateZip() {
    if (this.locationObj.address) {
      const {
        locality,
        administrativeDistrictLevel1,
        postalCode,
      } = this.locationObj.address;
      return `${locality}, ${administrativeDistrictLevel1}, ${postalCode}`;
    } else {
      return "";
    }
  }
}

module.exports = LocationInfo;
