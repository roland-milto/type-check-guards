# areStreams

## Apraksts

`areStreams` nosaka, vai vērtība ir aizpildīts masīvs, kurā katrs elements ir `Stream`.

### Lietošanas gadījums

Validēt lietotāja sniegtas vai dinamiski veidotas kolekcijas (piem., vairākas failu lasīšanas straumes) pirms to
pārsūtīšanas (piping), atsākšanas (resuming) vai citām darbībām ar tām kā grupu.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areStreams`, lai validētu nezināmu ievadi pirms tās apstrādes kā `Stream[]`; tā atgriež `true` tikai tad,
> ja vērtība ir netukšs masīvs un katrs elements ir `Stream`.

### Priekšrocības

- Nodrošina, ka ievade ir aizpildīts masīvs, kurā katrs elements ir `Stream`.
- Nodrošina vienkāršu `true`/`false` pārbaudi straumju kolekciju validēšanai pirms apstrādes.
- Ātri pārtrauc: atgriež `false`, tiklīdz tiek atrasts elements, kas nav `Stream`.
- Palīdz novērst izpildlaika kļūdas, kad kods pieņem, ka visi vienumi ir `Stream` instancēs.

## Lietošana

### Sintakse

Funkcija:

- `areStreams(array)`

Parametri:

- `array`: Masīvs, kas jāpārbauda attiecībā uz Stream objektiem.

### Lokāls funkcijas imports

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input ir aizpildīts Stream objektu masīvs
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areStreams(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 23:34:32 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>