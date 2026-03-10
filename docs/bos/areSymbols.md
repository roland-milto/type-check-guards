# areSymbols

## Opis

Provjerava da li je ulaz popunjen niz čiji su svi elementi simboli, vraćajući `true` ili `false`.

### Slučaj upotrebe

Validirajte da je polje konfiguracije (npr. lista jedinstvenih ključeva predstavljenih kao simboli) neprazan niz koji
sadrži samo simbole prije nego što ga koristite u API-jima koji zahtijevaju `symbol[]`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areSymbols` za validaciju nepoznatog ulaza prije nego što ga tretirate kao `symbol[]`; vraća `false` za
> vrijednosti koje nisu nizovi i za prazne nizove.

### Prednosti

- Vraća `true` samo kada je ulaz neprazan niz i svaki element je simbol.
- Sprječava lažno pozitivne rezultate odbacivanjem vrijednosti koje nisu nizovi i praznih nizova putem interne provjere
  popunjenog niza.
- Korisno kao runtime čuvar tipa za validaciju lista koje sadrže samo simbole prije daljnje obrade.

## Upotreba

### Sintaksa

Funkcija:

- `areSymbols(array)`

Parametri:

- `array`: Niz koji se provjerava da li sadrži elemente tipa simbol.

### Lokalni uvoz funkcije

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a je niz koji sadrži samo simbole u vrijeme izvršavanja
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areSymbols(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 14:20:54 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>