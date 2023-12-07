const process = require('process');
async function stdout(...args) {
    process.stdout.write(args.map(arg => String(arg)).join(' ') + '\n');
}

// Usage
stdout('Hello', 'World', 42);
