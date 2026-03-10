# areNumerics

## Opis

`areNumerics` preveri, ali je vrednost neprazno polje, v katerem so vsi elementi številski.

### Primer uporabe

Uporabite `areNumerics` za validacijo zunanjih ali netipiziranih podatkov (npr. JSON payloadov, parametrov poizvedbe,
vnosa obrazcev) pred izračunom vsot, povprečij ali drugih številskih operacij, s čimer zagotovite, da je vhod neprazno
številsko polje, sicer pa vrne `false`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areNumerics` kot varovalo za vhod tipa `unknown`, preden ga obravnavate kot številsko polje; za ne-polja in
> prazna polja vrne `false`.

### Prednosti

- Vrne `true` samo, ko je vhod neprazno polje in je vsak element številski.
- Hitro odpove: preneha preverjati takoj, ko najde neštevilski element, in vrne `false`.
- Pomaga varno validirati neznan vhod pred izvajanjem številskih operacij.

## Uporaba

### Skladnja

Funkcija:

- `areNumerics(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede številskih elementov.

### Lokalni uvoz funkcije

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // res
console.log(areNumerics(b)); // res
console.log(areNumerics(c)); // napačno
console.log(areNumerics(d)); // napačno
console.log(areNumerics(e)); // napačno

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areNumerics(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 16:07:20 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>