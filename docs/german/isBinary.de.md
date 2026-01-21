# isBinary

Prüft, ob ein Wert eine gültige Binärzahl in String-Darstellung ist.

Eine binäre Zeichenkette besteht aus `0` und `1` und darf optional mit `0b` oder `0B` beginnen (z. B. `0b1010`).
Führende oder nachgestellte Whitespaces werden abgelehnt.

## Anwendungsfall

Diese Funktion ist nützlich, wenn Eingaben (z. B. aus Formularen, Konfigurationsdateien, CLI-Argumenten oder JSON) als
String vorliegen und du sicherstellen möchtest, dass sie eine **binäre Notation** darstellen, bevor du sie
weiterverarbeitest (z. B. Parsen, Validieren, Konvertieren in Dezimalzahlen oder Bitmasken).

**Vorteil dieser Funktion:**

- Sie validiert explizit eine Binärdarstellung als **String** (inkl. optionalem `0b`/`0B`-Prefix).
- Sie lehnt Strings mit führenden/nachgestellten Leerzeichen ab (auch ohne `trim()`).

> Hinweis für TypeScript-Entwickler:
> `isBinary(value)` ist ein Type Guard (`value is string`). Innerhalb eines `if (isBinary(value)) { ... }` behandelt
> TypeScript `value` als `string`.
> Zusätzlich gilt: Numerische Literale wie `0b1010` sind zwar gültige Binärliterale in JavaScript, aber **kein String**
> und werden deshalb als `false` bewertet.

## Verwendung

### Standard-Import

```ts
import {isBinary} from "@type-check/guards";

isBinary("0b1010");  // true
isBinary("1010");    // true
isBinary("0B0011");  // true

isBinary("0b1020");  // false (ungültige Zeichen)
isBinary(" 1010");   // false (führender Whitespace)
isBinary("1010 ");   // false (nachgestellter Whitespace)
isBinary(0b1010);    // false (kein String)
```

### TypeScript-Beispiele

```ts
import {isBinary} from "@type-check/guards";

function parseBinaryToNumber(value: unknown): number | null {
  if (!isBinary(value)) {
    return null;
  }

  // value ist hier vom Typ string (Type Guard).
  // Prefix ist optional, daher Basis 2 explizit angeben:
  return Number.parseInt(
    value.startsWith("0b") || value.startsWith("0B") ? value.slice(2) : value,
    2
  );
}

const input: unknown = "0b1010";
const result = parseBinaryToNumber(input);
// result: number | null
```

### Globale Registrierung

Mit der globalen Registrierung ist die Funktion über das Objekt `type` verfügbar:

```ts
import {type} from "@type-check/guards";

type.isBinary("0b1010"); // true
```

## Verhalten

| Input (value) | isBinary | Erklärung                               |
|---------------|:--------:|-----------------------------------------|
| `"0b1010"`    |   true   | Gültig mit Prefix                       |
| `"1010"`      |   true   | Gültig ohne Prefix                      |
| `"0B0011"`    |   true   | Prefix ist case-insensitive             |
| `"0b"`        |  false   | Keine Bits vorhanden                    |
| `""`          |  false   | Leerstring                              |
| `"0b1020"`    |  false   | Enthält ungültige Ziffer `2`            |
| `"10_10"`     |  false   | Unterstriche sind nicht erlaubt         |
| `" 1010"`     |  false   | Führender Whitespace nicht erlaubt      |
| `"1010 "`     |  false   | Nachgestellter Whitespace nicht erlaubt |
| `0b1010`      |  false   | Kein String (lenientes Verhalten)       |