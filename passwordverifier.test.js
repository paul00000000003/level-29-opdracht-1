const passwordVerifier = require('./passwordverifier.js')

let password = "1234a";

test("IsNotNull", () => expect(passwordVerifier.isNotNull(password)).toBeTruthy()); //null is immers falsy
test("hasRightLength", () => expect(passwordVerifier.hasRightLength(password)).toBeTruthy());
test("numberUppercaseCharacters", () => expect(passwordVerifier.hasUpperCaseCharacter(password)).toBeTruthy());
test("numberLowerCaseCharakters", () => expect(passwordVerifier.hasLowerCaseCharacter(password)).toBeTruthy());
test("numberDigits", () => expect(passwordVerifier.hasDigit(password)).toBeTruthy());
test("paswoord correct", () => expect(passwordVerifier.verifyPassword(password)).toBeTruthy());