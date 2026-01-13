# isWeakMap

Prüft, ob ein Wert eine Instanz von `WeakMap` ist.

## Wofür wird `isWeakMap` verwendet?

Die Funktion validiert, ob ein Wert ein `WeakMap`-Objekt ist.
Im Gegensatz zu regulären `Maps` müssen die Schlüssel einer `WeakMap` Objekte sein und werden nur schwach referenziert.
Dies ermöglicht es dem Garbage Collector, Objekte zu entfernen, wenn sie nicht mehr anderweitig verwendet werden.
Diese Prüfung stellt sicher, dass Methoden wie `.set()`, `.get()` oder `.has()` sicher aufgerufen werden können.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `WeakMap<object, unknown>`.

## Verhalten

`isWeakMap` gibt `true` zurück, wenn der Wert eine Instanz von `WeakMap` ist.
Andere Kollektionen (wie `Map` oder `WeakSet`) oder einfache Objekte geben `false` zurück.

| Eingabe         | Ausgabe |
|-----------------|---------|
| `new WeakMap()` | `true`  |
| `new Map()`     | `false` |
| `{}`            | `false` |
| `null`          | `false` |

## Verwendung

```ts
import {isWeakMap} from "@type-check/guards";

isWeakMap(new WeakMap()); // true
isWeakMap(new Map());     // false

// TypeScript Beispiel
const cache: unknown = new WeakMap();

if (isWeakMap(cache)) {
  // cache wird hier automatisch als WeakMap<object, unknown> behandelt
  const meta = {version: 1};
  cache.set(meta, "aktiv");
  console.log(cache.get(meta));
}
```