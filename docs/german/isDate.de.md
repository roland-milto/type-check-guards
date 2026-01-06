# isDate

Prüft, ob ein Wert eine Instanz von `Date` ist.

## Wofür wird `isDate` verwendet?

Die Funktion validiert, ob ein Wert vom Typ `Date` ist.
Dies ist nützlich, um sicherzustellen, dass ein Objekt Datums-spezifische Methoden wie `.getTime()`, `.toISOString()`
oder `.getFullYear()` besitzt, bevor diese aufgerufen werden.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `Date`.

## Verhalten

`isDate` gibt `true` zurück, wenn der Wert eine Instanz der Klasse `Date` ist.
In allen anderen Fällen (z. B. Zeitstempel als Zahl, Datums-Strings oder `null`) wird `false` zurückgegeben.

> **Hinweis:**
> Auch ein "Invalid Date" (z. B. `new Date("abc")`) gibt `true` zurück, da es technisch eine `Date`-Instanz ist.
> Verwenden sie `isValidDate`, wenn Sie prüfen möchten, ob ein Datum gültig ist.

| Eingabe                  | Ausgabe |
|--------------------------|---------|
| `new Date()`             | `true`  |
| `new Date("2026-01-01")` | `true`  |
| `new Date("ungültig")`   | `true`  |
| `"2026-01-01"` (String)  | `false` |
| `Date.now()` (Zahl)      | `false` |
| `null`                   | `false` |

## Verwendung

```ts
import {isDate} from "@type-check/guards";

isDate(new Date());    // true
isDate("2026-01-01");  // false

// TypeScript Beispiel
const timestamp: unknown = new Date();

if (isDate(timestamp)) {
  // timestamp wird hier automatisch als Date behandelt
  console.log(timestamp.getFullYear());
}
```