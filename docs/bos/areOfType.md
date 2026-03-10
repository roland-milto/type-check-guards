# areOfType

## Opis

Provjerava da li su svi elementi u datom `array` tipa navedenog u `type`.

### Slučaj upotrebe

Koristite `areOfType` za validaciju nepoznatog ulaza (npr. parsirani JSON, API payloadovi, korisnički unos) prije
izvođenja operacija specifičnih za tip nad svakim elementom niza.

> **Napomena za TypeScript korisnike:**
>
> Pošto je `areOfType` čuvar tipa, TypeScript sužava niz unutar bloka `if (areOfType(...)) {}` na
`Array<DataTypeOf<T>>`.

### Prednosti

- Pruža TypeScript čuvar tipa: kada vrati `true`, ulaz se sužava na `Array<DataTypeOf<T>>`.
- Validira svaki element u odnosu na traženi runtime tip, sprječavajući da prođu nizovi s miješanim tipovima.
- Brzo prekida: vraća `false` čim se pronađe element koji ne odgovara.
- Po dizajnu odbija vrijednosti koje nisu nizovi i prazne nizove (zavisi od `isFilledArray`).

## Upotreba

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
const allNumbers = areOfType(mixed, "number"); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areOfType(array, type)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 17:08:45 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>