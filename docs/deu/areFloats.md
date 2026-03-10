# areFloats

## Beschreibung

`areFloats` prüft, ob ein gegebenes Array gefüllt ist und alle seine Elemente Fließkommazahlen sind.

### Anwendungsfall

Verwende `areFloats`, wenn du ein `unknown[]` erhältst (z. B. aus JSON, Query-Parametern oder externen APIs) und
sicherstellen musst, dass es ein gefülltes Array ist, in dem jedes Element eine Fließkommazahl ist, bevor du numerische
Logik wie Mittelwertbildung, Interpolation oder statistische Berechnungen ausführst.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areFloats`, um `unknown[]` abzusichern, bevor du es als `number[]` behandelst, das nur Fließkommazahlen
> enthält; es gibt `false` für leere Arrays und für jedes Element zurück, das keine Fließkommazahl ist.

### Vorteile

- Gibt nur dann `true` zurück, wenn die Eingabe ein nicht-leeres Array ist und jedes Element eine Fließkommazahl ist.
- Bricht früh ab: gibt `false` zurück, sobald ein Element gefunden wird, das keine Fließkommazahl ist.
- Hilft dabei, unbekannte Eingaben zu validieren, bevor fließkommaspezifische Berechnungen durchgeführt werden.

## Verwendung

### Syntax

Funktion:

- `areFloats(array)`

Parameter:

- `array`: Das Array, das auf Fließkomma-Elemente geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // wahr
console.log(areFloats(b)); // falsch
console.log(areFloats(c)); // falsch

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areFloats(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 15:56:55 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>