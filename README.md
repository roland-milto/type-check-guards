[Zu Deutsch wechseln](README.de.md)

# [`@type-check/guards`](https://www.npmjs.com/package/@type-check/guards)

![typescript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![npm version](https://img.shields.io/npm/v/@type-check/guards?color=blue)
![node version](https://img.shields.io/node/v/@type-check/guards?color=blue)
![esm supported](https://img.shields.io/badge/ESM-supported-brightgreen)
![tree shaking](https://img.shields.io/badge/tree--shaking-supported-brightgreen)

## Table of Contents: Runtime Type Checks & Guards

<details>
  <summary><b>Click here to open the Table of Contents</b></summary>

<!-- toc -->

- [What is @type-check/guards?](#what-is-type-checkguards)
- [Why should I use @type-check/guards?](#why-should-i-use-type-checkguards)
  * [Performance & Efficiency](#maximum-performance--resource-efficiency)
  * [Runtime Safety](#runtime-safety--design-time-power)
  * [Design-Time Testing](#excellent-for-design-time-testing)
  * [API Consistency](#api-consistency)
- [How to use @type-check/guards?](#how-to-use-type-checkguards)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Local Import](#local-import)
  * [Global Import](#global-import)
  * [package.json](#packagejson)
  * [CDN (jsDelivr)](#cdn-jsdelivr)
  * [Usage](#usage)
  * [Examples](#examples)
  * [Example with Object Export](#example-with-object-export)
  * [Example with Tree-Shakable Functions](#example-with-tree-shakable-functions)
- [Exported TypeScript Types](#exported-typescript-types)
- [API Reference / Methods](#methods)
  * [Type Determination](#type-determination)
  * [Primitive Checks](#primitives)
  * [Array Validation](#types-in-arrays)
- [@type-check Ecosystem](#the-type-check-ecosystem)
- [Contributing & Support](#support-or-report-an-error)

<!-- tocstop -->

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

### Maximum Performance & Resource Efficiency

- **Minimal Footprint:**
  Through consistent **tree-shaking** and **zero dependencies**, the bundle size remains minimal. This saves memory (
  RAM) and reduces loading times.


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

---

## How to use *@type-check/guards*?

### Prerequisites

The package is designed as a native **ES module (ESM)** and supports all modern environments from **ES2020+** (Node.js
16+, current browsers, and edge runtimes) to ensure maximum efficiency without unnecessary polyfills.

### Installation

To install `@type-check/guards`, use the following command in your terminal:

```bash
npm install @type-check/guards
```

### Import

#### Local Import

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

#### Global Import

Use `@type-check/guards` as a global import (available as an object only), so you only need to include it *once* in your
project:

```ts
import '@type-check/guards/register-global';

type.isPlainObject({}); // true
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

### CDN (jsDelivr)

For rapid prototyping or direct browser usage (without a build step), you can load `@type-check/guards` via jsDelivr:

```html

<script type="module">
  import {isInteger, areStrings} from 'https://cdn.jsdelivr.net/npm/@type-check/guards/dist/index.min.mjs';

 console.log(isInteger(1337)); // true
 console.log(areStrings(["TS", "JS"])); // true
</script>
```

### Usage

All functions or methods take **one argument** and return a boolean value, except the functions or methods
`isOfType`, `isOneOfType`, `areOfType`, and `areOneOfType`, which take **two arguments**.
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

---

## Exported TypeScript Types

For seamless integration into your TypeScript projects, `@type-check/guards` exports helpful union types. You can use
these to type your own variables or ensure your logic only uses the type identifiers supported by this library.

### Importing Types

```ts
import type {DataType, Primitive, NonPrimitive, NumberType} from "@type-check/guards";
```

- **`DataType`**: The master union of `Primitive` and `NonPrimitive`. It covers all identifiers that can be returned by
  `getTypeOf`.
- **`Primitive`**: Includes all basic data types such as `"string"`, `"number"`, `"boolean"`, `"bigint"`, `"symbol"`,
  `"integer"`, `"float"`, `"nan"`, `"null"`, and `"undefined"`.
- **`NonPrimitive`**: Includes complex structures like `"array"`, `"object"`, `"date"`, `"error"`, `"function"`,
  `"map"`, `"set"`, `"promise"`, `"regexp"`, `"stream"`, `"buffer"`, `"weakmap"`, and `"weakset"`.
- **`NumberType`**: A specialized selection for numerical classifications (`"number"`, `"integer"`, `"float"`,
  `"bigInt"`).

---

## Methods

All functions are designed to provide precise results and can be used either via the `type` object or as an individual
import.

### Type Determination

[getTypeOf(value)](docs/english/getTypeOf.md) returns a string describing the type of the given value (always
camelCase).

### Primitives

The return value is always a boolean.

- [isArray(value)](docs/english/isArray.md)
- [isBigInt(value)](docs/english/isBigInt.md)
- [isBoolean(value)](docs/english/isBoolean.md)
- [isBuffer(value)](docs/english/isBuffer.md)
- [isDate(value)](docs/english/isDate.md)
- [isEqual(value, expected)](docs/english/isEqual.md)
- [isError(value)](docs/english/isError.md)
- [isFalse(value)](docs/english/isFalse.md)
- [isFilledArray(value)](docs/english/isFilledArray.md)
- [isFinite(value)](docs/english/isFinite.md)
- [isFloat(value)](docs/english/isFloat.md)
- [isFunction(value)](docs/english/isFunction.md)
- [isInteger(value)](docs/english/isInteger.md)
- [isMap(value)](docs/english/isMap.md)
- [isNaN(value)](docs/english/isNaN.md)
- [isNull(value)](docs/english/isNull.md)
- [isNullOrUndefined(value)](docs/english/isNullOrUndefined.md)
- [isNumber(value)](docs/english/isNumber.md)
- [isObject(value)](docs/english/isObject.md)
- [isOfType(value, type)](docs/english/isOfType.md)
- [isOneOfType(value, types[])](docs/english/isOneOfType.md)
- [isPlainObject(value)](docs/english/isPlainObject.md)
- [isPrimitive(value)](docs/english/isPrimitive.md)
- [isPromise(value)](docs/english/isPromise.md)
- [isRegEx(value)](docs/english/isRegEx.md)
- [isSet(value)](docs/english/isSet.md)
- [isStream(value)](docs/english/isStream.md)
- [isString(value)](docs/english/isString.md)
- [isSymbol(value)](docs/english/isSymbol.md)
- [isTrue(value)](docs/english/isTrue.md)
- [isUndefined(value)](docs/english/isUndefined.md)
- [isValidDate(value)](docs/english/isValidDate.md)
- [isWeakMap(value)](docs/english/isWeakMap.md)
- [isWeakSet(value)](docs/english/isWeakSet.md)

### Types in Arrays

The return value is always a boolean.

- [areArrays(array)](docs/english/areArrays.md)
- [areBigInts(array)](docs/english/areBigInts.md)
- [areBooleans(array)](docs/english/areBooleans.md)
- [areBuffers(array)](docs/english/areBuffers.md)
- [areDates(array)](docs/english/areDates.md)
- [areEqual(value, expected)](docs/english/areEqual.md)
- [areErrors(value)](docs/english/areErrors.md)
- [areFalse(array)](docs/english/areFalse.md)
- [areFilledArrays(array)](docs/english/areFilledArrays.md)
- [areFinite(array)](docs/english/areFinite.md)
- [areFloats(array)](docs/english/areFloats.md)
- [areFunctions(array)](docs/english/areFunctions.md)
- [areIntegers(array)](docs/english/areIntegers.md)
- [areMaps(array)](docs/english/areMaps.md)
- [areNaNs(array)](docs/english/areNaNs.md)
- [areNull(array)](docs/english/areNull.md)
- [areNullOrUndefined(array)](docs/english/areNullOrUndefined.md)
- [areNumbers(array)](docs/english/areNumbers.md)
- [areObjects(array)](docs/english/areObjects.md)
- [areOfType(array, type)](docs/english/areOfType.md)
- [areOneOfType(array, types[])](docs/english/areOneOfType.md)
- [arePlainObjects(array)](docs/english/arePlainObjects.md)
- [arePrimitives(array)](docs/english/arePrimitives.md)
- [arePromises(array)](docs/english/arePromises.md)
- [areRegExes(array)](docs/english/areRegExes.md)
- [areSets(array)](docs/english/areSets.md)
- [areStreams(array)](docs/english/areStreams.md)
- [areStrings(array)](docs/english/areStrings.md)
- [areSymbols(array)](docs/english/areSymbols.md)
- [areTrue(array)](docs/english/areTrue.md)
- [areUndefined(array)](docs/english/areUndefined.md)
- [areValidDates(array)](docs/english/areValidDates.md)
- [areWeakMaps(array)](docs/english/areWeakMaps.md)
- [areWeakSets(array)](docs/english/areWeakSets.md)

---

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

---

## Support or report an error

If you would also like to contribute to the library (e.g., translations), you are cordially invited to do so.
Information can be found in [CONTRIBUTING.md](CONTRIBUTING.md).
You will also be mentioned in the [AUTHORS.md](AUTHORS.md) file.

If you find any errors or have ideas for useful enhancements, you can contribute directly
on [GitHub](https://github.com/roland-milto/type-check-guards/issues).