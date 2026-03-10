# isPromise

## Beskrywing

Bepaal of 'n gegewe waarde 'n `Promise` is.

### Gebruikscenario

Gebruik `isPromise` om onbekende insette te valideer voordat jy dit as 'n `Promise` hanteer, soos wanneer jy waardes
hanteer wat deur plugins, dinamiese invoere, of los-getipe API's teruggegee word.

> **Wenk vir TypeScript-gebruikers:**
>
> `isPromise` kontroleer via `instanceof Promise`, dus gee dit slegs `true` terug vir werklike `Promise`-instansies (nie
> generiese thenables nie).

### Voordele

- Verskaf 'n eenvoudige looptydkontrole om te bepaal of 'n waarde 'n `Promise` is.
- Help om kodepaaie te beskerm wat 'n werklike `Promise`-instansie vereis, en gee voorspelbaar `true` of `false` terug.
- Vermy vals positiewe van “thenable”-objekte (bv. `{ then() {} }`) deur 'n werklike `Promise`-instansie te vereis.

## Gebruik

### Sintaksis

Funksie:

- `isPromise(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // waar
console.log(isPromise(b)); // vals
console.log(isPromise(123)); // vals
console.log(isPromise(null)); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isPromise(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 23:52:02 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>