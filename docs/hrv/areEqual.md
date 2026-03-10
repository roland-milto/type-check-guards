# areEqual

## Opis

`areEqual` provjerava jesu li svi elementi u polju jednaki zadanoj očekivanoj vrijednosti te vraća `true` samo za
neprazna polja u kojima se svaka stavka podudara.

### Slučaj uporabe

Provjerite da popis sadrži samo jednu dopuštenu vrijednost (npr. sve statusne oznake su `true`, sve uloge su `"admin"`
ili svi brojčani unosi jednaki su zahtijevanoj konstanti) uz tretiranje praznog unosa kao nevaljanog (`false`).

> **Napomena za TypeScript korisnike:**
>
> Koristite `areEqual` kada trebate strogu provjeru svih stavki; vraća `false` za prazna polja te za bilo koji unos koji
> nije polje ili nije popunjeno.

### Prednosti

- Vraća `true` samo kada svaki element odgovara očekivanoj vrijednosti; u suprotnom vraća `false`.
- Brzo prekida: prestaje provjeravati čim se pronađe element koji ne odgovara.
- Štiti od nevaljanog unosa vraćanjem `false` kada unos nije popunjeno polje.

## Uporaba

### Sintaksa

Funkcija:

- `areEqual(value, expected)`

Parametri:

- `value`: Polje koje se provjerava.
- `expected`: Element s kojim se uspoređuje svaka stavka polja.

### Lokalni uvoz funkcije

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areEqual(value, expected)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 23:50:42 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>