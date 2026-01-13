# areErrors

Prüft, ob ein Wert ein nicht-leeres Array von `Error`-Objekten ist.

## Wofür wird `areErrors` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus funktionsfähigen Fehler-Objekten besteht.
Dies ist besonders nützlich, wenn mehrere Validierungsfehler gesammelt wurden oder wenn asynchrone Operationen eine
Liste von Fehlern zurückgeben.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Error[]`.

## Verhalten

`areErrors` gibt `true` zurück, wenn der Hauptwert ein gefülltes Array ist und jedes seiner Elemente eine Instanz von
`Error` darstellt.
Ein leeres Array gibt `false` zurück.

| Eingabe                          | Ausgabe |
|----------------------------------|---------|
| `[new Error(), new TypeError()]` | `true`  |
| `[new Error(), "kein fehler"]`   | `false` |
| `[]` (leeres Array)              | `false` |
| `[null]`                         | `false` |

## Verwendung

```ts
import {areErrors} from "@type-check/guards";

areErrors([new Error("A"), new Error("B")]); // true
areErrors([new Error("A"), 123]);             // false

// TypeScript Beispiel
const results: unknown[] = [new Error("Erster Fehler")];

if (areErrors(results)) {
  // results wird hier automatisch als Error[] behandelt
  results.forEach(err => console.log(err.stack));
}
```