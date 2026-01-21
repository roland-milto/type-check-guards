# isOctal

Prüft, ob ein Wert eine gültige Oktalzahl in String-Darstellung ist.

Ein Oktal-String muss mit `0o` oder `0O` beginnen (Prefix ist verpflichtend), optional ein Vorzeichen `+`/`-` enthalten
und darf danach nur Ziffern von `0` bis `7` enthalten. Führende oder nachgestellte Whitespaces werden abgelehnt.

## Anwendungsfall

Diese Funktion ist nützlich, wenn Eingaben (z. B. aus Formularen, Konfigurationsdateien, CLI-Argumenten oder JSON) als
String vorliegen und du sicherstellen möchtest, dass sie eine **oktale Notation** darstellen, bevor du sie
weiterverarbeitest (z. B. Parsen, Konvertieren in Dezimalzahlen, Arbeiten mit Dateirechten wie `0o755`).

**Vorteil dieser Funktion:**

- Validiert oktale Notation als **String** mit verpflichtendem `0o`/`0O`-Prefix.
- Erkennt optionale Vorzeichen (`+`/`-`) und ist case-insensitive beim Prefix.
- Lehnt Strings mit führenden/nachgestellten Leerzeichen ab (ohne `trim()` zu verwenden).

> Hinweis für TypeScript-Entwickler:
> `isOctal(value)` ist ein Type Guard (`value is string`). Innerhalb eines `if (isOctal(value)) { ... }` behandelt
> TypeScript `value` als `string`.
> Beachte: Numerische Literale wie `0o123` sind **keine Strings** und werden deshalb als `false` bewertet.

## Verwendung

### Standard-Import

```ts
import {isOctal} from "@type-check/guards";

isOctal("0o123");   // true
isOctal("+0O755");  // true (Prefix case-insensitive, mit Vorzeichen)
isOctal("-0o0");    // true

isOctal("0o128");   // false (enthält ungültige Ziffer '8')
isOctal("0755");    // false (Prefix '0o'/'0O' ist erforderlich)
isOctal(" 0o123");  // false (führender Whitespace)
isOctal("0o123 ");  // false (nachgestellter Whitespace)
isOctal(0o123);     // false (kein String)
```

### TypeScript-Beispiele

```ts
import {isOctal} from "@type-check/guards";

function parseOctalToNumber(value: unknown): number | null {
  if (!isOctal(value)) {
    return null;
  }

  // value ist hier string (Type Guard)
  const sign = value.startsWith("-") ? -1 : 1;

  // optionales Vorzeichen entfernen
  const withoutSign = value.startsWith("+") || value.startsWith("-") ? value.slice(1) : value;

  // Prefix "0o"/"0O" entfernen und in Basis 8 parsen
  const parsed = Number.parseInt(withoutSign.slice(2), 8);

  return Number.isFinite(parsed) ? sign * parsed : null;
}

const input: unknown = "+0O755";
const result = parseOctalToNumber(input);
// result: number | null
```

### Globale Registrierung

Mit der globalen Registrierung ist die Funktion über das Objekt `type` verfügbar:

```ts
import { type } from "@type-check/guards";

type.isOctal("0o123"); // true
```

## Verhalten

| Input (value) | isOctal | Erklärung                               |
|---------------|:-------:|-----------------------------------------|
| `"0o123"`     |  true   | Gültig mit Prefix                       |
| `"+0O755"`    |  true   | Prefix case-insensitive, mit Vorzeichen |
| `"-0o0"`      |  true   | Gültig, auch `0` ist erlaubt            |
| `"0o128"`     |  false  | Enthält ungültige Ziffer `8`            |
| `"0o"`        |  false  | Keine Ziffern vorhanden                 |
| `"0755"`      |  false  | Prefix ist verpflichtend                |
| `""`          |  false  | Leerstring                              |
| `" 0o123"`    |  false  | Führender Whitespace nicht erlaubt      |
| `"0o123 "`    |  false  | Nachgestellter Whitespace nicht erlaubt |
| `0o123`       |  false  | Kein String (lenientes Verhalten)       |