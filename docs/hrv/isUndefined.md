# isUndefined

## Opis

Provjerava je li zadana vrijednost `undefined`.

### Slučaj uporabe

Koristite `isUndefined` za zaštitu opcionalnih ulaza, otkrivanje nedostajućih svojstava ili razlikovanje između “nije
pruženo” (`undefined`) i “eksplicitno prazno” (`null`).

> **Napomena za TypeScript korisnike:**
>
> Koristite `isUndefined` kada trebate specifično detektirati `undefined` (ne `null`). Sigurno je jer se oslanja na
`typeof value === "undefined"`.

### Prednosti

- Pruža jasnu, eksplicitnu provjeru za `undefined` pomoću `typeof`, izbjegavajući rubne slučajeve s nedeklariranim
  varijablama.
- Vraća jednostavan booleovski rezultat (`true`/`false`) prikladan za guardove, grananje i logiku validacije.
- Pomaže razlikovati `undefined` od drugih “praznih” vrijednosti poput `null`, `0`, `""` ili `NaN`.

## Uporaba

### Sintaksa

Funkcija:

- `isUndefined(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x je ovdje undefined
} else {
  // x ovdje nije undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isUndefined(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 14:02:54 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>