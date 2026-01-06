# areOfType

Prüft, ob alle Werte in einem Array einem bestimmten Datentyp entsprechen.

## Wofür wird `areOfType` verwendet?

Diese Funktion validiert eine Liste darauf, ob jedes einzelne Element dem spezifizierten Datentyp entspricht.
Dies ist ideal für die Prüfung von homogenen Kollektionen, wie z. B. Arrays, die nur aus Datums-Objekten, regulären
Ausdrücken oder speziellen Objekten bestehen sollen.

## Verhalten

`areOfType` gibt `true` zurück, wenn alle Elemente im Array dem Zieltyp entsprechen.
Sobald ein einzelnes Element nicht dem Typ entspricht oder der erste Parameter kein Array ist, wird `false`
zurückgegeben.

| Eingabe             | Typ-Parameter | Ausgabe |
|---------------------|---------------|---------|
| `["a", "b", "c"]`   | `"string"`    | `true`  |
| `[1, 2, "3"]`       | `"number"`    | `false` |
| `[new Date()]`      | `"date"`      | `true`  |
| `[]` (leeres Array) | `"string"`    | `false` |

## Verwendung

```ts
import { areOfType } from "@type-check/strict";

areOfType(["ts", "js"], "string"); // true
areOfType([1, "2"], "number");     // false

// TypeScript Beispiel
const rawData: unknown[] = [new RegExp("abc"), /123/];

if (areOfType(rawData, "regexp")) {
  // Alle Elemente entsprechen dem Typ 'regexp'
  const allTest = rawData.every(re => re.test("abc123"));
  console.log(`Validierung: ${allTest}`);
}
```