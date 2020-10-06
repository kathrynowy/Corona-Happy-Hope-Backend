import * as httpStatus from 'http-status-codes';

import { ErrorController } from '../types/error-controller';

/* tslint:disable:no-console */
const errorHandler: ErrorController = (error, req, res, next) => {
  console.log(error.stack || error.message || error);

  const { statusCode, message, additions } = error;

  if (statusCode && message) {
    res.status(statusCode).json({ message, ...additions });
  } else if (error.errors) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: 'bad request',
    });
  } else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR),
    });
  }
};

export default errorHandler;
