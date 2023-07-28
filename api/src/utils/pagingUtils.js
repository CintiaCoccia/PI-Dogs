function applyPaging(data, request) { //data = allDogs antes de ser respuesta. request es la page(query param)
    const page = parseInt(request.query.page ?? "0")
    const paging = { 
        page: page, 
        moreElements: (page * 8 + 8) < data.length
    }
    return {
        paging: paging,
        breeds: data.slice(page * 8, (page+1) * 8)
    }
}

module.exports = {
    applyPaging: applyPaging
}