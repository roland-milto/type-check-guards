# areStreams

## Bschrybig

`areStreams` bestimmt, öb e Wert e gfüllti Array isch, i de jede Element e `Stream` isch.

### Aawändig

Validier vom Benutzer aagee oder dynamisch zämegstellti Sammlige (z. B. mehri Datei-Läse-Streams), bevor mer si pipe,
resume oder susch als Gruppe druf operiert.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areStreams`, zum unbekannti Eingabe z validiere, bevor du si als `Stream[]` behandlisch; es git nume denn
`true` zrugg, wenn dr Wert e nöd-leeri Array isch und jedes Element e `Stream` isch.

### Vorteil

- Stellt sicher, dass e Eingab e gfüllti Array isch, wo jedes Element e `Stream` isch.
- Bietet e eifachi `true`/`false`-Prüefig zum Validierä vo Stream-Sammlige, bevor mer si verarbeit.
- Scheitert schnäll: git `false` zrugg, sobald es Element gfunde wird, wo kei `Stream` isch.
- Hilft, Laufziit-Fehler z verhindere, wenn Code drvo usgaht, dass alli Items `Stream`-Instanze sind.

## Verwendig

### Syntax

Funktion:

- `areStreams(array)`

Parameter:

- `array`: S Array, wo uf Stream-Objekt söll überprüeft werde.

### Lokale Funktions-Import

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input isch es gfüllts Array vo Stream-Objekt
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areStreams(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 23:33:48 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>