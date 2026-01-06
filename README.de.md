[Switch to English](README.md)

# @type-check/guards

## Was sind `type-check-guards`?

[@type-check/guards](https://www.npmjs.com/package/@type-check/guards) bietet leistungsstarke, sicherheitsorientierte
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
import {type} from "@type-check/guards";

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
import {areStrings, isPlainObject, isInteger, isString, isBoolean} from "@type-check/guards";

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

## Wie ist `@type-check/guards` zu nutzen?

### Installation über die Kommandozeile

```bash
npm install @type-check/guards
```

### Importieren

Verwenden Sie `@type-check/guards` als einen lokalen Import:

```js
// Import des type-check Objekts:
import {type} from "@type-check/guards";

type.isInteger(1337);   // true

// Oder als individueller Import einzelner Funktionen:
import {isInteger} from "@type-check/guards";

isInteger(1337);   // true
```

```js
// Or you may give it a shorter alias or name:
import {type as types} from "@type-check/guards";

types.areIntegers([42, 1337]);  // true
```

Verwenden Sie `@type-check/guards` als globalen Import, sodass Sie es *nur einmal* in Ihr Projekt einbinden müssen:

```js
import '@type-check/guards/register-global';

type.isPlainObject({}); // true
```

### package.json

Stellen Sie sicher, dass Sie `@type-check/guards` in Ihre `package.json`-Abhängigkeiten aufnehmen und immer die neueste
Version verwenden:

```json
{
	"dependencies": {
		"@type-check/guards": "*"
	}
}
```

### Verwendung

Alle Methoden nehmen **ein Argument** entgegen und geben einen booleschen Wert zurück, mit Ausnahme der Methode
`isOfType`, die **zwei Argumente** entgegennimmt.
Das erste Argument ist *immer* der zu prüfende Wert, das zweite Argument ist der erwartete Typ.

```js
import {areStrings, getTypeOf, isBigInt, isInteger, isOfType} from "@type-check/guards";

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

- [isArray(value)](docs/german/isArray.de.md)
- [isBigInt(value)](docs/german/isBigInt.de.md)
- [isBoolean(value)](docs/german/isBoolean.de.md)
- [isBuffer(value)](docs/german/isBuffer.de.md)
- [isDate(value)](docs/german/isDate.de.md)
- [isFinite(value)](docs/german/isFinite.de.md)
- [isFloat(value)](docs/german/isFloat.de.md)
- [isFunction(value)](docs/german/isFunction.de.md)
- [isInteger(value)](docs/german/isInteger.de.md)
- [isNull(value)](docs/german/isNull.de.md)
- [isNullOrUndefined(value)](docs/german/isNullOrUndefined.de.md)
- [isNumber(value)](docs/german/isNumber.de.md)
- [isObject(value)](docs/german/isObject.de.md)
- [isOfType(value, type)](docs/german/isOfType.de.md)
- [isPlainObject(value)](docs/german/isPlainObject.de.md)
- [isPrimitive(value)](docs/german/isPrimitive.de.md)
- [isPromise(value)](docs/german/isPromise.de.md)
- [isRegEx(value)](docs/german/isRegEx.de.md)
- [isStream(value)](docs/german/isStream.de.md)
- [isString(value)](docs/german/isString.de.md)
- [isSymbol(value)](docs/german/isSymbol.de.md)
- [isUndefined(value)](docs/german/isUndefined.de.md)
- [isValidDate(value)](docs/german/isValidDate.de.md)

### Typen in Arrays (gibt einen booleschen Wert zurück)

- [areArrays(array)](docs/german/areArrays.de.md)
- [areBigInts(array)](docs/german/areBigInts.de.md)
- [areBooleans(array)](docs/german/areBooleans.de.md)
- [areBuffers(array)](docs/german/areBuffers.de.md)
- [areDates(array)](docs/german/areDates.de.md)
- [areFinite(array)](docs/german/areFinite.de.md)
- [areFloats(array)](docs/german/areFloats.de.md)
- [areFunctions(array)](docs/german/areFunctions.de.md)
- [areIntegers(array)](docs/german/areIntegers.de.md)
- [areNull(array)](docs/german/areNull.de.md)
- [areNullOrUndefined(array)](docs/german/areNullOrUndefined.de.md)
- [areNumbers(array)](docs/german/areNumbers.de.md)
- [areObjects(array)](docs/german/areObjects.de.md)
- [areOfType(array, type)](docs/german/areOfType.de.md)
- [arePlainObjects(array)](docs/german/arePlainObjects.de.md)
- [arePrimitives(array)](docs/german/arePrimitives.de.md)
- [arePromises(array)](docs/german/arePromises.de.md)
- [areRegExes(array)](docs/german/areRegExes.de.md)
- [areStreams(array)](docs/german/areStreams.de.md)
- [areStrings(array)](docs/german/areStrings.de.md)
- [areSymbols(array)](docs/german/areSymbols.de.md)
- [areUndefined(array)](docs/german/areUndefined.de.md)
- [areValidDates(array)](docs/german/areValidDates.de.md)

---

## Unterstützung

Wenn Sie ebenfalls einen Beitrag zur Bibliothek leisten möchten, sind Sie herzlich dazu eingeladen. Informationen dazu
finden Sie unter
[CONTRIBUTING.md](CONTRIBUTING.md). Sie werden auch in der Datei [AUTHORS.md](AUTHORS.md) erwähnt.