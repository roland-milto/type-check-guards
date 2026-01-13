# isMap

Prüft, ob ein Wert eine Instanz von `Map` ist.

## Wofür wird `isMap` verwendet?

Die Funktion validiert, ob ein Wert ein `Map`-Objekt ist.
Maps sind spezialisierte Key-Value-Speicher, die im Gegensatz zu einfachen Objekten beliebige Datentypen als Schlüssel
erlauben und die Einfügereihenfolge beibehalten.
Diese Prüfung stellt sicher, dass Methoden wie `.set()`, `.get()` oder `.has()` sicher aufgerufen werden können.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `Map<unknown, unknown>`.

## Verhalten

`isMap` gibt `true` zurück, wenn der Wert eine Instanz von `Map` ist.
Andere Kollektionen (wie `Set`) oder einfache Objekte geben `false` zurück.

| Eingabe               | Ausgabe |
|-----------------------|---------|
| `new Map()`           | `true`  |
| `new Map([[1, "a"]])` | `true`  |
| `new Set()`           | `false` |
| `{}`                  | `false` |
| `null`                | `false` |

## Verwendung

```ts
import {isMap} from "@type-check/guards";

isMap(new Map()); // true
isMap({});        // false

// TypeScript Beispiel
const registry: unknown = new Map();

if (isMap(registry)) {
  // registry wird hier automatisch als Map behandelt
  registry.set("id", 123);
  console.log(registry.get("id"));
}
```