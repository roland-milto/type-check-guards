# isOneOfType

Prüft, ob ein Wert mindestens einem der angegebenen Datentypen entspricht.

## Wofür wird `isOneOfType` verwendet?

Diese Funktion ist ideal für die Validierung von Werten, die mehrere Typen annehmen können (Union Types).
Sie ermöglicht es, mit einem einzigen Aufruf zu prüfen, ob ein Wert beispielsweise entweder ein `string` oder ein
`number` ist, ohne mehrere einzelne Prüfungen manuell verketten zu müssen.

> **Wichtiger Hinweis:**
> Alle Typ-Bezeichner im `types`-Array müssen **kleingeschrieben** sein (z. B. `"nan"` statt `"NaN"`).

## Verhalten

`isOneOfType` gibt `true` zurück, sobald der Wert einem der im Array definierten Typen entspricht (OR-Verknüpfung).
Wenn keiner der Typen zutrifft, wird `false` zurückgegeben.

| Eingabe    | Typ-Array (`DataTypes[]`) | Ausgabe |
|------------|---------------------------|---------|
| `"Roland"` | `["string", "number"]`    | `true`  |
| `42`       | `["string", "number"]`    | `true`  |
| `true`     | `["string", "number"]`    | `false` |
| `null`     | `["null", "undefined"]`   | `true`  |
| `NaN`      | `["nan", "number"]`       | `true`  |

## Verwendung

```ts
import {isOneOfType} from "@type-check/guards";

isOneOfType(42, ["number", "string"]); // true
isOneOfType(true, ["number", "string"]); // false

// TypeScript Beispiel
const id: unknown = "Roland_Milto";

if (isOneOfType(id, ["string", "number"])) {
  // id wird hier als einer der erlaubten Typen behandelt
  console.log(`Gültige ID: ${id}`);
}
```