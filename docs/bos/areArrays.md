# areArrays

## Opis

`areArrays` određuje da li je vrijednost popunjen dvodimenzionalni niz čije su stavke sve nizovi.

### Slučaj upotrebe

Koristite `areArrays` za validaciju tabelarnih ili matričnih ulaza (npr. CSV redovi, podaci mreže ili grupisane liste)
prije izvođenja operacija nad redovima/kolonama; vraća `false` ako ulaz nije niz, ako je prazan ili sadrži bilo koji
element koji nije niz.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areArrays` kada trebate osigurati da je vrijednost neprazan 2D niz i da je svaki red niz prije iteriranja
> ili indeksiranja u ugniježđene nizove.

### Prednosti

- Provjerava da je ulaz neprazan dvodimenzionalni niz u kojem je svaki element niz.
- Vraća jednostavan booleanski rezultat (`true`/`false`) pogodan za guardove i rane izlaze.
- Pomaže spriječiti greške u izvođenju kada kasniji kod pretpostavlja operacije nad ugniježđenim nizovima (npr.
  mapiranje redova).

## Upotreba

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
  // vrijednost je 2D niz s nizovima kao elementima
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areArrays(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 13:38:52 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>