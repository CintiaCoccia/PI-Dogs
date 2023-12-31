module.exports = function parseNameQuery(req, res, next) {
    if (req.url.includes("?")) {
        // chequeo si url tiene ? (tiene query params) 
        const query = req.url.split("?")[1]; //divido en 2 desde ?. izq url derecha queryP.
        const params = query.split("&"); //params [ ] es string (key:value&key:value&)

        for (let param of params) {
            const [key, value] = param.split("=");

            if (key == "") {
                req.query.name = value; //si no tiene asigno el name.
                break;
            }
        }
    }

    next();
};

