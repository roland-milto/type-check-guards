# isEmpty

## Opis

Određuje je li zadana vrijednost prazna, vraćajući `true` za `null`, `undefined`, prazne/nizove s razmacima, prazna
polja, prazne `Map`/`Set` ili objekte bez vlastitih nabrojivih svojstava.

### Slučaj uporabe

Koristite `isEmpty` za validaciju unosa i otkrivanje nedostajućih/praznih vrijednosti kroz više tipova podataka (npr.
polja obrasca, API payloadovi, konfiguracijski objekti) gdje `null`, `undefined`, nizovi s razmacima, prazne kolekcije i
objekti bez svojstava trebaju biti tretirani kao prazni.

> **Napomena za TypeScript korisnike:**
>
> `isEmpty` je pomoćna funkcija koja vraća boolean (nije TypeScript predikat tipa), pa sama po sebi ne sužava tipove;
> koristite je za validaciju/grananje umjesto za sužavanje u vrijeme kompilacije.

### Prednosti

- Tretira `null` i `undefined` kao `true` pri provjerama praznine.
- Smatra nizove koji sadrže samo razmake praznima tako da ih obrezuje prije provjere duljine.
- Podržava uobičajene tipove spremnika (polja, `Map`, `Set`) i obične objekte bez vlastitih nabrojivih svojstava.
- Izbjegava brojanje naslijeđenih svojstava korištenjem provjera `hasOwnProperty`.
- Vraća jednostavan booleovski rezultat (`true`/`false`) prikladan za guardove i validaciju.

## Uporaba

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isEmpty(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 16:18:43 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>