# areNaNs

## Opis

`areNaNs` preveri, ali so vsi elementi v tabeli `NaN`, in vrne `true` samo, če je vsak element `NaN`.

### Primer uporabe

Validirajte vhodne podatke, kjer se `NaN` uporablja kot sentinelna vrednost, in morate zagotoviti, da je celotna tabela
sestavljena izključno iz `NaN` (npr. zaznavanje povsem manjkajoče numerične serije).

> **Opomba za uporabnike TypeScripta:**
>
> `areNaNs` uporabite, ko morate preveriti, da tabela vsebuje samo številsko vrednost `NaN` (brez pretvorbe nizov v
> števila).

### Prednosti

- Vrne `true` samo, ko je vsak element `NaN` (strogo preverjanje vseh elementov).
- Ne pretvarja nizov v števila; vrednosti, kot je "NaN", ostanejo ne-`NaN` in povzročijo, da je rezultat `false`.
- Za nepodane (prazne) tabele vrne `false`, s čimer prepreči nenameren `true` pri praznem vhodu.

## Uporaba

### Skladnja

Funkcija:

- `areNaNs(array)`

Parametri:

- `array`: Tabela, ki jo je treba preveriti glede vrednosti `NaN`.

### Lokalni uvoz funkcije

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // res
const b = areNaNs([NaN, 1, NaN]); // napačno
const c = areNaNs([NaN, "NaN", NaN]); // napačno
const d = areNaNs([NaN, null, NaN]); // napačno
const e = areNaNs([] as unknown[]); // napačno

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areNaNs(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 15:53:21 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>