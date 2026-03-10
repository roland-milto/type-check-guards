# isNull

## Opis

Određuje je li zadana `value` jednaka `null`.

### Slučaj uporabe

Koristite `isNull` za validaciju ulaza ili polja u API payloadu gdje je `null` smislen sentinel (signalni) vrijednost i
mora se obrađivati drugačije nego `undefined` ili druge vrijednosti.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isNull` kada trebate razlikovati `null` od `undefined` i drugih lažnih (falsy) vrijednosti; vraća `true`
> samo za `null`.

### Prednosti

- Pruža preciznu provjeru za `null` bez miješanja s `undefined`.
- Pouzdano radi za bilo koju vrstu ulaza jer prihvaća `unknown`.
- Jednostavno, brzo i bez nuspojava; vraća samo `true` ili `false`.

## Uporaba

### Sintaksa

Funkcija:

- `isNull(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti je li `null`.

### Lokalni uvoz funkcije

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a je ovdje null
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isNull(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNull](../_analysis/isNull.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 15:39:25 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>