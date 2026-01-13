# areEqual

Prüft, ob alle Werte in einem Array strikt identisch mit einem Vergleichswert sind.

## Wofür wird `areEqual` verwendet?

Diese Funktion validiert eine Liste darauf, ob jedes einzelne Element exakt dem angegebenen Vergleichswert entspricht.
Dies ist hilfreich, um sicherzustellen, dass beispielsweise alle Status-Flags in einer Liste einheitlich gesetzt sind.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays auf den Typ des Vergleichswertes.

## Verhalten

`areEqual` gibt `true` zurück, wenn jedes Element im Array strikt identisch (`===`) mit dem zweiten Parameter ist.
Ein leeres Array gibt `false` zurück.
Sobald auch nur ein Element abweicht, wird `false` zurückgegeben.

| Array               | Vergleichswert | Ausgabe |
|---------------------|----------------|---------|
| `[1, 1, 1]`         | `1`            | `true`  |
| `["A", "A"]`        | `"A"`          | `true`  |
| `[1, 2, 1]`         | `1`            | `false` |
| `[1, "1"]`          | `1`            | `false` |
| `[]` (leeres Array) | `1`            | `false` |

## Verwendung

```ts
import {areEqual} from "@type-check/guards";

areEqual([10, 10, 10], 10); // true
areEqual([10, 20, 10], 10); // false

// TypeScript Beispiel
const responses: unknown[] = ["YES", "YES"];

if (areEqual(responses, "YES")) {
  // responses wird hier als "YES"[] behandelt
  const count = responses.length;
  console.log(`Es gab ${count} positive Rückmeldungen.`);
}
```