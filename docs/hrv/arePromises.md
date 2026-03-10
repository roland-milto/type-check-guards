# arePromises

## Opis

`arePromises` određuje jesu li svi elementi u nizu instance `Promise`.

### Slučaj uporabe

Provjerite da dinamički izgrađen ili izvana dostavljen popis sadrži samo promiseove prije njihovog objedinjavanja (npr.
s `Promise.all`).

> **Napomena za TypeScript korisnike:**
>
> Upotrijebite `arePromises` za provjeru `unknown[]` prije pozivanja `Promise.all` ili drugih operacija koje rade samo s
> promiseovima; vraća `false` za prazne nizove.

### Prednosti

- Osigurava da je svaki element `Promise` prije nego što nastavite s logikom specifičnom za promise.
- Vraća `false` za nepune nizove, sprječavajući dvosmislene rezultate za prazne ulaze.
- Korisno kao zaštita u izvođenju pri radu s `unknown[]` iz vanjskih izvora.

## Uporaba

### Sintaksa

Funkcija:

- `arePromises(array)`

Parametri:

- `array`: Niz koji se provjerava na instance Promise.

### Lokalni uvoz funkcije

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values je niz instanci Promise u vrijeme izvođenja
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.arePromises(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 23:48:27 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>