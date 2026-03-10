# areRegExes

## Opis

`areRegExes` preveri, ali je vrednost zapolnjen seznam, ki vsebuje samo objekte `RegExp`.

### Primer uporabe

Preverite, da je konfiguracijska možnost (npr. seznam vzorcev za dovoljenje/prepoved) neprazen seznam regularnih
izrazov, preden jo uporabite za ujemanje.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areRegExes`, da zožite tip `unknown` na `RegExp[]` pred iteriranjem ali sestavljanjem vzorcev.

### Prednosti

- Zagotavlja, da je vrednost neprazen seznam, kjer je vsak element primerek `RegExp`.
- Nudi preprosto logično varovalo (`true`/`false`) za preverjanje uporabniškega vnosa ali konfiguracije.
- Pomaga preprečiti napake med izvajanjem, ko kasnejša koda predpostavlja, da vsi elementi podpirajo operacije z
  regularnimi izrazi.

## Uporaba

### Skladnja

Funkcija:

- `areRegExes(array)`

Parametri:

- `array`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns je tukaj polje objektov RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areRegExes(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 23:21:34 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>