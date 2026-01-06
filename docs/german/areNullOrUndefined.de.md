# areNullOrUndefined

Prüft, ob alle Werte in einem Array entweder `null` oder `undefined` sind.

## Wofür wird `areNullOrUndefined` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus leeren Werten besteht.
Dies ist hilfreich, um sicherzustellen, dass ein Array noch keine tatsächlichen Daten enthält oder um Datensätze zu
identifizieren, die komplett aus Platzhaltern bestehen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `(null | undefined)[]`.

## Verhalten

`areNullOrUndefined` gibt `true` zurück, wenn alle Elemente im Array entweder `null` oder `undefined` sind.
Ein leeres Array gibt ebenfalls `true` zurück (Vakuum-Wahrheit).
Sobald ein einzelnes Element einen anderen Wert enthält (z. B. `0` oder `""`), wird `false` zurückgegeben.

| Eingabe               | Ausgabe |
|-----------------------|---------|
| `[null, undefined]`   | `true`  |
| `[null, null]`        | `true`  |
| `[undefined, "text"]` | `false` |
| `[null, 0]`           | `false` |
| `[]` (leeres Array)   | `true`  |

## Verwendung

```ts
import {areNullOrUndefined} from "@type-check/guards";

areNullOrUndefined([null, undefined]); // true
areNullOrUndefined([null, 1]);         // false

// TypeScript Beispiel
const results: unknown[] = [null, undefined, null];

if (areNullOrUndefined(results)) {
  // results wird hier automatisch als (null | undefined)[] behandelt
  console.log(`Array enthält ${results.length} leere Einträge.`);
}
```