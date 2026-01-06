# arePlainObjects

Prüft, ob alle Werte in einem Array einfache Objekte (Plain Objects) sind.

## Wofür wird `arePlainObjects` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus einfachen Schlüssel-Wert-Strukturen besteht.
Sie wird oft genutzt, um sicherzustellen, dass asynchrone API-Antworten oder Konfigurations-Listen keine unerwarteten
Datentypen wie Arrays oder Klasseninstanzen enthalten.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Record<string, unknown>[]`.

## Verhalten

`arePlainObjects` gibt `true` zurück, wenn alle Elemente im Array einfache Objekte sind.
Sobald ein einzelnes Element kein einfaches Objekt ist (z. B. ein Array, `null` oder ein Primitiv), wird `false`
zurückgegeben.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `[{}, { a: 1 }]`    | `true`  |
| `[{}, []]`          | `false` |
| `[{}, null]`        | `false` |
| `[]` (leeres Array) | `false` |

## Verwendung

```ts
import { arePlainObjects } from "@type-check/strict";

arePlainObjects([{ x: 1 }, { y: 2 }]); // true
arePlainObjects([{ x: 1 }, [1, 2]]);   // false

// TypeScript Beispiel
const data: unknown[] = [{ id: 1 }, { id: 2 }];

if (arePlainObjects(data)) {
  // data wird hier automatisch als Record<string, unknown>[] behandelt
  data.forEach(item => console.log(item.id));
}
```