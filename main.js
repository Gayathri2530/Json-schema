const { boolean } = require("mathjs");

const Json={

        "paymentID":"asdfghjkl",
        "Gymmemberid":{
            "Keytag":true,
            "photo":true,
            "MemberShipCard":true,
            "AccessControlCard":true
        },
        "GymID":"FITNOCK",
        "OrganizationID":"FITNOCK",
        "Invoicec reatedDate":"DEC 01 2024",
        "PaymentStatus":{
            "paid":true,
            "pending":false,
            "unpaid":false
        },
        "DueDate":"DEC 18 2024",
        "Description":"A gym, or gymnasium, is an indoor space for exercise and sports.It can also be a place for socializing unwinding, and recharging.Here are some things to consider when describing a gym",
        "TaxPercentage":10,
        "Amount":2500,
        "PaymentMethod":"Google Pay",
        "SubscriptionID":"QWERT-RT00-0000-00GT-0A0VV00DE000"
    };






const ajvInstance = require('./ajv-instance');
const paymentHistorySchemaValidation ={
    type:'object',
    properties:{
        paymentId: {type:'string'},
        gymMemberId: {type: 'string'},
        gymId: {type: 'string'},
        organizationId: {type: 'string'},
        invoiceCreatedDate: {type: 'sting'},
        paymentStatus: {
            type:'boolean',
            paid: [true,false],
            pending: [true,false],
            unpaid: [true,false]
        },
        dueDate: {type: 'string'},
        description: {type: 'string'},
        taxPercentage: {type: 'number'},
        amount: {type: 'number'},
        paymentMethod: {type: 'string'},
        subscriptionId: {type: 'string'}
    },
    required:['paymentId',' gymMemberId','gymId','organizationId','invoiceCreatedDate','paymentStatus','dueDate','description','taxPercentage','amount','paymentMethod','subscriptionId'],
    additionalProperties:false,
};
    module.exports = ajvInstance.compile(paymentHistorySchemaValidation );

    const data = {
            "paymentID":"asdfghjkl",
            "GymmemberId":{
                "Keytag":true,
                "photo":true,
                "MemberShipCard":true,
                "AccessControlCard":true
            },
            "GymID":"FITNOCK",
            "OrganizationID":"FITNOCK",
            "InvoiceCreatedDate":"DEC 01 2024",
            "PaymentStatus":{
                "paid":true, 
                "pending":false,
                "unpaid":false
            },
            "DueDate":"DEC 18 2024",
            "Description":"A gym, or gymnasium, is an indoor space for exercise and sports.It can also be a place for socializing unwinding, and recharging.Here are some things to consider when describing a gym",
            "TaxPercentage":10,
            "Amount":2500,
            "PaymentMethod":"Google Pay",
            "SubscriptionID":"QWERT-RT00-0000-00GT-0A0VV00DE000"
        };

        const valid = validate(data);

        if (!valid) {
            console.log("Validation failed:", validate.errors);
          };

    
