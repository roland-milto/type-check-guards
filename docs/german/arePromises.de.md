# arePromises

Prüft, ob alle Werte in einem Array `Promises` sind.

## Wofür wird `arePromises` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `Promise`-Objekten besteht.
Dies ist besonders nützlich, bevor man Operationen wie `Promise.all()` oder `Promise.race()` auf ein Array anwendet, um
sicherzustellen, dass jedes Element asynchron verarbeitet werden kann.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `Promise<unknown>[]`.

## Verhalten

`arePromises` gibt `true` zurück, wenn alle Elemente im Array Instanzen von `Promise` sind.
Sobald ein einzelnes Element kein Promise ist, wird `false` zurückgegeben.

| Eingabe                              | Ausgabe |
|--------------------------------------|---------|
| `[Promise.resolve(), new Promise()]` | `true`  |
| `[Promise.resolve(), 123]`           | `false` |
| `[null]`                             | `false` |
| `[]` (leeres Array)                  | `false` |

## Verwendung

```ts
import {arePromises} from "@type-check/guards";

const tasks = [Promise.resolve(1), Promise.resolve(2)];
arePromises(tasks); // true

// TypeScript Beispiel
const queue: unknown[] = [Promise.resolve(), Promise.resolve()];

if (arePromises(queue)) {
  // queue wird hier automatisch als Promise<unknown>[] behandelt
  Promise.all(queue).then(() => console.log("Alle Tasks fertig"));
}
```