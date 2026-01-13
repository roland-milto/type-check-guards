# isSet

Prüft, ob ein Wert eine Instanz von `Set` ist.

## Wofür wird `isSet` verwendet?

Die Funktion validiert, ob ein Wert ein `Set`-Objekt ist.
Sets sind Kollektionen von Werten, in denen jedes Element nur einmal vorkommen kann.
Diese Prüfung stellt sicher, dass Methoden wie `.add()`, `.has()` oder die Eigenschaft `.size` sicher genutzt werden
können.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `Set<unknown>`.

## Verhalten

`isSet` gibt `true` zurück, wenn der Wert eine Instanz von `Set` ist.
Andere Kollektionen (wie `Map`) oder einfache Objekte geben `false` zurück.

| Eingabe              | Ausgabe |
|----------------------|---------|
| `new Set()`          | `true`  |
| `new Set([1, 2, 3])` | `true`  |
| `new Map()`          | `false` |
| `[]` (Array)         | `false` |
| `null`               | `false` |

## Verwendung

```ts
import {isSet} from "@type-check/guards";

isSet(new Set()); // true
isSet([]);        // false

// TypeScript Beispiel
const tags: unknown = new Set(["typescript", "guards"]);

if (isSet(tags)) {
  // tags wird hier automatisch als Set<unknown> behandelt
  console.log(`Anzahl der Tags: ${tags.size}`);
}
```