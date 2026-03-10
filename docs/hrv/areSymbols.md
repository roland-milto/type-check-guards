# areSymbols

## Opis

Provjerava je li ulaz popunjen niz čiji su elementi svi simboli te vraća `true` ili `false`.

### Slučaj uporabe

Provjerite da je polje konfiguracije (npr. popis jedinstvenih ključeva predstavljenih simbolima) neprazan niz koji
sadrži samo simbole prije nego što ga upotrijebite u API-jima koji zahtijevaju `symbol[]`.

> **Napomena za TypeScript korisnike:**
>
> Upotrijebite `areSymbols` za provjeru nepoznatog ulaza prije nego što ga tretirate kao `symbol[]`; vraća `false` za
> vrijednosti koje nisu nizovi i za prazne nizove.

### Prednosti

- Vraća `true` samo kada je ulaz neprazan niz i svaki element je simbol.
- Sprječava lažno pozitivne rezultate odbacivanjem vrijednosti koje nisu nizovi i praznih nizova putem interne provjere
  popunjenog niza.
- Korisno kao runtime čuvar tipa za provjeru popisa koji sadrže samo simbole prije daljnje obrade.

## Uporaba

### Sintaksa

Funkcija:

- `areSymbols(array)`

Parametri:

- `array`: Niz koji se provjerava s obzirom na elemente tipa simbol.

### Lokalni uvoz funkcije

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a je polje koje u izvođenju sadrži samo simbole
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areSymbols(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 14:21:55 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>