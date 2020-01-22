const {id} = req.params;
    const {title, content} = req.body;
    const card = cards.find(p => p.id == id);

    if(!card){
        return res.json({error: "Card not found."});
    }

    next();
;
