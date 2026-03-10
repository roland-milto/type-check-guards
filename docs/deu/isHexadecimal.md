# isHexadecimal

## Beschreibung

`isHexadecimal` prüft, ob ein gegebener Wert ein hexadezimales String-Literal mit obligatorischem `0x`/`0X`-Präfix ist.

### Anwendungsfall

Verwende `isHexadecimal`, um Konfigurationswerte, Felder in API-Payloads oder CLI-Argumente zu validieren, die als
hexadezimale String-Literale angegeben werden müssen (z. B. IDs, Masken oder Adressen) und keine umgebenden Leerzeichen
enthalten dürfen.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isHexadecimal`, wenn du Benutzereingaben oder serialisierte Daten als striktes hexadezimales
> Literal-Stringformat (einschließlich des `0x`/`0X`-Präfixes) validieren musst, bevor du sie parsest oder konvertierst.

### Vorteile

- Validiert, dass ein Wert eine Zeichenkette ist und einem strikten hexadezimalen Literalformat entspricht (erfordert
  das Präfix `0x`/`0X`).
- Lehnt Zeichenketten mit führenden oder nachgestellten Leerzeichen ab und hilft so, eine unbeabsichtigte Akzeptanz von
  gepolsterten Eingaben zu vermeiden.
- Unterstützt ein optionales Vorzeichen und ist hinsichtlich Präfix und Ziffern nicht case-sensitiv; gibt dabei
  vorhersehbar `true`/`false` zurück.

## Verwendung

### Syntax

Funktion:

- `isHexadecimal(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // wahr
isHexadecimal("-0Xff"); // wahr
isHexadecimal("1A2B"); // falsch (Präfix fehlt)
isHexadecimal(" 0x1A2B"); // falsch (führendes Leerzeichen)
isHexadecimal(0x1a2b); // falsch (keine Zeichenkette)
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isHexadecimal(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 22:58:21 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>