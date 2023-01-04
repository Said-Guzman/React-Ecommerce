const db = require("./models");
const Tuts = db.tuts;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body.title){
    res.status(400).send({
        message: "content can not be empty!"
    })
  return
};

const tuts = {
    title: req.bodt.title,
    description: req.body.description,
    price: req.body.price ? req.body.price : false
  }

  Tuts.create(tuts)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
        message:
        err.message || "some error occured while creating the stuff"
    })
  })
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? {title: {[Op.like]: `%${title}%` }  }: null

  Tuts.findAll({where: condition})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
        message:
        err.message || "some error occured while retrieving the data"
    })
  })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id

  Tuts.findByPk({id})
 .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
        message:
        err.message || "error retrieving data with id" + id
    })
  })


};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tuts.update(req.body,{
    where: {id:id}
  })

 .then(num => {
    if (num == 1){

    
    res.send({
        message: "data was updated successfully"
    })}else{
        res.send({
            message: `cannot update data with id=${id}. maybe data was not found was not found or req.body is empty`
        })
    }
  })
  .catch(err => {
    res.status(500).send({
        message:
        err.message || "error updating data with id=" + id
    })
  })


};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tuts.destroy({
    where: {id: id}
  })

 .then(num => {
    if (num == 1){

    
    res.send({
        message: "data was deleted successfully"
    })}else{
        res.send({
            message: `cannot delete data with id=${id}.`
        })
    }
  })
  .catch(err => {
    res.status(500).send({
        message:
        err.message || "error deleting data with id=" + id
    })
  })
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tuts.destroy({
    where: {},
    truncate:false
  })
    .then(nums => {
        res.send({ message: `${nums} data were all deleted successfully!`})
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "some error occured whlie removing all data"
        })
    })


};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tuts.findAll({where: {price: true}})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "some error occured while retrieving data"
        })
    })
};