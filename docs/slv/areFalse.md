# areFalse

## Opis

`areFalse` preveri, ali so vsi elementi v podanem polju strogo logična vrednost `false`.

### Primer uporabe

Validirajte, da je seznam zastavic funkcij, preverjanj ali rezultatov varoval (guard) v celoti `false`, preden
nadaljujete (npr. potrdite, da ni prisotnih blokirajočih pogojev).

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areFalse`, ko potrebujete strogo validacijo, da polje ni prazno in vsebuje samo logično vrednost `false`.

### Prednosti

- Zagotovi, da je vsak element strogo `false` (brez pretvorbe truthy/falsey).
- Vrne `false` za ne-polja ali prazna polja, saj prek `isFilledArray` zahteva zapolnjeno polje.
- Zaradi učinkovitosti se ustavi zgodaj pri prvem elementu, ki ni `false`.

## Uporaba

### Skladnja

Funkcija:

- `areFalse(array)`

Parametri:

- `array`: Polje za preverjanje, ki vsebuje elemente poljubnega tipa.

### Lokalni uvoz funkcije

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // res
const b = areFalse([false, true, false]);  // napačno
const c = areFalse([false, "false", false]); // napačno
const d = areFalse([]); // napačno

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areFalse(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 16:18:31 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>