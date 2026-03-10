# isEmpty

## Opis

Određuje da li je data vrijednost prazna, vraćajući `true` za `null`, `undefined`, prazne/stringove sa razmacima, prazne
nizove, prazne `Map`/`Set`, ili objekte bez vlastitih nabrojivih svojstava.

### Slučaj upotrebe

Koristite `isEmpty` za validaciju ulaza i otkrivanje nedostajućih/praznih vrijednosti kroz više tipova podataka (npr.
polja formulara, API payloadovi, konfiguracijski objekti) gdje `null`, `undefined`, stringovi sa razmacima, prazne
kolekcije i objekti bez svojstava trebaju biti tretirani kao prazni.

> **Napomena za TypeScript korisnike:**
>
> `isEmpty` je pomoćna funkcija koja vraća boolean (nije TypeScript predikat tipa), pa sama po sebi ne sužava tipove;
> koristite je za validaciju/grananje umjesto sužavanja u vrijeme kompajliranja.

### Prednosti

- Tretira `null` i `undefined` kao `true` pri provjerama praznine.
- Smatra stringove koji sadrže samo razmake praznim tako što ih skrati (trim) prije provjere dužine.
- Podržava uobičajene tipove kontejnera (nizove, `Map`, `Set`) i obične objekte bez vlastitih nabrojivih (enumerable)
  svojstava.
- Izbjegava brojanje naslijeđenih svojstava korištenjem provjera `hasOwnProperty`.
- Vraća jednostavan boolean rezultat (`true`/`false`) pogodan za guardove i validaciju.

## Upotreba

### Sintaksa

Funkcija:

- `isEmpty(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti na prazninu.

### Lokalni uvoz funkcije

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isEmpty(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 16:17:34 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>