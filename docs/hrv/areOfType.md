# areOfType

## Opis

Provjerava jesu li svi elementi u zadanom `array` specificiranog `type`.

### Slučaj uporabe

Koristite `areOfType` za provjeru nepoznatog ulaza (npr. parsirani JSON, API payloadovi, korisnički unos) prije
izvođenja operacija specifičnih za tip nad svakim elementom niza.

> **Napomena za TypeScript korisnike:**
>
> Budući da je `areOfType` čuvar tipa, TypeScript sužava niz unutar bloka `if (areOfType(...)) {}` na
`Array<DataTypeOf<T>>`.

### Prednosti

- Pruža TypeScript čuvara tipa: kada vrati `true`, ulaz se sužava na `Array<DataTypeOf<T>>`.
- Provjerava svaki element u odnosu na traženi runtime tip, sprječavajući da prođu nizovi s miješanim tipovima.
- Brzo prekida: vraća `false` čim se pronađe element koji ne odgovara.
- Po dizajnu odbija vrijednosti koje nisu nizovi i prazne nizove (ovisi o `isFilledArray`).

## Uporaba

### Sintaksa

Funkcija:

- `areOfType(array, type)`

Parametri:

- `array`: Niz koji treba provjeriti.
- `type`: Tip prema kojem treba provjeriti svaki element u nizu.

### Lokalni uvoz funkcije

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values je sada number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areOfType(array, type)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 17:09:42 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>