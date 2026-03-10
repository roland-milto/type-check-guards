# areStreams

## Beschreibung

`areStreams` bestimmt, ob ein Wert ein gefülltes Array ist, in dem jedes Element ein `Stream` ist.

### Anwendungsfall

Validiere vom Benutzer bereitgestellte oder dynamisch erstellte Sammlungen (z. B. mehrere Datei-Lesestreams), bevor du
sie weiterleitest (piping), fortsetzt (resuming) oder anderweitig als Gruppe damit arbeitest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areStreams`, um unbekannte Eingaben zu validieren, bevor du sie als `Stream[]` behandelst; es gibt nur dann
`true` zurück, wenn der Wert ein nicht-leeres Array ist und jedes Element ein `Stream` ist.

### Vorteile

- Stellt sicher, dass eine Eingabe ein gefülltes Array ist, in dem jedes Element ein `Stream` ist.
- Bietet eine einfache `true`/`false`-Prüfung, um Stream-Sammlungen vor der Verarbeitung zu validieren.
- Scheitert früh: gibt `false` zurück, sobald ein Element gefunden wird, das kein `Stream` ist.
- Hilft, Laufzeitfehler zu vermeiden, wenn Code davon ausgeht, dass alle Elemente `Stream`-Instanzen sind.

## Verwendung

### Syntax

Funktion:

- `areStreams(array)`

Parameter:

- `array`: Das Array, das auf Stream-Objekte geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input ist ein gefülltes Array von Stream-Objekten
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areStreams(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 23:33:27 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>