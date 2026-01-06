# areDates

Prüft, ob alle Werte in einem Array `Date`-Objekte sind.

## Wofür wird `areDates` verwendet?

Die Funktion validiert eine Liste darauf, ob sie ausschließlich aus `Date`-Instanzen besteht.
Dies ist hilfreich bei der Verarbeitung von Zeitreihen oder Terminkalendern, um sicherzustellen, dass jedes Element ein
gültiges Datums-Objekt ist.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Date[]`.

## Verhalten

`areDates` gibt `true` zurück, wenn jedes Element im Array eine Instanz von `Date` ist.
Sobald ein Element ein String, eine Zahl oder ein anderer Typ ist, wird `false` zurückgegeben.
Ein leeres Array gibt ebenfalls `false` zurück.

| Eingabe                      | Ausgabe |
|------------------------------|---------|
| `[new Date(), new Date()]`   | `true`  |
| `[new Date(), "2026-01-01"]` | `false` |
| `[new Date(), 1736155555]`   | `false` |
| `[]` (leeres Array)          | `false` |
| `[null]`                     | `false` |

## Verwendung

```ts
import {areDates} from "@type-check/strict";

areDates([new Date(), new Date()]); // true
areDates([new Date(), "2026"]);     // false

// TypeScript Beispiel
const events: unknown[] = [new Date(), new Date()];

if (areDates(events)) {
  // events wird hier automatisch als Date[] behandelt
  const years = events.map(d => d.getFullYear());
  console.log(years);
}
```