# isPromise

## Opis

Utvrđuje da li je data vrijednost `Promise`.

### Slučaj upotrebe

Koristite `isPromise` da validirate nepoznate ulaze prije nego što ih tretirate kao `Promise`, npr. pri rukovanju
vrijednostima vraćenim iz pluginova, dinamičkih importa ili labavo tipiziranih API-ja.

> **Napomena za TypeScript korisnike:**
>
> `isPromise` provjerava putem `instanceof Promise`, pa vraća `true` samo za stvarne instance `Promise` (ne za generičke
> thenable objekte).

### Prednosti

- Pruža jednostavnu provjeru u runtime-u da li je vrijednost `Promise`.
- Pomaže u zaštiti putanja koda koje zahtijevaju stvarnu instancu `Promise`, predvidivo vraćajući `true` ili `false`.
- Izbjegava lažno pozitivne rezultate od “thenable” objekata (npr. `{ then() {} }`) tako što zahtijeva stvarnu instancu
  `Promise`.

## Upotreba

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

console.log(isPromise(a)); // tačno
console.log(isPromise(b)); // netačno
console.log(isPromise(123)); // netačno
console.log(isPromise(null)); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isPromise(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 23:52:16 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>