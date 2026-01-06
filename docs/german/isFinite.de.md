# isFinite

Prüft, ob ein Wert eine endliche Zahl ist.

## Wofür wird `isFinite` verwendet?

Die Funktion validiert, ob ein Wert vom Typ `number` ist und weder `NaN` (Not-a-Number) noch positiv oder negativ
`Infinity` (unendlich) ist.
Sie ist die sicherere Alternative zur globalen `isFinite()` Funktion, da sie keine implizite Typumwandlung durchführt (
z. B. werden Strings nicht in Zahlen umgewandelt).

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `number`.

## Verhalten

`isFinite` gibt `true` zurück, wenn der Wert vom Typ `number` und endlich ist.
In allen anderen Fällen (z. B. `NaN`, `Infinity`, Strings oder `null`) wird `false` zurückgegeben.

| Eingabe       | Ausgabe |
|---------------|---------|
| `42`          | `true`  |
| `3.14`        | `true`  |
| `-10`         | `true`  |
| `NaN`         | `false` |
| `Infinity`    | `false` |
| `"-Infinity"` | `false` |
| `"42"`        | `false` |
| `null`        | `false` |

## Verwendung

```ts
import { isFinite } from "@type-check/strict";

isFinite(100);      // true
isFinite(Infinity); // false
isFinite("100");    // false

// TypeScript Beispiel
const score: unknown = 95.5;

if (isFinite(score)) {
  // score wird hier automatisch als number behandelt
  console.log(`Punkte: ${score.toFixed(1)}`);
}
```