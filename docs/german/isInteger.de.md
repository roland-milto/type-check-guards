# isInteger

Prüft, ob ein Wert eine ganze Zahl (Integer) ist.

## Verwendung

Die Funktion validiert, ob eine Eingabe ein numerischer Wert ohne Nachkommastellen ist.
Sie hilft dabei, Typfehler zu vermeiden, besonders wenn APIs oder mathematische Operationen strikt ganze Zahlen
erwarten.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `number`.

## Verhalten

`isInteger` gibt `true` zurück, wenn der Wert vom Typ `number` und eine ganze Zahl ist.
In allen anderen Fällen (z. B. Strings, Objekte, NaN, Unendlichkeit) wird `false` zurückgegeben.

| Eingabe        | Ausgabe |
|----------------|---------|
| `1337`         | `true`  |
| `42.0`         | `true`  |
| `-7`           | `true`  |
| `3.14`         | `false` |
| `"21"`         | `false` |
| `10n` (BigInt) | `false` |
| `NaN`          | `false` |
| `Infinity`     | `false` |
| `null`         | `false` |
| `undefined`    | `false` |

## Verwendung

```ts
import { isInteger } from "@type-checks/strict";

isInteger(42);       // true
isInteger(42.5);     // false
isInteger("42");     // false (strikte Typprüfung)

// TypeScript Beispiel
const value: unknown = 10;
if (isInteger(value)) {
	// value ist hier automatisch vom Typ 'number'
	console.log(value.toFixed(0));
}
```