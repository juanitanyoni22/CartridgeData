const { body, validationResult } = require("express-validator");
const validationRules = () => {
  return [
    body("cname","Please enter a cartridge name")
    .notEmpty()
    .trim()
    .escape(),
    body("brand","Please enter a brand of the cartridge")
    .notEmpty()
    .trim()
    .escape(),
    body("compatiblePrinters","Please enter a list compatible printers")
    .notEmpty()
    .trim()
    .escape(),
    body("price","Please enter a price")
    .notEmpty()
    .isNumeric()
    .trim()
    .escape(),
    body("pageYield","Please enter a cartridge yield")
    .notEmpty()
    .trim()
    .escape(),
    body("type","Please enter a cartridge name")
    .notEmpty()
    .trim()
    .escape(),
  ];
};
const validate = (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);
  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    // Build your resulting errors however you want! String, object, whatever - it works!
    return `${param}: ${msg}`;
  };
  const result = errors.formatWith(errorFormatter);
  console.log(errors);

  //const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
    res.status(422).send(errors.mapped());

    console.log(errors.mapped());
  } else {
    console.log("Validation passed");

    return next();
  }
};
module.exports = { validationRules, validate };