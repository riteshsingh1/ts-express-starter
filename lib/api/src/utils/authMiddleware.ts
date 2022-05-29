import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { APP_SECRET } from '../config/app'
import { ErrorCodes } from '../config/errorCodes'
import { errorResponse, HttpStatusCodes } from './helper'

export interface AuthRequest extends Request {
  user?: string
}
export const authMiddleware = (request: AuthRequest, response: Response, next: NextFunction) => {
  // const token
  try {
    const authHeader = request.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      return errorResponse(request, response, ErrorCodes.UNAUTHORIZED_USER.CODE, '', HttpStatusCodes.UNAUTHORIZED)
    }
    verify(token, APP_SECRET as string, (err: any, user: any) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return errorResponse(request, response, ErrorCodes.TOKEN_EXPIRED_ERROR.CODE, '', HttpStatusCodes.UNAUTHORIZED)
        }
        if (err.name === 'NotBeforeError') {
          return errorResponse(request, response, ErrorCodes.INVALID_DATA.CODE, '', HttpStatusCodes.UNAUTHORIZED)
        }
        return errorResponse(request, response, ErrorCodes.UNAUTHORIZED_USER.CODE, '', HttpStatusCodes.UNAUTHORIZED)
      }
      request.user = user.uxid
      next()
    })
  } catch (e: any) {
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE, '', HttpStatusCodes.SERVER_ERROR)
  }
}
