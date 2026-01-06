# areObjects

Prüft, ob alle Werte in einem Array echte Objekte sind.

## Wofür wird `areObjects` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus Objekten besteht.
Dies ist besonders nützlich bei der Verarbeitung von Datensätzen aus APIs, bei denen sichergestellt werden muss, dass
jedes Element strukturelle Daten enthält und nicht `null` oder ein Primitiv ist.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `object[]`.

## Verhalten

`areObjects` gibt `true` zurück, wenn alle Elemente im Array Objekte und nicht `null` sind.
Sobald ein Element `null` oder ein Primitiv (String, Nummer, Boolean) ist, wird `false` zurückgegeben.

| Eingabe               | Ausgabe |
|-----------------------|---------|
| `[{}, { a: 1 }]`      | `true`  |
| `[[], new Date()]`    | `true`  |
| `[{}, null]`          | `false` |
| `[{}, "kein-objekt"]` | `false` |
| `[]` (leeres Array)   | `false` |

## Verwendung

```ts
import {areObjects} from "@type-check/guards";

areObjects([{}, { id: 1 }]); // true
areObjects([{}, null]);      // false

// TypeScript Beispiel
const dataSet: unknown[] = [{ x: 10 }, { x: 20 }];

if (areObjects(dataSet)) {
  // dataSet wird hier automatisch als object[] behandelt
  const totalKeys = dataSet.reduce((acc, obj) => acc + Object.keys(obj).length, 0);
  console.log(`Gesamtzahl der Keys: ${totalKeys}`);
}
```