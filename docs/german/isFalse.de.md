# isFalse

Prüft, ob ein Wert strikt gleich `false` ist.

## Wofür wird `isFalse` verwendet?

Die Funktion validiert, ob ein Wert exakt den booleschen Wert `false` besitzt.
Dies verhindert Fehlinterpretationen von "falsy" Werten wie `0`, `null`, `undefined` oder leeren Strings, die in
JavaScript oft fälschlicherweise als logisches Falsch behandelt werden.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf den literalen Wert `false`.

## Verhalten

`isFalse` gibt nur dann `true` zurück, wenn der Wert vom Typ `boolean` und gleich `false` ist.
Alle anderen Werte (einschließlich `0`, `null` oder `true`) geben `false` zurück.

| Eingabe     | Ausgabe |
|-------------|---------|
| `false`     | `true`  |
| `true`      | `false` |
| `0`         | `false` |
| `""`        | `false` |
| `null`      | `false` |
| `undefined` | `false` |

## Verwendung

```ts
import {isFalse} from "@type-check/guards";

isFalse(false); // true
isFalse(0);     // false
isFalse(null);  // false

// TypeScript Beispiel
const isError: unknown = false;

if (isFalse(isError)) {
  // isError ist hier automatisch vom Typ 'false'
  console.log("Es liegt kein Fehler vor.");
}
```