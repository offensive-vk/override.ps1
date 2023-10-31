# override.ps1
Private Repository for Node Package Manager. 

## Usage in JavaScript:
```javascript
const over = require('override.ps1');
over.info("This is a log message");
var id = over.generatePlayerId();
over.info(id);

// Creates Key Value Pair and Prints them
over.CreateKeyValuePair("userid", 10002);

```

## Usage in TypeScript:
```typescript
import * as over from 'override.ps1';

// stdout to console.
over.trace("This is a trace message.");

// If you prefer Generic Programming.
const A = [2, 5, 6];
const R = over.Permute<number>(A);

over.trace("All Permutations: ");
R.forEach((permutation) => {
    console.log(permutation);
});

over.trace(" == End of Script == ");
```

# TypeScript vs. JavaScript
<div align="center">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="350" height="350"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="350" height="350"/> </a>

</div>

# Who will be the king in future?
