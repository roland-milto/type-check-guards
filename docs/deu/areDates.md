# areDates

## Beschreibung

`areDates` bestimmt, ob ein gegebenes Array gefüllt ist und ausschließlich `Date`-Objekte enthält, und gibt nur dann
`true` zurück, wenn alle Elemente gültige Datumswerte sind.

### Anwendungsfall

Verwende `areDates`, um unbekannte Eingaben (z. B. geparstes JSON, Formulardaten, API-Payloads) zu validieren, bevor
datumspezifische Logik wie Sortieren nach Zeit, Formatieren oder das Berechnen von Bereichen ausgeführt wird.

> **Hinweis für TypeScript-Nutzer:**
>
> Gibt `true` nur für nicht leere Arrays zurück, bei denen jedes Element ein `Date` ist; leere Arrays ergeben `false`.

### Vorteile

- Stellt sicher, dass ein Array nicht leer ist, bevor dessen Inhalte validiert werden, und verhindert so `true` bei
  leeren Eingaben.
- Überprüft, dass jedes Element eine `Date`-Instanz ist, und gibt beim ersten Nichtübereinstimmen sofort `false` zurück.
- Nützlich als Guard-ähnliche Prüfung, bevor datumspezifische Operationen auf Array-Elementen ausgeführt werden.

## Verwendung

### Syntax

Funktion:

- `areDates(array)`

Parameter:

- `array`: Das Array, das auf `Date`-Objekte geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // wahr
console.log(areDates(b)); // falsch
console.log(areDates(c)); // falsch

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areDates(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areDates](../_analysis/areDates.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 15:30:02 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>