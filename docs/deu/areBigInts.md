# areBigInts

## Beschreibung

`areBigInts` bestimmt, ob ein Wert ein nicht-leeres Array ist, das ausschließlich `bigint`-Werte enthält.

### Anwendungsfall

Validiere unbekannte Eingaben (z. B. geparste JSON-ähnliche Daten, API-Payloads oder Funktionsparameter mit dem Typ
`unknown`), um sicherzustellen, dass es sich um ein nicht-leeres Array von `bigint`-Werten handelt, bevor du sie
verarbeitest; gibt nur dann `true` zurück, wenn alle Elemente `bigint` sind, andernfalls `false`.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areBigInts` als Runtime-Guard, bevor du `bigint`-only-Operationen (z. B. Arithmetik, Vergleiche) auf
> unbekannten Eingaben ausführst.

### Vorteile

- Stellt sicher, dass jedes Element ein `bigint` ist, und gibt nur dann `true` zurück, wenn das gesamte Array
  übereinstimmt.
- Lehnt Nicht-Arrays und leere Arrays absichtlich ab (über `isFilledArray`) und verhindert so die versehentliche
  Akzeptanz ungültiger Eingaben.
- Schnelles Abbrechen: Gibt `false` zurück, sobald ein Nicht-`bigint`-Element gefunden wird.

## Verwendung

### Syntax

Funktion:

- `areBigInts(array)`

Parameter:

- `array`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // wahr
console.log(areBigInts(b)); // falsch
console.log(areBigInts(c)); // falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areBigInts(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 23:25:40 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>