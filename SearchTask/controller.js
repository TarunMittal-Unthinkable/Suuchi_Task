const {dbConnection} = require('../../../util');


helpers = {}
helpers.advanceSearch = (fieldname,
    supplierName,
    POstatus,
    inventoryAgent,
    PurchasingAgent,
    Company,
    Brand,
    DestinationMarket
) => {
    let db = dbConnection.getDb();
    return db.func('adance_search', [fieldname, supplierName, POstatus,
        inventoryAgent,PurchasingAgent,Company,
        Brand,DestinationMarket]);
}


