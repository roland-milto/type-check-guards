# areStreams

## Opis

`areStreams` određuje da li je vrijednost popunjen niz u kojem je svaki element `Stream`.

### Slučaj upotrebe

Validirajte kolekcije koje pruža korisnik ili koje su dinamički izgrađene (npr. više streamova za čitanje datoteka)
prije prosljeđivanja (piping), nastavljanja (resuming) ili drugih operacija nad njima kao grupom.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areStreams` za validaciju nepoznatog ulaza prije nego što ga tretirate kao `Stream[]`; vraća `true` samo
> kada je vrijednost neprazan niz i svaki element je `Stream`.

### Prednosti

- Osigurava da je ulaz popunjen niz u kojem je svaki element `Stream`.
- Pruža jednostavnu `true`/`false` provjeru za validaciju kolekcija streamova prije obrade.
- Brzo prekida: vraća `false` čim se pronađe element koji nije `Stream`.
- Pomaže spriječiti greške u izvođenju kada kod pretpostavlja da su sve stavke instance `Stream`.

## Upotreba

### Sintaksa

Funkcija:

- `areStreams(array)`

Parametri:

- `array`: Niz koji treba provjeriti na Stream objekte.

### Lokalni uvoz funkcije

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input je popunjen niz objekata Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areStreams(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 23:33:00 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>