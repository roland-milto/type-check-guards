# areSymbols

Prüft, ob alle Werte in einem Array vom Typ `symbol` sind.

## Wofür wird `areSymbols` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `Symbol`-Werten besteht.
Dies ist nützlich bei der Verwaltung von Listen für interne Objekt-Keys oder bei der Definition von speziellen
Protokoll-Markern.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `symbol[]`.

## Verhalten

`areSymbols` gibt `true` zurück, wenn alle Elemente im Array vom Typ `symbol` sind.
Sobald ein einzelnes Element kein Symbol ist (z. B. ein String oder eine Zahl), wird `false` zurückgegeben.

| Eingabe                      | Ausgabe |
|------------------------------|---------|
| `[Symbol(), Symbol("test")]` | `true`  |
| `[Symbol(), "test"]`         | `false` |
| `[null]`                     | `false` |
| `[]` (leeres Array)          | `false` |

## Verwendung

```ts
import {areSymbols} from "@type-check/strict";

const keys = [Symbol("a"), Symbol("b")];
areSymbols(keys); // true

// TypeScript Beispiel
const metaKeys: unknown[] = [Symbol("id"), Symbol("version")];

if (areSymbols(metaKeys)) {
  // metaKeys wird hier automatisch als symbol[] behandelt
  metaKeys.forEach(s => console.log(s.toString()));
}
```