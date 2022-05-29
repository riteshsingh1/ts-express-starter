import Joi from 'joi'

export const createPurchaseAndSaleOrderSchema = Joi.object({
  journeyId: Joi.string().required(),
  orderType: Joi.string().required().allow('BUY', 'SELL'),
  item: Joi.string().required().allow('GOLD', 'SILVER'),
  unit: Joi.string().required().allow('GRAMS', 'QUANTITY', 'AMOUNT'),
  amount: Joi.number().required(),
  amountWithoutTax: Joi.number().required(),
  tax: Joi.number().required(),
  totalAmount: Joi.number().required(),
  lang: Joi.string().optional(),
})
