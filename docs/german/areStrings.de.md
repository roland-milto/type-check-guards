# areStrings

Prüft, ob alle Werte in einem Array vom Typ `string` sind.

## Wofür wird `areStrings` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus Zeichenketten besteht.
Dies ist nützlich für die Prüfung von Namenslisten, Schlagworten (Tags) oder Konfigurations-Arrays.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `string[]`.

## Verhalten

`areStrings` gibt `true` zurück, wenn alle Elemente im Array vom Typ `string` sind.
Sobald ein einzelnes Element kein String ist (z. B. eine Zahl, ein Objekt oder `null`), wird `false` zurückgegeben.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `["a", "b", "c"]`   | `true`  |
| `["a", 1, "c"]`     | `false` |
| `["a", null]`       | `false` |
| `[]` (leeres Array) | `false` |

## Verwendung

```ts
import { areStrings } from "@type-check/strict";

areStrings(["Roland", "Milto"]); // true
areStrings(["Code", 404]);       // false

// TypeScript Beispiel
const tags: unknown[] = ["ts", "js", "web"];

if (areStrings(tags)) {
  // tags wird hier automatisch als string[] behandelt
  const upperTags = tags.map(t => t.toUpperCase());
  console.log(upperTags);
}
```