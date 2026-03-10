# areStreams

## Kuvaus

`areStreams` määrittää, onko arvo ei-tyhjä taulukko, jossa jokainen alkio on `Stream`.

### Käyttötapaus

Validoi käyttäjän antamat tai dynaamisesti rakennetut kokoelmat (esim. useat tiedoston lukustreamit) ennen niiden
putkitusta, jatkamista tai muuta ryhmänä käsittelyä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areStreams`-funktiota tuntemattoman syötteen validointiin ennen kuin käsittelet sitä `Stream[]`-tyyppinä; se
> palauttaa `true` vain, kun arvo on ei-tyhjä taulukko ja jokainen alkio on `Stream`.

### Edut

- Varmistaa, että syöte on ei-tyhjä taulukko, jossa jokainen alkio on `Stream`.
- Tarjoaa yksinkertaisen `true`/`false`-suojauksen stream-kokoelmien validointiin ennen käsittelyä.
- Epäonnistuu nopeasti: palauttaa `false` heti, kun löytyy alkio, joka ei ole `Stream`.
- Auttaa ehkäisemään ajonaikaisia virheitä, kun koodi olettaa kaikkien alkioiden olevan `Stream`-instansseja.

## Käyttö

### Syntaksi

Funktio:

- `areStreams(array)`

Parametrit:

- `array`: Taulukko, joka tarkistetaan Stream-olioiden varalta.

### Funktion paikallinen tuonti

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input on täytetty Stream-olioiden taulukko
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areStreams(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 23:33:39 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>