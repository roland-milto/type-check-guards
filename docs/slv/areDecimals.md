# areDecimals

## Opis

Preveri, ali so vsi elementi v polju decimalna števila in ali je polje zapolnjeno, ter vrne `true` ali `false`.

### Primer uporabe

Validirajte sezname, ki jih posreduje uporabnik (npr. stolpce CSV ali vnose obrazcev), da zagotovite, da polje ni prazno
in da je vsak vnos decimalna vrednost pred razčlenjevanjem ali izračuni.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areDecimals`, ko potrebujete hitro logično preverjanje, da je `unknown[]` neprazno in da je vsak element
> decimalna predstavitev.

### Prednosti

- Zagotovi, da je vhod zapolnjeno polje, preden preveri elemente, s čimer prepreči nenamerno sprejemanje praznih
  seznamov.
- Preveri vsak element z `isDecimal`, zato mešane ali neveljavne vrednosti povzročijo takojšen rezultat `false`.
- Nudi preprost logični izid (`true`/`false`), primeren za varovala (guards) in validacijske tokove z zgodnjim
  vračanjem.

## Uporaba

### Skladnja

Funkcija:

- `areDecimals(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // res
console.log(areDecimals(b)); // napačno
console.log(areDecimals(c)); // napačno
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areDecimals(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 15:59:01 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>