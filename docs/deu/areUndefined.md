# areUndefined

## Beschreibung

`areUndefined` prüft, ob jedes Element in einem bereitgestellten Array `undefined` ist.

### Anwendungsfall

Validiere, dass eine Liste optionaler Ergebnisse keine tatsächlichen Werte enthält (nur `undefined`), z. B. nach dem
Mapping von Lookups, bei denen fehlende Einträge als `undefined` dargestellt werden, und du bestätigen möchtest, dass
alle Lookups fehlgeschlagen sind.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areUndefined`, wenn du sicherstellen musst, dass ein `unknown[]` nur `undefined`-Werte enthält; es gibt
`false` für leere Arrays und Nicht-Arrays/ungültige Eingaben zurück, aufgrund der internen `isFilledArray`-Prüfung.

### Vorteile

- Gibt `false` für Nicht-Arrays und leere Arrays zurück, indem über `isFilledArray` ein gefülltes Array vorausgesetzt
  wird.
- Stellt sicher, dass jedes Element `undefined` ist, nicht nur einige, wodurch die Absicht explizit wird.
- Nützlich als Guard-ähnliches Prädikat beim Validieren unbekannter Eingabe-Collections.

## Verwendung

### Syntax

Funktion:

- `areUndefined(array)`

Parameter:

- `array`: Das Array, das auf `undefined`-Elemente geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // wahr
const r2 = areUndefined(b); // falsch
const r3 = areUndefined(c); // falsch

// Hinweis: gibt für leere Arrays false zurück
const r4 = areUndefined([]); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areUndefined(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 13:55:28 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>