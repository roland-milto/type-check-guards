# areIntegers

Prüft, ob alle Werte in einem Array ganze Zahlen (Integers) sind.

## Wofür wird `areIntegers` verwendet?

Die Funktion validiert eine Liste von Werten gleichzeitig.
Dies ist besonders nützlich, um sicherzustellen, dass Datenstrukturen wie Koordinaten-Listen, ID-Arrays oder
mathematische Matrizen ausschließlich aus gültigen Ganzzahlen bestehen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `number[]`.

## Verhalten

`areIntegers` gibt `true` zurück, wenn alle Elemente im Array vom Typ `number` und ganze Zahlen sind.
Sobald ein einzelnes Element die Bedingung nicht erfüllt, ist das Ergebnis `false`.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `[1, 2, 3]`         | `true`  |
| `[10, 20.0, -5]`    | `true`  |
| `[1, 2.5, 3]`       | `false` |
| `[1, "2", 3]`       | `false` |
| `[]` (leeres Array) | `false` |
| `[10, NaN]`         | `false` |
| `[10, null]`        | `false` |

## Verwendung

```ts
import {areIntegers} from "@type-check/guards";

areIntegers([1, 2, 100]);    // true
areIntegers([1, 2.5]);       // false
areIntegers([1, "2"]);       // false

// TypeScript Beispiel
const values: unknown[] = [1, 2, 3];

if (areIntegers(values)) {
  // values wird hier automatisch als number[] behandelt
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}
```