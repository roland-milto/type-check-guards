# isPlainObject

Prüft, ob ein Wert ein einfaches Objekt (Plain Object) ist.

## Wofür wird `isPlainObject` verwendet?

Ein "Plain Object" ist ein Objekt, das direkt durch `{}` oder `new Object()` erstellt wurde.
Diese Funktion unterscheidet solche Objekte von speziellen Objekttypen wie Arrays, Datums-Objekten oder Instanzen von
Klassen.
Dies ist besonders wichtig bei der Arbeit mit Konfigurationsdateien oder JSON-Daten.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `Record<string, unknown>`.

## Verhalten

`isPlainObject` gibt `true` zurück, wenn der interne `[[Class]]`-Tag des Wertes `[object Object]` ist.

| Eingabe      | Ausgabe |
|--------------|---------|
| `{}`         | `true`  |
| `{ a: 1 }`   | `true`  |
| `[]` (Array) | `false` |
| `new Date()` | `false` |
| `null`       | `false` |
| `Math`       | `false` |

## Verwendung

```ts
import { isPlainObject } from "@type-check/strict";

isPlainObject({ name: "WebStorm" }); // true
isPlainObject([1, 2, 3]);            // false

// TypeScript Beispiel
const config: unknown = { mode: "dark" };

if (isPlainObject(config)) {
  // config wird hier automatisch als Record<string, unknown> behandelt
  console.log(config["mode"]);
}
```