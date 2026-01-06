# areValidDates

Prüft, ob alle Werte in einem Array gültige `Date`-Objekte sind.

## Wofür wird `areValidDates` verwendet?

Diese Funktion validiert eine Liste von Werten darauf, ob sie ausschließlich aus funktionsfähigen `Date`-Instanzen
besteht.
Dies ist besonders nützlich bei der Verarbeitung von Zeitreihen, Terminkalendern oder Log-Daten.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Date[]`.

## Verhalten

`areValidDates` gibt `true` zurück, wenn alle Elemente im Array gültige `Date`-Objekte sind.
Sobald ein einzelnes Element kein gültiges Datum ist (z. B. ein String, eine Zahl oder ein "Invalid Date"), wird `false`
zurückgegeben.

| Eingabe                                | Ausgabe |
|----------------------------------------|---------|
| `[new Date(), new Date("2024-01-01")]` | `true`  |
| `[new Date(), "2024-01-01"]`           | `false` |
| `[new Date(), new Date("abc")]`        | `false` |
| `[]` (leeres Array)                    | `false` |

## Verwendung

```ts
import {areValidDates} from "@type-check/guards";

const dates = [new Date(), new Date("2025-12-22")];
areValidDates(dates); // true

// TypeScript Beispiel
const schedule: unknown[] = [new Date(), new Date()];

if (areValidDates(schedule)) {
  // schedule wird hier automatisch als Date[] behandelt
  const sorted = schedule.sort((a, b) => a.getTime() - b.getTime());
  console.log(sorted);
}
```