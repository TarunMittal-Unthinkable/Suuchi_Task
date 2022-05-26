const { Route } = require('libsvc');
const _ = require('lodash');
const { search } = require('controllers');
const route = new Route('post', '/api/advanceSearch/');

route.setMeta({
    isPublic: false,
    apiFor: true,
    isGeneric: false
});


route.validateParams({
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'numberString'
        }
    },
    additionalProperties: false,
    required: ['id']
});


route.validateBody({
    type: 'object',
    properties: {
       //our db schema come here
    },
    additionalProperties: false
});


route.use((req,res,next)=>{
    search.advanceSearch(req.body.fieldname, req.body.supplierName,req.body.POstatus,
        req.body.inventoryAgent,req.body.PurchasingAgent,req.body.Company,
        req.body.Brand,req.body.DestinationMarket).then(result=>{
            res.json(result);
            next();
        }).catch(err => {
            res.json(err);
        })
      
});



module.exports=route;

