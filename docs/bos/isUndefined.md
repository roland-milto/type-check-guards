# isUndefined

## Opis

Provjerava da li je data vrijednost `undefined`.

### Slučaj upotrebe

Koristite `isUndefined` za guardovanje opcionalnih ulaza, detekciju nedostajućih svojstava ili razlikovanje između “nije
pruženo” (`undefined`) i “eksplicitno prazno” (`null`).

> **Napomena za TypeScript korisnike:**
>
> Koristite `isUndefined` kada vam je potrebno da specifično detektujete `undefined` (ne `null`). Sigurno je jer se
> oslanja na `typeof value === "undefined"`.

### Prednosti

- Pruža jasnu, eksplicitnu provjeru za `undefined` koristeći `typeof`, izbjegavajući rubne slučajeve s nedeklarisanim
  varijablama.
- Vraća jednostavan boolean rezultat (`true`/`false`) pogodan za guardove, grananje i logiku validacije.
- Pomaže razlikovati `undefined` od drugih “praznih” vrijednosti kao što su `null`, `0`, `""` ili `NaN`.

## Upotreba

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

const a = isUndefined(undefined); // tačno
const b = isUndefined(null);      // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isUndefined(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 14:02:02 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>