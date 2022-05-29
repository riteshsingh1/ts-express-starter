import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { APP_SECRET } from '../config/app'
import { ErrorCodes } from '../config/errorCodes'
import { errorResponse, HttpStatusCodes } from './helper'

export interface CheckAuth extends Request {
  user?: string | null
}
export const checkAuthMiddleware = (request: CheckAuth, response: Response, next: NextFunction) => {
  // const token
  try {
    const authHeader = request.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      request.user = null
      next()
      return
    }
    verify(token!, APP_SECRET as string, (err: any, user: any) => {
      if (err) {
        request.user = null
        next()
        return
      }
      request.user = user.uxid
      next()
    })
  } catch (e: any) {
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE, '', HttpStatusCodes.SERVER_ERROR)
  }
}
