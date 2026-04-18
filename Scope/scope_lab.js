// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    //console.log(functionVar); // Throws ReferenceError
    //console.log(functionLet); // Throws ReferenceError
    //console.log(functionConst); // Throws ReferenceError

    // ==================
// PRACTICE TASK
// ==================

// Block with var, let and const
{
    // Declare variables
    var practiceVar = "I'm a var";
    let practiceLet = "I'm a let";
    const practiceConst = "I'm a const";

    console.log("=== Inside Block ===");
    console.log(practiceVar);
    console.log(practiceLet);
    console.log(practiceConst);

    // Try to reassign INSIDE the block
    practiceVar = "var reassigned inside ✅";
    practiceLet = "let reassigned inside ✅";
    // practiceConst = "const reassigned inside"; // ❌ ERROR - const cannot be reassigned!

    console.log("=== After Reassignment Inside Block ===");
    console.log(practiceVar);
    console.log(practiceLet);
    console.log(practiceConst);
}

// Try to reassign OUTSIDE the block
console.log("=== Outside Block ===");
practiceVar = "var reassigned outside ✅";
console.log(practiceVar); // ✅ Works - var escapes block!
console.log(practiceLet); // ❌ ReferenceError - let stays inside!
console.log(practiceConst); // ❌ ReferenceError - const stays inside!