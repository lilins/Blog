const babel = require('@babel/core')
// const optionsObject = require('./babel.config');

const code = a => {
  a = 'sd'
  class C { 
    constructor(name){
      this.name = name
    }
  }
  const clazz = new C(a)
  return clazz
}

babel.transform(code, {
  plugins: ['@babel/plugin-transform-runtime'],
}, function (err, result) {
  console.assert(result)
})