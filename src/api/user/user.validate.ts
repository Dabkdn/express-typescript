import Joi from "joi";
import { validate } from "../../middleware/validate";
import { Request, Response, NextFunction } from "express";

export const getValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    params: Joi.object({
      id: Joi.string().required(),
    }),
  });
  validate(req, res, next, schema);
};
