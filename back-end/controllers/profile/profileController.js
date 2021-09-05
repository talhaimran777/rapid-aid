const normalize = require('normalize-url')
const Profile = require('../../models/Profile')
const { validationResult } = require('express-validator')
const mongoose = require('mongoose')

// mongoose.Types.ObjectId('569ed8269353e9f4c51617aa')

// GET YOUR PROFILE
const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.body.user.id,
    })
      .populate('user', ['name', 'email', 'avatar'])
      .exec()

    res.json({ status: 'SUCCES', profile })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}

// UPDATE YOUR PROFILE
const updateProfile = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  console.log(req.body.user.id)

  const {
    designation,
    bio,
    birthDate,
    country,
    city,
    website,
    phone,
    address,
    skills,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = req.body

  const profileFields = {
    designation,
    country,
    city,
    phone,
    address,
  }

  if (bio) {
    profileFields.bio = bio
  }

  if (birthDate) {
    profileFields.birthDate = birthDate
  }

  if (website && website !== '') {
    profileFields.website = normalize(website, { forceHttps: true })
  }

  try {
    let profile = await Profile.findOneAndUpdate(
      { user: req.body.user.id },
      { $set: profileFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )

    return res.json({ status: 'SUCCESS', profile })
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error')
  }

  //   try {
  //     let profile = await Profile.findOneAndUpdate(
  //       { user: mongoose.Types.ObjectId(userId) },
  //       { $set: profileFields },
  //       { new: true, upsert: true, setDefaultsOnInsert: true }
  //     )

  //     console.log(profile)
  //     return res.json({ status: 'SUCCESS', profile })
  //   } catch (err) {
  //     console.error(err.message)
  //     return res.status(500).send('Server Error')
  //   }

  //   try {
  //       const profile = await Profile.findOne({
  //         user: req.user.id
  //       }).populate('user', ['name', 'avatar']);
  //       if (!profile) {
  //         return res.status(400).json({ msg: 'There is no profile for this user' });
  //       }
  //       res.json(profile);
  //     } catch (err) {
  //       console.error(err.message);
  //       res.status(500).send('Server Error');
  //     }
}

module.exports = {
  getMyProfile,
  updateProfile,
}
