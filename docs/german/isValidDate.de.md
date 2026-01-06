# isValidDate

Prüft, ob ein Wert ein gültiges `Date`-Objekt ist.

## Wofür wird `isValidDate` verwendet?

In JavaScript kann ein Objekt zwar eine Instanz von `Date` sein, aber dennoch einen ungültigen Zeitpunkt
repräsentieren (ein sogenanntes "Invalid Date", z. B. durch `new Date("abc")`).
Diese Funktion stellt sicher, dass das Objekt existiert **und** einen tatsächlichen Zeitpunkt darstellt.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `Date`.

## Verhalten

`isValidDate` gibt `true` zurück, wenn der Wert eine Instanz von `Date` ist und einen gültigen Zeitstempel besitzt.
In allen anderen Fällen (ungültige Daten, Strings, Zahlen oder `null`) wird `false` zurückgegeben.

| Eingabe                  | Ausgabe |
|--------------------------|---------|
| `new Date()`             | `true`  |
| `new Date("2025-12-22")` | `true`  |
| `new Date("ungültig")`   | `false` |
| `"2025-12-22"` (String)  | `false` |
| `Date.now()` (Number)    | `false` |
| `null`                   | `false` |

## Verwendung

```ts
import { isValidDate } from "@type-check/strict";

isValidDate(new Date());             // true
isValidDate(new Date("invalid"));    // false
isValidDate("2025-12-22");           // false (muss ein Date-Objekt sein)

// TypeScript Beispiel
const timestamp: unknown = new Date();

if (isValidDate(timestamp)) {
  // timestamp wird hier automatisch als Date behandelt
  console.log(timestamp.toISOString());
}
```