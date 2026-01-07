# isTrue

Prüft, ob ein Wert strikt gleich `true` ist.

## Wofür wird `isTrue` verwendet?

Die Funktion validiert, ob ein Wert exakt den booleschen Wert `true` besitzt.
Dies ist wichtig für strikte Logikprüfungen, bei denen "truthy" Werte wie `1`, `"true"` oder gefüllte Objekte explizit
nicht als gültig anerkannt werden sollen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf den literalen Wert `true`.

## Verhalten

`isTrue` gibt nur dann `true` zurück, wenn der Wert vom Typ `boolean` und gleich `true` ist.
Alle anderen Werte (einschließlich `1`, `"true"` oder `false`) geben `false` zurück.

| Eingabe  | Ausgabe |
|----------|---------|
| `true`   | `true`  |
| `false`  | `false` |
| `1`      | `false` |
| `"true"` | `false` |
| `[]`     | `false` |
| `null`   | `false` |

## Verwendung

```ts
import {isTrue} from "@type-check/guards";

isTrue(true);    // true
isTrue(1);       // false
isTrue("true");  // false

// TypeScript Beispiel
const isActive: unknown = true;

if (isTrue(isActive)) {
  // isActive ist hier vom Typ 'true'
  console.log("Status ist aktiv.");
}
```