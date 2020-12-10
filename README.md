# `optnew`
Make `new` keyword optional when instantiating es6-class. Just like in Dart 😉

## Usage

Given this class
```js
// all possible ES class features
class ToBeInherited {
  #private = crypto.getRandomValues(new Uint8Array(1))[0]

  public = 2

  get private() { return this.#private }

  static static = 'zap'

  constructor(arg1, arg2) {
    this.oldstyle = `${this.#private}-${arg1},${arg2}`
  }

  [Symbol("private")] = crypto.getRandomValues(new Uint32Array(1))[0]

  static [Symbol("static")] = 10
}
```

### as decorator

```js
import optnew from "optnew"

@optnew
class D {
  public
  static static
}

@optnew
class C extends ToBeInherited {}
```

results:
```js
console.log(C)            // [Function: C] { static: 'zap', [Symbol("static")]: 10 }
console.log(new C(1, 2))  // C { public: 2, oldstyle: '209-1, 2 ', [Symbol(private)]: 1155023846 }
console.log(C(1, 2))      // C { public: 2, oldstyle: '209-1, 2 ', [Symbol(private)]: 1155023846 }

console.log(D)      // [Function: D] { static: undefined }
console.log(new D)  // D { public: undefined }
console.log(D())    // D { public: undefined }
```

### as function

```js
import optnew from "optnew"

const A = optnew(class {
  public
  static static
})

const AI = optnew(class extends ToBeInherited {})

class C extends ToBeInherited {}
C = optnew(C)
```

results:
```js
console.log(A)    // [Function: (anonymous)] { static: undefined }
console.log(A)    // (anonymous) { public: undefined }
console.log(A())  // (anonymous) { public: undefined }

console.log(AI)            // [Function: (anonymous)] { static: 'zap', [Symbol("static")]: 10 }
console.log(new AI(1, 2))  // (anonymous) { public: 2, oldstyle: '209-1, 2 ', [Symbol(private)]: 1155023846 }
console.log(AI(1, 2))      // (anonymous) { public: 2, oldstyle: '209-1, 2 ', [Symbol(private)]: 1155023846 }

console.log(C)            // [Function: C] { static: 'zap', [Symbol("static")]: 10 }
console.log(new C(1, 2))  // C { public: 2, oldstyle: '209-1, 2 ', [Symbol(private)]: 1155023846 }
console.log(C(1, 2))      // C { public: 2, oldstyle: '209-1, 2 ', [Symbol(private)]: 1155023846 }

console.log(A.name)   // ""
console.log(AI.name)  // ""
console.log(C.name)   // "C"
```
