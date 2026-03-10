# isBinary

## Opis

`isBinary` določi, ali je vrednost binarni niz (po želji s predpono `0b`/`0B`) in vrne `true` ali `false`.

### Primer uporabe

Preverite nize, ki jih posreduje uporabnik (npr. polja obrazcev, argumenti CLI, vrednosti konfiguracije), da zagotovite,
da predstavljajo samo binarne števke, po želji s predpono `0b`/`0B`, pred nadaljnjo obdelavo.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isBinary` kot varovalo tipa pred razčlenjevanjem ali pretvorbo niza v `BigInt`/`Number`, da se izognete
> neveljavnemu vnosu.

### Prednosti

- Sprejme binarne nize z ali brez predpone `0b`/`0B`.
- Zavrne prazne nize in nize z vodilnimi/zaključnimi presledki (ASCII ≤ 32).
- Vrne `true`/`false` brez sprožitve izjeme, zato je varno za neznane vnose.

## Uporaba

### Skladnja

Funkcija:

- `isBinary(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // res
const b = isBinary("1010");   // res
const c = isBinary("0b1020"); // napačno
const d = isBinary(0b1010);     // napačno

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isBinary(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 23:11:15 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>