# areBuffers

Prüft, ob alle Werte in einem Array Node.js `Buffer` sind.

## Wofür wird `areBuffers` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus Buffer-Objekten besteht.
Dies ist hilfreich, um sicherzustellen, dass eine Sammlung von Datenpaketen oder Datei-Chunks bereit für
Binäroperationen ist.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Buffer[]`.

## Verhalten

`areBuffers` gibt `true` zurück, wenn jedes Element im Array ein valider `Buffer` ist.
Sobald ein Element kein Buffer ist (z. B. ein String oder ein einfaches Array), wird `false` zurückgegeben.
Ein leeres Array gibt ebenfalls `false` zurück.

| Eingabe                               | Ausgabe |
|---------------------------------------|---------|
| `[Buffer.alloc(1), Buffer.alloc(2)]`  | `true`  |
| `[Buffer.alloc(1), "kein-buffer"]`    | `false` |
| `[Buffer.alloc(1), new Uint8Array()]` | `false` |
| `[]` (leeres Array)                   | `false` |
| `[null]`                              | `false` |

## Verwendung

```ts
import { areBuffers } from "@type-check/strict";

areBuffers([Buffer.from("A"), Buffer.from("B")]); // true
areBuffers([Buffer.from("A"), "B"]);              // false

// TypeScript Beispiel
const chunks: unknown[] = [Buffer.from("Teil 1"), Buffer.from("Teil 2")];

if (areBuffers(chunks)) {
  // chunks wird hier automatisch als Buffer[] behandelt
  const totalLength = chunks.reduce((acc, buf) => acc + buf.length, 0);
  console.log(`Gesamtlänge: ${totalLength} Bytes`);
}
```