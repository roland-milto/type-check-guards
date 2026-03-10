# areArrays

## Opis

`areArrays` određuje je li vrijednost popunjeno dvodimenzionalno polje čiji su svi elementi polja.

### Slučaj uporabe

Koristite `areArrays` za provjeru tabličnih ili matričnih ulaza (npr. CSV redaka, podataka mreže ili grupiranih popisa)
prije izvođenja operacija nad redcima/stupcima; vraća `false` ako ulaz nije polje, ako je prazan ili sadrži bilo koji
element koji nije polje.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areArrays` kada trebate osigurati da je vrijednost neprazno 2D polje i da je svaki red polje prije
> iteriranja ili indeksiranja u ugniježđena polja.

### Prednosti

- Provjerava je li ulaz neprazno dvodimenzionalno polje u kojem je svaki element polje.
- Vraća jednostavan booleovski rezultat (`true`/`false`) prikladan za zaštitne provjere i rane izlaze.
- Pomaže spriječiti pogreške u izvođenju kada kasniji kod pretpostavlja operacije nad ugniježđenim poljima (npr.
  mapiranje redaka).

## Uporaba

### Sintaksa

Funkcija:

- `areArrays(array)`

Parametri:

- `array`: Ulaz koji treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value je 2D polje s poljima kao elementima
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areArrays(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 13:39:48 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>