# isObject

Prüft, ob ein Wert ein echtes Objekt ist.

## Wofür wird `isObject` verwendet?

Die Funktion validiert, ob ein Wert ein strukturelles Objekt ist.
Im Gegensatz zum Standard-JavaScript `typeof === 'object'` schließt diese Funktion `null` aus, da `null` technisch
gesehen ein Objekt-Typ ist, aber keine Objekt-Eigenschaften besitzt.
Dies verhindert Laufzeitfehler beim Zugriff auf Properties.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `object`.

## Verhalten

`isObject` gibt `true` zurück, wenn der Wert ein Objekt (einschließlich Arrays, Funktionen, Datums-Objekte etc.) und
nicht `null` ist.
In allen anderen Fällen (Primitive wie Strings, Zahlen, Booleans oder `null`) wird `false` zurückgegeben.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `{}`                | `true`  |
| `[]`                | `true`  |
| `new Date()`        | `true`  |
| `null`              | `false` |
| `"Objekt"` (String) | `false` |
| `42`                | `false` |

## Verwendung

```ts
import { isObject } from "@type-check/strict";

isObject({ a: 1 }); // true
isObject(null);     // false
isObject([]);       // true

// TypeScript Beispiel
const config: unknown = { timeout: 1000 };

if (isObject(config)) {
  // config wird hier automatisch als object behandelt
  console.log(Object.keys(config));
}
```