# isPromise

Prüft, ob ein Wert ein `Promise` ist.

## Wofür wird `isPromise` verwendet?

Die Funktion stellt sicher, dass ein Wert ein asynchrones Versprechen (Promise) ist.
Dies ist wichtig, um sicherzustellen, dass man `await` nutzen oder `.then()`/`.catch()` aufrufen kann, ohne dass das
Programm abstürzt, falls der Wert kein Promise ist.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `Promise<unknown>`.

## Verhalten

`isPromise` gibt `true` zurück, wenn der Wert eine Instanz der Klasse `Promise` ist.
In allen anderen Fällen (z. B. einfache Objekte, Funktionen oder "Thenables") wird `false` zurückgegeben.

| Eingabe                 | Ausgabe                                       |
|-------------------------|-----------------------------------------------|
| `Promise.resolve()`     | `true`                                        |
| `new Promise(() => {})` | `true`                                        |
| `async () => {}`        | `false` (ist die Funktion, nicht das Promise) |
| `{ then: () => {} }`    | `false` (keine echte Promise-Instanz)         |
| `null`                  | `false`                                       |

## Verwendung

```ts
import { isPromise } from "@type-check/strict";

isPromise(Promise.resolve(42)); // true
isPromise("kein Promise");      // false

// TypeScript Beispiel
const job: unknown = Promise.resolve("Erfolg");

if (isPromise(job)) {
  // job wird hier automatisch als Promise<unknown> behandelt
  job.then(console.log);
}
```