# areDecimals

Prüft, ob ein Wert ein nicht-leeres Array aus gültigen Dezimalzahlen in String-Darstellung ist.

Jedes Element muss die Anforderungen von `isDecimal` erfüllen (optional `+`/`-`, Dezimalpunkt `.`, Kurzschreibweisen wie
`.5`, keine führenden/nachgestellten Whitespaces).

## Anwendungsfall

Diese Funktion ist nützlich, wenn du mehrere Dezimalwerte als Strings auf einmal validieren möchtest, z. B. beim
Einlesen von CSV/JSON-Daten, bei Batch-Validierung von Formularfeldern oder bei Konfigurationswerten.

**Vorteil dieser Funktion:**

- Stellt sicher, dass es sich um ein **nicht-leeres Array** handelt und dass **alle Elemente** gültige Dezimal-Strings
  sind.
- Ideal als Vorprüfung vor Konvertierung in `number[]`.

> Hinweis für TypeScript-Entwickler:
> `areDecimals(array)` ist ein Type Guard (`array is string[]`). Innerhalb eines `if (areDecimals(value)) { ... }`
> behandelt TypeScript `value` als `string[]`.

## Verwendung

### Standard-Import

```ts
import {areDecimals} from "@type-check/guards";

areDecimals(["123.45", "-0.5", ".123"]); // true
areDecimals(["123.", "+0.5"]);           // true

areDecimals(["123.45", "12a.5"]);        // false (ungültiges Element)
areDecimals([" 1.23"]);                  // false (Whitespace in Element)
areDecimals([]);                         // false (leer)
areDecimals("123.45");                   // false (kein Array)
```

### TypeScript-Beispiele

```ts
import {areDecimals} from "@type-check/guards";

function parseDecimals(values: unknown): number[] | null {
  if (!areDecimals(values)) {
    return null;
  }

  // values ist hier string[] (Type Guard)
  const parsed = values.map((value) => Number.parseFloat(value));

  // Optional: alle Ergebnisse müssen endlich sein
  if (!parsed.every(Number.isFinite)) {
    return null;
  }

  return parsed;
}

const input: unknown = ["1.5", "-0.25", ".75"];
const result = parseDecimals(input);
// result: number[] | null
```

### Globale Registrierung

Mit der globalen Registrierung ist die Funktion über das Objekt `type` verfügbar:

```ts
import {type} from "@type-check/guards";

type.areDecimals(["123.45", "-0.5", ".123"]); // true
```

## Verhalten

| Input (array)                | areDecimals | Erklärung                                  |
|------------------------------|:-----------:|--------------------------------------------|
| `["123.45", "-0.5", ".123"]` |    true     | Alle Elemente sind gültige Dezimal-Strings |
| `["123.", "+0.5"]`           |    true     | Erlaubte Varianten                         |
| `["1,23"]`                   |    false    | Komma wird nicht unterstützt               |
| `["123.45", "12a.5"]`        |    false    | Enthält ungültiges Element                 |
| `[" 1.23"]`                  |    false    | Führender Whitespace in Element            |
| `["1.23 "]`                  |    false    | Nachgestellter Whitespace in Element       |
| `[]`                         |    false    | Leeres Array wird abgelehnt                |
| `"123.45"`                   |    false    | Kein Array (lenientes Verhalten)           |
| `[123.45]`                   |    false    | Element ist kein String                    |