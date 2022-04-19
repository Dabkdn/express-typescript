import { Request, Response, NextFunction } from "express";
export const validate = (
  req: Request,
  res: Response,
  next: NextFunction,
  schema: any
) => {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  const result = schema.validate(req, options);
  if (result.error) {
    res.send(
      `Validation error: ${result.error.details
        .map((x: any) => x.message)
        .join(", ")}`
    );
  } else {
    next();
  }
};
