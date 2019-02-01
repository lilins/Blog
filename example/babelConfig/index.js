const babel = require("@babel/core");

const code = a => a;

babel.transform(code, {
  plugins: [
    "@babel/plugin-transform-arrow-functions"
  ]
}, function(err, result){
  console.log(result.code)
});