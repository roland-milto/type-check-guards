# areUndefined

## Opis

`areUndefined` preveri, ali je vsak element v podanem polju `undefined`.

### Primer uporabe

Validirajte, da seznam neobveznih rezultatov ne vsebuje dejanskih vrednosti (samo `undefined`), npr. po preslikavi
poizvedb, kjer so manjkajoči vnosi predstavljeni kot `undefined`, in želite potrditi, da so vse poizvedbe spodletele.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areUndefined`, ko morate potrditi, da `unknown[]` vsebuje samo vrednosti `undefined`; vrne `false` za
> prazna polja in za ne-polja/neveljavne vhode zaradi notranjega preverjanja `isFilledArray`.

### Prednosti

- Vrne `false` za ne-polja in prazna polja, saj prek `isFilledArray` zahteva zapolnjeno polje.
- Zagotovi, da je vsak element `undefined`, ne le nekateri, s čimer je namen izrecen.
- Uporabno kot predikat v slogu varovala pri validaciji neznanih vhodnih zbirk.

## Uporaba

### Skladnja

Funkcija:

- `areUndefined(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede elementov `undefined`.

### Lokalni uvoz funkcije

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Opomba: vrne false za prazne tabele
const r4 = areUndefined([]); // false
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areUndefined(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 13:57:55 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>