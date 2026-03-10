# isNaN

## Beschreibung

Bestimmt, ob der bereitgestellte `value` ein `NaN` vom Typ `number` ist, ohne Strings zu konvertieren.

### Anwendungsfall

Validiere nicht vertrauenswürdige oder lose typisierte Eingaben (z. B. API-Payloads, Formularwerte, geparstes JSON), um
den speziellen `NaN`-Wert zu erkennen und explizit zu behandeln, während Nicht-Zahlen-Eingaben als nicht `NaN` behandelt
werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isNaN`, wenn du den speziellen numerischen Wert `NaN` erkennen musst und dabei sicherstellen willst, dass
> die Eingabe tatsächlich ein `number` ist (keine String-zu-Number-Konvertierung).

### Vorteile

- Prüft, ob ein Wert `NaN` ist, ohne Nicht-Zahlen (z. B. Strings) in Zahlen zu erzwingen.
- Gibt `true` nur für Werte zurück, die sowohl vom Typ `number` als auch `NaN` sind.
- Sicher für `unknown`-Eingaben und vermeidet Fehlalarme durch implizite Konvertierungen.

## Verwendung

### Syntax

Funktion:

- `isNaN(value)`

Parameter:

- `value`: Der Wert, der darauf geprüft werden soll, ob er ein `NaN` vom Typ `number` ist.

### Lokaler Funktionen-Import

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // wahr
console.log(isNaN(b)); // falsch
console.log(isNaN(c)); // falsch

if (isNaN(a)) {
  // a ist eine Zahl und speziell NaN
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isNaN(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 15:45:47 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>