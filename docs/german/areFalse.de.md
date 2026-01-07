# areFalse

Prüft, ob alle Werte in einem Array strikt gleich `false` sind.

## Wofür wird `areFalse` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus dem booleschen Wert `false` besteht.
Dies ist nützlich, um sicherzustellen, dass in einer Reihe von Status-Flags oder Validierungsergebnissen kein einziges
Element den Wert `true` (oder einen anderen Typ) besitzt.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `false[]`.

## Verhalten

`areFalse` gibt `true` zurück, wenn jedes einzelne Element im Array strikt gleich `false` ist.
Ein leeres Array gibt `false` zurück.
Sobald auch nur ein Element nicht `false` ist (z. B. `true`, `0` oder `undefined`), wird `false` zurückgegeben.

| Eingabe                 | Ausgabe |
|-------------------------|---------|
| `[false, false, false]` | `true`  |
| `[false, true]`         | `false` |
| `[false, 0]`            | `false` |
| `[]` (leeres Array)     | `false` |
| `[null]`                | `false` |

## Verwendung

```ts
import {areFalse} from "@type-check/guards";

areFalse([false, false]); // true
areFalse([false, 0]);     // false

// TypeScript Beispiel
const errorFlags: unknown[] = [false, false];

if (areFalse(errorFlags)) {
  // errorFlags wird hier automatisch als false[] behandelt
  console.log("Alle Fehlermarker sind deaktiviert.");
}
```