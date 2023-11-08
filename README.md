# override.ps1
Private Repository for Node Package Manager. 

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

# TypeScript vs. JavaScript
<div align="center">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="350" height="350"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="350" height="350"/> </a>

</div>

# Who will be the king in future?
