# areIndexesFound

## Opis

`areIndexesFound` provjerava je li vrijednost neprazno polje čiji su elementi svi valjani indeksi te vraća `true` ako
jesu, a `false` u suprotnom.

### Slučaj uporabe

Provjerite podatke koje je dostavio korisnik ili vanjske podatke (npr. parsirani JSON) za koje se očekuje da su popis
indeksa prije nego što ih upotrijebite za pristup poljima ili za izrezivanje (slice) polja.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areIndexesFound` za provjeru nepoznatog ulaza prije nego što njegove elemente tretirate kao indekse polja;
> vraća `false` za prazna polja i za polja koja sadrže vrijednosti koje nisu indeksi.

### Prednosti

- Vraća `true` samo kada je ulaz popunjeno polje i svaki je element valjani indeks.
- Brzo prekida: vraća `false` čim se naiđe na element koji nije indeks.
- Korisno kao zaštita prije korištenja vrijednosti kao pozicija ili pomaka u polju.

## Uporaba

### Sintaksa

Funkcija:

- `areIndexesFound(array)`

Parametri:

- `array`: Polje koje treba provjeriti u pogledu usklađenosti s indeksima.

### Lokalni uvoz funkcije

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Ovdje je potvrđeno da je `a` popunjeno polje indeksa.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areIndexesFound(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 00:42:04 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>