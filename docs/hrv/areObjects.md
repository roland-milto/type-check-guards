# areObjects

## Opis

`areObjects` provjerava sadrži li zadano popunjeno polje samo objekte.

### Slučaj uporabe

Koristite `areObjects` kada primite nepoznato polje (npr. iz parsiranja JSON-a ili vanjskih API-ja) i trebate osigurati
da nije prazno te da je svaki element objekt prije iteriranja i pristupanja svojstvima objekta.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areObjects` za validaciju `unknown[]` prije nego što stavke tretirate kao objekte; vraća `false` za prazna
> polja.

### Prednosti

- Vraća `true` samo kada je ulaz popunjeno polje i svaki element je objekt.
- Zaustavlja se ranije i vraća `false` čim se pronađe element koji nije objekt.
- Pomaže validirati nepoznati ulaz prije izvođenja operacija specifičnih za objekte.

## Uporaba

### Sintaksa

Funkcija:

- `areObjects(array)`

Parametri:

- `array`: Polje koje treba provjeriti sadrži li elemente koji su objekti.

### Lokalni uvoz funkcije

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value je popunjeno polje objekata
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areObjects(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 00:08:56 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>