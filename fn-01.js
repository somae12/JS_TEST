hello(); // hello, world!!
// fn(); // Cannot access 'fn' before initialization

function hello() {
    console.log("Hello, World!");
}

const fn = function () {
    console.log("Hello, World!");
};
