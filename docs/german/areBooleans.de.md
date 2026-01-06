# areBooleans

Prüft, ob alle Werte in einem Array boolesche Werte sind.

## Wofür wird `areBooleans` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `true` oder `false` besteht.
Dies ist hilfreich beim Validieren von Checkbox-Listen, Berechtigungs-Arrays oder Ergebnissen aus Massenoperationen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `boolean[]`.

## Verhalten

`areBooleans` gibt `true` zurück, wenn alle Elemente im Array vom Typ `boolean` sind.
Sobald ein einzelnes Element kein boolescher Wert ist (z. B. eine Zahl oder ein String), wird `false` zurückgegeben.

| Eingabe               | Ausgabe |
|-----------------------|---------|
| `[true, false, true]` | `true`  |
| `[true, 1]`           | `false` |
| `[false, "false"]`    | `false` |
| `[]` (leeres Array)   | `false` |
| `[null]`              | `false` |

## Verwendung

```ts
import { areBooleans } from "@type-check/strict";

areBooleans([true, false]); // true
areBooleans([true, 0]);     // false

// TypeScript Beispiel
const settings: unknown[] = [true, false, true];

if (areBooleans(settings)) {
  // settings wird hier automatisch als boolean[] behandelt
  const allEnabled = settings.every(s => s === true);
  console.log(`Alle Optionen aktiv: ${allEnabled}`);
}
```