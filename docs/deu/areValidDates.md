# areValidDates

## Beschreibung

Bestimmt, ob ein Array nicht leer ist und ausschließlich aus gültigen `Date`-Objekten besteht.

### Anwendungsfall

Verwende `areValidDates`, um vom Benutzer oder von einer API bereitgestellte Arrays zu validieren, bevor du
datumsbasierte Operationen (Sortieren, Bereichsprüfungen, Formatieren) ausführst. So stellst du sicher, dass alle
Einträge echte, gültige `Date`-Objekte sind und dass die Liste nicht leer ist.

> **Hinweis für TypeScript-Nutzer:**
>
> `areValidDates` gibt für ein leeres Array `false` zurück; stelle sicher, dass das Array tatsächlich nicht leer sein
> soll, bevor du dich darauf als Validierungsschritt verlässt.

### Vorteile

- Gibt nur dann `true` zurück, wenn jedes Element eine gültige `Date`-Instanz ist (keine ungültigen Datumswerte wie
  `new Date('invalid')`).
- Lehnt leere Eingaben ab, indem `false` zurückgegeben wird, sodass du nur aussagekräftige, nicht-leere Datumslisten
  akzeptierst.
- Bietet eine einfache boolesche Guard-ähnliche Prüfung, die sich leicht mit anderen Validierungen kombinieren lässt.

## Verwendung

### Syntax

Funktion:

- `areValidDates(array)`

Parameter:

- `array`: Das zu prüfende Array, das potenziell `Date`-Objekte enthalten kann.

### Lokaler Funktionen-Import

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // wahr
console.log(areValidDates(b)); // falsch
console.log(areValidDates(c)); // falsch
console.log(areValidDates(d)); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areValidDates(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:31:26 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>