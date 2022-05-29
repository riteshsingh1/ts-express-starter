import { Request, Response } from 'express'

const WelcomeToExpressApplication = (request: Request, response: Response) => {
  return response.json({
    title: 'Welcome To Express Application',
    version: 1.0,
  })
}
export const welcomeController = {
  WelcomeToExpressApplication,
}
