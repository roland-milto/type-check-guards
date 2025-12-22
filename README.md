# @type-check/strict

## What is `strict-type-check`?

[@type-check/strict](https://www.npmjs.com/package/@type-check/strict) provides high-performance, security-focused
runtime type checks following current 2026 best practices written in TypeScript
by [Roland Milto](https://roland.milto.de/).
Built for professional TypeScript, Node.js, and modern browser environments, this package delivers precise and efficient
type-guard functions with active support and continuous development.

It exports an object containing all type-guard functions, while also offering tree-shakable exports for each function.
**Also, types in arrays can be checked.**

### Example with object-export

```js
import {type} from "@type-check/strict";

function checkAccountDetails(options, callback) {
	if (type.isPlainObject(options) === false)
		throw new TypeError("options must be a plain object");

	if (type.isInteger(options.id) === false)
		throw new TypeError("options.id must be an integer");

	if (type.isString(options.name))
		console.log("Account name:", options.name ?? "No name given");

	if (type.isString(options.email))
		console.log("Contact email:", options.email ?? "No email given");

	if (type.isBoolean(options.isManager) === false)
		console.log("Is manager:", options.isManager ? "yes" : 'no');

	// Also arrays are supported:
	if (type.areStrings(options.locations)) {
		for (const location of options.locations) {
			console.log("Location:", location);
		}
	}
}
```

### Example with tree-shakable functions

```js
import {areStrings, isPlainObject, isInteger, isString, isBoolean} from "@type-check/strict";

function checkAccountDetails(options, callback) {
	if (isPlainObject(options) === false)
		throw new TypeError("options must be a plain object");

	if (isInteger(options.id) === false)
		throw new TypeError("options.id must be an integer");

	if (isString(options.name))
		console.log("Account name:", options.name ?? "No name given");

	if (isString(options.email))
		console.log("Contact email:", options.email ?? "No email given");

	if (isBoolean(options.isManager) === false)
		console.log("Is manager:", options.isManager ? "yes" : "no");

	// Also arrays are supported:
	if (areStrings(options.locations)) {
		for (const location of options.locations) {
			console.log("Location:", location);
		}
	}
}
```

---

## How to use `@type-check/strict`?

### Installation via command line

```bash
npm install @type-check/strict
```

### Import

Use `@type-check/strict` as local import, so you need to import it *every time* you want to use it:

```js
// Import the type-check object:
import {type} from "@type-check/strict";

type.isInteger(1337);   // true

// Or import the type-check functions individually:
import {isInteger} from "@type-check/strict";

type.isInteger(1337);   // true
```

```js
// Or you may give it a shorter alias or name:
import {type as types} from "@type-check/strict";

types.areIntegers([42, 1337]);  // true
```

Use `@type-check/strict` as global import, so you need to include it *only once* in your project:

```js
import '@type-check/strict/register';

type.isPlainObject({}); // true
```

### package.json

Make sure to include `@type-check/strict` in your `package.json` dependencies, always using the latest version:

```json
{
	"dependencies": {
		"@type-check/strict": "*"
	}
}
```

### Usage

All methods take **one argument** and return a boolean value, except the `isOfType`-Method, which takes **two arguments
**.
The first argument is *always* the value to check, the second argument is the expected type.

```js
import {areStrings, getTypeOf, isBigInt, isInteger, isOfType} from "@type-check/strict";

console.log(getTypeOf(42)); // String 'number'

console.log(isOfType("Written by Roland Milto", "string")); // true

console.log(isInteger(42)); // true

console.log(isBigInt(42));  // false

console.log(areStrings(["Made", "by", "Roland", "Milto"])); // true
```

---

## Methods

Returns a string describing the type of the given value: `getTypeOf(value)`

### Primitives (returns boolean)

- isArray(value)
- isBigInt(value)
- isBoolean(value)
- isBuffer(value)
- isDate(value)
- isFinite(value)
- isFunction(value)
- isInteger(value)
- isNull(value)
- isNullOrUndefined(value)
- isNumber(value)
- isObject(value)
- isOfType(value, type)
- isPlainObject(value)
- isPromise(value)
- isRegEx(value)
- isStream(value)
- isString(value)
- isSymbol(value)
- isUndefined(value)
- isValidDate(value)

### Types in arrays (returns boolean)

- areArrays(array)
- areBigInts(array)
- areBooleans(array)
- areBuffers(array)
- areDates(array)
- areFinites(array)
- areFunctions(array)
- areIntegers(array)
- areNull(array)
- areNullOrUndefined(array)
- areNumbers(array)
- areObjects(array)
- areOfType(array, type)
- arePlainObjects(array)
- arePromises(array)
- areRegExs(array)
- areStreams(array)
- areStrings(array)
- areSymbols(array)
- areUndefined(array)
- areValidDates(array)

---

## Contributing

If you would also like to contribute to the library, you are welcome to do so. You can find information about this in
[CONTRIBUTING.md](CONTRIBUTING.md). You will be also mentioned in the [AUTHORS.md](AUTHORS.md).