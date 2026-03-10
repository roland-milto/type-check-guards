# isDate

## Opis

`isDate` določi, ali je podana vrednost `Date`, in vrne `true` za primerke `Date` ter `false` v nasprotnem primeru.

### Primer uporabe

Validirajte in zožite neznane vrednosti (npr. podatke zahtevka, konfiguracijske vrednosti ali razčlenjen JSON) pred
izvajanjem operacij `Date`, kot so oblikovanje, primerjave ali klic `toISOString()`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isDate` za zoženje tipa `unknown` na `Date` med izvajanjem; vrne `true` samo za dejanske primerke `Date` (
> ne za nize z datumom).

### Prednosti

- Zagotavlja preprosto izvajalno varovalo za preverjanje, ali je vrednost `Date`.
- Pomaga preprečevati napake tipov, saj zagotovi, da validacijo prestanejo le primerki `Date`.
- Uporabno je za validacijo neznanih vhodov (npr. API payloadov) pred uporabo metod, specifičnih za datume.

## Uporaba

### Skladnja

Funkcija:

- `isDate(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti glede tipa `Date`.

### Lokalni uvoz funkcije

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input je tukaj Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isDate(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isDate](../_analysis/isDate.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 15:47:42 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>