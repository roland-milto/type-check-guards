# areRegExes

Prüft, ob alle Werte in einem Array reguläre Ausdrücke sind.

## Wofür wird `areRegExes` verwendet?

Diese Funktion validiert eine Liste darauf, ob sie ausschließlich aus `RegExp`-Objekten besteht.
Dies ist hilfreich bei der Validierung von Plugin-Konfigurationen oder Filtern, die eine Reihe von Mustern zur
Textanalyse erwarten.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ des Arrays automatisch auf `RegExp[]`.

## Verhalten

`areRegExes` gibt `true` zurück, wenn alle Elemente im Array Instanzen von `RegExp` sind.
Sobald ein einzelnes Element kein regulärer Ausdruck ist (z. B. ein String oder `null`), wird `false` zurückgegeben.

| Eingabe                  | Ausgabe |
|--------------------------|---------|
| `[/a/, /b/, /c/]`        | `true`  |
| `[/abc/, "not-a-regex"]` | `false` |
| `[null]`                 | `false` |
| `[]` (leeres Array)      | `false` |

## Verwendung

```ts
import {areRegExes} from "@type-check/guards";

areRegExes([/[a-z]/, /[0-9]/]); // true
areRegExes([/[a-z]/, ".*"]);    // false

// TypeScript Beispiel
const filters: unknown[] = [/error/i, /warning/i];

if (areRegExes(filters)) {
  // filters wird hier automatisch als RegExp[] behandelt
  const matches = filters.some(f => f.test("Error occurred"));
  console.log(matches);
}
```