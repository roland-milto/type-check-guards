[Switch to English](README.md)

# [`@type-check/guards`](https://www.npmjs.com/package/@type-check/guards)

![NPM version](https://img.shields.io/npm/v/@type-check/guards?color=blue)
![Typescript project](https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Browser supported](https://img.shields.io/badge/Browser-supported-brightgreen)
![ESM supported](https://img.shields.io/badge/ESM-supported-brightgreen)
![Tree shaking](https://img.shields.io/badge/Tree--shaking-supported-brightgreen)

Sehr einfach zu nutzen (Ein Beispiel):

```ts
import {isFloat} from "@type-check/guards";

isFloat(1337); // false
```

## Inhaltsverzeichnis: Runtime Type Checks & Guards

<details>
  <summary><b>Hier klicken, um das Inhaltsverzeichnis zu öffnen</b></summary>

- [Was ist @type-check/guards?](#was-ist-type-checkguards)
- [Warum sollte ich @type-check/guards verwenden?](#warum-sollte-ich-type-checkguards-verwenden)
  * [Browsersupport](#browsersupport)
  * [Performance & Effizienz](#maximale-performance--ressourceneffizienz)
  * [Runtime Safety](#runtime-safety--design-time-power)
  * [Design-Time Testing](#hervorragend-für-design-time-testing)
  * [API-Konsistenz](#api-konsistenz)
- [Wie ist @type-check/guards zu nutzen?](#wie-ist-type-checkguards-zu-nutzen)
  * [Voraussetzungen](#voraussetzungen)
  * [Installation](#installation)
  * [package.json](#packagejson)
  * [tsconfig.json](#tsconfigjson)
  * [Import](#import)
    - [Lokaler Funktionen-Import (Node.js)](#lokaler-funktionen-import)
    - [Lokaler Objekt-Import](#lokaler-objekt-import)
    - [Globaler Funktionen-Import (Node.js)](#globaler-funktionen-import)
    - [Browser Import & CDN (jsDelivr)](#browser-import)
  * [Verwendung](#verwendung)
  * [Beispiele](#beispiele)
  * [Beispiel mit tree-shakable-fähigen Funktionen](#beispiel-mit-tree-shakable-fähigen-funktionen)
  * [Beispiel mit Objekt-Export](#beispiel-mit-dem-objekt-export)
- [Funktionen / Methoden](#funktionen--methoden)
  * [Typ-Ermittlung](#typ-ermittlung)
  * [Typprüfungen](#typprüfungen)
- [@type-check Ökosystem](#das-type-check-ökosystem)
- [Mitwirken & Unterstützung](#unterstützen-oder-fehler-melden)

</details>

<br>

## Was ist *@type-check/guards*?

[@type-check/guards](https://www.npmjs.com/package/@type-check/guards) bietet leistungsstarke, sicherheitsorientierte
Laufzeit-Typüberprüfungen gemäß den aktuellen Best Practices für 2026, geschrieben in TypeScript
von [Roland Milto](https://roland.milto.de/).

Dieses Paket wurde für professionelle TypeScript-, Node.js- und moderne Browserumgebungen entwickelt und bietet präzise
und effiziente Typüberprüfungsfunktionen mit kontinuierlicher Weiterentwicklung.

Das Modul exportiert ein Objekt, welches alle Typüberprüfungsfunktionen enthält, und bietet gleichzeitig
**Tree-Shaking-Exporte** für jede einzelne Funktion.
**Außerdem können Typen auch in Arrays überprüft werden.**

<br>

## Warum sollte ich *@type-check/guards* verwenden?

Im Gegensatz zu schwerfälligen Frameworks wie **Chai**, **Jest** oder **Vitest**, die primär für isolierte
Testumgebungen konzipiert sind,
wurde `@type-check/guards` für maximale Effizienz im **Produktionseinsatz (Runtime)** und höchste Präzision im
**Design-Time Testing** entwickelt.

### Browsersupport

> `@type-check/guards` unterstützt alle modernen Browser, einschließlich Chrome, Edge, Firefox, Opera und Safari.

### Maximale Performance & Ressourceneffizienz

- **Minimaler Footprint:**
  Durch konsequentes **Tree-Shaking** und **Zero Dependencies** bleibt das Bundle-Size minimal. Das schont den
  Arbeitsspeicher (RAM) und verkürzt Ladezeiten.


- **CPU-Optimierung:**
  Die Guards (wie `isOfType`) nutzen intern "Fast-Path"-Abkürzungen für Primitivtypen.
  Das vermeidet unnötige Funktionsaufrufe und Rechenlast, selbst bei Millionen von Validierungen pro Sekunde.


- **Einfache Syntax:**
  Schluss mit komplexen Assertionsketten.
  Eine klare, funktionale API (z. B. `isString(value)`) sorgt für besser lesbaren Code und schnellere Entwicklung.

### Runtime Safety & Design-Time Power

Dieses Paket schützt die Anwendung während der Ausführung vor korrupten Daten, bietet aber gleichzeitig enorme Vorteile
während der Entwicklung:

- **Strikte Validierung:**
  JavaScript-Designfehler werden nativ korrigiert (z. B. `typeof null === 'object'` oder `typeof NaN === 'number'`).
  Die Guards prüfen das, was Du *meinst*, nicht das, was JavaScript *behauptet*.


- **Inhalts-Validierung:**
  Während Test-Frameworks oft nur prüfen, *ob* ein Array existiert, wird mit Funktionen wie `areStrings` oder
  `areIntegers` effizient der gesamte **Inhalt** validiert – tiefgehend und sicher.


- **Intelligente Type Guards:**
  Jede Funktion ist ein echter Type Guard (TypeScript).
  Sobald eine Prüfung bestanden ist, erkennt TypeScript den Typ im folgenden Codeblock automatisch.
  Das ersetzt unsicheres Type-Casting (`as string`) durch echte Logik.

```ts
// Ohne Type Guards:
function process(value: unknown) {
 if (typeof value === 'string') {
  (value as string).toUpperCase(); // Manuelles Casting oft nötig
 }
}

// Mit Type guards:
if (isString(value)) {
  value.toUpperCase(); // TypeScript erkennt den Typ sofort
}
```

### Hervorragend für Design-Time Testing

Obwohl für die Runtime optimiert, ist `@type-check/guards` die perfekte Ergänzung für Deine Test-Suiten:

- Nutze dieselben validen Prüfmechanismen in Deinen Unit-Tests wie in Deiner Produktionslogik.
- Keine aufwendige Konfiguration von Test-Runnern nötig – die Guards funktionieren überall: Node.js, Browser,
  Edge-Runtimes oder Serverless Functions.

### API-Konsistenz

Um die Fehleranfälligkeit bei Vergleichen zu minimieren,
folgt `@type-check/guards` einer strikten **camelCase-Strategie**.
Alle von `getTypeOf` zurückgegebenen Strings sowie die Typ-Bezeichner in `isOfType` sind konsequent in *camelCase*
geschrieben (z. B. `"nan"` statt `"NaN"`, `"bigInt"` statt `"BigInt"`).

<br>

## Wie ist *@type-check/guards* zu nutzen?

### Voraussetzungen

Das Paket ist als natives **ES-Modul (ESM)** konzipiert und unterstützt alle modernen Umgebungen ab **ES2020+** (Node.js
18+, aktuelle Browser sowie Edge-Runtimes), um maximale Effizienz ohne unnötige Polyfills zu gewährleisten.

### Installation

Um `@type-check/guards` zu installieren, verwende den folgenden Befehl in der Kommandozeile:

```bash
npm install @type-check/guards
```

### package.json

Stelle sicher, dass `@type-check/guards` in Deine `package.json`-Abhängigkeiten aufgenommen ist und immer die neueste
Version verwendet wird:

```json
{
	"dependencies": {
		"@type-check/guards": "*"
	}
}
```

### tsconfig.json

Da `@type-check/guards` als ESM-Modul exportiert wird, ist es erforderlich,
die Option `moduleResolution` in der `tsconfig.json`-Datei anzupassen,
um Fehlermeldungen durch den TypeScript-Compiler zu vermeiden:

```json
{
	"compilerOptions": {
		"moduleResolution": "NodeNext"
	}
}
```

### Import

#### Lokaler Funktionen-Import

Individueller Import einzelner Funktionen (Tree-Shaking):

```ts
import {isInteger} from "@type-check/guards";

isInteger(1337); // true
```

#### Lokaler Objekt-Import

Import des type-check Objekts:

```ts
import {type} from "@type-check/guards/as-object";

type.isInteger(42); // true
```

Verwendung eines anderen Namens:

```ts
import {type as values} from "@type-check/guards/as-object";

values.areIntegers([42, 1337]); // true
```

#### Globaler Funktionen-Import

Verwende `@type-check/guards` als globalen Import für alle Funktionen, sodass Du die Bibliothek *nur einmal* in Deinem
Projekt einbinden musst:

```ts
import '@type-check/guards/register-global';

isPlainObject({}); // true
```

Falls Deine IDE nicht automatisch die Typen erkennt, kannst Du in der `tsconfig.json` die Typen manuell registrieren:

```json
{
	"compilerOptions": {
		"types": [
			"@type-check/guards/register-global"
		]
	}
}
```

### Browser Import

Wenn das Bundle lokal gehostet werden soll, findet sich das minifizierte Bundle unter `dist/index.min.mjs` im
Paketverzeichnis.

Für eine schnelle Integration in Prototypen oder die direkte Verwendung im Browser (ohne Build-Schritt) kann
`@type-check/guards` über das Content Delivery Network (CDN) **jsDelivr** oder **unpkg** geladen werden:

```html
<script type="module">
  import {isFloat, areStrings} from 'https://cdn.jsdelivr.net/npm/@type-check/guards/dist/index.min.mjs';

  console.log(isFloat(1337)); // false
 console.log(areStrings(["TS", "JS"])); // true
</script>
```

> Für **unpkg** nutze diese URL: https://unpkg.com/@type-check/guards/dist/index.min.mjs

### Verwendung

Alle Funktionen bzw. Methoden nehmen **ein Argument** entgegen und geben einen booleschen Wert zurück, mit Ausnahme der
Funktionen bzw. Methoden `isEqual`, `isOfType`, `isOneOfType`, `areEqual`, `areOfType` und `areOneOfType`,
die **zwei Argumente** entgegennehmen.

Das erste Argument ist *immer* der zu prüfende Wert, das zweite Argument ist der erwartete Typ.
Bei *__OneOfType* müssen die Typen in einem Array angegeben werden.

```ts
import {areStrings, getTypeOf, isBigInt, isInteger, isOfType} from "@type-check/guards";

console.log(getTypeOf(42)); // Zeichenkette 'number'

console.log(isOfType("Geschrieben von Roland Milto", "string")); // true

console.log(isInteger(42)); // true

console.log(isBigInt(42));  // false

console.log(areStrings(["Made", "by", "Roland", "Milto"])); // true
```

### Beispiele

#### Beispieldaten

```ts
const user1 = {
  id: 1337,
  name: "Roland Milto",
  email: "nospam@trash-mail.com",
  isManager: true,
  locations: [
    "Berlin",
    "Hamburg",
    "München"
  ]
}
```

### Beispiel mit tree-shakable-fähigen Funktionen:

```ts
import {areStrings, isBoolean, isInteger, isPlainObject, isString} from "@type-check/guards";

function checkAccountDetails(options) {
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

checkAccountDetails(user1);
```

#### Beispiel mit dem Objekt-Export:

```ts
import {type} from "@type-check/guards";

function checkAccountDetails(options) {
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

checkAccountDetails(user1);
```

<br>

## Exportierte TypeScript-Typen

Für eine nahtlose Integration in Deine TypeScript-Projekte exportiert `@type-check/guards` hilfreiche Union-Types. Diese
kannst Du nutzen, um eigene Variablen zu typisieren oder um sicherzustellen, dass Deine Logik nur die von uns
unterstützten Typ-Bezeichner verwendet.

### Import der Typen

```ts
import type {DataType, Primitive, NonPrimitive, NumberType} from "@type-check/guards";
```

- **`DataType`**: Die zentrale Union aus `Primitive` und `NonPrimitive`. Sie umfasst alle Bezeichner, die auch von
  `getTypeOf` zurückgegeben werden können.


- **`Primitive`**: Beinhaltet alle einfachen Datentypen wie `string`, `number`, `boolean`, `bigInt`, `symbol`,
  `integer`, `float`, `nan`, `null` und `undefined`.


- **`NonPrimitive`**: Umfasst komplexe Strukturen wie `array`, `object`, `date`, `error`, `function`, `map`,
  `set`, `promise`, `regExp`, `stream`, `buffer`, `weakMap` und `weakSet`.


- **`NumericType`**: Eine spezialisierte Auswahl für numerische Klassifizierungen (`bigInt`, `binary`, `decimal`,
  `float`, `hexadecimal`, `integer`, `number` und `octal`).

<br>

## Funktionen / Methoden

Alle Funktionen sind darauf ausgelegt, präzise Ergebnisse zu liefern und können entweder über das `type`-Objekt oder als
Einzelimport genutzt werden.

### Typ-Ermittlung

[getTypeOf(value)](docs/german/getTypeOf.de.md) gibt eine Zeichenfolge zurück, die den Typ des angegebenen Werts als
Zeichenkette beschreibt (immer als camelCase).

### Typprüfungen

Alle Methoden geben einen booleschen Wert zurück.
Die Spalte **Einzelwertprüfung** prüft einen individuellen Wert, während die Spalte **Array-Elemente überprüfen** prüft,
ob jedes Element im übergebenen Array die Bedingung erfüllt.

|                        Einzelwertprüfung                        |                     Array-Elemente überprüfen                     |
|:---------------------------------------------------------------:|:-----------------------------------------------------------------:|
|           [isArray(value)](docs/german/isArray.de.md)           |          [areArrays(array)](docs/german/areArrays.de.md)          |
|          [isBigInt(value)](docs/german/isBigInt.de.md)          |         [areBigInts(array)](docs/german/areBigInts.de.md)         |
|         [isBoolean(value)](docs/german/isBoolean.de.md)         |        [areBooleans(array)](docs/german/areBooleans.de.md)        |
|          [isBuffer(value)](docs/german/isBuffer.de.md)          |         [areBuffers(array)](docs/german/areBuffers.de.md)         |
|            [isDate(value)](docs/german/isDate.de.md)            |           [areDates(array)](docs/german/areDates.de.md)           |
|      [isEqual(value, expected)](docs/german/isEqual.de.md)      |      [areEqual(value, expected)](docs/german/areEqual.de.md)      |
|           [isError(value)](docs/german/isError.de.md)           |          [areErrors(value)](docs/german/areErrors.de.md)          |
|           [isFalse(value)](docs/german/isFalse.de.md)           |           [areFalse(array)](docs/german/areFalse.de.md)           |
|     [isFilledArray(value)](docs/german/isFilledArray.de.md)     |    [areFilledArrays(array)](docs/german/areFilledArrays.de.md)    |
|          [isFinite(value)](docs/german/isFinite.de.md)          |          [areFinite(array)](docs/german/areFinite.de.md)          |
|           [isFloat(value)](docs/german/isFloat.de.md)           |          [areFloats(array)](docs/german/areFloats.de.md)          |
|        [isFunction(value)](docs/german/isFunction.de.md)        |       [areFunctions(array)](docs/german/areFunctions.de.md)       |
|         [isInteger(value)](docs/german/isInteger.de.md)         |        [areIntegers(array)](docs/german/areIntegers.de.md)        |
|             [isMap(value)](docs/german/isMap.de.md)             |            [areMaps(array)](docs/german/areMaps.de.md)            |
|             [isNaN(value)](docs/german/isNaN.de.md)             |            [areNaNs(array)](docs/german/areNaNs.de.md)            |
|            [isNull(value)](docs/german/isNull.de.md)            |            [areNull(array)](docs/german/areNull.de.md)            |
| [isNullOrUndefined(value)](docs/german/isNullOrUndefined.de.md) | [areNullOrUndefined(array)](docs/german/areNullOrUndefined.de.md) |
|          [isNumber(value)](docs/german/isNumber.de.md)          |         [areNumbers(array)](docs/german/areNumbers.de.md)         |
|          [isObject(value)](docs/german/isObject.de.md)          |         [areObjects(array)](docs/german/areObjects.de.md)         |
|       [isOfType(value, type)](docs/german/isOfType.de.md)       |       [areOfType(array, type)](docs/german/areOfType.de.md)       |
|  [isOneOfType(value, types[])](docs/german/isOneOfType.de.md)   |  [areOneOfType(array, types[])](docs/german/areOneOfType.de.md)   |
|     [isPlainObject(value)](docs/german/isPlainObject.de.md)     |    [arePlainObjects(array)](docs/german/arePlainObjects.de.md)    |
|       [isPrimitive(value)](docs/german/isPrimitive.de.md)       |      [arePrimitives(array)](docs/german/arePrimitives.de.md)      |
|         [isPromise(value)](docs/german/isPromise.de.md)         |        [arePromises(array)](docs/german/arePromises.de.md)        |
|           [isRegEx(value)](docs/german/isRegEx.de.md)           |         [areRegExes(array)](docs/german/areRegExes.de.md)         |
|             [isSet(value)](docs/german/isSet.de.md)             |            [areSets(array)](docs/german/areSets.de.md)            |
|          [isStream(value)](docs/german/isStream.de.md)          |         [areStreams(array)](docs/german/areStreams.de.md)         |
|          [isString(value)](docs/german/isString.de.md)          |         [areStrings(array)](docs/german/areStrings.de.md)         |
|          [isSymbol(value)](docs/german/isSymbol.de.md)          |         [areSymbols(array)](docs/german/areSymbols.de.md)         |
|            [isTrue(value)](docs/german/isTrue.de.md)            |            [areTrue(array)](docs/german/areTrue.de.md)            |
|       [isUndefined(value)](docs/german/isUndefined.de.md)       |       [areUndefined(array)](docs/german/areUndefined.de.md)       |
|       [isValidDate(value)](docs/german/isValidDate.de.md)       |      [areValidDates(array)](docs/german/areValidDates.de.md)      |
|         [isWeakMap(value)](docs/german/isWeakMap.de.md)         |        [areWeakMaps(array)](docs/german/areWeakMaps.de.md)        |
|         [isWeakSet(value)](docs/german/isWeakSet.de.md)         |        [areWeakSets(array)](docs/german/areWeakSets.de.md)        |

<br>

## Das *@type-check* Ökosystem

`@type-check/guards` bildet das Fundament eines modularen Ökosystems, das darauf ausgelegt ist, Typsicherheit in jeder
Phase Deiner Anwendung zu gewährleisten.
Durch die strikte Trennung der Module lädst Du nur die Logik, die Du tatsächlich benötigst.

### Verfügbare Module:

- **[@type-check/assertions](https://www.npmjs.com/package/@type-check/assertions)**:
  Baut auf den Guards auf und stellt Funktionen bereit, die sofort Fehler werfen (`throw`), wenn eine Validierung
  fehlschlägt.
  Ideal für saubere Validierungslogik am Anfang von Funktionen.

  Das Besondere: Das Modul liefert **mehrsprachige, konfigurierbare Fehlermeldungen** mit,
  die direkt in der Anwendung (z.&nbsp;B. für API-Antworten oder UI-Feedback) genutzt werden können.


- **[@type-check/constraints](https://www.npmjs.com/package/@type-check/constraints)**:
  Ermöglicht die Definition komplexer Regeln und Bedingungen (z.&nbsp;B. Mindestlänge von Strings, Wertebereiche von
  Zahlen),
  die über einfache Typ-Prüfungen hinausgehen.

### Warum die strikte Trennung?

- **Optimale Performance:**
  Sollen nur Typen geprüft werden, muss nicht der Code für komplexe Assertions oder Constraints mitgeladen werden. Das
  hält das Bundle extrem klein.


- **Klare Zuständigkeiten:**
  Jedes Modul hat eine spezifische Aufgabe. Dies führt zu besser wartbarem Code und verhindert eine Überladung der API.


- **Flexibilität:**
  Du entscheidest selbst, wie strikt Deine Anwendung sein soll – von einfachen booleschen Prüfungen bis hin zu harten
  Assertionen, die den Programmfluss bei Fehlern stoppen.

<br>

## Unterstützen oder Fehler melden

Wenn Du ebenfalls einen Beitrag zur Bibliothek leisten möchtest (z.&nbsp;B. Übersetzungen), bist Du herzlich dazu
eingeladen.
Informationen dazu findest Du unter [CONTRIBUTING.md](CONTRIBUTING.md).
Du wirst auch in der Datei [AUTHORS.md](AUTHORS.md) erwähnt.

Bei Fehlern oder Ideen zu sinnvollen Erweiterungen kannst Du Dich direkt
auf [GitHub](https://github.com/roland-milto/type-check-guards/issues) beteiligen.

