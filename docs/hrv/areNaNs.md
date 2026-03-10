# areNaNs

## Opis

`areNaNs` provjerava jesu li svi elementi u nizu `NaN` i vraća `true` samo ako je svaki element `NaN`.

### Slučaj uporabe

Validirajte dolazne podatke gdje se `NaN` koristi kao sentinel vrijednost i morate osigurati da se cijeli niz sastoji
isključivo od `NaN` (npr. otkrivanje numeričke serije u kojoj sve vrijednosti nedostaju).

> **Napomena za TypeScript korisnike:**
>
> Koristite `areNaNs` kada trebate provjeriti da niz sadrži isključivo numeričku vrijednost `NaN` (bez koercije iz niza
> u broj).

### Prednosti

- Vraća `true` samo kada je svaki element `NaN` (stroga provjera svih elemenata).
- Ne pretvara (ne koercira) nizove u brojeve; vrijednosti poput "NaN" ostaju ne-`NaN` i čine rezultat `false`.
- Vraća `false` za nepopunjene nizove, sprječavajući slučajni `true` na praznom ulazu.

## Uporaba

### Sintaksa

Funkcija:

- `areNaNs(array)`

Parametri:

- `array`: Niz koji se provjerava na vrijednosti `NaN`.

### Lokalni uvoz funkcije

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // istina
const b = areNaNs([NaN, 1, NaN]); // laž
const c = areNaNs([NaN, "NaN", NaN]); // laž
const d = areNaNs([NaN, null, NaN]); // laž
const e = areNaNs([] as unknown[]); // laž

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areNaNs(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 15:51:39 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>