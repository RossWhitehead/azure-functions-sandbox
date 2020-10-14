module.exports = async function (context, req) {
    context.log('Received a payment.')
    
    const responseMessage = "Thank you for your purchase."

    context.bindings.payment = req.body
    context.done()

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    }
}