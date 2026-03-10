# isHexadecimal

## Opis

`isHexadecimal` preveri, ali je dana vrednost heksadecimalni nizovni literal z obvezno predpono `0x`/`0X`.

### Primer uporabe

Uporabite `isHexadecimal` za preverjanje konfiguracijskih vrednosti, polj v API payloadu ali argumentov CLI, ki morajo
biti podani kot heksadecimalni nizovni literali (npr. ID-ji, maske ali naslovi) in ne smejo vsebovati okoliških
presledkov.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isHexadecimal`, ko morate uporabniški vnos ali serializirane podatke preveriti kot strog heksadecimalni
> nizovni literal (vključno s predpono `0x`/`0X`) pred razčlenjevanjem ali pretvorbo.

### Prednosti

- Preveri, da je vrednost niz in da ustreza strogemu formatu heksadecimalnega literala (zahteva predpono `0x`/`0X`).
- Zavrne nize z vodilnimi ali zaključnimi presledki, kar pomaga preprečiti nenamerno sprejemanje oblazinjenega vnosa.
- Podpira neobvezen predznak in ni občutljiv na velikost črk pri predponi in števkah, pri čemer predvidljivo vrne
  `true`/`false`.

## Uporaba

### Skladnja

Funkcija:

- `isHexadecimal(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (manjka predpona)
isHexadecimal(" 0x1A2B"); // false (vodilni presledek)
isHexadecimal(0x1a2b); // false (ni niz)
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isHexadecimal(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 23:00:48 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>