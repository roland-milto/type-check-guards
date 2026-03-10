# areUndefined

## Opis

`areUndefined` provjerava je li svaki element u zadanom nizu `undefined`.

### Slučaj uporabe

Provjerite da popis opcionalnih rezultata ne sadrži stvarne vrijednosti (samo `undefined`), npr. nakon mapiranja
pretraga gdje su nedostajući unosi predstavljeni kao `undefined`, i želite potvrditi da su sve pretrage bile neuspješne.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areUndefined` kada trebate potvrditi da `unknown[]` sadrži samo vrijednosti `undefined`; vraća `false` za
> prazne nizove i za ulaze koji nisu niz/nisu valjani zbog interne provjere `isFilledArray`.

### Prednosti

- Vraća `false` za ne-nizove i prazne nizove tako što zahtijeva popunjeni niz putem `isFilledArray`.
- Osigurava da je svaki element `undefined`, a ne samo neki, čime se namjera čini eksplicitnom.
- Korisno kao predikat u stilu čuvara pri provjeri nepoznatih ulaznih kolekcija.

## Uporaba

### Sintaksa

Funkcija:

- `areUndefined(array)`

Parametri:

- `array`: Niz koji se provjerava na elemente `undefined`.

### Lokalni uvoz funkcije

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Napomena: vraća false za prazne nizove
const r4 = areUndefined([]); // false
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areUndefined(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 13:56:02 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>