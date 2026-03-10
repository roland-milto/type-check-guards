# isStream

## Beskrivelse

`isStream` sjekker om en gitt verdi er et strømobjekt (Node.js-strømlignende, `ReadableStream` eller `WritableStream`).

### Brukstilfelle

Valider inndata som kan være enten vanlige objekter eller strømmer (f.eks. filopplastinger, HTTP-kropper eller
behandlingspipelines) og forgren logikken basert på om verdien er en strøm.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isStream` til å snevre inn `unknown` før du kaller strømmmetoder; den gjenkjenner Node.js-strømlignende
> objekter (via `pipe`/`on`) og Web Streams (`ReadableStream`/`WritableStream`) når disse globalene finnes.

### Fordeler

- Oppdager trygt vanlige Node.js-strømlignende objekter ved å sjekke etter `pipe`- og `on`-funksjoner.
- Støtter også Web Streams ved å gjenkjenne `ReadableStream` og `WritableStream` når de er tilgjengelige.
- Returnerer et enkelt boolsk resultat (`true`/`false`) som egner seg for guards og forgreningslogikk.

## Bruk

### Syntaks

Funksjon:

- `isStream(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream e swana le stream; o ka šomiša ka polokego di-API tša tlwaelo tša stream
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isStream(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isStream](../_analysis/isStream.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 23:42:21 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>