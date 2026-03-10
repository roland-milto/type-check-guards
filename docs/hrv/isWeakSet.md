# isWeakSet

## Opis

Određuje je li zadana vrijednost `value` `WeakSet` objekata.

### Slučaj uporabe

Koristite `isWeakSet` kada prihvaćate netipizirani ulaz (npr. iz vanjskih API-ja, dinamičke konfiguracije ili
vrijednosti tipa `unknown`) i trebate provjeriti je li to `WeakSet` prije korištenja operacija specifičnih za `WeakSet`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isWeakSet` za sužavanje vrijednosti tipa `unknown` na `WeakSet<object>` u izvođenju (runtime); imajte na
> umu da `WeakSet` može sadržavati samo reference na objekte.

### Prednosti

- Pruža jednostavnu provjeru u izvođenju (runtime) je li vrijednost `WeakSet`.
- Pomaže spriječiti pogreške tipova osiguravajući da se samo instance `WeakSet` tretiraju kao takve.
- Radi s bilo kojim ulazom tipa `unknown` i vraća jasan booleovski rezultat (`true`/`false`).

## Uporaba

### Sintaksa

Funkcija:

- `isWeakSet(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a je WeakSet u vrijeme izvođenja
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isWeakSet(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 14:15:02 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>