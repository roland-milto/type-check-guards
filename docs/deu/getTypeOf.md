# getTypeOf

## Beschreibung

`getTypeOf` gibt für einen gegebenen Wert eine detaillierte, menschenlesbare Typbezeichnung zurück, einschließlich
verfeinerter numerischer Typen und spezifischer Objektarten.

### Anwendungsfall

Verwende `getTypeOf`, um die Typerkennung bei Eingabevalidierung und Diagnostik zu vereinheitlichen—z. B. um `nan`
abzulehnen, nur `integer`-IDs zu akzeptieren, numerische Zeichenketten wie `decimal` anders zu behandeln als einfache
`string`, oder um präzise Objektarten wie `date` und `regexp` zu loggen.

> **Hinweis für TypeScript-Nutzer:**
>
> Der Rückgabetyp ist `DataTypeAsString | string`. Behandle ihn als beschreibendes Label; vergleiche beim Verzweigen mit
> bekannten Literalen wie `integer`, `float`, `nan`, `array`, `null` und `undefined`.

### Vorteile

- Gibt eine feinere Typzeichenkette zurück als JavaScripts `typeof`, einschließlich numerischer Untertypen wie
  `integer`, `float` und `nan`.
- Unterscheidet `null` und `undefined` explizit als `null` bzw. `undefined`.
- Erkennt gängige Formate numerischer Zeichenketten und meldet sie als `binary`, `octal`, `decimal` oder `hexadecimal`
  statt als einfache `string`.
- Identifiziert Arrays als `array` und verwendet `Object.prototype.toString`, um spezifische Objekttypnamen
  bereitzustellen (z. B. `date`, `regexp`, `map`, `set`).
- Nützlich für Validierung, Logging und Debugging, wenn konsistente, menschenlesbare Typbezeichnungen benötigt werden.

## Verwendung

### Syntax

Funktion:

- `getTypeOf(value)`

Parameter:

- `value`: Der Wert, für den der Datentyp bestimmt werden soll.

### Lokaler Funktionen-Import

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Beispielprüfungen
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.getTypeOf(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 13:05:59 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>