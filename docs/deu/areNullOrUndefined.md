# areNullOrUndefined

## Beschreibung

Prüft, ob alle Elemente im angegebenen Array `null` oder `undefined` sind.

### Anwendungsfall

Validiere, dass eine Liste optionaler Felder keine tatsächlichen Werte enthält (nur `null`/`undefined`), bevor du
entscheidest, die Verarbeitung zu überspringen oder einen Zustand „keine Werte angegeben“ anzuzeigen.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areNullOrUndefined`, wenn du prüfen musst, dass ein Array ausschließlich fehlende Werte (`null`/`undefined`)
> enthält. Beachte, dass es für ein leeres Array `false` zurückgibt.

### Vorteile

- Gibt nur dann `true` zurück, wenn jedes Element `null` oder `undefined` ist.
- Gibt für leere Arrays `false` zurück und hilft so, „keine Daten“ von „alle Werte fehlen“ zu unterscheiden.
- Funktioniert mit `unknown[]` und ist damit sicher verwendbar, bevor Typen eingegrenzt werden.

## Verwendung

### Syntax

Funktion:

- `areNullOrUndefined(array)`

Parameter:

- `array`: Das zu prüfende Array.

### Lokaler Funktionen-Import

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === wahr

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === falsch

const empty = areNullOrUndefined([]);
// empty === falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areNullOrUndefined(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 00:29:29 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>