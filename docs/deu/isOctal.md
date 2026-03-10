# isOctal

## Beschreibung

Bestimmt, ob ein Wert ein gültiger Oktal-Literal-String ist (z. B. `0o755`).

### Anwendungsfall

Validiere Benutzereingaben oder Konfigurationswerte, die als Oktal-Literal-String angegeben werden müssen (z. B.
Dateiberechtigungsmodi wie `0o644`), bevor sie geparst oder konvertiert werden.

> **Hinweis für TypeScript-Nutzer:**
>
> `isOctal` ist ein Type Guard (`value is string`). Nach einem `true`-Ergebnis grenzt TypeScript die geprüfte Variable
> auf `string` ein.

### Vorteile

- Bietet einen strikten Type Guard: gibt nur dann `true` zurück, wenn die Eingabe ein String ist, der einem
  Oktal-Literalformat entspricht.
- Lehnt leere Strings sowie Strings mit führenden/abschließenden Leerzeichen (ASCII-Steuerzeichen/Leerzeichen) ab und
  reduziert so versehentliche Treffer.
- Unterstützt ein optionales Vorzeichen und ist für das Präfix `0o`/`0O` nicht case-sensitiv.
- Ist tolerant gegenüber Nicht-String-Eingaben, indem `false` zurückgegeben wird, statt eine Exception zu werfen.

## Verwendung

### Syntax

Funktion:

- `isOctal(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // wahr
console.log(isOctal(b)); // wahr
console.log(isOctal(c)); // falsch
console.log(isOctal(d)); // falsch

if (isOctal(a)) {
  // a ist hier ein String
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isOctal(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:44:46 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>