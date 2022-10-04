import { Request, Response, NextFunction } from "express";
export declare const index: (request: Request, response: Response, next: NextFunction) => Promise<void>;
export declare const store: (request: Request, response: Response, next: NextFunction) => Promise<void>;
export declare const update: (request: Request, response: Response, next: NextFunction) => Promise<void>;
export declare const destory: (request: Request, response: Response, next: NextFunction) => Promise<void>;
