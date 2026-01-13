# areSets

Prüft, ob ein Wert ein nicht-leeres Array von `Set`-Objekten ist.

## Wofür wird `areSets` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `Set`-Instanzen besteht.
Dies ist nützlich bei der Arbeit mit Sammlungen von eindeutigen Werten, wie z. B. Kategorien-Listen für verschiedene
Datenbereiche.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Set<unknown>[]`.

## Verhalten

`areSets` gibt `true` zurück, wenn der Hauptwert ein gefülltes Array ist und jedes seiner Elemente eine Instanz von
`Set` darstellt.
Ein leeres Array gibt `false` zurück.

| Eingabe                  | Ausgabe |
|--------------------------|---------|
| `[new Set(), new Set()]` | `true`  |
| `[new Set(), []]`        | `false` |
| `[]` (leeres Array)      | `false` |
| `[null]`                 | `false` |

## Verwendung

```ts
import {areSets} from "@type-check/guards";

const collections = [new Set([1]), new Set([2])];
areSets(collections); // true

// TypeScript Beispiel
const dataGroups: unknown[] = [new Set()];

if (areSets(dataGroups)) {
  // dataGroups wird hier automatisch als Set<unknown>[] behandelt
  dataGroups.forEach(group => console.log(group.size));
}
```