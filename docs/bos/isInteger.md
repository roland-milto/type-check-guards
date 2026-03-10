# isInteger

## Opis

Određuje da li je dati `value` siguran cijeli broj.

### Slučaj upotrebe

Validirajte nepouzdani unos (npr. parametre upita, JSON payloadove, varijable okruženja) prije nego što ga koristite kao
cijeli broj za indekse nizova, paginaciju, brojače ili ID-ove baze podataka.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isInteger` za validaciju nepoznatog unosa prije nego što ga tretirate kao numerički cijeli broj; vraća
`true` samo za vrijednosti gdje `typeof value === "number"` i `Number.isSafeInteger(value)`.

### Prednosti

- Provjerava i tip i numeričku sigurnost: vraća `true` samo kada je ulaz broj i siguran cijeli broj.
- Sprječava uobičajene zamke s numeričkom koercijom: stringovi poput "5" ispravno vraćaju `false`.
- Odbacuje necijele brojeve i nesigurne cijele brojeve, što ga čini pogodnim za ID-ove, brojače i indeksiranje nizova.

## Upotreba

### Sintaksa

Funkcija:

- `isInteger(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti radi statusa cijelog broja.

### Lokalni uvoz funkcije

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // tačno
const b = isInteger(-100);   // tačno
const c = isInteger("5");    // netačno
const d = isInteger(5.5);    // netačno
const e = isInteger(null);   // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isInteger(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 00:49:15 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>