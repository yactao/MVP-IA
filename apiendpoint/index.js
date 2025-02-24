module.exports = async function (context, req) {
    context.log('Processing request for apiendpoint.');

    const queryParam = req.query.query || (req.body && req.body.query);
    if (!queryParam) {
        context.res = {
            status: 400,
            body: "Veuillez fournir le paramètre 'query'."
        };
        return;
    }

    const result = queryParam.toUpperCase();

    context.res = {
        status: 200,
        body: { result }
    };
};
