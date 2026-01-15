[Zu Deutsch wechseln](README.de.md)

# [`@type-check/guards`](https://www.npmjs.com/package/@type-check/guards)

![NPM version](https://img.shields.io/npm/v/@type-check/guards?color=blue)
![Typescript project](https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Browser supported](https://img.shields.io/badge/Browser-supported-brightgreen)
![ESM supported](https://img.shields.io/badge/ESM-supported-brightgreen)
![Tree shaking](https://img.shields.io/badge/Tree--shaking-supported-brightgreen)

## Table of Contents: Runtime Type Checks & Guards

<details>
  <summary><b>Click here to open the Table of Contents</b></summary>

- [What is @type-check/guards?](#what-is-type-checkguards)
- [Why should I use @type-check/guards?](#why-should-i-use-type-checkguards)
  * [Browsersupport](#browsersupport)
  * [Performance & Efficiency](#maximum-performance--resource-efficiency)
  * [Runtime Safety](#runtime-safety--design-time-power)
  * [Design-Time Testing](#excellent-for-design-time-testing)
  * [API Consistency](#api-consistency)
- [How to use @type-check/guards?](#how-to-use-type-checkguards)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [package.json](#packagejson)
  * [tsconfig.json](#tsconfigjson)
  * [Import](#import)
    - [Local import (Node.js)](#local-import)
    - [Global import (Node.js)](#global-import)
    - [Browser import & CDN (jsDelivr)](#browser-import)
  * [Usage](#usage)
  * [Examples](#examples)
  * [Example with Object Export](#example-with-object-export)
  * [Example with Tree-Shakable Functions](#example-with-tree-shakable-functions)
- [Exported TypeScript Types](#exported-typescript-types)
- [Functions / Methods](#functions--methods)
  * [Type determination](#type-determination)
  * [Type validations](#type-validations)
- [@type-check Ecosystem](#the-type-check-ecosystem)
- [Contributing & Support](#support-or-report-an-error)

</details>

## What is *@type-check/guards*?

[@type-check/guards](https://www.npmjs.com/package/@type-check/guards) provides powerful, safety-oriented runtime type
checks according to 2026 best practices, written in TypeScript by [Roland Milto](https://roland.milto.de/).

This package is designed for professional TypeScript, Node.js, and modern browser environments, offering precise and
efficient type-checking functions with continuous development.

The module exports an object containing all type-checking functions while also providing tree-shakable exports for each
function.
**Additionally, types within arrays can be validated.**

## Why should I use *@type-check/guards*?

Unlike heavy frameworks like **Chai**, **Jest**, or **Vitest**, which are primarily designed for isolated testing
environments, `@type-check/guards` was developed for maximum efficiency in **production (runtime)** and the highest
precision during **design-time testing**.

### Browsersupport

> `@type-check/guards` supports all modern browsers, including Chrome, Edge, Firefox, Opera, and Safari.

### Maximum Performance & Resource Efficiency

- **Minimal Footprint:**
  Through consistent **tree-shaking** and **zero dependencies**, the bundle size remains minimal.
  This saves memory (RAM) and reduces loading times.


- **CPU Optimization:**
  The guards (such as `isOfType`) internally use "fast-path" shortcuts for primitive types. This avoids unnecessary
  function calls and processing load, even with millions of validations per second.


- **Simple Syntax:**
  No more complex assertion chains. A clear, functional API (e.g., `isString(value)`) ensures more readable code and
  faster development.

### Runtime Safety & Design-Time Power

This package protects the application during execution from corrupt data while offering enormous benefits during
development:

- **Strict Validation:**
  JavaScript design flaws are natively corrected (e.g., `typeof null === 'object'` or `typeof NaN === 'number'`). The
  guards check what you *mean*, not what JavaScript *claims*.


- **Content Validation:**
  While testing frameworks often only check *if* an array exists, functions like `areStrings` or `areIntegers`
  efficiently validate the **entire content** – deep and secure.


- **Intelligent Type Guards:**
  Every function is a true TypeScript Type Guard. Once a check passes, TypeScript automatically recognizes the type in
  the following code block. This replaces unsafe type casting (`as string`) with real logic.

```ts
// Without Guards:
function process(value: unknown) {
  if (typeof value === 'string') {
    (value as string).toUpperCase(); // Manual casting often required
  }
}

// With @type-check/guards:
if (isString(value)) {
  value.toUpperCase(); // TypeScript recognizes the type immediately
}
```

### Excellent for Design-Time Testing

Although optimized for runtime, `@type-check/guards` is the perfect addition to your test suites:

- Use the same valid checking mechanisms in your unit tests as in your production logic.
- No complex configuration of tests is required – the guards work everywhere: Node.js, browser, edge runtimes, or
  serverless functions.

### API Consistency

To minimize errors during comparisons, `@type-check/guards` follows a strict **camelCase strategy**.
All strings returned by `getTypeOf`, as well as the type identifiers in `isOfType`, are consistently *camelCase* (e.g.,
`"nan"` instead of `"NaN"`, `"bigInt"` instead of `"BigInt"`).

<br>

## How to use *@type-check/guards*?

### Prerequisites

The package is designed as a native **ES module (ESM)** and supports all modern environments from **ES2020+** (Node.js
16+, current browsers, and edge runtimes) to ensure maximum efficiency without unnecessary polyfills.

### Installation

To install `@type-check/guards`, use the following command in your terminal:

```bash
npm install @type-check/guards
```

### package.json

Ensure that `@type-check/guards` is included in your `package.json` dependencies and always use the latest version:

```json
{
	"dependencies": {
		"@type-check/guards": "*"
	}
}
```

### tsconfig.json

Since `@type-check/guards` is exported as an ESM module, it is necessary to
adjust the `moduleResolution` option in the `tsconfig.json` file
to avoid error messages from the TypeScript compiler:

```json
{
	"compilerOptions": {
		"moduleResolution": "NodeNext"
	}
}
```

### Import

#### Local import

Importing the type-check object:

```ts
import {type} from "@type-check/guards";

type.isInteger(42); // true
```

Or as an individual import of specific functions (Tree-Shaking):

```ts
import {isInteger} from "@type-check/guards";

isInteger(1337); // true
```

Using a different name or alias:

```ts
import {type as values} from "@type-check/guards";

values.areIntegers([42, 1337]); // true
```

#### Global import

Use `@type-check/guards` as a global import for all functions, so you only need to include the libary *once* in your
project:

```ts
import '@type-check/guards/register-global';

isPlainObject({}); // true
```

If your IDE does not automatically recognize the types, you can manually register them in `tsconfig.json`:

```json
{
	"compilerOptions": {
		"types": [
			"@type-check/guards/register-global"
		]
	}
}
```

### Browser import

If the bundle is to be hosted locally, the minified bundle can be found at `dist/index.min.mjs` in the package
directory.

For rapid prototyping or direct browser usage (without a build step), you can load `@type-check/guards` via the Delivery
Network (CDN) *jsDelivr* or *unpkg*:

```html
<script type="module">
  import {isInteger, areStrings} from 'https://cdn.jsdelivr.net/npm/@type-check/guards/dist/index.min.mjs';

 console.log(isInteger(1337)); // true
 console.log(areStrings(["TS", "JS"])); // true
</script>
```

> For **unpkg** use: https://unpkg.com/@type-check/guards/dist/index.min.mjs

### Usage

All functions or methods take **one argument** and return a boolean value, except the functions or methods
`isEqual`, `isOfType`, `isOneOfType`, `areEqual`, `areOfType`, and `areOneOfType`, which take **two arguments**.

The first argument is *always* the value to be checked, the second argument is the expected type.
For *__OneOfType* functions, the types must be provided in an array.

```ts
import {areStrings, getTypeOf, isBigInt, isInteger, isOfType} from "@type-check/guards";

console.log(getTypeOf(42)); // string 'number'

console.log(isOfType("Written by Roland Milto", "string")); // true

console.log(isInteger(42)); // true

console.log(isBigInt(42));  // false

console.log(areStrings(["Made", "by", "Roland", "Milto"])); // true
```

### Examples

#### Example Data

```ts
const user1 = {
  id: 1337,
  name: "Roland Milto",
  email: "nospam@trash-mail.com",
  isManager: true,
  locations: [
    "Berlin",
    "Hamburg",
    "Munich"
  ]
}
```

#### Example with Object Export:

```ts
import {type} from "@type-check/guards";

function checkAccountDetails(options) {
  if (!type.isPlainObject(options))
    throw new TypeError("options must be a plain object");

  if (!type.isInteger(options.id))
    throw new TypeError("options.id must be an integer");

  if (type.isString(options.name))
    console.log("Account:", options.name ?? "No name provided");

  if (type.isString(options.email))
    console.log("Contact Email:", options.email ?? "No email provided");

  console.log("Manager:", options.isManager ? "Yes" : "No");

  // Also arrays are supported:
  if (type.areStrings(options.locations)) {
    for (const location of options.locations) {
      console.log("Location:", location);
    }
  }
}

checkAccountDetails(user1);
```

### Example with Tree-Shakable Functions:

```ts
import {areStrings, isBoolean, isInteger, isPlainObject, isString} from "@type-check/guards";

function checkAccountDetails(options) {
  if (!isPlainObject(options))
    throw new TypeError("options must be a plain object");

  if (!isInteger(options.id))
    throw new TypeError("options.id must be an integer");

  if (isString(options.name))
    console.log("Account:", options.name ?? "No name provided");

  if (isString(options.email))
    console.log("Contact Email:", options.email ?? "No email provided");

  console.log("Manager:", options.isManager ? "Yes" : "No");

  // Arrays are supported:
  if (areStrings(options.locations)) {
    for (const location of options.locations) {
      console.log("Location:", location);
    }
  }
}

checkAccountDetails(user1);
```

<br>

## Exported TypeScript Types

For seamless integration into your TypeScript projects, `@type-check/guards` exports helpful union types. You can use
these to type your own variables or ensure your logic only uses the type identifiers supported by this library.

### Importing Types

```ts
import type {DataType, Primitive, NonPrimitive, NumberType} from "@type-check/guards";
```

- **`DataType`**: The master union of `Primitive` and `NonPrimitive`. It covers all identifiers that can be returned by
  `getTypeOf`.


- **`Primitive`**: Includes all basic data types such as `string`, `number`, `boolean`, `bigInt`, `symbol`,
  `integer`, `float`, `nan`, `null`, and `undefined`.


- **`NonPrimitive`**: Includes complex structures like `array`, `object`, `date`, `error`, `function`,
  `map`, `set`, `promise`, `regExp`, `stream"`, `buffer`, `weakMap"`, and `weakSet`.


- **`NumericType`**: A specialized selection for numerical classifications (`bigInt`, `binary`, `decimal`, `float`,
  `hexadecimal`, `integer`, `number`, and `octal`).

<br>

## Functions / Methods

All functions are designed to provide precise results and can be used either via the `type` object or as an individual
import.

### Type determination

[getTypeOf(value)](docs/english/getTypeOf.md) returns a string describing the type of the given value (always
camelCase).

### Type validations

All methods return a boolean value.
The "Single Value Check" column checks an individual value,
while the "Array Elements Check" column checks if every element in the provided array satisfies the condition.

| Single Value Check                                            | Array Elements Check                                            |
|---------------------------------------------------------------|-----------------------------------------------------------------|
| [isArray(value)](docs/english/isArray.md)                     | [areArrays(array)](docs/english/areArrays.md)                   |
| [isBigInt(value)](docs/english/isBigInt.md)                   | [areBigInts(array)](docs/english/areBigInts.md)                 |
| [isBoolean(value)](docs/english/isBoolean.md)                 | [areBooleans(array)](docs/english/areBooleans.md)               |
| [isBuffer(value)](docs/english/isBuffer.md)                   | [areBuffers(array)](docs/english/areBuffers.md)                 |
| [isDate(value)](docs/english/isDate.md)                       | [areDates(array)](docs/english/areDates.md)                     |
| [isEqual(value, expected)](docs/english/isEqual.md)           | [areEqual(value, expected)](docs/english/areEqual.md)           |
| [isError(value)](docs/english/isError.md)                     | [areErrors(value)](docs/english/areErrors.md)                   |
| [isFalse(value)](docs/english/isFalse.md)                     | [areFalse(array)](docs/english/areFalse.md)                     |
| [isFilledArray(value)](docs/english/isFilledArray.md)         | [areFilledArrays(array)](docs/english/areFilledArrays.md)       |
| [isFinite(value)](docs/english/isFinite.md)                   | [areFinite(array)](docs/english/areFinite.md)                   |
| [isFloat(value)](docs/english/isFloat.md)                     | [areFloats(array)](docs/english/areFloats.md)                   |
| [isFunction(value)](docs/english/isFunction.md)               | [areFunctions(array)](docs/english/areFunctions.md)             |
| [isInteger(value)](docs/english/isInteger.md)                 | [areIntegers(array)](docs/english/areIntegers.md)               |
| [isMap(value)](docs/english/isMap.md)                         | [areMaps(array)](docs/english/areMaps.md)                       |
| [isNaN(value)](docs/english/isNaN.md)                         | [areNaNs(array)](docs/english/areNaNs.md)                       |
| [isNull(value)](docs/english/isNull.md)                       | [areNull(array)](docs/english/areNull.md)                       |
| [isNullOrUndefined(value)](docs/english/isNullOrUndefined.md) | [areNullOrUndefined(array)](docs/english/areNullOrUndefined.md) |
| [isNumber(value)](docs/english/isNumber.md)                   | [areNumbers(array)](docs/english/areNumbers.md)                 |
| [isObject(value)](docs/english/isObject.md)                   | [areObjects(array)](docs/english/areObjects.md)                 |
| [isOfType(value, type)](docs/english/isOfType.md)             | [areOfType(array, type)](docs/english/areOfType.md)             |
| [isOneOfType(value, types[])](docs/english/isOneOfType.md)    | [areOneOfType(array, types[])](docs/english/areOneOfType.md)    |
| [isPlainObject(value)](docs/english/isPlainObject.md)         | [arePlainObjects(array)](docs/english/arePlainObjects.md)       |
| [isPrimitive(value)](docs/english/isPrimitive.md)             | [arePrimitives(array)](docs/english/arePrimitives.md)           |
| [isPromise(value)](docs/english/isPromise.md)                 | [arePromises(array)](docs/english/arePromises.md)               |
| [isRegEx(value)](docs/english/isRegEx.md)                     | [areRegExes(array)](docs/english/areRegExes.md)                 |
| [isSet(value)](docs/english/isSet.md)                         | [areSets(array)](docs/english/areSets.md)                       |
| [isStream(value)](docs/english/isStream.md)                   | [areStreams(array)](docs/english/areStreams.md)                 |
| [isString(value)](docs/english/isString.md)                   | [areStrings(array)](docs/english/areStrings.md)                 |
| [isSymbol(value)](docs/english/isSymbol.md)                   | [areSymbols(array)](docs/english/areSymbols.md)                 |
| [isTrue(value)](docs/english/isTrue.md)                       | [areTrue(array)](docs/english/areTrue.md)                       |
| [isUndefined(value)](docs/english/isUndefined.md)             | [areUndefined(array)](docs/english/areUndefined.md)             |
| [isValidDate(value)](docs/english/isValidDate.md)             | [areValidDates(array)](docs/english/areValidDates.md)           |
| [isWeakMap(value)](docs/english/isWeakMap.md)                 | [areWeakMaps(array)](docs/english/areWeakMaps.md)               |
| [isWeakSet(value)](docs/english/isWeakSet.md)                 | [areWeakSets(array)](docs/english/areWeakSets.md)               |

<br>

## The *@type-check* Ecosystem

`@type-check/guards` forms the foundation of a modular ecosystem, designed to ensure type safety at every stage of your
application. Due to the strict separation of modules, you only load the logic you actually need.

### Available Modules:

- **[@type-check/assertions](https://www.npmjs.com/package/@type-check/assertions)**:
  Builds upon the guards and provides functions that immediately `throw` an error if validation fails. Perfect for clean
  validation logic at the beginning of functions.

  Special feature: The module provides **multilingual, configurable error messages** that can be used directly in your
  application (e.g., for API responses or UI feedback). This eliminates the need to create your own error message texts.


- **[@type-check/constraints](https://www.npmjs.com/package/@type-check/constraints)**:
  Enables the definition of complex rules and conditions (e.g., minimum string length, value ranges for numbers) that go
  beyond simple type checks.

### Why strict separation?

- **Optimal Performance:**
  If you only need to check types, there is no need to load the code for complex assertions or constraints.
  This keeps the bundle tiny (CPU and RAM efficient).


- **Clear Responsibilities:**
  Each module has a specific task. This leads to more maintainable code and prevents API overload.


- **Maximum Flexibility:**
  You decide how strict your application should be – from simple boolean checks to hard assertions that stop the program
  flow upon errors.

<br>

## Support or report an error

If you would also like to contribute to the library (e.g., translations), you are cordially invited to do so.
Information can be found in [CONTRIBUTING.md](CONTRIBUTING.md).
You will also be mentioned in the [AUTHORS.md](AUTHORS.md) file.

If you find any errors or have ideas for useful enhancements, you can contribute directly
on [GitHub](https://github.com/roland-milto/type-check-guards/issues).