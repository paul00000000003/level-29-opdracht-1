// Utility functions
const isNotNull = (str) => {
    if (str) return true;
    else return false
};

const hasRightLength = (str) => {
    if (str.length > 9) return true;
    else return false
};

const hasUpperCaseCharacter = (str) => {
    let aantalUpp = 0;
    for (i = 0; i < str.length; i++) {
        if ((str.charAt(i) === str.charAt(i).toUpperCase()) && isNaN(str.charAt(i))) {
            aantalUpp++;
        }
    }
    if (aantalUpp >= 1)
        return true;
    else return false
};

const hasLowerCaseCharacter = (str) => {
    let aantalLow = 0;
    for (i = 0; i < str.length; i++)
        if ((str.charAt(i) === str.charAt(i).toLowerCase()) && isNaN(str.charAt(i)))
            aantalLow++;
    if (aantalLow >= 1)
        return true;
    else return false;
}

const hasDigit = (str) => {
    let aantalcijfers = 0;
    for (i = 0; i < str.length; i++)
        if (isNaN(str.charAt(i))) {} else aantalcijfers++;
    if (aantalcijfers >= 1)
        return true;
    else return false;
}

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    verifyPassword
};

//console.log(hasRightLength("1234a"));