# areStreams

## Opis

`areStreams` određuje je li vrijednost popunjeno polje u kojem je svaki element `Stream`.

### Slučaj uporabe

Validirajte kolekcije koje pruža korisnik ili se dinamički grade (npr. više streamova za čitanje datoteka) prije
prosljeđivanja (piping), nastavljanja (resuming) ili drugih operacija nad njima kao grupom.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areStreams` za provjeru nepoznatog ulaza prije nego što ga tretirate kao `Stream[]`; vraća `true` samo kada
> je vrijednost neprazno polje i svaki element je `Stream`.

### Prednosti

- Osigurava da je ulaz popunjeno polje u kojem je svaki element `Stream`.
- Pruža jednostavnu `true`/`false` provjeru za validaciju kolekcija streamova prije obrade.
- Brzo prekida: vraća `false` čim se pronađe element koji nije `Stream`.
- Pomaže spriječiti pogreške u izvođenju kada kod pretpostavlja da su sve stavke instance `Stream`.

## Uporaba

### Sintaksa

Funkcija:

- `areStreams(array)`

Parametri:

- `array`: Polje koje treba provjeriti sadrži li Stream objekte.

### Lokalni uvoz funkcije

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input je popunjeni niz objekata Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areStreams(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 23:34:03 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>