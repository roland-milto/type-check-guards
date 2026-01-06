# areBigInts

Prüft, ob alle Werte in einem Array vom Typ `bigint` sind.

## Wofür wird `areBigInts` verwendet?

Diese Funktion validiert eine Liste von Werten darauf, ob sie ausschließlich aus `BigInt`-Werten besteht.
Dies ist nützlich für die Verarbeitung von Datensätzen mit großen IDs oder hochpräzisen kryptografischen Werten.

> **Hinweis für TypeScript-Nutzer:** Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf
`bigint[]`.

## Verhalten

`areBigInts` gibt `true` zurück, wenn alle Elemente im Array vom Typ `bigint` sind.
Sobald ein einzelnes Element kein `BigInt` ist (z. B. eine normale Zahl oder ein String), wird `false` zurückgegeben.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `[10n, 20n, 30n]`   | `true`  |
| `[BigInt(1), 0n]`   | `true`  |
| `[10n, 20]` (Mix)   | `false` |
| `[10n, "20n"]`      | `false` |
| `[]` (leeres Array) | `false` |
| `[null]`            | `false` |

## Verwendung

```ts
import {areBigInts} from "@type-check/guards";

areBigInts([10n, 20n]); // true
areBigInts([10n, 20]);  // false

// TypeScript Beispiel
const bigNumbers: unknown[] = [100n, 200n];

if (areBigInts(bigNumbers)) {
  // bigNumbers wird hier automatisch als bigint[] behandelt
  const sum = bigNumbers.reduce((a, b) => a + b, 0n);
  console.log(sum);
}
```