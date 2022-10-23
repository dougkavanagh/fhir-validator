var fs = require("fs");
var schema = require("./fhir-schema");
var Validator = require("jsonschema").Validator;
var v = new Validator();
var instance = JSON.parse(
  fs.readFileSync("fhir-payload-to-validate.json", "utf8")
);
// var instance = { resourceType: "Patifdsent", id: "patient5" };

var result = v.validate(instance, schema);
if (result.errors.length > 0) {
  console.error(result.errors);
} else {
  console.log("Valid FHIR!");
}
