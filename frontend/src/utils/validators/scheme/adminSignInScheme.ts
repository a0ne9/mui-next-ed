import Joi from "joi";
import { email } from "../fields";

export default Joi.object({
    email: email().required(),
    password: Joi.string().required(),
});
