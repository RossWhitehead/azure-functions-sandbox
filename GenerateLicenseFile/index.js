module.exports = async function (context, payment) {
    context.log('JavaScript queue trigger function processed work item', payment)
    let contents = "License file content should go here."
    context.bindings.licenseFile = contents 
    context.done()
}