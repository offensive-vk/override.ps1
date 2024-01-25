# override.ps1 
* Cool and Weird Functions and Classes.
* Designed in Typescript.
* Private Repository for Node Package Manager and jsdelivr.net 
* Manual :  https://www.jsdelivr.com/package/npm/override.ps1
* Author and Developer : [@offensive-vk](https://github.com/offensive-vk/)

## How to Install and Use ?
```bash
# For package.json file
$ npm init -y
# Install the module
$ npm install override.ps1@latest --no-save
```

## Usage in TypeScript:
```typescript
import { Permute, trace, getValue } from 'override.ps1';
import { Promise } from '@types/promises';
import { Swap, appendDataToProperty } from 'override.ps1';

// stdout to console.
trace("This is a traced message.");

// If you prefer Generic Programming.
const A = [2, 5, 6];
const R = Permute<number>(A);

trace("All Permutations: ");
R.forEach((permutation) => {
    console.log(permutation);
});

trace(" == End of Script == ");
```

## Usage in JavaScript:
```javascript
const over = require('override.ps1');
over.info("This is a log message");
var id = over.generatePlayerId();
over.info(id);

// Creates Key Value Pair and Prints them
over.CreateKeyValuePair("userid", 10002);

```

## TypeScript vs. JavaScript
<div align="center">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/typescript/typescript-original.svg" alt="typescript" width="250" height="250"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/javascript/javascript-original.svg" alt="javascript" width="250" height="250"/> </a>
</div>

### Who will be the king in future?
