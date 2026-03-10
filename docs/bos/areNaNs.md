# areNaNs

## Opis

`areNaNs` provjerava da li su svi elementi u nizu `NaN` i vraća `true` samo ako je svaki element `NaN`.

### Slučaj upotrebe

Validirajte dolazne podatke gdje se `NaN` koristi kao sentinel vrijednost i morate osigurati da se cijeli niz sastoji
isključivo od `NaN` (npr. otkrivanje numeričke serije u kojoj sve vrijednosti nedostaju).

> **Napomena za TypeScript korisnike:**
>
> Koristite `areNaNs` kada trebate validirati da niz sadrži isključivo numeričku vrijednost `NaN` (bez prisilne
> konverzije stringa u broj).

### Prednosti

- Vraća `true` samo kada je svaki element `NaN` (stroga provjera svih elemenata).
- Ne pretvara stringove u brojeve; vrijednosti poput "NaN" ostaju ne-`NaN` i čine rezultat `false`.
- Vraća `false` za nepune nizove, sprječavajući slučajni `true` na praznom ulazu.

## Upotreba

### Sintaksa

Funkcija:

- `areNaNs(array)`

Parametri:

- `array`: Niz koji se provjerava na `NaN` vrijednosti.

### Lokalni uvoz funkcije

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // tačno
const b = areNaNs([NaN, 1, NaN]); // netačno
const c = areNaNs([NaN, "NaN", NaN]); // netačno
const d = areNaNs([NaN, null, NaN]); // netačno
const e = areNaNs([] as unknown[]); // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areNaNs(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 15:50:36 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>