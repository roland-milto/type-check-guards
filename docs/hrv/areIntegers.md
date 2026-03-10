# areIntegers

## Opis

`areIntegers` određuje jesu li svi elementi u zadanom polju cijeli brojevi, vraćajući `true` ako jesu, a `false` u
suprotnom.

### Slučaj uporabe

Koristite `areIntegers` za provjeru podataka koje daje korisnik ili vanjskih podataka (npr. parametri upita, JSON
payload, CSV retci) kada vaša logika zahtijeva popunjeni popis cjelobrojnih vrijednosti kao što su ID-jevi, brojači,
pomaci za paginaciju ili indeksi polja.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areIntegers` kao zaštitu u izvođenju (runtime guard) za ulaze tipa `unknown[]` prije nego što ih tretirate
> kao `number[]` koji sadrži samo cijele brojeve. Ako vrati `false`, ulaz ili nije popunjeno polje ili sadrži barem
> jednu
> vrijednost koja nije cijeli broj.

### Prednosti

- Vraća `true` samo kada je svaki element cijeli broj; u suprotnom vraća `false`.
- Pomaže provjeriti nepoznati ulaz prije izvođenja operacija koje rade samo s cijelim brojevima (npr. indeksiranje,
  brojači, ID-jevi).
- Brzo prekida: prestaje provjeravati čim pronađe element koji nije cijeli broj.

## Uporaba

### Sintaksa

Funkcija:

- `areIntegers(array)`

Parametri:

- `array`: Polje koje se provjerava sadrži li cjelobrojne elemente.

### Lokalni uvoz funkcije

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // istina
console.log(areIntegers(b)); // istina
console.log(areIntegers(c)); // netočno

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areIntegers(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 00:58:37 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>