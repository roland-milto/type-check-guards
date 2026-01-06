# isNumber

Prüft, ob ein Wert eine endliche Zahl ist.

## Wofür wird `isNumber` verwendet?

Die Funktion stellt sicher, dass ein Wert tatsächlich eine nutzbare Zahl ist.
Im Gegensatz zum Standard-JavaScript `typeof value === 'number'` schließt diese Funktion Werte wie `NaN` und `Infinity`
aus, die oft zu Fehlern in Berechnungen führen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `number`.

## Verhalten

`isNumber` gibt `true` zurück, wenn der Wert vom Typ `number` und endlich (finite) ist.

| Eingabe        | Ausgabe |
|----------------|---------|
| `42`           | `true`  |
| `3.14`         | `true`  |
| `-10.5`        | `true`  |
| `"42"`         | `false` |
| `NaN`          | `false` |
| `Infinity`     | `false` |
| `10n` (BigInt) | `false` |
| `null`         | `false` |
| `undefined`    | `false` |

## Verwendung

```ts
import {isNumber} from "@type-check/guards";

isNumber(123);          // true
isNumber(NaN);          // false
isNumber(Infinity);     // false
isNumber("123");        // false

// TypeScript Beispiel
const value: unknown = 42.5;

if (isNumber(value)) {
 // value ist hier automatisch vom Typ 'number'
 console.log(value.toFixed(2));
}
```