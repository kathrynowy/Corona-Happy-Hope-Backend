import { NextFunction, Request, Response } from 'express';


export type ErrorController = (error: any, req: Request, res: Response, next: NextFunction) => any;
