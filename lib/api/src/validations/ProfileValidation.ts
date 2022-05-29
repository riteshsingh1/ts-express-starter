import Joi from 'joi'

export const UpdateUserPersonalDetailValidationSchema = Joi.object({
  journeyId: Joi.string().required(),
  name: Joi.string().required(),
  userdata: Joi.required().required(),
  dob: Joi.any().optional(),
  panNumber: Joi.any().optional(),
  lang: Joi.string().optional(),
})

export const CheckPanValidationSchema = Joi.object({
  journeyId: Joi.string().required(),
  name: Joi.string().required(),
  panNumber: Joi.string().optional(),
  lang: Joi.string().optional(),
})

export const validateUserEmailOrMobileValidationSchema = Joi.object({
  journeyId: Joi.string().required(),
  userdata: Joi.string().required(),
  lang: Joi.string().optional(),
})

export const validateUserBankDetailsValidationSchema = Joi.object({
  journeyId: Joi.string().required(),
  bankName: Joi.string().required(),
  accountName: Joi.string().required(),
  ifsc: Joi.string().required(),
  accountNumber: Joi.string().required(),
  lang: Joi.string().optional(),
})

export const validateUserAddressDetailsValidationSchema = Joi.object({
  journeyId: Joi.string().required(),
  line1: Joi.string().required(),
  line2: Joi.optional(),
  pincode: Joi.number().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
  lang: Joi.string().optional(),
})
export const validateUserPhotoValidationSchema = Joi.object({
  journeyId: Joi.string().required(),
  photo: Joi.string().required(),
  lang: Joi.string().optional(),
})
