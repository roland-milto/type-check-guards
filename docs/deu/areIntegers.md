# areIntegers

## Beschreibung

`areIntegers` bestimmt, ob alle Elemente in einem gegebenen Array ganze Zahlen sind, und gibt `true` zurück, wenn dies
der Fall ist, andernfalls `false`.

### Anwendungsfall

Verwende `areIntegers`, um vom Benutzer bereitgestellte oder externe Daten (z. B. Query-Parameter, JSON-Payloads,
CSV-Zeilen) zu validieren, wenn deine Logik eine gefüllte Liste ganzzahliger Werte wie IDs, Zähler, Pagination-Offsets
oder Array-Indizes erfordert.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areIntegers` als Runtime-Guard für `unknown[]`-Eingaben, bevor du sie als `number[]` behandelst, das
> ausschließlich ganze Zahlen enthält. Wenn `false` zurückgegeben wird, ist die Eingabe entweder kein gefülltes Array
> oder
> enthält mindestens einen nicht-ganzzahligen Wert.

### Vorteile

- Gibt nur dann `true` zurück, wenn jedes Element eine ganze Zahl ist; andernfalls wird `false` zurückgegeben.
- Hilft dabei, unbekannte Eingaben zu validieren, bevor ausschließlich für ganze Zahlen vorgesehene Operationen
  ausgeführt werden (z. B. Indizierung, Zählwerte, IDs).
- Scheitert früh: bricht die Prüfung ab, sobald ein nicht-ganzzahliges Element gefunden wird.

## Verwendung

### Syntax

Funktion:

- `areIntegers(array)`

Parameter:

- `array`: Das Array, das auf ganzzahlige Elemente geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // wahr
console.log(areIntegers(b)); // wahr
console.log(areIntegers(c)); // falsch

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areIntegers(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 00:58:06 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>