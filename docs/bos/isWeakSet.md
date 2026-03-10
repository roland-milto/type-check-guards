# isWeakSet

## Opis

Određuje da li je dati `value` `WeakSet` objekata.

### Slučaj upotrebe

Koristite `isWeakSet` kada prihvatate netipiziran ulaz (npr. iz eksternih API-ja, dinamičke konfiguracije ili
vrijednosti tipa `unknown`) i trebate provjeriti da je to `WeakSet` prije korištenja operacija specifičnih za `WeakSet`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isWeakSet` da suzite vrijednost tipa `unknown` na `WeakSet<object>` u runtime-u; imajte na umu da `WeakSet`
> može sadržavati samo reference na objekte.

### Prednosti

- Pruža jednostavnu provjeru u runtime-u da li je vrijednost `WeakSet`.
- Pomaže u sprječavanju grešaka tipa tako što osigurava da se samo instance `WeakSet` tretiraju kao takve.
- Radi s bilo kojim ulazom tipa `unknown` i vraća jasan booleanski rezultat (`true`/`false`).

## Upotreba

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

console.log(isWeakSet(a)); // tačno
console.log(isWeakSet(b)); // netačno

if (isWeakSet(a)) {
  // a je WeakSet u vrijeme izvršavanja
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isWeakSet(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 14:14:04 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>