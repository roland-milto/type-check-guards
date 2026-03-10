# isNull

## Opis

Utvrđuje da li je navedeni `value` jednak `null`.

### Slučaj upotrebe

Koristite `isNull` za validaciju ulaza ili polja u API payloadu gdje je `null` značajna sentinel vrijednost i mora se
obrađivati drugačije nego `undefined` ili druge vrijednosti.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isNull` kada trebate razlikovati `null` od `undefined` i drugih lažnih (falsy) vrijednosti; vraća `true`
> samo za `null`.

### Prednosti

- Pruža preciznu provjeru za `null` bez miješanja s `undefined`.
- Pouzdano radi za bilo koju vrstu ulaza jer prihvata `unknown`.
- Jednostavno, brzo i bez nuspojava; vraća samo `true` ili `false`.

## Upotreba

### Sintaksa

Funkcija:

- `isNull(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti na `null`.

### Lokalni uvoz funkcije

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // tačno
console.log(isNull(b)); // netačno

if (isNull(a)) {
  // a je ovdje null
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isNull(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNull](../_analysis/isNull.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 15:38:43 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>