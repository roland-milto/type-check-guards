# getTypeOf

Ermittelt den präzisen Datentyp eines Wertes als *kleingeschriebenen* String.

## Wofür wird `getTypeOf` verwendet?

In JavaScript liefert der Standard-Operator `typeof` oft unpräzise Ergebnisse (z. B. `typeof null` ist `"object"`,
`typeof []` ist ebenfalls `"object"`).
`getTypeOf` behebt diese Mängel und identifiziert komplexe Typen wie `array`, `date`, `regexp` oder `null` eindeutig.
Zudem wird zwischen validen Zahlen und `NaN` unterschieden.

> **Wichtiger Hinweis:**
> Alle Rückgabewerte dieser Funktion sind konsequent **kleingeschrieben** (z. B. `"nan"` statt `"NaN"`), um eine
> konsistente Weiterverarbeitung zu gewährleisten.

## Verhalten

`getTypeOf` gibt einen String zurück, der den exakten Typ repräsentiert.

| Eingabe            | Ausgabe (DataTypes) |
|--------------------|---------------------|
| `"Text"`           | `"string"`          |
| `42`               | `"number"`          |
| `NaN`              | `"nan"`             |
| `null`             | `"null"`            |
| `[]`               | `"array"`           |
| `new Date()`       | `"date"`            |
| `/abc/`            | `"regexp"`          |
| `new Promise(...)` | `"promise"`         |

## Verwendung

```ts
import {getTypeOf} from "@type-check/guards";

getTypeOf("Hallo");      // "string"
getTypeOf(NaN);          // "nan"
getTypeOf(null);         // "null"
getTypeOf([1, 2]);       // "array"
getTypeOf(new Date());   // "date"

// TypeScript Beispiel
const data: unknown = NaN;
const type = getTypeOf(data);

if (type === "nan") {
  console.log("Der Wert ist keine gültige Zahl.");
}
```