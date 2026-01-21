# isDecimal

Prüft, ob ein Wert eine gültige Dezimalzahl in String-Darstellung ist.

Unterstützt optionale Vorzeichen (`+`/`-`) sowie Dezimalzahlen mit Punkt (`.`). Auch Kurzschreibweisen wie `.5` oder
`123.` sind erlaubt. Führende oder nachgestellte Whitespaces werden abgelehnt.

## Anwendungsfall

Diese Funktion ist nützlich, wenn Eingaben (z. B. aus Formularen, Konfigurationsdateien, CLI-Argumenten oder JSON) als
String vorliegen und du sicherstellen möchtest, dass sie eine **Dezimalzahl** darstellen, bevor du sie z. B. in `number`
konvertierst, speicherst oder weiterverarbeitest.

**Vorteil dieser Funktion:**

- Validiert Dezimalzahlen als **String** (inkl. Vorzeichen und Punkt als Dezimaltrennzeichen).
- Lehnt Strings mit führenden/nachgestellten Leerzeichen ab (ohne `trim()` zu verwenden).

> Hinweis für TypeScript-Entwickler:
> `isDecimal(value)` ist ein Type Guard (`value is string`). Innerhalb eines `if (isDecimal(value)) { ... }` behandelt
> TypeScript `value` als `string`.
> Beachte: Numerische Werte wie `123.45` sind **keine Strings** und werden deshalb als `false` bewertet.

## Verwendung

### Standard-Import

```ts
import {isDecimal} from "@type-check/guards";

isDecimal("123.45");   // true
isDecimal("-123.45");  // true
isDecimal(".5");       // true
isDecimal("123.");     // true

isDecimal("12a.5");    // false (ungültige Zeichen)
isDecimal("1,23");     // false (Komma wird nicht unterstützt)
isDecimal(" 1.23");    // false (führender Whitespace)
isDecimal("1.23 ");    // false (nachgestellter Whitespace)
isDecimal(123.45);     // false (kein String)
```

### TypeScript-Beispiele

```ts
import {isDecimal} from "@type-check/guards";

function parseDecimal(value: unknown): number | null {
  if (!isDecimal(value)) {
    return null;
  }

  // value ist hier string (Type Guard)
  const parsed = Number.parseFloat(value);

  // Optional: zusätzliche Sicherheitsprüfung (z. B. Infinity / NaN)
  return Number.isFinite(parsed) ? parsed : null;
}

const input: unknown = "-0.5";
const result = parseDecimal(input);
// result: number | null
```

### Globale Registrierung

Mit der globalen Registrierung ist die Funktion über das Objekt `type` verfügbar:

```ts
import {type} from "@type-check/guards";

type.isDecimal("123.45"); // true
```

## Verhalten

| Input (value) | isDecimal | Erklärung                               |
|---------------|:---------:|-----------------------------------------|
| `"123.45"`    |   true    | Standard-Dezimalzahl                    |
| `"-123.45"`   |   true    | Negativ mit Vorzeichen                  |
| `"+0.5"`      |   true    | Positiv mit Vorzeichen                  |
| `".5"`        |   true    | Kurzschreibweise                        |
| `"123."`      |   true    | Dezimalpunkt ohne Nachkommastellen      |
| `"1,23"`      |   false   | Komma wird nicht unterstützt            |
| `""`          |   false   | Leerstring                              |
| `" 1.23"`     |   false   | Führender Whitespace nicht erlaubt      |
| `"1.23 "`     |   false   | Nachgestellter Whitespace nicht erlaubt |
| `123.45`      |   false   | Kein String (lenientes Verhalten)       |