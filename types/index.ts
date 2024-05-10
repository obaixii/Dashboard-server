import { Request, Response, NextFunction } from 'express';

export type typeCredentialParams = {
    req: Request,
    res: Response,
    next: NextFunction
}

export type typeProductParams = {
    req: Request,
    res: Response,
    next: NextFunction
}

export type typeAuthHandler = {
    req: Request,
    res: Response,
    next: NextFunction
}

export type typeErrorHandler = {
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
}