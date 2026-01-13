# areMaps

Prüft, ob ein Wert ein nicht-leeres Array von `Map`-Objekten ist.

## Wofür wird `areMaps` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `Map`-Instanzen besteht.
Dies ist nützlich bei der Verarbeitung von Sammlungen komplexer Datenstrukturen, wie sie häufig in Cache-Systemen oder
Konfigurations-Layern vorkommen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Map<unknown, unknown>[]`.

## Verhalten

`areMaps` gibt `true` zurück, wenn der Hauptwert ein gefülltes Array ist und jedes seiner Elemente eine Instanz von
`Map` darstellt.
Ein leeres Array gibt `false` zurück.

| Eingabe                  | Ausgabe |
|--------------------------|---------|
| `[new Map(), new Map()]` | `true`  |
| `[new Map(), {}]`        | `false` |
| `[]` (leeres Array)      | `false` |
| `[null]`                 | `false` |

## Verwendung

```ts
import {areMaps} from "@type-check/guards";

const collection = [new Map(), new Map()];
areMaps(collection); // true

// TypeScript Beispiel
const dataStacks: unknown[] = [new Map()];

if (areMaps(dataStacks)) {
  // dataStacks wird hier automatisch als Map<unknown, unknown>[] behandelt
  dataStacks.forEach(stack => console.log(stack.size));
}
```