# isBuffer

Prüft, ob ein Wert ein Node.js `Buffer` ist.

## Wofür wird `isBuffer` verwendet?

Die Funktion validiert, ob ein Wert ein Buffer-Objekt zur Verarbeitung von Binärdaten ist.
Dies ist besonders wichtig bei Dateioperationen, Netzwerk-Streaming oder der Arbeit mit kryptografischen Daten in einer
Node.js-Umgebung.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `Buffer`.

## Verhalten

`isBuffer` gibt `true` zurück, wenn der Wert eine Instanz von `Buffer` ist.
In allen anderen Fällen (z. B. `Uint8Array`, Strings oder `null`) wird `false` zurückgegeben.

| Eingabe              | Ausgabe |
|----------------------|---------|
| `Buffer.from("abc")` | `true`  |
| `Buffer.alloc(10)`   | `true`  |
| `new Uint8Array(10)` | `false` |
| `"abc"` (String)     | `false` |
| `null`               | `false` |

## Verwendung

```ts
import {isBuffer} from "@type-check/guards";

isBuffer(Buffer.from("Hallo")); // true
isBuffer("Hallo");              // false

// TypeScript Beispiel
const data: unknown = Buffer.from("Binärdaten");

if (isBuffer(data)) {
  // data wird hier automatisch als Buffer behandelt
  console.log(data.toString("utf-8"));
}
```