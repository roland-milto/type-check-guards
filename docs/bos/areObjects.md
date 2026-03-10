# areObjects

## Opis

`areObjects` provjerava da li dati popunjeni niz sadrži samo objekte.

### Slučaj upotrebe

Koristite `areObjects` kada primite nepoznat niz (npr. iz parsiranja JSON-a ili eksternih API-ja) i trebate osigurati da
nije prazan i da je svaki element objekt prije iteriranja i pristupanja svojstvima objekta.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areObjects` za validaciju `unknown[]` prije nego što stavke tretirate kao objekte; vraća `false` za prazne
> nizove.

### Prednosti

- Vraća `true` samo kada je ulaz popunjen niz i svaki element je objekt.
- Zaustavlja se ranije i vraća `false` čim se pronađe element koji nije objekt.
- Pomaže u validaciji nepoznatog ulaza prije izvođenja operacija specifičnih za objekte.

## Upotreba

### Sintaksa

Funkcija:

- `areObjects(array)`

Parametri:

- `array`: Niz koji treba provjeriti da li sadrži elemente koji su objekti.

### Lokalni uvoz funkcije

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value je popunjen niz objekata
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areObjects(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 00:08:05 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>