# areHexadecimals

Prüft, ob ein Wert ein nicht-leeres Array aus gültigen Hexadezimalzahlen in String-Darstellung ist.

Jedes Element muss die Anforderungen von `isHexadecimal` erfüllen: verpflichtendes `0x`/`0X`-Prefix, optionales
Vorzeichen `+`/`-`, nur Ziffern `0-9` sowie Buchstaben `a-f`/`A-F`, keine führenden/nachgestellten Whitespaces.

## Anwendungsfall

Diese Funktion ist nützlich, wenn du mehrere hexadezimale Werte als Strings auf einmal validieren möchtest, z. B. beim
Import von Daten, bei Batch-Validierung von Eingaben, beim Prüfen von Konfigurationswerten oder vor einer Konvertierung
in `number[]`.

**Vorteil dieser Funktion:**

- Stellt sicher, dass es sich um ein **nicht-leeres Array** handelt und dass **alle Elemente** gültige Hex-Strings sind.
- Ideal als Vorprüfung vor Konvertierung in Zahlen oder weiterer Verarbeitung.

> Hinweis für TypeScript-Entwickler:
> `areHexadecimals(array)` ist ein Type Guard (`array is string[]`). Innerhalb eines
`if (areHexadecimals(value)) { ... }` behandelt TypeScript `value` als `string[]`.

## Verwendung

### Standard-Import

```ts
import {areHexadecimals} from "@type-check/guards";

areHexadecimals(["0x1A2B", "-0Xff"]); // true
areHexadecimals(["+0x0", "0X10"]);    // true

areHexadecimals(["0x1A2B", "0xG1"]);  // false (ungültiges Element)
areHexadecimals(["1A2B"]);            // false (Prefix fehlt)
areHexadecimals([]);                  // false (leer)
areHexadecimals("0x1A2B");            // false (kein Array)
```

### TypeScript-Beispiele

```ts
import {areHexadecimals} from "@type-check/guards";

function parseHexadecimals(values: unknown): number[] | null {
  if (!areHexadecimals(values)) {
    return null;
  }

  // values ist hier string[] (Type Guard)
  return values.map((value) => {
    const sign = value.startsWith("-") ? -1 : 1;
    const withoutSign = value.startsWith("+") || value.startsWith("-") ? value.slice(1) : value;
    const parsed = Number.parseInt(withoutSign.slice(2), 16);
    return sign * parsed;
  });
}

const input: unknown = ["0x10", "0Xff", "-0x1"];
const result = parseHexadecimals(input);
// result: number[] | null
```

### Globale Registrierung

Mit der globalen Registrierung ist die Funktion über das Objekt `type` verfügbar:

```ts
import {type} from "@type-check/guards";

type.areHexadecimals(["0x1A2B", "-0Xff"]); // true
```

## Verhalten

| Input (array)         | areHexadecimals | Erklärung                                   |
|-----------------------|:---------------:|---------------------------------------------|
| `["0x1A2B", "-0Xff"]` |      true       | Alle Elemente sind gültige Hex-Strings      |
| `["+0x0", "0X10"]`    |      true       | Vorzeichen erlaubt, Prefix case-insensitive |
| `["0x"]`              |      false      | Element enthält keine Ziffern               |
| `["0x1A2B", "0xG1"]`  |      false      | Ungültige Hex-Ziffer `G` enthalten          |
| `["1A2B"]`            |      false      | Prefix ist verpflichtend                    |
| `[" 0x1A"]`           |      false      | Führender Whitespace in einem Element       |
| `["0x1A "]`           |      false      | Nachgestellter Whitespace in einem Element  |
| `[]`                  |      false      | Leeres Array wird abgelehnt                 |
| `"0x1A2B"`            |      false      | Kein Array (lenientes Verhalten)            |
| `[0x1A2B]`            |      false      | Element ist kein String                     |