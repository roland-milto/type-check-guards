# isStream

## Bschrybig

`isStream` prüeft, öb en gegebene Wert es Stream-Objäkt isch (Node.js-Stream-ähnlig, `ReadableStream` oder
`WritableStream`).

### Aawändig

Validier Inputs, wo entweder eifachi Objäkt oder Streams chönd sii (z.B. Datei-Uploads, HTTP-Bodies oder
Verarbeitigs-Pipelines), und verzweig d Logik je nachdem, öb de Wert en Stream isch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isStream`, zum `unknown` z verengere, bevor du Stream-Methoden ufrüefsch; es erkennt Node.js-Stream-ähnligi
> Objäkt (über `pipe`/`on`) und Web Streams (`ReadableStream`/`WritableStream`), wänn die Globals existiered.

### Vorteil

- Erkennt gängigi Node.js-Stream-ähnligi Objäkt sicher, indem es uf `pipe`- und `on`-Funktione prüeft.
- Unterstützt au Web Streams, indem es `ReadableStream` und `WritableStream` erkennt, wänn si verfüegbar sind.
- Git es eifachs Boolesches Resultat (`true`/`false`) zrugg, geeignet für Guards und Verzweigungslogik.

## Verwendig

### Syntax

Funktion:

- `isStream(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream isch stream-ähnlich; du chasch d gmeinsame Stream-APIs sicher verwände
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isStream(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isStream](../_analysis/isStream.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 23:39:47 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>