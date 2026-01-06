# isBigInt

Prüft, ob ein Wert vom Typ `bigint` ist.

## Wofür wird `isBigInt` verwendet?

Die Funktion validiert, ob ein Wert eine extrem große Ganzzahl (`BigInt`) ist.
Dies ist wichtig, wenn mit Zahlen gearbeitet wird, die den sicheren Bereich von Standard-JavaScript-Zahlen (
`Number.MAX_SAFE_INTEGER`) überschreiten, um Präzisionsverluste zu vermeiden.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `bigint`.

## Verhalten

`isBigInt` gibt `true` zurück, wenn der Wert vom Typ `bigint` ist.
In allen anderen Fällen (z. B. Standard-Zahlen, Strings, Objekte oder `null`) wird `false` zurückgegeben.

| Eingabe           | Ausgabe |
|-------------------|---------|
| `10n`             | `true`  |
| `BigInt(9007199)` | `true`  |
| `0n`              | `true`  |
| `42` (Number)     | `false` |
| `"10"` (String)   | `false` |
| `null`            | `false` |

## Verwendung

```ts
import { isBigInt } from "@type-check/strict";

isBigInt(9007199254740991n); // true
isBigInt(42);                // false

// TypeScript Beispiel
const value: unknown = 100n;

if (isBigInt(value)) {
  // value wird hier automatisch als bigint behandelt
  console.log(value.toString() + "n");
}
```