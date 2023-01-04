module.exports = app => {
    const ttls = require("./controller");

    var router = require("express").router()

    router.post("/", ttls.create)

    router.get("/", ttls.findAll)

    router.get("/:id", ttls.findOne)

    router.get("/published", ttls.findAllPublished)

    router.put("/:id", ttls.update)

    router.delete("/:id", ttls.delete)

    router.delete('/:id', ttls.deleteAll)

    app.use('/api/ttls',router)











}