# arePrimitives

Prüft, ob alle Werte in einem Array primitive Datentypen sind.

## Wofür wird `arePrimitives` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus Basis-Datentypen besteht.
Dies ist hilfreich, um sicherzustellen, dass ein Array flach (flat) ist und keine komplexen Referenztypen wie Objekte
oder andere Arrays enthält.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays auf eine Kollektion von primitiven Werten.

## Verhalten

`arePrimitives` gibt `true` zurück, wenn jedes Element im Array ein primitiver Wert ist.
Sobald ein Element ein Objekt, ein Array oder eine Funktion ist, wird `false` zurückgegeben.
Ein leeres Array gibt `false` zurück.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `[1, "a", true]`    | `true`  |
| `[null, undefined]` | `true`  |
| `[1, { id: 1 }]`    | `false` |
| `[1, [2]]`          | `false` |
| `[]` (leeres Array) | `false` |

## Verwendung

```ts
import {arePrimitives} from "@type-check/guards";

arePrimitives([1, "zwei", false]); // true
arePrimitives([1, {}]);            // false

// TypeScript Beispiel
const data: unknown[] = ["ID-1", 100, null];

if (arePrimitives(data)) {
  // data enthält nur primitive Werte
  console.log("Das Array ist flach und enthält keine Objekte.");
}
```