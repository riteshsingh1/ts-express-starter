import Joi from 'joi'

export const LoginValidationSchema = Joi.object({
  userdata: Joi.string().required(),
  journeyId: Joi.string().required(),
  lang: Joi.string().optional(),
})
export const VerifyOtpValidationSchema = Joi.object({
  replyToken: Joi.string().required(),
  otp: Joi.string().required(),
  journeyId: Joi.string().required(),
  lang: Joi.string().optional(),
})

export const RetryOtpValidationSchema = Joi.object({
  replyToken: Joi.string().required(),
  journeyId: Joi.string().required(),
  lang: Joi.string().optional(),
})
