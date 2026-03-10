# areIndexesFound

## Opis

`areIndexesFound` preveri, ali je vrednost neprazno polje, katerega elementi so vsi veljavni indeksi; vrne `true`, če
so, sicer pa `false`.

### Primer uporabe

Preverite podatke, ki jih posreduje uporabnik ali zunanji vir (npr. razčlenjen JSON), za katere se pričakuje, da so
seznam indeksov, preden jih uporabite za dostop do polj ali za rezanje polj.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areIndexesFound` za preverjanje neznanega vhoda, preden njegove elemente obravnavate kot indekse polja;
> vrne `false` za prazna polja in za polja, ki vsebujejo vrednosti, ki niso indeksi.

### Prednosti

- Vrne `true` samo, ko je vhod zapolnjeno polje in je vsak element veljaven indeks.
- Hitro odpove: vrne `false` takoj, ko naleti na element, ki ni indeks.
- Uporabno kot varovalo pred uporabo vrednosti kot položajev ali odmikov v polju.

## Uporaba

### Skladnja

Funkcija:

- `areIndexesFound(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede skladnosti z indeksi.

### Lokalni uvoz funkcije

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Tukaj je `a` potrjeno kot zapolnjeno polje indeksov.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areIndexesFound(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 01:04:06 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>