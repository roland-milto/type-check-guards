# isInteger

## Opis

Određuje je li zadani `value` siguran cijeli broj.

### Slučaj uporabe

Provjerite nepouzdani unos (npr. parametre upita, JSON payloadove, varijable okruženja) prije nego što ga koristite kao
cijeli broj za indekse polja, paginaciju, brojače ili ID-ove baze podataka.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isInteger` za provjeru nepoznatog unosa prije nego što ga tretirate kao numerički cijeli broj; vraća `true`
> samo za vrijednosti gdje je `typeof value === "number"` i `Number.isSafeInteger(value)`.

### Prednosti

- Provjerava i tip i numeričku sigurnost: vraća `true` samo kada je ulaz broj i siguran cijeli broj.
- Sprječava česte zamke s numeričkom prisilom (coercion): nizovi znakova poput "5" ispravno vraćaju `false`.
- Odbacuje necijele i nesigurne cijele brojeve, što ga čini prikladnim za ID-ove, brojače i indeksiranje polja.

## Uporaba

### Sintaksa

Funkcija:

- `isInteger(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti radi statusa cijelog broja.

### Lokalni uvoz funkcije

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // točno
const b = isInteger(-100);   // točno
const c = isInteger("5");    // netočno
const d = isInteger(5.5);    // netočno
const e = isInteger(null);   // netočno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isInteger(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 00:50:01 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>