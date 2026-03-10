# isHexadecimal

## Opis

`isHexadecimal` provjerava da li je data vrijednost heksadecimalni string literal s obaveznim prefiksom `0x`/`0X`.

### Slučaj upotrebe

Koristite `isHexadecimal` za validaciju konfiguracijskih vrijednosti, polja u API payloadu ili CLI argumenata koji
moraju biti navedeni kao heksadecimalni string literali (npr. ID-jevi, maske ili adrese) i ne smiju sadržavati razmake
oko vrijednosti.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isHexadecimal` kada trebate validirati korisnički unos ili serijalizirane podatke kao strogi heksadecimalni
> literal string (uključujući prefiks `0x`/`0X`) prije parsiranja ili konverzije.

### Prednosti

- Provjerava da li je vrijednost string i da li odgovara strogom formatu heksadecimalnog literala (zahtijeva prefiks
  `0x`/`0X`).
- Odbacuje stringove s vodećim ili završnim razmacima, što pomaže izbjeći slučajno prihvatanje popunjenog unosa.
- Podržava opcionalni predznak i ne razlikuje velika/mala slova za prefiks i cifre, predvidljivo vraćajući `true`/
  `false`.

## Upotreba

### Sintaksa

Funkcija:

- `isHexadecimal(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // tačno
isHexadecimal("-0Xff"); // tačno
isHexadecimal("1A2B"); // netačno (nedostaje prefiks)
isHexadecimal(" 0x1A2B"); // netačno (vodeći razmak)
isHexadecimal(0x1a2b); // netačno (nije string)
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isHexadecimal(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 22:57:56 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>