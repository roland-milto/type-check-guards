# areFilledArrays

## Opis

`areFilledArrays` preveri, ali je dvodimenzionalni seznam neprazen in ali so vsi njegovi podseznami neprazni.

### Primer uporabe

Uporabite `areFilledArrays` za validacijo tabelaričnega ali matričnega vnosa (npr. vrstice CSV, podatki mreže, združeni
rezultati), da lahko varno predpostavite, da obstaja vsaj en podseznam in da noben podseznam ni prazen.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areFilledArrays`, ko morate zagotoviti, da ima 2D seznam vsaj eno vrstico in da ima vsaka vrstica vsaj en
> element, preden po njem iterirate ali ga indeksirate.

### Prednosti

- Preveri, da zunanji seznam ni prazen in da je tudi vsak notranji seznam neprazen, ter vrne `true` samo, ko sta
  izpolnjena oba pogoja.
- Deluje s poljubnimi tipi elementov znotraj podseznamov (npr. števila, nizi, objekti, gnezdeni seznami), ker preverja
  le, ali so seznami »zapolnjeni«, ne pa vsebine elementov.
- Zagotavlja preprost logični rezultat (`true`/`false`), primeren za varovalke pred obdelavo dvodimenzionalnih podatkov.

## Uporaba

### Skladnja

Funkcija:

- `areFilledArrays(array)`

Parametri:

- `array`: Dvodimenzionalni seznam, ki ga je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // res
console.log(areFilledArrays(b)); // res
console.log(areFilledArrays(c)); // res
console.log(areFilledArrays(d)); // napačno
console.log(areFilledArrays(e)); // napačno
console.log(areFilledArrays(f)); // napačno

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areFilledArrays(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 11:58:53 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>