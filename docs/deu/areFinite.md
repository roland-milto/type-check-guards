# areFinite

## Beschreibung

`areFinite` prüft, ob ein Wert ein nicht-leeres Array ist, dessen Elemente allesamt endliche Zahlen sind, und gibt in
diesem Fall `true` zurück, andernfalls `false`.

### Anwendungsfall

Validiere numerische Eingabe-Arrays (z. B. Diagrammreihen, Koordinatenlisten, Messproben), bevor Berechnungen
durchgeführt werden, und stelle sicher, dass das Ergebnis nur dann `true` ist, wenn alle Werte endliche Zahlen sind.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areFinite`, wenn du sicherstellen musst, dass ein Array nicht leer ist und nur endliche Zahlen enthält; es
> gibt `false` für leere Arrays sowie für Arrays zurück, die `NaN` oder Unendlichkeiten enthalten.

### Vorteile

- Gibt nur dann `true` zurück, wenn die Eingabe ein nicht-leeres Array ist und jedes Element eine endliche Zahl ist.
- Lehnt `Infinity`, `-Infinity` und `NaN` ab, indem für jedes Element `isFinite`-Prüfungen verwendet werden.
- Liefert ein einfaches boolesches Ergebnis (`true`/`false`), geeignet für Guards und Validierungsabläufe.

## Verwendung

### Syntax

Funktion:

- `areFinite(array)`

Parameter:

- `array`: Das Array, bei dem geprüft werden soll, ob alle Elemente endlich sind.

### Lokaler Funktionen-Import

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // wahr
console.log(areFinite(b)); // falsch
console.log(areFinite(c)); // falsch

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areFinite(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 16:34:17 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>