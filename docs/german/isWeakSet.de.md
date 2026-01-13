# isWeakSet

Prüft, ob ein Wert eine Instanz von `WeakSet` ist.

## Wofür wird `isWeakSet` verwendet?

Die Funktion validiert, ob ein Wert ein `WeakSet`-Objekt ist.
Im Gegensatz zu regulären `Sets` hält ein `WeakSet` nur schwache Referenzen auf Objekte.
Das bedeutet, dass Objekte im `WeakSet` vom Garbage Collector entfernt werden können, wenn keine andere Referenz mehr
auf sie existiert.
Diese Prüfung stellt sicher, dass Methoden wie `.add()` oder `.has()` sicher aufgerufen werden können.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `WeakSet<object>`.

## Verhalten

`isWeakSet` gibt `true` zurück, wenn der Wert eine Instanz von `WeakSet` ist.
Andere Kollektionen (wie `Set` oder `Map`) oder einfache Objekte geben `false` zurück.

| Eingabe         | Ausgabe |
|-----------------|---------|
| `new WeakSet()` | `true`  |
| `new Set()`     | `false` |
| `{}`            | `false` |
| `null`          | `false` |

## Verwendung

```ts
import {isWeakSet} from "@type-check/guards";

isWeakSet(new WeakSet()); // true
isWeakSet(new Set());     // false

// TypeScript Beispiel
const tracking: unknown = new WeakSet();

if (isWeakSet(tracking)) {
  // tracking wird hier automatisch als WeakSet<object> behandelt
  const obj = {id: 1};
  tracking.add(obj);
  console.log(tracking.has(obj));
}
```