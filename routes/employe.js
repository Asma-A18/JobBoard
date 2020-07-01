const express = require("express");
const Employe = require('../model/Employe');
const User = require('../model/User');
const isAuth = require("../middlewares/passport-Setup");
const router = express.Router();
const {check, validationResult} = require('express-validator')
const {validateProfileInput, validator} = require('../middlewares/employeValidators')
const {validateExperienceInput, validators} = require('../middlewares/experienceValidator')



router.post("/", isAuth(), validateProfileInput(), validator, async (req, res) => {
  
    const {
        
        bio,
        skills,
        status,
       
      } = req.body;
      const profileFields = {};

      profileFields.user = req.user.id;
    
      if (bio) profileFields.bio = bio;
      if (status) profileFields.status = status;
      if (skills) {
        profileFields.skills = skills.split(',').map((skill) => skill.trim());
      }
      try {
        let profile = await Employe.findOne({ user: req.user.id });
        if (profile) {
          profile = await Employe.findOneAndUpdate(
            { user: req.user._id },
            { $set: profileFields },
            { new: true }
          );
          return res.json(profile);
        }
        profile = new Employe(profileFields);
        await profile.save();
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );









  router.get('/me', isAuth(), async (req, res) => {
    try {
      const profile = await Employe.findOne({
        user: req.user.id,
      }).populate('user', [
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





  // @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Employe.findOne({
      user: req.params.user_id,
    })

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});






// @route    Post api/profile/experience
// @desc     Add profile experience
// @access   Private




router.post("/experience", isAuth(), validateExperienceInput(), validators, async (req, res) => {
      const {
        title,
        company,
        location,
        from,
        to,
        current,
        description,
      } = req.body;
  
      const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description,
      };
  
      try {
        const profile = await Employe.findOne({ user: req.user.id });
  
        profile.experience.unshift(newExp);
  
        await profile.save();
  
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/all', async (req, res) => {
  try {
    const profiles = await Employe.find().populate('user', [
      'name','email'
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    DELETE api/profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private

router.delete('/experience/:exp_id', isAuth() , async (req, res) => {
  try {
    const foundEmploye = await Employe.findOne({ user: req.user.id });

    foundEmploye.experience = foundEmploye.experience.filter(
      (exp) => exp._id.toString() !== req.params.exp_id
    );

    await foundEmploye.save();
    return res.status(200).json(foundEmploye);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});
  module.exports = router