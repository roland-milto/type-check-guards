# areArrays

## Opis

`areArrays` določa, ali je vrednost zapolnjeno dvodimenzionalno polje, katerega elementi so vsi polja.

### Primer uporabe

Uporabite `areArrays` za preverjanje tabelaričnih ali matriki podobnih vhodov (npr. vrstice CSV, podatki mreže ali
združeni seznami) pred izvajanjem operacij po vrsticah/stolpcih; vrne `false`, če vhod ni polje, je prazen ali vsebuje
kateri koli element, ki ni polje.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areArrays`, ko morate zagotoviti, da je vrednost neprazno 2D polje in da je vsaka vrstica polje, preden
> iterirate ali indeksirate v gnezdena polja.

### Prednosti

- Preveri, da je vhod neprazno dvodimenzionalno polje, kjer je vsak element polje.
- Vrne preprost logični rezultat (`true`/`false`), primeren za varovala in zgodnje izhode.
- Pomaga preprečiti napake med izvajanjem, ko kasnejša koda predpostavlja operacije nad gnezdenimi polji (npr.
  preslikovanje vrstic).

## Uporaba

### Skladnja

Funkcija:

- `areArrays(array)`

Parametri:

- `array`: Vhod, ki ga je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value je 2D polje z elementi, ki so polja
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areArrays(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 13:41:23 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>