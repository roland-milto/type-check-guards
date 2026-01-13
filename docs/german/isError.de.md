# isError

Prüft, ob ein Wert eine Instanz von `Error` ist.

## Wofür wird `isError` verwendet?

In JavaScript kann technisch gesehen jeder Wert geworfen (`throw`) werden.
Diese Funktion stellt sicher, dass es sich bei einem Objekt tatsächlich um eine Instanz der `Error`-Klasse (oder deren
Unterklassen wie `TypeError`, `SyntaxError` etc.) handelt.
Dies ist wichtig, um sicher auf Eigenschaften wie `.message` oder `.stack` zugreifen zu können.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `Error`.

## Verhalten

`isError` gibt `true` zurück, wenn der Wert eine Instanz von `Error` ist.
Einfache Objekte, die wie Fehler aussehen, oder Strings geben `false` zurück.

| Eingabe                      | Ausgabe |
|------------------------------|---------|
| `new Error("Fehler")`        | `true`  |
| `new TypeError("Typfehler")` | `true`  |
| `{ message: "Fehler" }`      | `false` |
| `"Ein Fehler ist passiert"`  | `false` |
| `null`                       | `false` |

## Verwendung

```ts
import {isError} from "@type-check/guards";

isError(new Error()); // true
isError("Error");     // false

// TypeScript Beispiel
try {
  // Irgendeine Logik
} catch (err: unknown) {
  if (isError(err)) {
    // err wird hier automatisch als Error behandelt
    console.error(err.message);
  }
}
```