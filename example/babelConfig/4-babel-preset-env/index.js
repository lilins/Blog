import '@babel/polyfill';
var a = b => b
var pr = new Promise((resolve, reject) => {
  resolve(1)
})
pr.then(re => console.log(re))

var map = new Map();

class C {}

function *foo(){}