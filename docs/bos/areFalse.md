# areFalse

## Opis

`areFalse` provjerava da li su svi elementi u dostavljenom nizu strogo booleanska vrijednost `false`.

### Slučaj upotrebe

Validirajte da su lista feature flagova, provjera ili rezultata guardova svi `false` prije nastavka (npr. potvrdite da
nema blokirajućih uslova).

> **Napomena za TypeScript korisnike:**
>
> Koristite `areFalse` kada vam je potrebna stroga validacija da niz nije prazan i da sadrži samo booleansku vrijednost
`false`.

### Prednosti

- Osigurava da je svaki element strogo `false` (bez prisilne konverzije truthy/falsey vrijednosti).
- Vraća `false` za ne-nizove ili prazne nizove tako što zahtijeva popunjen niz putem `isFilledArray`.
- Zaustavlja se rano na prvom elementu koji nije `false` radi efikasnosti.

## Upotreba

### Sintaksa

Funkcija:

- `areFalse(array)`

Parametri:

- `array`: Niz koji se provjerava, koji sadrži elemente bilo kojeg tipa.

### Lokalni uvoz funkcije

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // tačno
const b = areFalse([false, true, false]);  // netačno
const c = areFalse([false, "false", false]); // netačno
const d = areFalse([]); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areFalse(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 16:16:20 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>