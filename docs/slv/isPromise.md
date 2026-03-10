# isPromise

## Opis

Ugotovi, ali je dana vrednost `Promise`.

### Primer uporabe

Uporabite `isPromise` za preverjanje neznanih vhodov, preden jih obravnavate kot `Promise`, na primer pri obdelavi
vrednosti, vrnjenih iz vtičnikov, dinamičnih uvozov ali ohlapno tipiziranih API-jev.

> **Opomba za uporabnike TypeScripta:**
>
> `isPromise` preverja z `instanceof Promise`, zato vrne `true` samo za dejanske primerke `Promise` (ne za splošne
> thenable).

### Prednosti

- Omogoča preprosto preverjanje med izvajanjem, ali je vrednost `Promise`.
- Pomaga zaščititi poti kode, ki zahtevajo dejanski primerek `Promise`, in predvidljivo vrne `true` ali `false`.
- Prepreči lažno pozitivne rezultate pri objektih “thenable” (npr. `{ then() {} }`) tako, da zahteva dejanski primerek
  `Promise`.

## Uporaba

### Skladnja

Funkcija:

- `isPromise(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // res
console.log(isPromise(b)); // napačno
console.log(isPromise(123)); // napačno
console.log(isPromise(null)); // napačno

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isPromise(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 23:54:14 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>