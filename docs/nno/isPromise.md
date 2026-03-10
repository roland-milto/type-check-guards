# isPromise

## Skildring

Avgjer om ein gitt verdi er ein `Promise`.

### Brukstilfelle

Bruk `isPromise` til å validere ukjende inndata før du handsamar dei som ein `Promise`, til dømes når du handterer
verdiar returnerte frå pluginar, dynamiske importar eller laust typa API-ar.

> **Merknad for TypeScript-brukarar:**
>
> `isPromise` sjekkar via `instanceof Promise`, så han returnerer berre `true` for ekte `Promise`-instansar (ikkje
> generiske thenables).

### Fordelar

- Gjev ein enkel køyretidssjekk for om ein verdi er ein `Promise`.
- Hjelper med å verne kodebaner som krev ein ekte `Promise`-instans, og returnerer `true` eller `false` på ein
  føreseieleg måte.
- Unngår falske positive frå «thenable»-objekt (t.d. `{ then() {} }`) ved å krevje ein faktisk `Promise`-instans.

## Bruk

### Syntaks

Funksjon:

- `isPromise(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // sann
console.log(isPromise(b)); // usann
console.log(isPromise(123)); // usann
console.log(isPromise(null)); // usann

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isPromise(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 23:53:44 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>