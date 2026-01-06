# areStreams

Prüft, ob alle Werte in einem Array Streams sind.

## Wofür wird `areStreams` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus Stream-Objekten besteht.
Dies ist hilfreich bei der Orchestrierung mehrerer Datenquellen oder beim Aufbau komplexer Stream-Pipelines.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Stream[]`.

## Verhalten

`areStreams` gibt `true` zurück, wenn alle Elemente im Array gültige Streams sind.
Sobald ein Element kein Stream ist (z. B. ein Puffer, ein String oder ein einfaches Objekt), wird `false` zurückgegeben.

| Eingabe                    | Ausgabe |
|----------------------------|---------|
| `[streamA, streamB]`       | `true`  |
| `[streamA, "kein-stream"]` | `false` |
| `[null]`                   | `false` |
| `[]` (leeres Array)        | `false` |

## Verwendung

```ts
import { areStreams } from "@type-check/strict";

areStreams([stream1, stream2]); // true

// TypeScript Beispiel
const inputs: unknown[] = [stream1, stream2];

if (areStreams(inputs)) {
  // inputs wird hier automatisch als Stream[] behandelt
  inputs.forEach(s => s.resume());
}
```