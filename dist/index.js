"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
  CreateRandomString: () => CreateRandomString,
  Permute: () => Permute,
  Swap: () => Swap,
  appendDataToProperty: () => appendDataToProperty,
  generateCharacterPool: () => generateCharacterPool,
  generatePlayerId: () => generatePlayerId,
  getRandomCharacter: () => getRandomCharacter,
  getValue: () => getValue,
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
function Permute(arr) {
  const result = [];
  let count = 0;
  function backtrack(start, current) {
    if (start === arr.length) {
      result.push([...current]);
      count++;
      return;
    }
    for (let i = start; i < arr.length; i++) {
      Swap(arr, start, i);
      current.push(arr[start]);
      backtrack(start + 1, current);
      current.pop();
      Swap(arr, start, i);
    }
  }
  backtrack(0, []);
  console.log(`[ Total Possible Combinations: ${count} ]
`);
  return result;
}
function Swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function getValue(obj, key, ...args) {
  if (!(obj == null ? void 0 : obj.hasOwnProperty(key))) {
    console.log(`Error ! The Object Doesn't Consist The Key: ${key}
`);
    return key;
  }
  for (const arg of args) {
    if (!obj.hasOwnProperty(arg)) {
      console.log(`OOPS ! The Object Doesn't Consist The Key: ${arg}
`);
      return arg;
    }
  }
  return obj[key];
}
function CreateKeyValuePair(key, value) {
  return __async(this, null, function* () {
    console.log(`Created New KeyValuePair -> { ${key} : ${value} }
`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ key, value });
      }, 1500);
    }).then((result) => {
      console.log(result);
      return result;
    });
  });
}
function appendDataToProperty(obj, prop, append) {
  const updatedObj = __spreadValues({}, obj);
  updatedObj[prop] = updatedObj[prop] + append;
  return updatedObj;
}
function CreateRandomString(length = 10, numCount = 7, charCount = 3, useSymbols = true, useUppercase = true, useLowercase = true) {
  const characters = generateCharacterPool(useSymbols, useUppercase, useLowercase);
  let result = "";
  for (let i = 0; i < length; i++) {
    if ((numCount > 0 || charCount > 0) && (numCount === 0 || charCount === 0 && Math.random() < 0.5)) {
      result += getRandomCharacter(characters, useUppercase);
      charCount--;
    } else {
      result += getRandomCharacter("0123456789", false);
      numCount--;
    }
  }
  return result ? result : null;
}
function generateCharacterPool(useSymbols, useUppercase, useLowercase) {
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
function getRandomCharacter(characters, useUppercase) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomChar = characters.charAt(randomIndex);
  if (!useUppercase && /[A-Z]/.test(randomChar)) {
    return randomChar.toLowerCase();
  }
  return randomChar;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateKeyValuePair,
  CreateRandomString,
  Permute,
  Swap,
  appendDataToProperty,
  generateCharacterPool,
  generatePlayerId,
  getRandomCharacter,
  getValue,
  handleError,
  info,
  trace
});
//# sourceMappingURL=index.js.map