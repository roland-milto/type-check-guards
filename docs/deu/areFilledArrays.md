# areFilledArrays

## Beschreibung

`areFilledArrays` prüft, ob ein zweidimensionales Array nicht leer ist und alle seine Unterarrays nicht leer sind.

### Anwendungsfall

Verwende `areFilledArrays`, um tabellarische oder matrixartige Eingaben (z. B. CSV-Zeilen, Grid-Daten, gruppierte
Ergebnisse) zu validieren, damit du sicher davon ausgehen kannst, dass es mindestens ein Unterarray gibt und keines der
Unterarrays leer ist.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areFilledArrays`, wenn du sicherstellen musst, dass ein 2D-Array mindestens eine Zeile hat und jede Zeile
> mindestens ein Element enthält, bevor du darüber iterierst oder darauf indexierst.

### Vorteile

- Validiert, dass das äußere Array nicht leer ist und dass jedes innere Array ebenfalls nicht leer ist, und gibt nur
  dann `true` zurück, wenn beide Bedingungen erfüllt sind.
- Funktioniert mit beliebigen Elementtypen innerhalb der Unterarrays (z. B. Zahlen, Strings, Objekte, verschachtelte
  Arrays), da nur der „gefüllt“-Status des Arrays geprüft wird, nicht der Inhalt der Elemente.
- Liefert ein einfaches boolesches Ergebnis (`true`/`false`), geeignet als Guard vor der Verarbeitung zweidimensionaler
  Daten.

## Verwendung

### Syntax

Funktion:

- `areFilledArrays(array)`

Parameter:

- `array`: Das zu prüfende zweidimensionale Array.

### Lokaler Funktionen-Import

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // wahr
console.log(areFilledArrays(b)); // wahr
console.log(areFilledArrays(c)); // wahr
console.log(areFilledArrays(d)); // falsch
console.log(areFilledArrays(e)); // falsch
console.log(areFilledArrays(f)); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areFilledArrays(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 11:56:11 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>