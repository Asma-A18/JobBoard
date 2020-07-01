const express = require('express')
const router = express.Router()
const isAuth = require("../middlewares/passport-Setup");
const User = require('../model/User');
const {check, validationResult} = require('express-validator')
const {validateProfileInput, validator} = require('../middlewares/employeValidators')
const {validateExperienceInput, validators} = require('../middlewares/experienceValidator')
const CompanyProfile=require("../model/companysschema")

router.get('/me', isAuth(), async (req, res) => {
  try {
    const profile = await CompanyProfile.findOne({
      user: req.user.id,
    }).populate('User', [
      'name','email'
    ]);
    if (!profile)
      return res.status(400).json({ msg: 'there is no profile for this user' });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500);
  }
});



//   @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
// router.get('/user/:user_id', async (req, res) => {
//   try {
//     const profile = await CompanyProfile.findOne({
//       user: req.params.user_id,
//     })

//     if (!profile) return res.status(400).json({ msg: 'Profile not found' });

//     res.json(profile);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind == 'ObjectId') {
//       return res.status(400).json({ msg: 'Profile not found' });
//     }
//     res.status(500).send('Server Error');
//   }
// });





router.post("/", isAuth(), async (req, res) => {
  
  const {
      
     about, 
     field,
     address,
     phone
     
    } = req.body;
    const profileFields = {};

    profileFields.user = req.user.id;
  
    if (about) profileFields.about = about;
    if (field) profileFields.field = field;
    if (address) profileFields.address = address;
    if (phone) profileFields.phone = phone;
   
    try {
      let profile = await CompanyProfile.findOne({ user: req.user.id });
      if (profile) {
        profile = await CompanyProfile.findOneAndUpdate(
          { user: req.user._id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      profile = new CompanyProfile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


router.delete("/:id",isAuth(),async(req,res)=>{
  try {
    const foundcompany = await CompanyProfile.findOne({ user: req.user.id });
    let id_profile=req.params.id
    await CompanyProfile.findOneAndDelete({ _id:id_profile})
    await foundcompany.save();
    return res.status(200).json(foundcompany);
   
    
  } catch (err) {
    console.error(err.message)
    res.send({success:false})
    
  }
})

router.put('/:id',isAuth(),async(req,res)=>{
  try {
    const Profileinfos=req.body
    await CompanyProfile.findOneAndUpdate({_id:req.params.id},{$set:{...Profileinfos}})
    res.send({success:true})
  } catch (err) {
    console.error(err.message)
    res.send({success:false})
    // res.status(500).send("error server")
  }
})




module.exports=router