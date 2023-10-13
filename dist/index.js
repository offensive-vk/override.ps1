"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
var override_exports = {};
__export(override_exports, {
  CreateKeyValuePair: () => CreateKeyValuePair,
  Cursed: () => Cursed,
  generatePlayerId: () => generatePlayerId,
  handleError: () => handleError,
  info: () => info,
  trace: () => trace
});
module.exports = __toCommonJS(override_exports);
function info(...args) {
  console.log(`[info] >> [ ${args} ] << [info]`);
}
function trace(...args) {
  const currentDate = /* @__PURE__ */ new Date();
  const hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
  const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
  const seconds = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
  const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";
  console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${hours}:${minutes}:${seconds}.${currentDate.getMilliseconds()} ${ampm} [info] >> [ ${args} ] << [info]`);
}
function generatePlayerId() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  let numCount = 0;
  let charCount = 0;
  for (let i = 0; i < 10; i++) {
    if (numCount < 7 || numCount >= 7 && charCount < 3 && Math.random() < 0.5) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      if (/[0-9]/.test(result.charAt(result.length - 1))) {
        numCount++;
      } else {
        charCount++;
      }
    } else {
      result += characters.charAt(Math.floor(Math.random() * 26) + 26);
      charCount++;
    }
  }
  return result ? result : null;
}
function handleError(test, ...args) {
  try {
    console.log(`
 ======================= 
`);
    info("Begin Testing");
    test();
    info("End Testing");
  } catch (error) {
    console.log(`Some Error Occurred : ${error.message}`);
  } finally {
    console.log(`[ Function Has Successfully Executed and All the Errors are Handled. ]`);
    console.log(`
 ======================= 
`);
  }
  return void 0;
}
function createKeyValuePair(key, value) {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ key, value });
      }, 2e3);
    });
  });
}
function CreateKeyValuePair(key, value) {
  return __async(this, null, function* () {
    const pair = yield createKeyValuePair(key, value);
    console.log(`Created New KeyValuePair -> { ${pair.key} : ${pair.value} }
`);
  });
}
var Cursed = class extends Generic {
  constructor() {
    super();
  }
  /**
   * Generates a random string of specified length, consisting of a combination of numbers and characters.
   * @param length - The length of the random string to be generated. Default value is 10.
   * @param numCount - The number of numeric characters to include in the random string. Default value is 7.
   * @param charCount - The number of non-numeric characters to include in the random string. Default value is 3.
   * @param useSymbols - Specifies whether to include symbols in the character pool. Default value is true.
   * @param useUppercase - Specifies whether to include uppercase letters in the character pool. Default value is true.
   * @param useLowercase - Specifies whether to include lowercase letters in the character pool. Default value is true.
   * @returns A randomly generated string of specified length, consisting of a combination of numbers and characters.
   */
  CreateRandomString(length = 10, numCount = 7, charCount = 3, useSymbols = true, useUppercase = true, useLowercase = true) {
    const characters = this.generateCharacterPool(useSymbols, useUppercase, useLowercase);
    let result = "";
    for (let i = 0; i < length; i++) {
      if ((numCount > 0 || charCount > 0) && (numCount === 0 || charCount === 0 && Math.random() < 0.5)) {
        result += this.getRandomCharacter(characters, useUppercase);
        charCount--;
      } else {
        result += this.getRandomCharacter("0123456789", false);
        numCount--;
      }
    }
    return result ? result : null;
  }
  /**
   * Generates a string of characters based on the input parameters.
   * 
   * @param useSymbols - Specifies whether to include symbols in the character pool.
   * @param useUppercase - Specifies whether to include uppercase letters in the character pool.
   * @param useLowercase - Specifies whether to include lowercase letters in the character pool.
   * @returns A string of characters generated based on the input parameters.
   */
  generateCharacterPool(useSymbols, useUppercase, useLowercase) {
    let characters = "0123456789";
    if (useSymbols) {
      characters += "!@#$%^&*";
    }
    if (useUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (useLowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    return characters;
  }
  /**
   * Returns a random character from a given string of characters, with the option to convert uppercase characters to lowercase.
   * 
   * @param characters - A string of characters from which a random character will be selected.
   * @param useUppercase - A flag indicating whether uppercase characters should be used or not.
   * @returns A single random character from the `characters` string, with the option to convert uppercase characters to lowercase.
   */
  getRandomCharacter(characters, useUppercase) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters.charAt(randomIndex);
    if (!useUppercase && /[A-Z]/.test(randomChar)) {
      return randomChar.toLowerCase();
    }
    return randomChar;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateKeyValuePair,
  Cursed,
  generatePlayerId,
  handleError,
  info,
  trace
});
//# sourceMappingURL=index.js.map