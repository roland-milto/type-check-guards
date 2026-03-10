# isStream

## Beschreibung

`isStream` prüft, ob ein gegebener Wert ein Stream-Objekt ist (Node.js-Stream-ähnlich, `ReadableStream` oder
`WritableStream`).

### Anwendungsfall

Validiere Eingaben, die entweder einfache Objekte oder Streams sein können (z. B. Datei-Uploads, HTTP-Bodies oder
Verarbeitungspipelines), und verzweige die Logik danach, ob der Wert ein Stream ist.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isStream`, um `unknown` einzugrenzen, bevor du Stream-Methoden aufrufst; es erkennt Node.js-Stream-ähnliche
> Objekte (über `pipe`/`on`) und Web Streams (`ReadableStream`/`WritableStream`), wenn diese Globals existieren.

### Vorteile

- Erkennt gängige Node.js-Stream-ähnliche Objekte sicher, indem auf die Funktionen `pipe` und `on` geprüft wird.
- Unterstützt auch Web Streams, indem `ReadableStream` und `WritableStream` erkannt werden, sofern verfügbar.
- Gibt ein einfaches boolesches Ergebnis (`true`/`false`) zurück, geeignet für Guards und Verzweigungslogik.

## Verwendung

### Syntax

Funktion:

- `isStream(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream ist stream-ähnlich; du kannst gängige Stream-APIs sicher verwenden
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isStream(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isStream](../_analysis/isStream.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 23:39:26 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>