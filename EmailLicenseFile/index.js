module.exports = async function (context, license) {
    context.log("JavaScript blob trigger function processed file \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", license.length, "Bytes")

    var message = {
        personalizations: [ { "to": [ { "email": "ross.whitehead@nationwide.com" } ] } ],
        from: { email: "ross.whitehead@outlook.com" },
        subject: "License file",
        content: [{
            type: 'text/plain',
            value: license
        }]
    }

    context.done(null, message);
}
}