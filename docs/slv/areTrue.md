# areTrue

## Opis

Preveri, ali neprazno polje vsebuje samo logične vrednosti `true`.

### Primer uporabe

Uporabite `areTrue` za preverjanje, da je nabor predpogojev ali zastavic funkcionalnosti v celoti omogočen (vse
vrednosti so `true`) pred nadaljevanjem, pri čemer prazne ali nepravilno oblikovane vnose obravnava kot neizpolnjene (
`false`).

> **Opomba za uporabnike TypeScripta:**
>
> `areTrue` vrne `false` za prazno polje in za polja, ki vsebujejo katerokoli vrednost, ki ni strogo `true`.

### Prednosti

- Vrne `true` samo takrat, ko je vsak element strogo `true` in polje ni prazno.
- Hitro odpove: vrne `false` takoj, ko najde vrednost, ki ni `true`.
- Zavrne neveljavne vnose (ne-polja ali prazna polja) tako, da vrne `false`.

## Uporaba

### Skladnja

Funkcija:

- `areTrue(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti, ali vsebuje samo vrednosti `true`.

### Lokalni uvoz funkcije

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areTrue(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 13:52:42 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>