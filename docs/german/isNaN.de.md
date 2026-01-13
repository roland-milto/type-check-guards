# isNaN

Prüft, ob ein Wert exakt `NaN` (Not-a-Number) ist.

## Wofür wird `isNaN` verwendet?

Die Funktion identifiziert ungültige numerische Ergebnisse.

**Wichtiger Unterschied zum globalen JavaScript `isNaN()`:**
Die eingebaute globale Funktion `isNaN()` führt eine Typumwandlung durch, was zu verwirrenden Ergebnissen führt (z. B.
liefert `isNaN("Hallo")` den Wert `true`).
Diese `@type-check/guards` Version ist **strikt**: Sie gibt nur dann `true` zurück, wenn der Wert tatsächlich vom Typ
`number` und gleichzeitig `NaN` ist.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ innerhalb von Blöcken auf `number`.

## Verhalten

| Eingabe     | Ausgabe | Erklärung                        |
|-------------|---------|----------------------------------|
| `NaN`       | `true`  | Korrekte Identifizierung         |
| `0 / 0`     | `true`  | Mathematisch ungültiges Ergebnis |
| `"Text"`    | `false` | **Sicher:** Keine Typumwandlung  |
| `undefined` | `false` | **Sicher:** Keine Typumwandlung  |
| `123`       | `false` | Valide Zahl                      |

## Verwendung

```ts
import {isNaN} from "@type-check/guards";

isNaN(NaN);          // true
isNaN("keine zahl"); // false (Globales isNaN() würde true liefern!)

// TypeScript Beispiel
const result: unknown = Number("abc"); // ergibt NaN

if (isNaN(result)) {
  // result wird hier als number behandelt
  console.log("Die Berechnung hat kein gültiges Ergebnis geliefert.");
}
```