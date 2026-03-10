# isWeakMap

## Opis

Određuje je li zadani `value` instanca `WeakMap`.

### Slučaj uporabe

Koristite `isWeakMap` kada prihvaćate vrijednost tipa `unknown` (npr. iz javnog API-ja, sustava dodataka ili dinamičke
konfiguracije) i trebate provjeriti je li to `WeakMap` prije korištenja ponašanja specifičnog za `WeakMap`.

> **Napomena za TypeScript korisnike:**
>
> `isWeakMap` provodi provjeru `instanceof WeakMap`; to je runtime guard koji vraća `true` samo za stvarne instance
`WeakMap`.

### Prednosti

- Jednostavna provjera u izvođenju (runtime) je li vrijednost `WeakMap`.
- Pomaže spriječiti pogrešnu upotrebu API-ja koji zahtijevaju `WeakMap` tako što vraća `true`/`false` umjesto bacanja
  iznimke.
- Radi s ulazima tipa `unknown`, što ga čini praktičnim na granicama modula (npr. parsiranje, vanjski podaci ili
  netipizirani kod).

## Uporaba

### Sintaksa

Funkcija:

- `isWeakMap(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a je WeakMap u vrijeme izvođenja
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isWeakMap(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 13:25:15 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>