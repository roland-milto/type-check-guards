# isPromise

## Opis

Određuje je li zadana vrijednost `Promise`.

### Slučaj uporabe

Koristite `isPromise` za provjeru nepoznatih ulaza prije nego što ih tretirate kao `Promise`, primjerice pri rukovanju
vrijednostima vraćenima iz dodataka (pluginova), dinamičkih uvoza (dynamic imports) ili labavo tipiziranih API-ja.

> **Napomena za TypeScript korisnike:**
>
> `isPromise` provjerava putem `instanceof Promise`, pa vraća `true` samo za stvarne instance `Promise` (ne za generičke
> thenable objekte).

### Prednosti

- Pruža jednostavnu provjeru u izvođenju (runtime) je li vrijednost `Promise`.
- Pomaže zaštititi putanje koda koje zahtijevaju stvarnu instancu `Promise`, predvidljivo vraćajući `true` ili `false`.
- Izbjegava lažno pozitivne rezultate kod “thenable” objekata (npr. `{ then() {} }`) tako što zahtijeva stvarnu instancu
  `Promise`.

## Uporaba

### Sintaksa

Funkcija:

- `isPromise(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // istina
console.log(isPromise(b)); // netočno
console.log(isPromise(123)); // netočno
console.log(isPromise(null)); // netočno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isPromise(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 23:53:02 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>