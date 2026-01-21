# areBinaries

Prüft, ob ein Wert ein nicht-leeres Array aus gültigen Binärzahlen in String-Darstellung ist.

Ein Binär-String besteht aus `0` und `1` und darf optional mit `0b` oder `0B` beginnen (z. B. `0b1010`). Führende oder
nachgestellte Whitespaces in einzelnen Elementen werden abgelehnt.

## Anwendungsfall

Diese Funktion ist nützlich, wenn du Sammlungen von Eingaben (z. B. aus Formularen, Konfigurationsdateien,
CLI-Argumenten oder JSON) als Array bekommst und sicherstellen möchtest, dass **jedes** Element eine gültige **binäre
Notation als String** darstellt, bevor du weiterverarbeitest (z. B. Parsen, Validieren, Konvertieren in Dezimalzahlen
oder Bitmasken).

**Vorteil dieser Funktion:**

- Sie stellt sicher, dass es sich um ein **nicht-leeres Array** handelt und dass **alle Elemente** gültige Binär-Strings
  sind.
- Sie ist eine praktische Ergänzung zu `isBinary`, wenn du mehrere Werte auf einmal validieren musst.

> Hinweis für TypeScript-Entwickler:
> `areBinaries(array)` ist ein Type Guard (`array is string[]`). Innerhalb eines `if (areBinaries(value)) { ... }`
> behandelt TypeScript `value` als `string[]`.
> Beachte: Numerische Literale wie `0b1010` sind **keine Strings** und führen daher (als Array-Element) zu `false`.

## Verwendung

### Standard-Import

```ts
import {areBinaries} from "@type-check/guards";

areBinaries(["0b1010", "1101"]); // true
areBinaries(["0B0011", "0b0"]);  // true

areBinaries(["1010", "1020"]);   // false (ungültiges Element)
areBinaries([]);                 // false (leer)
areBinaries("1010");             // false (kein Array)
```

### TypeScript-Beispiele

```ts
import {areBinaries} from "@type-check/guards";

function parseBinariesToNumbers(values: unknown): number[] | null {
  if (!areBinaries(values)) {
    return null;
  }

  // values ist hier string[] (Type Guard)
  return values.map((value) =>
    Number.parseInt(
      value.startsWith("0b") || value.startsWith("0B") ? value.slice(2) : value,
      2
    )
  );
}

const input: unknown = ["0b1010", "1111"];
const result = parseBinariesToNumbers(input);
// result: number[] | null
```

### Globale Registrierung

Mit der globalen Registrierung sind die Funktionen über das Objekt `type` verfügbar:

```ts
import {type} from "@type-check/guards";

type.areBinaries(["0b1010", "1101"]); // true
```

## Verhalten

| Input (array)        | areBinaries | Erklärung                                  |
|----------------------|:-----------:|--------------------------------------------|
| `["0b1010", "1101"]` |    true     | Alle Elemente sind gültige Binär-Strings   |
| `["1010", "0B0011"]` |    true     | Prefix ist optional und case-insensitive   |
| `["0b", "1010"]`     |    false    | `"0b"` enthält keine Bits                  |
| `["1010", "1020"]`   |    false    | Enthält ungültige Ziffer `2`               |
| `[" 1010"]`          |    false    | Führender Whitespace in einem Element      |
| `["1010 "]`          |    false    | Nachgestellter Whitespace in einem Element |
| `[]`                 |    false    | Leeres Array wird abgelehnt                |
| `"1010"`             |    false    | Kein Array (lenientes Verhalten)           |
| `[0b1010]`           |    false    | Element ist kein String                    |