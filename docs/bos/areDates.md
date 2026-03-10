# areDates

## Opis

`areDates` određuje da li je dati niz popunjen i sadrži samo `Date` objekte, vraćajući `true` samo kada su svi elementi
validni datumi.

### Slučaj upotrebe

Koristite `areDates` za validaciju nepoznatog ulaza (npr. parsirani JSON, podaci iz forme, API payloadovi) prije
pokretanja logike specifične za datume kao što su sortiranje po vremenu, formatiranje ili izračunavanje raspona.

> **Napomena za TypeScript korisnike:**
>
> Vraća `true` samo za neprazne nizove gdje je svaki element `Date`; prazni nizovi daju `false`.

### Prednosti

- Osigurava da niz nije prazan prije validacije njegovog sadržaja, sprječavajući `true` za prazne ulaze.
- Provjerava da je svaki element instanca `Date`, vraćajući `false` odmah pri prvom nepoklapanju.
- Korisno kao provjera u stilu guard-a prije izvođenja operacija specifičnih za datume nad stavkama niza.

## Upotreba

### Sintaksa

Funkcija:

- `areDates(array)`

Parametri:

- `array`: Niz koji treba provjeriti na `Date` objekte.

### Lokalni uvoz funkcije

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // tačno
console.log(areDates(b)); // netačno
console.log(areDates(c)); // netačno

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areDates(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areDates](../_analysis/areDates.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 15:29:34 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>