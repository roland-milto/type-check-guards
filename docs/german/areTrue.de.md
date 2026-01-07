# areTrue

Prüft, ob alle Werte in einem Array strikt gleich `true` sind.

## Wofür wird `areTrue` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus dem booleschen Wert `true` besteht.
Dies ist hilfreich, um sicherzustellen, dass eine Reihe von Bedingungen, Prüfungen oder Berechtigungen ausnahmslos
erfüllt wurden.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `true[]`.

## Verhalten

`areTrue` gibt `true` zurück, wenn jedes einzelne Element im Array strikt gleich `true` ist.
Ein leeres Array gibt `false` zurück.
Sobald auch nur ein Element nicht `true` ist (z. B. `false`, `1` oder `null`), wird `false` zurückgegeben.

| Eingabe              | Ausgabe |
|----------------------|---------|
| `[true, true, true]` | `true`  |
| `[true, false]`      | `false` |
| `[true, 1]`          | `false` |
| `[]` (leeres Array)  | `false` |
| `[null]`             | `false` |

## Verwendung

```ts
import {areTrue} from "@type-check/guards";

areTrue([true, true]);  // true
areTrue([true, false]); // false

// TypeScript Beispiel
const checks: unknown[] = [true, true, true];

if (areTrue(checks)) {
  // checks wird hier automatisch als true[] behandelt
  console.log("Alle Prüfungen erfolgreich bestanden.");
}
```