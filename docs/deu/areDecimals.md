# areDecimals

## Beschreibung

Prüft, ob alle Elemente in einem Array Dezimalzahlen sind und das Array gefüllt ist, und gibt `true` oder `false`
zurück.

### Anwendungsfall

Validiere vom Benutzer bereitgestellte Listen (z. B. CSV-Spalten oder Formulareingaben), um sicherzustellen, dass das
Array nicht leer ist und jeder Eintrag ein Dezimalwert ist, bevor geparst oder Berechnungen durchgeführt werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areDecimals`, wenn du eine schnelle boolesche Prüfung benötigst, dass ein `unknown[]` nicht leer ist und
> jedes Element eine Dezimaldarstellung ist.

### Vorteile

- Stellt sicher, dass die Eingabe ein gefülltes Array ist, bevor die Elemente validiert werden, und verhindert so die
  versehentliche Akzeptanz leerer Listen.
- Validiert jedes Element mit `isDecimal`, sodass gemischte oder ungültige Werte sofort zu einem `false`-Ergebnis
  führen.
- Liefert ein einfaches boolesches Ergebnis (`true`/`false`), geeignet für Guards und Validierungsabläufe mit frühem
  Return.

## Verwendung

### Syntax

Funktion:

- `areDecimals(array)`

Parameter:

- `array`: Das zu prüfende Array.

### Lokaler Funktionen-Import

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // wahr
console.log(areDecimals(b)); // falsch
console.log(areDecimals(c)); // falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areDecimals(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 15:56:56 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>