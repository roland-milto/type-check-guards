[Switch to English](README.md)

# @type-check/strict

## Was ist `strict-type-checks`?

[@type-check/strict](https://www.npmjs.com/package/@type-check/strict) bietet leistungsstarke, sicherheitsorientierte
Laufzeit-Typüberprüfungen gemäß den aktuellen Best Practices für 2026, geschrieben in TypeScript
von [Roland Milto](https://roland.milto.de/).
Dieses Paket wurde für professionelle TypeScript-, Node.js- und moderne Browserumgebungen entwickelt und bietet präzise
und effiziente
Typüberprüfungsfunktionen mit aktivem Support und kontinuierlicher Weiterentwicklung.

Es exportiert ein Objekt, das alle Typüberprüfungsfunktionen enthält, und bietet gleichzeitig Tree-Shaking-Exporte für
jede Funktion.
**Außerdem können Typen in Arrays überprüft werden.**

### Beispiele mit dem Objekt-Export:

```js
import {type} from "@type-check/strict";

function checkAccountDetails(options, callback) {
	if (!type.isPlainObject(options))
		throw new TypeError("options muss ein einfaches Objekt sein");

	if (!type.isInteger(options.id))
		throw new TypeError("options.id muss eine Ganzzahl sein");

	if (type.isString(options.name))
		console.log("Account:", options.name ?? "Kein Name angegeben");

	if (type.isString(options.email))
		console.log("Kontakt E-Mail:", options.email ?? "Keine E-Mail angegeben");

	console.log("Manager:", options.isManager ? "Ja" : "Nein");

	// Also arrays are supported:
	if (type.areStrings(options.locations)) {
		for (const location of options.locations) {
			console.log("Standort:", location);
		}
	}
}
```

### Beispiele für exportierbare, tree-shakable-fähige Funktionen:

```js
import {areStrings, isPlainObject, isInteger, isString, isBoolean} from "@type-check/strict";

function checkAccountDetails(options, callback) {
	if (!isPlainObject(options))
		throw new TypeError("options muss ein einfaches Objekt sein");

	if (!isInteger(options.id))
		throw new TypeError("options.id muss eine Ganzzahl sein");

	if (isString(options.name))
		console.log("Account:", options.name ?? "Kein Name angegeben");

	if (isString(options.email))
		console.log("Kontakt E-Mail:", options.email ?? "Keine E-Mail angegeben");

	console.log("Manager:", options.isManager ? "Ja" : "Nein");

	// Arrays werden unterstützt:
	if (areStrings(options.locations)) {
		for (const location of options.locations) {
			console.log("Standort:", location);
		}
	}
}
```

---

## Wie ist `@type-check/strict` zu nutzen?

### Installation via command line

```bash
npm install @type-check/strict
```

### Import

Verwenden Sie `@type-check/strict` als lokalen Import, sodass Sie es *jedes Mal* importieren müssen, wenn Sie es
verwenden möchten:

```js
// Import des type-check Objekts:
import {type} from "@type-check/strict";

type.isInteger(1337);   // true

// Oder als individueller Import einzelner Funktionen:
import {isInteger} from "@type-check/strict";

isInteger(1337);   // true
```

```js
// Or you may give it a shorter alias or name:
import {type as types} from "@type-check/strict";

types.areIntegers([42, 1337]);  // true
```

Verwenden Sie `@type-check/strict` als globalen Import, sodass Sie es *nur einmal* in Ihr Projekt einbinden müssen:

```js
import '@type-check/strict/register-global';

type.isPlainObject({}); // true
```

### package.json

Stellen Sie sicher, dass Sie `@type-check/strict` in Ihre `package.json`-Abhängigkeiten aufnehmen und immer die neueste
Version verwenden:

```json
{
	"dependencies": {
		"@type-check/strict": "*"
	}
}
```

### Verwendung

Alle Methoden nehmen **ein Argument** entgegen und geben einen booleschen Wert zurück, mit Ausnahme der Methode
`isOfType`, die **zwei Argumente** entgegennimmt.
Das erste Argument ist *immer* der zu prüfende Wert, das zweite Argument ist der erwartete Typ.

```js
import {areStrings, getTypeOf, isBigInt, isInteger, isOfType} from "@type-check/strict";

console.log(getTypeOf(42)); // Zeichenkette 'number'

console.log(isOfType("Geschrieben von Roland Milto", "string")); // true

console.log(isInteger(42)); // true

console.log(isBigInt(42));  // false

console.log(areStrings(["Made", "by", "Roland", "Milto"])); // true
```

---

## Methoden

Gibt eine Zeichenfolge zurück, die den Typ des angegebenen Werts beschreibt: `getTypeOf(value)`

### Primitive (gibt einen booleschen Wert zurück)

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

### Typen in Arrays (gibt einen booleschen Wert zurück)

- areArrays(array)
- areBigInts(array)
- areBooleans(array)
- areBuffers(array)
- areDates(array)
- areFinite(array)
- areFunctions(array)
- areIntegers(array)
- areNull(array)
- areNullOrUndefined(array)
- areNumbers(array)
- areObjects(array)
- areOfType(array, type)
- arePlainObjects(array)
- arePromises(array)
- areRegExes(array)
- areStreams(array)
- areStrings(array)
- areSymbols(array)
- areUndefined(array)
- areValidDates(array)

---

## Unterstützung

Wenn Sie ebenfalls einen Beitrag zur Bibliothek leisten möchten, sind Sie herzlich dazu eingeladen. Informationen dazu
finden Sie unter
[CONTRIBUTING.md](CONTRIBUTING.md). Sie werden auch in der Datei [AUTHORS.md](AUTHORS.md) erwähnt.