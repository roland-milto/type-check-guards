# areNull

Prüft, ob alle Werte in einem Array `null` sind.

## Wofür wird `areNull` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `null`-Werten besteht.
Dies ist nützlich, um Datenstrukturen zu prüfen, die zwar initialisiert, aber noch nicht mit tatsächlichen Objekten oder
Werten befüllt wurden.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `null[]`.

## Verhalten

`areNull` gibt `true` zurück, wenn alle Elemente im Array exakt `null` sind.
Sobald ein einzelnes Element nicht `null` ist (z. B. `undefined` oder ein Objekt), wird `false` zurückgegeben.

| Eingabe              | Ausgabe |
|----------------------|---------|
| `[null, null, null]` | `true`  |
| `[null, undefined]`  | `false` |
| `[null, 0]`          | `false` |
| `[]` (leeres Array)  | `false` |

## Verwendung

```ts
import {areNull} from "@type-check/guards";

areNull([null, null]); // true
areNull([null, 1]);    // false

// TypeScript Beispiel
const slots: unknown[] = [null, null];

if (areNull(slots)) {
  // slots wird hier automatisch als null[] behandelt
  console.log(`Array besteht aus ${slots.length} leeren Slots.`);
}
```