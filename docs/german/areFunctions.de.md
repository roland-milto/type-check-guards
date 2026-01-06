# areFunctions

Prüft, ob alle Werte in einem Array Funktionen sind.

## Wofür wird `areFunctions` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus ausführbaren Funktionen besteht.
Dies ist nützlich für die Validierung von Middleware-Stacks, Listener-Listen oder Task-Queues.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Function[]`.

## Verhalten

`areFunctions` gibt `true` zurück, wenn alle Elemente im Array Funktionen sind.
Sobald ein einzelnes Element keine Funktion ist (z. B. ein String oder `undefined`), wird `false` zurückgegeben.

| Eingabe                     | Ausgabe |
|-----------------------------|---------|
| `[() => {}, function() {}]` | `true`  |
| `[() => {}, null]`          | `false` |
| `[() => {}, "text"]`        | `false` |
| `[]` (leeres Array)         | `false` |

## Verwendung

```ts
import {areFunctions} from "@type-check/guards";

const tasks = [() => 1, () => 2];
areFunctions(tasks); // true

// TypeScript Beispiel
const handlers: unknown[] = [() => "A", () => "B"];

if (areFunctions(handlers)) {
  // handlers wird hier automatisch als Function[] behandelt
  const results = handlers.map(fn => fn());
  console.log(results);
}
```