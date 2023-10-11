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
export {
  CreateKeyValuePair,
  CreateRandomString,
  generatePlayerId,
  handleError,
  info,
  trace
};
//# sourceMappingURL=index.mjs.map