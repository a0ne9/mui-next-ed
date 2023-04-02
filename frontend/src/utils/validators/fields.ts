import Joi from "joi";
import { TLD_SET } from "const/TLDS";

export const email = () => Joi.string().max(256).email({ tlds: { allow: TLD_SET } });
