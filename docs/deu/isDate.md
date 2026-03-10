# isDate

## Beschreibung

`isDate` bestimmt, ob ein bereitgestellter Wert ein `Date` ist, und gibt für `Date`-Instanzen `true` und andernfalls
`false` zurück.

### Anwendungsfall

Validiere und grenze unbekannte Werte (z. B. Request-Daten, Konfigurationswerte oder geparstes JSON) ein, bevor `Date`
-Operationen wie Formatierung, Vergleiche oder das Aufrufen von `toISOString()` durchgeführt werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isDate`, um `unknown` zur Laufzeit auf `Date` einzugrenzen; es gibt nur für tatsächliche `Date`-Instanzen
`true` zurück (nicht für Datums-Strings).

### Vorteile

- Bietet eine einfache Laufzeitprüfung, um zu verifizieren, ob ein Wert ein `Date` ist.
- Hilft, Typfehler zu vermeiden, indem sichergestellt wird, dass nur `Date`-Instanzen die Validierung bestehen.
- Nützlich zur Validierung unbekannter Eingaben (z. B. API-Payloads), bevor datumsspezifische Methoden verwendet werden.

## Verwendung

### Syntax

Funktion:

- `isDate(value)`

Parameter:

- `value`: Der Wert, der auf den Typ `Date` geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input ist hier ein Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isDate(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isDate](../_analysis/isDate.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 15:37:02 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>