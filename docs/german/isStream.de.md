# isStream

Prüft, ob ein Wert ein Stream (Node.js oder Web Stream) ist.

## Wofür wird `isStream` verwendet?

Die Funktion validiert, ob ein Wert ein funktionsfähiger Stream ist.
Sie erkennt sowohl klassische Node.js Streams (durch Prüfung auf `.pipe()` und `.on()`) als auch moderne Web Streams (
`ReadableStream`, `WritableStream`).
Dies ist wichtig für die Handhabung von I/O-Operationen und Datenflüssen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `Stream | ReadableStream | WritableStream`.

## Verhalten

`isStream` gibt `true` zurück, wenn der Wert ein Objekt ist, das die notwendigen Stream-Methoden besitzt oder eine
Instanz eines Web-Streams ist.
In allen anderen Fällen (einfache Objekte, Strings, `null`) wird `false` zurückgegeben.

| Eingabe                    | Ausgabe               |
|----------------------------|-----------------------|
| `fs.createReadStream(...)` | `true`                |
| `new ReadableStream()`     | `true`                |
| `new WritableStream()`     | `true`                |
| `{ pipe: () => {} }`       | `false` (fehlt `.on`) |
| `null`                     | `false`               |
| `{}`                       | `false`               |

## Verwendung

```ts
import { isStream } from "@type-check/strict";
import fs from "node:fs";

isStream(fs.createReadStream("test.txt")); // true
isStream({});                              // false

// TypeScript Beispiel
const data: unknown = fs.createReadStream("input.txt");

if (isStream(data)) {
  // data ist hier korrekt typisiert
  data.on("data", (chunk) => console.log(chunk));
}
```