import { Request, Response } from 'express';
import { SKIP_ACTIVITY } from '../config/app';
import { TranslateCode } from '../lang';
import { ApiActivity } from '../models/ApiActivity';
/**
 * Send Success Response
 * @param request Request
 * @param response Response
 * @returns JSON
 */
export const successResponse = (request: Request, response: Response, code: string, data?: any) => {
  const responseObject = {
    code: code,
    message: TranslateCode[request.body.lang || 'en'][code],
    data: data,
  };
  try {
    if (SKIP_ACTIVITY) {
      return response.status(200).json(responseObject);
    } else {
      ApiActivity.create({
        userId: request.body.userId,
        apiName: request.body.apiName,
        apiEndPoint: request.originalUrl,
        baseUrl: request.baseUrl,
        headers: request.headers,
        request: request.body,
        response: responseObject,
        journeyId: request.body.journeyId,
        remarks: 'ACTIVITY_STARTED' + request.body.remarks,
        code: code,
        createdAt: Date.now(),
      });
    }
  } catch (err: any) {
    return response.status(503).json({});
  }
  return response.status(200).json({});
};

/**
 * Send Invalid Response
 * @param request Request
 * @param response Response
 * @returns JSON
 */
export const invalidResponse = (request: Request, response: Response, code: string, data?: any) => {
  const responseObject = {
    code: code,
    message: TranslateCode[request.body.lang || 'en'][code],
    data: data,
  };
  try {
    if (SKIP_ACTIVITY) {
      return response.status(400).json(responseObject);
    } else {
      ApiActivity.create({
        userId: request.body.userId,
        apiName: request.body.apiName,
        apiEndPoint: request.originalUrl,
        baseUrl: request.baseUrl,
        headers: request.headers,
        request: request.body,
        response: responseObject,
        journeyId: request.body.journeyId,
        remarks: 'ACTIVITY_STARTED' + request.body.remarks,
        code: code,
        createdAt: Date.now(),
      });
    }
  } catch (err: any) {
    return response.status(503).json({});
  }
  return response.status(400).json({});
};

/**
 * Send Error Response
 * @param request Request
 * @param response Response
 * @returns JSON
 */
export const errorResponse = (request: Request, response: Response, code: string, data?: any) => {
  const responseObject = {
    code: code,
    message: TranslateCode[request.body.lang || 'en'][code],
    data: data,
  };
  try {
    if (SKIP_ACTIVITY) {
      return response.status(500).json(responseObject);
    } else {
      ApiActivity.create({
        userId: request.body.userId,
        apiName: request.body.apiName,
        apiEndPoint: request.originalUrl,
        baseUrl: request.baseUrl,
        headers: request.headers,
        request: request.body,
        response: responseObject,
        journeyId: request.body.journeyId,
        remarks: 'ACTIVITY_STARTED' + request.body.remarks,
        code: code,
        createdAt: Date.now(),
      });
    }
  } catch (err: any) {
    return response.status(503).json({});
  }
  return response.status(500).json({});
};
