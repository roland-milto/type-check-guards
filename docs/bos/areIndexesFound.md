# areIndexesFound

## Opis

`areIndexesFound` provjerava da li je vrijednost neprazan niz čiji su elementi svi važeći indeksi, vraćajući `true` ako
jesu, a `false` u suprotnom.

### Slučaj upotrebe

Validirajte podatke koje je dostavio korisnik ili vanjske podatke (npr. parsirani JSON) za koje se očekuje da su lista
indeksa prije nego što ih upotrijebite za pristup nizovima ili njihovo isijecanje.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areIndexesFound` za provjeru nepoznatog ulaza prije nego što njegove elemente tretirate kao indekse niza;
> vraća `false` za prazne nizove i za nizove koji sadrže vrijednosti koje nisu indeksi.

### Prednosti

- Vraća `true` samo kada je ulaz popunjen niz i svaki element je važeći indeks.
- Brzo prekida: vraća `false` čim se naiđe na element koji nije indeks.
- Korisno kao zaštitna provjera prije korištenja vrijednosti kao pozicija ili pomaka u nizu.

## Upotreba

### Sintaksa

Funkcija:

- `areIndexesFound(array)`

Parametri:

- `array`: Niz koji se provjerava radi usklađenosti s indeksima.

### Lokalni uvoz funkcije

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // tačno
console.log(areIndexesFound(b)); // netačno
console.log(areIndexesFound(c)); // netačno

if (areIndexesFound(a)) {
  // Ovdje je potvrđeno da je `a` popunjen niz indeksa.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areIndexesFound(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 00:41:08 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>