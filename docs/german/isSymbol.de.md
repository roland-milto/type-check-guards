# isSymbol

Prüft, ob ein Wert vom Typ `symbol` ist.

## Wofür wird `isSymbol` verwendet?

Die Funktion validiert, ob ein Wert ein eindeutiger Bezeichner (`Symbol`) ist.
Symbole werden häufig verwendet, um einzigartige Property-Keys in Objekten zu erstellen, die nicht mit anderen Keys
kollidieren können und für gängige Iterationsmethoden unsichtbar sind.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `symbol`.

## Verhalten

`isSymbol` gibt `true` zurück, wenn der Wert vom Typ `symbol` ist.
In allen anderen Fällen (z. B. Strings, Zahlen, Objekte oder `null`) wird `false` zurückgegeben.

| Eingabe            | Ausgabe |
|--------------------|---------|
| `Symbol()`         | `true`  |
| `Symbol.for("id")` | `true`  |
| `Symbol.iterator`  | `true`  |
| `"id"` (String)    | `false` |
| `null`             | `false` |
| `{}`               | `false` |

## Verwendung

```ts
import {isSymbol} from "@type-check/guards";

isSymbol(Symbol("key")); // true
isSymbol("key");        // false

// TypeScript Beispiel
const key: unknown = Symbol("internal");

if (isSymbol(key)) {
  // key wird hier automatisch als symbol behandelt
  const obj = {[key]: "geheim"};
  console.log(obj[key]);
}
```