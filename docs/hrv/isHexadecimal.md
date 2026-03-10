# isHexadecimal

## Opis

`isHexadecimal` provjerava je li zadana vrijednost heksadekadni literalni niz s obaveznim prefiksom `0x`/`0X`.

### Slučaj uporabe

Koristite `isHexadecimal` za provjeru konfiguracijskih vrijednosti, polja u API payloadu ili argumenata CLI-ja koji
moraju biti zadani kao heksadekadni literalni nizovi (npr. ID-ovi, maske ili adrese) i ne smiju sadržavati okolne
razmake.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isHexadecimal` kada trebate provjeriti korisnički unos ili serijalizirane podatke kao strogi heksadekadni
> literalni niz (uključujući prefiks `0x`/`0X`) prije parsiranja ili pretvaranja.

### Prednosti

- Provjerava je li vrijednost niz znakova i odgovara strogom formatu heksadekadnog literala (zahtijeva prefiks `0x`/
  `0X`).
- Odbacuje nizove s vodećim ili završnim razmacima, što pomaže izbjeći slučajno prihvaćanje ulaza s popunom.
- Podržava opcionalni predznak i ne razlikuje velika/mala slova za prefiks i znamenke, predvidljivo vraćajući `true`/
  `false`.

## Uporaba

### Sintaksa

Funkcija:

- `isHexadecimal(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // točno
isHexadecimal("-0Xff"); // točno
isHexadecimal("1A2B"); // netočno (nedostaje prefiks)
isHexadecimal(" 0x1A2B"); // netočno (početna bjelina)
isHexadecimal(0x1a2b); // netočno (nije niz znakova)
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isHexadecimal(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 22:58:53 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>