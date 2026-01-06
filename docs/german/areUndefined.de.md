# areUndefined

Prüft, ob alle Werte in einem Array `undefined` sind.

## Wofür wird `areUndefined` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `undefined` besteht.
Dies kann hilfreich sein, um sicherzustellen, dass ein Array (z. B. ein Puffer oder eine Datenstruktur) noch keine
tatsächlichen Werte enthält.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `undefined[]`.

## Verhalten

`areUndefined` gibt `true` zurück, wenn alle Elemente im Array vom Typ `undefined` sind.
Sobald ein einzelnes Element einen anderen Typ hat (z. B. `null` oder `0`), wird `false` zurückgegeben.

| Eingabe                  | Ausgabe |
|--------------------------|---------|
| `[undefined, undefined]` | `true`  |
| `[undefined, null]`      | `false` |
| `[undefined, 0]`         | `false` |
| `[]` (leeres Array)      | `false` |

## Verwendung

```ts
import {areUndefined} from "@type-check/strict";

areUndefined([undefined, undefined]); // true
areUndefined([undefined, null]);      // false

// TypeScript Beispiel
const results: unknown[] = [undefined, undefined];

if (areUndefined(results)) {
  // results wird hier automatisch als undefined[] behandelt
  const length = results.length;
  console.log(`Array enthält ${length} nicht initialisierte Stellen.`);
}
```