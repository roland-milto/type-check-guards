# areOctals

Prüft, ob ein Wert ein nicht-leeres Array aus gültigen Oktalzahlen in String-Darstellung ist.

Jedes Element muss die Anforderungen von `isOctal` erfüllen: verpflichtendes `0o`/`0O`-Prefix, optionales Vorzeichen
`+`/`-`, nur Ziffern `0` bis `7`, keine führenden/nachgestellten Whitespaces.

## Anwendungsfall

Diese Funktion ist nützlich, wenn du mehrere oktale Werte als Strings auf einmal validieren möchtest, z. B. beim
Einlesen von Konfigurationswerten (Dateirechte), bei Batch-Validierung von Eingaben oder beim Import von Daten.

**Vorteil dieser Funktion:**

- Stellt sicher, dass es sich um ein **nicht-leeres Array** handelt und dass **alle Elemente** gültige Oktal-Strings
  sind.
- Ideal als Vorprüfung vor Konvertierung in `number[]` oder für weitere Verarbeitung.

> Hinweis für TypeScript-Entwickler:
> `areOctals(array)` ist ein Type Guard (`array is string[]`). Innerhalb eines `if (areOctals(value)) { ... }` behandelt
> TypeScript `value` als `string[]`.

## Verwendung

### Standard-Import

```ts
import {areOctals} from "@type-check/guards";

areOctals(["0o123", "+0O755"]); // true
areOctals(["-0o0", "0o7"]);     // true

areOctals(["0o123", "0o128"]);  // false (ungültiges Element)
areOctals(["0755"]);            // false (Prefix fehlt)
areOctals([]);                  // false (leer)
areOctals("0o123");             // false (kein Array)
```

### TypeScript-Beispiele

```ts
import {areOctals} from "@type-check/guards";

function parseOctalsToNumbers(values: unknown): number[] | null {
  if (!areOctals(values)) {
    return null;
  }

  // values ist hier string[] (Type Guard)
  return values.map((value) => {
    const sign = value.startsWith("-") ? -1 : 1;
    const withoutSign = value.startsWith("+") || value.startsWith("-") ? value.slice(1) : value;
    const parsed = Number.parseInt(withoutSign.slice(2), 8);
    return sign * parsed;
  });
}

const input: unknown = ["0o10", "0O7", "-0o1"];
const result = parseOctalsToNumbers(input);
// result: number[] | null
```

### Globale Registrierung

Mit der globalen Registrierung ist die Funktion über das Objekt `type` verfügbar:

```ts
import {type} from "@type-check/guards";

type.areOctals(["0o123", "+0O755"]); // true
```

## Verhalten

| Input (array)         | areOctals | Erklärung                                   |
|-----------------------|:---------:|---------------------------------------------|
| `["0o123", "+0O755"]` |   true    | Alle Elemente sind gültige Oktal-Strings    |
| `["-0o0", "0o7"]`     |   true    | Vorzeichen erlaubt, Prefix case-insensitive |
| `["0o"]`              |   false   | Element enthält keine Ziffern               |
| `["0o123", "0o128"]`  |   false   | Enthält ungültige Ziffer `8`                |
| `["0755"]`            |   false   | Prefix ist verpflichtend                    |
| `[" 0o123"]`          |   false   | Führender Whitespace in einem Element       |
| `["0o123 "]`          |   false   | Nachgestellter Whitespace in einem Element  |
| `[]`                  |   false   | Leeres Array wird abgelehnt                 |
| `"0o123"`             |   false   | Kein Array (lenientes Verhalten)            |
| `[0o123]`             |   false   | Element ist kein String                     |