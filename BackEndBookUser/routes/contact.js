const express = require('express');
const router = express.Router();

const { create, getByIdUser, getById, del, update } = require('../controllers/contact');



const multer = require('multer');

let filename = '';

const myStorage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, redirect) => {
    filename = Date.now() + '.' + file.mimetype.split('/')[1];
    redirect(null, filename);
  },
  })

const upload = multer({ storage: myStorage });

router.post('/create', upload.any('image'), (req, res) => {
  create(req, res, filename);
  filename = '';
});

router.get('/getbyiduser/:iduser', getByIdUser);
router.get('/getbyid/:id', getById);
router.delete('/delete/:id', del);


router.put('/update/:id', upload.any('image'), (req, res) => {

  update(req, res, filename);
  filename = '';
});



module.exports = router;