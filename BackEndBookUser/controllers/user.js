const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  try {
    let user = new User(req.body);

    let salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(req.body.password, salt);

    let result = await user.save();
    res.send(result);
    
  } catch (error) {
    res.send(error);
  }
  
  
}

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let result = await User.findOne({ email: email });

    if (!result) {
      res.send('invalid email or password!')
    } else {
      let valid = bcrypt.compareSync(password, result.password);
          
      if (!valid) {
        res.send('invalid email or password!')
      } else {
        let payload = {
          _id: result._id,
          name: result.name,
          lastname: result.lastname,
          email:result.email
        }
        let token = jwt.sign(payload, '123456789');
        res.send({ myToken: token });
      
      }
    }

    

    
  } catch (error) {
    res.send(error);
  }
  

}


module.exports = {
  register,
  login
}