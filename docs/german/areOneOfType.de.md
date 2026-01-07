# areOneOfType

Prüft, ob alle Werte in einem Array mindestens einem der angegebenen Datentypen entsprechen.

## Wofür wird `areOneOfType` verwendet?

Diese Funktion validiert eine Kollektion von Werten gegen eine Menge erlaubter Typen.
Sie ist besonders nützlich für die Prüfung von gemischten Arrays, wie z. B. einer Liste von IDs, die sowohl aus
Zeichenketten als auch aus Zahlen bestehen dürfen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und validiert, dass jedes Element des Arrays einem der Zieltypen entspricht.

## Verhalten

`areOneOfType` gibt `true` zurück, wenn jedes einzelne Element im Array mindestens einem der angegebenen Typen
entspricht.
Ein leeres Array gibt `false` zurück.
Sobald auch nur ein Element keinem der Typen entspricht, wird `false` zurückgegeben.

| Eingabe             | Typ-Array (`DataTypes[]`) | Ausgabe |
|---------------------|---------------------------|---------|
| `["a", 1, "b"]`     | `["string", "number"]`    | `true`  |
| `[1, true]`         | `["number", "string"]`    | `false` |
| `[null, undefined]` | `["null", "undefined"]`   | `true`  |
| `[]` (leeres Array) | `["string"]`              | `false` |

## Verwendung

```ts
import {areOneOfType} from "@type-check/guards";

areOneOfType(["ts", 42], ["string", "number"]); // true
areOneOfType([1, true], ["number", "string"]);  // false

// TypeScript Beispiel
const mixedData: unknown[] = ["User1", 101, "User2"];

if (areOneOfType(mixedData, ["string", "number"])) {
  // Alle Elemente im Array sind entweder string oder number
  mixedData.forEach(item => console.log(typeof item));
}
```