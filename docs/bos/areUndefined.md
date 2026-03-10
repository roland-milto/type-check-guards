# areUndefined

## Opis

`areUndefined` provjerava da li je svaki element u dostavljenom nizu `undefined`.

### Slučaj upotrebe

Validirajte da lista opcionalnih rezultata ne sadrži stvarne vrijednosti (samo `undefined`), npr. nakon mapiranja
pretraga gdje su nedostajući unosi predstavljeni kao `undefined`, i želite potvrditi da su sve pretrage bile neuspješne.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areUndefined` kada trebate potvrditi da `unknown[]` sadrži samo vrijednosti `undefined`; vraća `false` za
> prazne nizove i ne-niz/nevažeće ulaze zbog interne provjere `isFilledArray`.

### Prednosti

- Vraća `false` za ne-nizove i prazne nizove tako što zahtijeva popunjen niz putem `isFilledArray`.
- Osigurava da je svaki element `undefined`, a ne samo neki, čineći namjeru eksplicitnom.
- Korisno kao predikat u stilu čuvara pri validaciji nepoznatih ulaznih kolekcija.

## Upotreba

### Sintaksa

Funkcija:

- `areUndefined(array)`

Parametri:

- `array`: Niz koji treba provjeriti na elemente `undefined`.

### Lokalni uvoz funkcije

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // tačno
const r2 = areUndefined(b); // netačno
const r3 = areUndefined(c); // netačno

// Napomena: vraća netačno za prazne nizove
const r4 = areUndefined([]); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areUndefined(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 13:54:55 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>