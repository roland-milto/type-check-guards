# areWeakSets

Prüft, ob ein Wert ein nicht-leeres Array von `WeakSet`-Objekten ist.

## Wofür wird `areWeakSets` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `WeakSet`-Instanzen besteht.
Dies ist nützlich bei der Verwaltung mehrerer unabhängiger Objekt-Tracker oder in komplexen
Speicher-Management-Szenarien.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `WeakSet<object>[]`.

## Verhalten

`areWeakSets` gibt `true` zurück, wenn der Hauptwert ein gefülltes Array ist und jedes seiner Elemente eine Instanz von
`WeakSet` darstellt.
Ein leeres Array gibt `false` zurück.

| Eingabe                          | Ausgabe |
|----------------------------------|---------|
| `[new WeakSet(), new WeakSet()]` | `true`  |
| `[new WeakSet(), new Set()]`     | `false` |
| `[]` (leeres Array)              | `false` |
| `[null]`                         | `false` |

## Verwendung

```ts
import {areWeakSets} from "@type-check/guards";

const trackers = [new WeakSet(), new WeakSet()];
areWeakSets(trackers); // true

// TypeScript Beispiel
const collections: unknown[] = [new WeakSet()];

if (areWeakSets(collections)) {
  // collections wird hier automatisch als WeakSet<object>[] behandelt
  console.log(`Anzahl der Tracker: ${collections.length}`);
}
```