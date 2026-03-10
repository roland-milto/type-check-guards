# areStreams

## Opis

`areStreams` določa, ali je vrednost zapolnjeno polje, v katerem je vsak element `Stream`.

### Primer uporabe

Validirajte zbirke, ki jih posreduje uporabnik ali so dinamično zgrajene (npr. več tokov branja datotek), preden jih
preusmerite (pipe), nadaljujete (resume) ali kako drugače z njimi upravljate kot s skupino.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areStreams` za validacijo neznanega vhoda, preden ga obravnavate kot `Stream[]`; vrne `true` samo, ko je
> vrednost neprazno polje in je vsak element `Stream`.

### Prednosti

- Zagotovi, da je vhod zapolnjeno polje, kjer je vsak element `Stream`.
- Omogoča preprosto preverjanje `true`/`false` za validacijo zbirk tokov pred obdelavo.
- Hitro odpove: vrne `false` takoj, ko najde element, ki ni `Stream`.
- Pomaga preprečiti napake med izvajanjem, ko koda predpostavlja, da so vsi elementi primerki `Stream`.

## Uporaba

### Skladnja

Funkcija:

- `areStreams(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede objektov Stream.

### Lokalni uvoz funkcije

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input je zapolnjeno polje objektov Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areStreams(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 23:35:35 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>