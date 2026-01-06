# isNullOrUndefined

Prüft, ob ein Wert entweder `null` oder `undefined` ist.

## Wofür wird `isNullOrUndefined` verwendet?

Die Funktion bietet eine bequeme Möglichkeit, auf das Fehlen eines Wertes zu prüfen.
In JavaScript sind `null` (explizite Leere) und `undefined` (nicht initialisiert) zwei unterschiedliche Typen.
Diese Funktion fasst beide Fälle zusammen, was oft bei der Validierung von optionalen Daten oder API-Antworten benötigt
wird.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `null | undefined`.

## Verhalten

`isNullOrUndefined` gibt `true` zurück, wenn der Wert exakt `null` oder `undefined` ist.
Für alle anderen Werte (einschließlich "falsy" Werten wie `0`, `false` oder `""`) wird `false` zurückgegeben.

| Eingabe     | Ausgabe |
|-------------|---------|
| `null`      | `true`  |
| `undefined` | `true`  |
| `0`         | `false` |
| `""`        | `false` |
| `false`     | `false` |
| `{}`        | `false` |

## Verwendung

```ts
import {isNullOrUndefined} from "@type-check/guards";

isNullOrUndefined(null);      // true
isNullOrUndefined(undefined); // true
isNullOrUndefined(0);         // false

// TypeScript Beispiel
const value: string | null | undefined = null;

if (isNullOrUndefined(value)) {
  // value ist hier automatisch vom Typ 'null | undefined'
  console.log("Kein gültiger Wert vorhanden.");
}
```