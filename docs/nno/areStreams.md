# areStreams

## Skildring

`areStreams` avgjer om ein verdi er ein utfylt array der kvart element er ein `Stream`.

### Brukstilfelle

Valider brukargjevne eller dynamisk bygde samlingar (t.d. fleire fil-lesestraumar) før du pipar, resumerer eller på
annan måte opererer på dei som ei gruppe.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areStreams` til å validere ukjent input før du handsamar det som `Stream[]`; det returnerer `true` berre når
> verdien er ein ikkje-tom array og kvart element er ein `Stream`.

### Fordelar

- Sikrar at ein input er ein utfylt array der kvart element er ein `Stream`.
- Gjev ein enkel `true`/`false`-guard for å validere straumsamlingar før prosessering.
- Feilar raskt: returnerer `false` så snart eit element som ikkje er `Stream` blir funne.
- Hjelper med å hindre køyretidsfeil når kode føreset at alle element er `Stream`-instansar.

## Bruk

### Syntaks

Funksjon:

- `areStreams(array)`

Parameter:

- `array`: Arrayen som skal sjekkast for Stream-objekt.

### Lokal funksjonsimport

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input er ein fylt array av Stream-objekt
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areStreams(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 23:35:00 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>