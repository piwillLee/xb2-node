import { Request, Response, NextFunction } from "express";
export declare const index: (request: Request, response: Response, next: NextFunction) => Promise<void>;
export declare const store: (request: Request, response: Response, next: NextFunction) => Promise<void>;
export declare const update: (request: Request, response: Response, next: NextFunction) => Promise<void>;
export declare const destory: (request: Request, response: Response, next: NextFunction) => Promise<void>;
export declare const storePostTag: (request: Request, response: Response, next: NextFunction) => Promise<void>;
export declare const destroyPostTag: (request: Request, response: Response, next: NextFunction) => Promise<void>;
