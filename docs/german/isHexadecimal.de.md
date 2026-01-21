# isHexadecimal

Prüft, ob ein Wert eine gültige Hexadezimalzahl in String-Darstellung ist.

Ein Hex-String muss mit `0x` oder `0X` beginnen (Prefix ist verpflichtend), optional ein Vorzeichen `+`/`-` enthalten
und darf danach nur Ziffern `0-9` sowie Buchstaben `a-f`/`A-F` enthalten. Führende oder nachgestellte Whitespaces werden
abgelehnt.

## Anwendungsfall

Diese Funktion ist nützlich, wenn Eingaben (z. B. aus Formularen, Konfigurationsdateien, CLI-Argumenten oder JSON) als
String vorliegen und du sicherstellen möchtest, dass sie eine **hexadezimale Notation** darstellen, bevor du sie
weiterverarbeitest (z. B. Parsen, Konvertieren in Dezimalzahlen, Validieren von Farbwerten, Arbeiten mit Bitmasken).

**Vorteil dieser Funktion:**

- Validiert hexadezimale Notation als **String** mit verpflichtendem `0x`/`0X`-Prefix.
- Erkennt optionale Vorzeichen (`+`/`-`) und ist case-insensitive beim Prefix.
- Lehnt Strings mit führenden/nachgestellten Leerzeichen ab (ohne `trim()` zu verwenden).

> Hinweis für TypeScript-Entwickler:
> `isHexadecimal(value)` ist ein Type Guard (`value is string`). Innerhalb eines `if (isHexadecimal(value)) { ... }`
> behandelt TypeScript `value` als `string`.
> Beachte: Numerische Literale wie `0x1A2B` sind **keine Strings** und werden deshalb als `false` bewertet.

## Verwendung

### Standard-Import

```ts
import {isHexadecimal} from "@type-check/guards";

isHexadecimal("0x1A2B");  // true
isHexadecimal("-0Xff");   // true (Prefix case-insensitive, mit Vorzeichen)
isHexadecimal("+0x0");    // true

isHexadecimal("1A2B");    // false (Prefix '0x'/'0X' ist erforderlich)
isHexadecimal("0xG1");    // false (ungültiges Zeichen 'G')
isHexadecimal(" 0x1A");   // false (führender Whitespace)
isHexadecimal("0x1A ");   // false (nachgestellter Whitespace)
isHexadecimal(0x1A2B);    // false (kein String)
```

### TypeScript-Beispiele

```ts
import {isHexadecimal} from "@type-check/guards";

function parseHexToNumber(value: unknown): number | null {
  if (!isHexadecimal(value)) {
    return null;
  }

  // value ist hier string (Type Guard)
  const sign = value.startsWith("-") ? -1 : 1;

  // optionales Vorzeichen entfernen
  const withoutSign = value.startsWith("+") || value.startsWith("-") ? value.slice(1) : value;

  // Prefix "0x"/"0X" entfernen und in Basis 16 parsen
  const parsed = Number.parseInt(withoutSign.slice(2), 16);

  return Number.isFinite(parsed) ? sign * parsed : null;
}

const input: unknown = "-0Xff";
const result = parseHexToNumber(input);
// result: number | null
```

### Globale Registrierung

Mit der globalen Registrierung ist die Funktion über das Objekt `type` verfügbar:

```ts
import {type} from "@type-check/guards";

type.isHexadecimal("0x1A2B"); // true
```

## Verhalten

| Input (value) | isHexadecimal | Erklärung                               |
|---------------|:-------------:|-----------------------------------------|
| `"0x1A2B"`    |     true      | Gültig mit Prefix                       |
| `"-0Xff"`     |     true      | Prefix case-insensitive, mit Vorzeichen |
| `"+0x0"`      |     true      | Gültig, `0` ist erlaubt                 |
| `"0x"`        |     false     | Keine Ziffern vorhanden                 |
| `"1A2B"`      |     false     | Prefix ist verpflichtend                |
| `"0xG1"`      |     false     | Ungültige Hex-Ziffer `G`                |
| `""`          |     false     | Leerstring                              |
| `" 0x1A"`     |     false     | Führender Whitespace nicht erlaubt      |
| `"0x1A "`     |     false     | Nachgestellter Whitespace nicht erlaubt |
| `0x1A2B`      |     false     | Kein String (lenientes Verhalten)       |