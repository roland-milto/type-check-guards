# areIntegers

## Opis

`areIntegers` određuje da li su svi elementi u datom nizu cijeli brojevi, vraćajući `true` ako jesu i `false` u
suprotnom.

### Slučaj upotrebe

Koristite `areIntegers` za validaciju podataka koje dostavlja korisnik ili eksterni izvori (npr. query parametri, JSON
payloadovi, CSV redovi) kada vaša logika zahtijeva popunjenu listu cjelobrojnih vrijednosti kao što su ID-ovi, brojači,
offseti za paginaciju ili indeksi niza.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areIntegers` kao runtime guard za ulaze tipa `unknown[]` prije nego što ih tretirate kao `number[]` koji
> sadrži samo cijele brojeve. Ako vrati `false`, ulaz ili nije popunjen niz ili sadrži barem jednu vrijednost koja nije
> cijeli broj.

### Prednosti

- Vraća `true` samo kada je svaki element cijeli broj; u suprotnom vraća `false`.
- Pomaže pri validaciji nepoznatog ulaza prije izvođenja operacija koje rade samo s cijelim brojevima (npr.
  indeksiranje, brojanja, ID-ovi).
- Brzo prekida: prestaje provjeravati čim se pronađe element koji nije cijeli broj.

## Upotreba

### Sintaksa

Funkcija:

- `areIntegers(array)`

Parametri:

- `array`: Niz koji se provjerava na elemente koji su cijeli brojevi.

### Lokalni uvoz funkcije

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // tačno
console.log(areIntegers(b)); // tačno
console.log(areIntegers(c)); // netačno

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areIntegers(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 00:57:44 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>