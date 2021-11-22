class CatalogItem {
  constructor(catalogItemObj, catalogImageObj) {
    this.catalogItemObj = catalogItemObj;
    this.catalogImageObj = catalogImageObj;
  }
  // Returns CatalogItemObject id, which is what is actually sold
  // If no variation exists it defaults to the CatalogItemObject id
  get defaultVariationId() {
    return this.defaultVariation.id;
  }
  // Return the catalog item object Id
  get itemObjectId() {
    return this.catalogItemObj.id;
  }
  // Returns  name of CatalogItemObject
  get name() {
    return this.catalogItemObj.itemData.name;
  }
  // Returns description of CatalogItemObject
  get description() {
    return this.catalogItemObj.itemData.description;
  }
  // Returns associated image url for CatalogObject
  get imageUrl() {
    return this.catalogImageObj && this.catalogImageObj.imageData && this.catalogImageObj.imageData.url;
  }
  // Returns price in dollars
  get price() {
    const {
      priceMoney
    } = this.defaultVariation.itemVariationData;
    // item price money can be undefined, then we default to 0.00
    return priceMoney ? `${(parseInt(priceMoney.amount)/100).toFixed(2)}` : 0.00;
  }
  // Returns the first variation in the variations array, our example we are selling one version of the item
  get defaultVariation() {
    // We don't have to check invalid itemData because we've filtered them out when initialize.
    return this.catalogItemObj.itemData.variations[0];
  }
}

module.exports = CatalogItem;
