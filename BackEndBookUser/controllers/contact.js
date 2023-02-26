const Contact = require('../models/contact');


const create = async (req, res, filename) => {
  try {

    let contact = new Contact(req.body);
    contact.image = filename;
    let result = await contact.save();
    res.send(result);

  } catch (error) {
    res.send(error);
  }
}

const getByIdUser = async (req, res) => {
  try {
    let id = req.params.iduser;
    let result = await Contact.find({ idUser: id });
    res.send(result);

  } catch (error) {
    res.send(error);
  }
  

}

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Contact.findById({ _id: id });
    res.send(result);
    
  } catch (error) {
    res.send(error);
  }
}
const del = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Contact.findByIdAndDelete({ _id: id });
    res.send(result);

  } catch (error) {
    res.send(error);
  }
  
}

const update = async (req, res, filename) => {
  try {
    let id = req.params.id;
    let data = req.body;

    if (filename.length > 0) {
      data.image = filename;
    }
    
    let result = await Contact.findByIdAndUpdate({ _id: id }, data);
    res.send(result);
    
  } catch (error) {
    res.send(error);
  }
  

}

module.exports = {
  create,
  getByIdUser,
  getById,
  del,
  update
}