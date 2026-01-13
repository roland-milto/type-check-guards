# isEqual

Prüft, ob zwei Werte strikt identisch sind.

## Wofür wird `isEqual` verwendet?

Die Funktion führt einen strikten Vergleich (`===`) zwischen zwei Werten durch.
Dies ist nützlich, um sicherzustellen, dass ein Wert exakt einer Vorgabe entspricht,
ohne dass JavaScript eine implizite Typumwandlung vornimmt (z. B. wird `0` nicht als `false` gewertet).

> **Hinweis für TypeScript-Nutzer:**
> Wenn der zweite Parameter ein literaler Wert ist, agiert diese Funktion als Type Guard und verengt den Typ des ersten
> Wertes automatisch.

## Verhalten

`isEqual` gibt `true` zurück, wenn beide Werte denselben Typ und denselben Inhalt haben.

| Wert 1 | Wert 2      | Ausgabe                           |
|--------|-------------|-----------------------------------|
| `10`   | `10`        | `true`                            |
| `"A"`  | `"A"`       | `true`                            |
| `true` | `true`      | `true`                            |
| `10`   | `"10"`      | `false`                           |
| `null` | `undefined` | `false`                           |
| `{}`   | `{}`        | `false` (verschiedene Referenzen) |

## Verwendung

```ts
import {isEqual} from "@type-check/guards";

isEqual(1337, 1337);   // true
isEqual(1337, "1337"); // false

// TypeScript Beispiel
const input: unknown = "status_active";

if (isEqual(input, "status_active")) {
  // input wird hier automatisch als der literale String "status_active" behandelt
  console.log("Der Status ist korrekt.");
}
```