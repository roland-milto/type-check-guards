# areNaNs

## Beschreibung

`areNaNs` prüft, ob alle Elemente in einem Array `NaN` sind, und gibt nur dann `true` zurück, wenn jedes Element `NaN`
ist.

### Anwendungsfall

Validiere eingehende Daten, bei denen `NaN` als Sentinel-Wert verwendet wird, und du sicherstellen musst, dass das
gesamte Array ausschließlich aus `NaN` besteht (z. B. zum Erkennen einer vollständig fehlenden numerischen Reihe).

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areNaNs`, wenn du validieren musst, dass ein Array ausschließlich den numerischen Wert `NaN` enthält (ohne
> String-zu-Zahl-Umwandlung).

### Vorteile

- Gibt `true` nur zurück, wenn jedes Element `NaN` ist (strikte Prüfung aller Elemente).
- Wandelt Strings nicht in Zahlen um; Werte wie "NaN" bleiben nicht-`NaN` und machen das Ergebnis `false`.
- Gibt bei nicht befüllten Arrays `false` zurück und verhindert so ein versehentliches `true` bei leerer Eingabe.

## Verwendung

### Syntax

Funktion:

- `areNaNs(array)`

Parameter:

- `array`: Das Array, das auf `NaN`-Werte geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // wahr
const b = areNaNs([NaN, 1, NaN]); // falsch
const c = areNaNs([NaN, "NaN", NaN]); // falsch
const d = areNaNs([NaN, null, NaN]); // falsch
const e = areNaNs([] as unknown[]); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areNaNs(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 15:51:02 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>