# isBoolean

Prüft, ob ein Wert ein boolescher Wert (`true` oder `false`) ist.

## Wofür wird `isBoolean` verwendet?

Die Funktion validiert, ob ein Wert vom Typ `boolean` ist.
Dies ist besonders nützlich, um sicherzustellen, dass Konfigurationen, Flags oder Status-Variablen strikt als `true`
oder `false` vorliegen, anstatt sich auf "truthy" oder "falsy" Werte (wie `1`, `0`, `null` oder `"true"`) zu verlassen.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `boolean`.

## Verhalten

`isBoolean` gibt `true` zurück, wenn der Wert vom Typ `boolean` ist.
In allen anderen Fällen (z. B. Zahlen, Strings oder `null`) wird `false` zurückgegeben.

| Eingabe     | Ausgabe |
|-------------|---------|
| `true`      | `true`  |
| `false`     | `true`  |
| `1`         | `false` |
| `0`         | `false` |
| `"true"`    | `false` |
| `null`      | `false` |
| `undefined` | `false` |

## Verwendung

```ts
import {isBoolean} from "@type-check/guards";

isBoolean(true);    // true
isBoolean(1);       // false

// TypeScript Beispiel
const flag: unknown = false;

if (isBoolean(flag)) {
  // flag wird hier automatisch als boolean behandelt
  const result = !flag;
  console.log(`Der invertierte Status ist: ${result}`);
}
```