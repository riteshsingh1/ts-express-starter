import { Request, Response, NextFunction } from 'express';
import { SKIP_ACTIVITY } from '../config/app';
import { ApiActivity } from '../models/ApiActivity';

export const LogActivity = (request: Request, response: Response, next: NextFunction) => {
  if (SKIP_ACTIVITY || request.method.toLowerCase() === 'get') {
    next();
  } else {
    try {
      const remarks = 'API_STARTED' + Date.now() + '-' + Math.random() * 100000;
      ApiActivity.create({
        userId: request.body.userId || 'GUEST',
        apiName: request.body.apiName,
        apiEndPoint: request.originalUrl,
        baseUrl: request.baseUrl,
        headers: request.headers,
        request: request.body,
        response: {},
        journeyId: request.body.journeyId,
        remarks: remarks,
        code: '',
        createdAt: Date(),
      });
      request.body.remarks = remarks;
      next();
    } catch (err: any) {
      const responseObject = {
        code: 'FATAL_ERROR',
        message: 'Something went wrong',
        data: {},
      };
      return response.status(503).json(responseObject);
    }
  }
};
