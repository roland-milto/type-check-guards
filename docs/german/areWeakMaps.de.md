# areWeakMaps

Prüft, ob ein Wert ein nicht-leeres Array von `WeakMap`-Objekten ist.

## Wofür wird `areWeakMaps` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `WeakMap`-Instanzen besteht.
Dies ist hilfreich bei der Verwaltung von Metadaten-Speichern für verschiedene Module oder in fortgeschrittenen
Architektur-Szenarien, die schwache Referenzen zur Vermeidung von Memory Leaks nutzen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `WeakMap<object, unknown>[]`.

## Verhalten

`areWeakMaps` gibt `true` zurück, wenn der Hauptwert ein gefülltes Array ist und jedes seiner Elemente eine Instanz von
`WeakMap` darstellt.
Ein leeres Array gibt `false` zurück.

| Eingabe                          | Ausgabe |
|----------------------------------|---------|
| `[new WeakMap(), new WeakMap()]` | `true`  |
| `[new WeakMap(), new Map()]`     | `false` |
| `[]` (leeres Array)              | `false` |
| `[null]`                         | `false` |

## Verwendung

```ts
import {areWeakMaps} from "@type-check/guards";

const stores = [new WeakMap(), new WeakMap()];
areWeakMaps(stores); // true

// TypeScript Beispiel
const registries: unknown[] = [new WeakMap()];

if (areWeakMaps(registries)) {
  // registries wird hier automatisch als WeakMap<object, unknown>[] behandelt
  console.log(`Anzahl der WeakMaps: ${registries.length}`);
}
```