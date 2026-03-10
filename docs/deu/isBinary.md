# isBinary

## Beschreibung

`isBinary` bestimmt, ob ein Wert eine Binärzeichenfolge ist (optional mit `0b`/`0B` vorangestellt) und gibt `true` oder
`false` zurück.

### Anwendungsfall

Validiere vom Benutzer bereitgestellte Zeichenfolgen (z. B. Formularfelder, CLI-Argumente, Konfigurationswerte), um
sicherzustellen, dass sie ausschließlich Binärziffern darstellen, optional mit einem `0b`/`0B`-Präfix, bevor sie
weiterverarbeitet werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isBinary` als Type Guard, bevor du eine Zeichenfolge in `BigInt`/`Number` parst oder konvertierst, um
> ungültige Eingaben zu vermeiden.

### Vorteile

- Akzeptiert Binärzeichenfolgen mit oder ohne das Präfix `0b`/`0B`.
- Lehnt leere Zeichenfolgen sowie Zeichenfolgen mit führenden/nachgestellten Leerzeichen (ASCII ≤ 32) ab.
- Gibt `true`/`false` zurück, ohne eine Exception zu werfen, wodurch es für unbekannte Eingaben sicher ist.

## Verwendung

### Syntax

Funktion:

- `isBinary(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // wahr
const b = isBinary("1010");   // wahr
const c = isBinary("0b1020"); // falsch
const d = isBinary(0b1010);     // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isBinary(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 23:09:38 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>