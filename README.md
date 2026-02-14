[Zu Deutsch wechseln](README.de.md)

# [`@type-check/guards`](https://www.npmjs.com/package/@type-check/guards)

![NPM version](https://img.shields.io/npm/v/@type-check/guards?color=blue)
![Typescript project](https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Browser supported](https://img.shields.io/badge/Browser-supported-brightgreen)
![ESM supported](https://img.shields.io/badge/ESM-supported-brightgreen)
![Tree shaking](https://img.shields.io/badge/Tree--shaking-supported-brightgreen)

Straightforward to use (one example):

```ts
import {isFloat} from "@type-check/guards";

isFloat(1337); // false
```

## Table of contents: runtime type checks and guards

<details>
  <summary><b>Click here to open the table of contents</b></summary>

- [What is @type-check/guards?](#what-is-type-checkguards)
- [Why should I use @type-check/guards?](#why-should-i-use-type-checkguards)
  * [Browsersupport](#browsersupport)
  * [Performance & efficiency](#maximum-performance-and-resource-efficiency)
  * [Runtime safety](#runtime-safety-and-design-time-power)
  * [Design-time testing](#excellent-for-design-time-testing)
  * [API consistency](#api-consistency)
- [How to use @type-check/guards?](#how-to-use-type-checkguards)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [package.json](#packagejson)
  * [tsconfig.json](#tsconfigjson)
  * [Import](#import)
    - [Local function imports (Node.js)](#local-function-imports)
    - [Local object import (Node.js)](#local-object-import)
    - [Global function imports (Node.js)](#global-function-imports)
    - [Browser import & CDN (jsDelivr)](#browser-import)
  * [Usage](#usage)
  * [Examples](#examples)
  * [Example with tree-shakable functions](#example-with-tree-shakable-functions)
  * [Example with object export](#example-with-object-export)
- [Exported TypeScript types](#exported-typescript-types)
- [Functions / Methods](#functions--methods)
  * [Type determination](#type-determination)
  * [Type checks](#type-checks)
    - [Basic and primitive types](#basic-and-primitive-types)
    - [Numeric checks](#numeric-checks)
    - [Objects and collections](#objects-and-collections)
    - [Specialized instances and logic](#specialized-instances-and-logic)
- [**@type-check** ecosystem](#the-type-check-ecosystem)
- [**@js-augment** ecosystem](#the-js-augment-ecosystem)
- [Contributing & Support](#support-or-report-an-error)

</details>

<br>

## What is *@type-check/guards*?

[@type-check/guards](https://www.npmjs.com/package/@type-check/guards) provides powerful, safety-oriented runtime type
checks according to 2026 best practices, written in TypeScript by [Roland Milto](https://roland.milto.de/).

This package is designed for professional TypeScript, Node.js, and modern browser environments, offering precise and
efficient type-checking functions with continuous development.

The module exports an object containing all type-checking functions while also providing **tree-shakable** exports for
each function.
**Additionally, types within arrays can be validated.**

<br>

## Why should I use *@type-check/guards*?

Unlike heavy frameworks like **Chai**, **Jest**, or **Vitest**, which are primarily designed for isolated testing
environments, `@type-check/guards` was developed for maximum efficiency in **production (runtime)** and the highest
precision during **design-time testing**.

### Browsersupport

> `@type-check/guards` supports all modern browsers, including Chrome, Edge, Firefox, Opera, and Safari.

### Maximum performance and resource efficiency

- **Minimal footprint:**
  Through consistent **tree-shaking** and **zero dependencies**, the bundle size remains minimal.
  This saves memory (RAM) and reduces loading times.


- **CPU optimization:**
  The guards (such as `isOfType`) internally use "fast-path" shortcuts for primitive types. This avoids unnecessary
  function calls and processing load, even with millions of validations per second.


- **Simple syntax:**
  No more complex assertion chains. A clear, functional API (e.g., `isString(value)`) ensures more readable code and
  faster development.

### Runtime safety and design-time power

This package protects the application during execution from corrupt data while offering enormous benefits during
development:

- **Strict validation:**
  JavaScript design flaws are natively corrected (e.g., `typeof null === 'object'` or `typeof NaN === 'number'`). The
  guards check what you *mean*, not what JavaScript *claims*.


- **Content validation:**
  While testing frameworks often only check *if* an array exists, functions like `areStrings` or `areIntegers`
  efficiently validate the **entire content** – deep and secure.


- **Intelligent type guards:**
  Every function is a true TypeScript Type Guard. Once a check passes, TypeScript automatically recognizes the type in
  the following code block. This replaces unsafe type casting (`as string`) with real logic.

```ts
// Without type guards:
function process(value: unknown) {
  if (typeof value === 'string') {
    (value as string).toUpperCase(); // Manual casting often required
  }
}

// With type guards:
if (isString(value)) {
  value.toUpperCase(); // TypeScript recognizes the type immediately
}
```

### Excellent for design-time testing

Although optimized for runtime, `@type-check/guards` is the perfect addition to your test suites:

- Use the same valid checking mechanisms in your unit tests as in your production logic.
- No complex configuration of tests is required – the guards work everywhere: Node.js, browser, edge runtimes, or
  serverless functions.

### API consistency

To minimize errors during comparisons, `@type-check/guards` follows a strict **camelCase strategy**.
All strings returned by `getTypeOf`, as well as the type identifiers in `isOfType`, are consistently *lowercase* (e.g.,
`"nan"` instead of `"NaN"`, `"bigint"` instead of `"BigInt"`).

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

#### Local function imports

Individual import of specific functions (Tree-Shaking):

```ts
import {isInteger} from "@type-check/guards";

isInteger(1337); // true
```

#### Local object import

Importing the type-check object:

```ts
import {type} from "@type-check/guards/as-object";

type.isInteger(42); // true
```

Using a different name or alias:

```ts
import {type as values} from "@type-check/guards/as-object";

values.areIntegers([42, 1337]); // true
```

#### Global function imports

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
  import {isFloat, areStrings} from 'https://cdn.jsdelivr.net/npm/@type-check/guards/dist/index.min.mjs';

  console.log(isFloat(1337)); // false
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

#### Example data

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

### Example with tree-shakable functions:

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

#### Example with object export:

```ts
import {type} from "@type-check/guards/as-object";

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

<br>

## Exported TypeScript types

For seamless integration into your TypeScript projects, `@type-check/guards` exports helpful union types. You can use
these to type your own variables or ensure your logic only uses the type identifiers supported by this library.

### Importing types

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

[getTypeOf(value)](docs/eng/getTypeOf.md) returns a string describing the type of the given value (always
camelCase).

### Type checks

All methods return a boolean value. The **Single Value Check** column validates an individual value, while the **Check
Array Elements** column ensures that every element in the provided array meets the condition.

#### Basic and primitive types

| Single Value Check                                        | Check Array Elements                                        | Description                       |
|:----------------------------------------------------------|:------------------------------------------------------------|:----------------------------------|
| [isBoolean(value)](docs/eng/isBoolean.md)                 | [areBooleans(array)](docs/eng/areBooleans.md)               | Checks for `boolean`.             |
| [isFalse(value)](docs/eng/isFalse.md)                     | [areFalse(array)](docs/eng/areFalse.md)                     | Checks for strictly `false`.      |
| [isNull(value)](docs/eng/isNull.md)                       | [areNull(array)](docs/eng/areNull.md)                       | Checks for `null`.                |
| [isNullOrUndefined(value)](docs/eng/isNullOrUndefined.md) | [areNullOrUndefined(array)](docs/eng/areNullOrUndefined.md) | Checks for `null` or `undefined`. |
| [isPrimitive(value)](docs/eng/isPrimitive.md)             | [arePrimitives(array)](docs/eng/arePrimitives.md)           | Checks for primitive type.        |
| [isString(value)](docs/eng/isString.md)                   | [areStrings(array)](docs/eng/areStrings.md)                 | Checks for `string`.              |
| [isSymbol(value)](docs/eng/isSymbol.md)                   | [areSymbols(array)](docs/eng/areSymbols.md)                 | Checks for `symbol`.              |
| [isTrue(value)](docs/eng/isTrue.md)                       | [areTrue(array)](docs/eng/areTrue.md)                       | Checks for strictly `true`.       |
| [isUndefined(value)](docs/eng/isUndefined.md)             | [areUndefined(array)](docs/eng/areUndefined.md)             | Checks for `undefined`.           |

#### Numeric checks

| Single Value Check                                | Check Array Elements                                  | Description                                              |
|:--------------------------------------------------|:------------------------------------------------------|:---------------------------------------------------------|
| [isBigInt(value)](docs/eng/isBigInt.md)           | [areBigInts(array)](docs/eng/areBigInts.md)           | Checks for `bigint`.                                     |
| [isBinary(value)](docs/eng/isBinary.md)           | [areBinaries(array)](docs/eng/areBinaries.md)         | Checks for binary notation (string, optional `0b`/`0B`). |
| [isDecimal(value)](docs/eng/isDecimal.md)         | [areDecimals(array)](docs/eng/areDecimals.md)         | Checks for decimal number as string.                     |
| [isFinite(value)](docs/eng/isFinite.md)           | [areFinite(array)](docs/eng/areFinite.md)             | Checks for finite number.                                |
| [isFloat(value)](docs/eng/isFloat.md)             | [areFloats(array)](docs/eng/areFloats.md)             | Checks for floating-point (non-integer).                 |
| [isHexadecimal(value)](docs/eng/isHexadecimal.md) | [areHexadecimals(array)](docs/eng/areHexadecimals.md) | Checks for hexadecimal notation (string with `0x`/`0X`). |
| [isInteger(value)](docs/eng/isInteger.md)         | [areIntegers(array)](docs/eng/areIntegers.md)         | Checks for integer.                                      |
| [isNaN(value)](docs/eng/isNaN.md)                 | [areNaNs(array)](docs/eng/areNaNs.md)                 | Checks for `NaN`.                                        |
| [isNumber(value)](docs/eng/isNumber.md)           | [areNumbers(array)](docs/eng/areNumbers.md)           | Checks for `number`.                                     |
| [isNumeric](docs/eng/isNumeric.md)                | [areNumerics(array)](docs/eng/areNumerics.md)         | Checks for numeric values e.g. `float`, `octal` etc.     |
| [isOctal(value)](docs/eng/isOctal.md)             | [areOctals(array)](docs/eng/areOctals.md)             | Checks for octal notation (string with `0o`/`0O`).       |

#### Objects and collections

| Single Value Check                                            | Check Array Elements                                              | Description                               |
|:--------------------------------------------------------------|:------------------------------------------------------------------|:------------------------------------------|
| [isArray(value)](docs/eng/isArray.md)                         | [areArrays(array)](docs/eng/areArrays.md)                         | Checks for array.                         |
| [isEnumeration(value, option)](docs/eng/isEnumeration.md)     | [areEnumerations(array, option)](docs/eng/areEnumerations.md)     | Checks if it is an `enum` value.          |
| [isEnumerationObject(value)](docs/eng/isEnumerationObject.md) | [areEnumerationObjects(array)](docs/eng/areEnumerationObjects.md) | Checks if it is an `enum` object.         |
| [isFilledArray(value)](docs/eng/isFilledArray.md)             | [areFilledArrays(array)](docs/eng/areFilledArrays.md)             | Checks for non-empty array.               |
| [isMap(value)](docs/eng/isMap.md)                             | [areMaps(array)](docs/eng/areMaps.md)                             | Checks for `Map`.                         |
| [isObject(value)](docs/eng/isObject.md)                       | [areObjects(array)](docs/eng/areObjects.md)                       | Checks for object.                        |
| [isPlainObject(value)](docs/eng/isPlainObject.md)             | [arePlainObjects(array)](docs/eng/arePlainObjects.md)             | Checks for plain object (object literal). |
| [isSet(value)](docs/eng/isSet.md)                             | [areSets(array)](docs/eng/areSets.md)                             | Checks for `Set`.                         |
| [isWeakMap(value)](docs/eng/isWeakMap.md)                     | [areWeakMaps(array)](docs/eng/areWeakMaps.md)                     | Checks for `WeakMap`.                     |
| [isWeakSet(value)](docs/eng/isWeakSet.md)                     | [areWeakSets(array)](docs/eng/areWeakSets.md)                     | Checks for `WeakSet`.                     |

#### Specialized instances and logic

| Single Value Check                                   | Check Array Elements                                   | Description                        |
|:-----------------------------------------------------|:-------------------------------------------------------|:-----------------------------------|
| [isBuffer(value)](docs/eng/isBuffer.md)              | [areBuffers(array)](docs/eng/areBuffers.md)            | Checks for Node.js `Buffer`.       |
| [isDate(value)](docs/eng/isDate.md)                  | [areDates(array)](docs/eng/areDates.md)                | Checks for `Date` instance.        |
| [isEmpty(value)](docs/eng/isEmpty.md)                | [areEmpty(array)](docs/eng/areEmpty.md)                | Checks for empty values.           |
| [isEqual(value, expected)](docs/eng/isEqual.md)      | [areEqual(value, expected)](docs/eng/areEqual.md)      | Checks for equality to `expected`. |
| [isError(value)](docs/eng/isError.md)                | [areErrors(array)](docs/eng/areErrors.md)              | Checks for `Error` object.         |
| [isFunction(value)](docs/eng/isFunction.md)          | [areFunctions(array)](docs/eng/areFunctions.md)        | Checks for function.               |
| [isOfType(value, type)](docs/eng/isOfType.md)        | [areOfType(array, type)](docs/eng/areOfType.md)        | Checks for the given type.         |
| [isOneOfType(value, types)](docs/eng/isOneOfType.md) | [areOneOfType(array, types)](docs/eng/areOneOfType.md) | Checks for any of the given types. |
| [isPromise(value)](docs/eng/isPromise.md)            | [arePromises(array)](docs/eng/arePromises.md)          | Checks for `Promise`.              |
| [isRegEx(value)](docs/eng/isRegEx.md)                | [areRegExes(array)](docs/eng/areRegExes.md)            | Checks for `RegExp`.               |
| [isStream(value)](docs/eng/isStream.md)              | [areStreams(array)](docs/eng/areStreams.md)            | Checks for stream.                 |
| [isValidDate(value)](docs/eng/isValidDate.md)        | [areValidDates(array)](docs/eng/areValidDates.md)      | Checks whether `Date` is valid.    |

<br>

## The *@type-check* ecosystem

`@type-check/guards` forms the foundation of a modular ecosystem, designed to ensure type safety at every stage of your
application. Due to the strict separation of modules, you only load the logic you actually need.

### Available modules:

- **[@type-check/assertions](https://www.npmjs.com/package/@type-check/assertions)**:
  Builds upon the guards and provides functions that immediately `throw` an error if validation fails. Perfect for clean
  validation logic at the beginning of functions.

  Special feature: The module provides **multilingual, configurable error messages** that can be used directly in your
  application (e.g., for API responses or UI feedback). This eliminates the need to create your own error message texts.


- **[@type-check/constraints](https://www.npmjs.com/package/@type-check/constraints)**:
  Enables the definition of complex rules and conditions (e.g., minimum string length, value ranges for numbers) that go
  beyond simple type checks.

### Why strict separation?

- **Optimal performance:**
  If you only need to check types, there is no need to load the code for complex assertions or constraints.
  This keeps the bundle tiny (CPU and RAM efficient).


- **Clear responsibilities:**
  Each module has a specific task. This leads to more maintainable code and prevents API overload.


- **Maximum flexibility:**
  You decide how strict your application should be – from simple boolean checks to hard assertions that stop the program
  flow upon errors.

<br>

## The *@js-augment* ecosystem

`@js-augment` is intended as an extension of `@type-check/guards`, which checks individual types in even greater detail.

Libraries based on `@type-check/guards` in the `@js-augment` namespace:

* [@js-augment/array](https://github.com/roland-milto/js-augment-array)
* [@js-augment/bigint](https://github.com/roland-milto/js-augment-bigint)
* [@js-augment/bigints](https://github.com/roland-milto/js-augment-bigints)
* [@js-augment/number](https://github.com/roland-milto/js-augment-number)
* [@js-augment/numbers](https://github.com/roland-milto/js-augment-numbers)
* [@js-augment/object](https://github.com/roland-milto/js-augment-object)
* [@js-augment/string](https://github.com/roland-milto/js-augment-string)

<br>

## Support or report an error

If you would also like to contribute to the library (e.g., translations), you are cordially invited to do so.
Information can be found in [CONTRIBUTING.md](CONTRIBUTING.md).
You will also be mentioned in the [AUTHORS.md](AUTHORS.md) file.

If you find any errors or have ideas for useful enhancements, you can contribute directly
on [GitHub](https://github.com/roland-milto/type-check-guards/issues).