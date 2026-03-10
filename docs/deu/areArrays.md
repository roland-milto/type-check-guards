# areArrays

## Beschreibung

`areArrays` bestimmt, ob ein Wert ein gefülltes zweidimensionales Array ist, dessen Elemente allesamt Arrays sind.

### Anwendungsfall

Verwende `areArrays`, um tabellarische oder matrixartige Eingaben (z. B. CSV-Zeilen, Grid-Daten oder gruppierte Listen)
zu validieren, bevor du Zeilen-/Spalten-Operationen ausführst; es gibt `false` zurück, wenn die Eingabe kein Array ist,
leer ist oder ein beliebiges Nicht-Array-Element enthält.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areArrays`, wenn du sicherstellen musst, dass ein Wert ein nicht leeres 2D-Array ist und dass jede Zeile ein
> Array ist, bevor du über verschachtelte Arrays iterierst oder in sie indexierst.

### Vorteile

- Validiert, dass die Eingabe ein nicht leeres zweidimensionales Array ist, bei dem jedes Element ein Array ist.
- Gibt ein einfaches boolesches Ergebnis (`true`/`false`) zurück, geeignet für Guards und frühe Abbrüche.
- Hilft, Laufzeitfehler zu vermeiden, wenn späterer Code von verschachtelten Array-Operationen ausgeht (z. B. beim
  Mappen von Zeilen).

## Verwendung

### Syntax

Funktion:

- `areArrays(array)`

Parameter:

- `array`: Die zu prüfende Eingabe.

### Lokaler Funktionen-Import

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value ist ein 2D-Array mit Arrays als Elementen
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areArrays(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 13:39:18 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>