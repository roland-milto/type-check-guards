# arePromises

## Opis

`arePromises` određuje da li su svi elementi u nizu instance `Promise`.

### Slučaj upotrebe

Validirajte da dinamički izgrađena ili eksterno dostavljena lista sadrži samo promise-ove prije njihovog
objedinjavanja (npr. pomoću `Promise.all`).

> **Napomena za TypeScript korisnike:**
>
> Koristite `arePromises` za validaciju `unknown[]` prije pozivanja `Promise.all` ili drugih operacija koje rade samo s
> promise-ovima; vraća `false` za prazne nizove.

### Prednosti

- Osigurava da je svaki element `Promise` prije nego što nastavite s logikom specifičnom za promise.
- Vraća `false` za nepune nizove, sprječavajući dvosmislene rezultate za prazne ulaze.
- Korisno kao runtime zaštita pri radu s `unknown[]` iz vanjskih izvora.

## Upotreba

### Sintaksa

Funkcija:

- `arePromises(array)`

Parametri:

- `array`: Niz koji treba provjeriti na instance Promise-a.

### Lokalni uvoz funkcije

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values je niz instanci Promise u vrijeme izvršavanja
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.arePromises(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 23:47:38 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>