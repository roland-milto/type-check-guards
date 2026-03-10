# isWeakMap

## Opis

Određuje da li je dati `value` instanca `WeakMap`.

### Slučaj upotrebe

Koristite `isWeakMap` kada prihvatate vrijednost tipa `unknown` (npr. iz javnog API-ja, plugin sistema ili dinamičke
konfiguracije) i trebate potvrditi da je to `WeakMap` prije korištenja ponašanja specifičnog za `WeakMap`.

> **Napomena za TypeScript korisnike:**
>
> `isWeakMap` vrši provjeru `instanceof WeakMap`; to je runtime guard koji vraća `true` samo za stvarne instance
`WeakMap`.

### Prednosti

- Jednostavna provjera u runtime-u da li je vrijednost `WeakMap`.
- Pomaže spriječiti pogrešnu upotrebu API-ja koji zahtijevaju `WeakMap` tako što vraća `true`/`false` umjesto da baca
  grešku.
- Radi s ulazima tipa `unknown`, što je praktično na granicama modula (npr. parsiranje, eksterni podaci ili netipizirani
  kod).

## Upotreba

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
  // a je WeakMap u vrijeme izvršavanja
}

console.log(isWeakMap(a)); // tačno
console.log(isWeakMap(b)); // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isWeakMap(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 13:24:20 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>