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