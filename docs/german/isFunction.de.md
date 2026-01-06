# isFunction

Prüft, ob ein Wert eine Funktion ist.

## Wofür wird `isFunction` verwendet?

Die Funktion stellt sicher, dass ein Wert ausführbar ist.
Dies ist essenziell bei der Arbeit mit Callbacks, Event-Handlern oder beim Implementieren von Plugin-Systemen, um
sicherzustellen, dass der Aufruf des Wertes keine Laufzeitfehler verursacht.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf eine generische Funktionssignatur.

## Verhalten

`isFunction` gibt `true` zurück, wenn der Wert vom Typ `function` ist.
Dies schließt Pfeilfunktionen (Arrow Functions), Klassen und Standard-Funktionen ein.
In allen anderen Fällen wird `false` zurückgegeben.

| Eingabe         | Ausgabe |
|-----------------|---------|
| `() => {}`      | `true`  |
| `function() {}` | `true`  |
| `class A {}`    | `true`  |
| `Math.sin`      | `true`  |
| `null`          | `false` |
| `{}`            | `false` |

## Verwendung

```ts
import { isFunction } from "@type-check/strict";

isFunction(() => console.log("Hi")); // true
isFunction("keine Funktion");        // false

// TypeScript Beispiel
const callback: unknown = () => "fertig";

if (isFunction(callback)) {
  // callback wird hier automatisch als Funktion behandelt
  console.log(callback());
}
```