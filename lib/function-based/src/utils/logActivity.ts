import { Response, NextFunction } from 'express'
import Joi from 'joi'
import { SKIP_ACTIVITY } from '../config/app'
import { ApiActivity } from '../models/ApiActivity'
import { AuthRequest } from './authMiddleware'

export const LogActivity = (request: AuthRequest, response: Response, next: NextFunction) => {
  if (SKIP_ACTIVITY || request.method.toLowerCase() === 'get') {
    next()
  } else {
    try {
      const { error } = Joi.object({
        journeyId: Joi.string().required(),
        lang: Joi.string().required(),
      })
        .unknown()
        .validate(request.body)
      if (error) {
        const responseObject = {
          code: 400,
          message: 'Invalid Requst',
          data: error.details,
        }
        return response.status(400).json(responseObject)
      }
      const remarks = Date.now() + '-' + Math.floor(Math.random() * 100000)
      ApiActivity.create({
        userId: request.user || 'GUEST',
        apiName: request.body.apiName,
        apiEndPoint: request.originalUrl,
        baseUrl: request.path,
        headers: request.headers,
        request: request.body,
        response: {},
        journeyId: request.body.journeyId,
        remarks: remarks,
        code: '',
        createdAt: Date.now(),
      })
      request.headers.remarks = remarks
      next()
    } catch (err: any) {
      const responseObject = {
        code: 'FATAL_ERROR',
        message: 'Something went wrong',
        data: {},
      }
      return response.status(503).json(responseObject)
    }
  }
}
