# areDecimals

## Opis

Provjerava da li su svi elementi u nizu decimalni brojevi i da je niz popunjen, vraćajući `true` ili `false`.

### Slučaj upotrebe

Validirajte liste koje su unijeli korisnici (npr. CSV kolone ili unose u formi) kako biste osigurali da niz nije prazan
i da je svaki unos decimalna vrijednost prije parsiranja ili proračuna.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areDecimals` kada vam treba brza booleanska provjera da je `unknown[]` neprazan i da je svaki element
> decimalni zapis.

### Prednosti

- Osigurava da je ulaz popunjen niz prije validacije stavki, sprječavajući slučajno prihvatanje praznih lista.
- Validira svaki element pomoću `isDecimal`, tako da miješane ili nevažeće vrijednosti odmah daju rezultat `false`.
- Pruža jednostavan booleanski ishod (`true`/`false`) pogodan za guardove i tokove validacije s ranim povratkom.

## Upotreba

### Sintaksa

Funkcija:

- `areDecimals(array)`

Parametri:

- `array`: Niz koji treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // tačno
console.log(areDecimals(b)); // netačno
console.log(areDecimals(c)); // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areDecimals(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 15:56:29 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>