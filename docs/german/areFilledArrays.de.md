# areFilledArrays

Prüft, ob ein Wert ein Array von nicht-leeren Arrays ist.

## Wofür wird `areFilledArrays` verwendet?

Diese Funktion validiert zweidimensionale Datenstrukturen (wie Matrizen oder Tabellen-Daten) darauf, ob sowohl die
Hauptstruktur als auch jede Unterstruktur mindestens ein Element enthält.
Dies verhindert Fehler bei tiefergehenden Datenzugriffen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `unknown[][]`.

## Verhalten

`areFilledArrays` gibt `true` zurück, wenn der Hauptwert ein gefülltes Array ist und jedes seiner Elemente ebenfalls ein
gefülltes Array darstellt.

| Eingabe             | Ausgabe                              |
|---------------------|--------------------------------------|
| `[[1], [2, 3]]`     | `true`                               |
| `[[1], []]`         | `false` (enthält leeres Array)       |
| `[]` (leeres Array) | `false`                              |
| `[1, 2]`            | `false` (Elemente sind keine Arrays) |

## Verwendung

```ts
import {areFilledArrays} from "@type-check/guards";

areFilledArrays([[1], [2]]); // true
areFilledArrays([[1], []]);  // false

// TypeScript Beispiel
const table: unknown = [["Header1"], ["Data1"]];

if (areFilledArrays(table)) {
  // table wird hier automatisch als unknown[][] behandelt
  console.log(`Anzahl der Zeilen: ${table.length}`);
}
```