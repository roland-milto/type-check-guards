# isPromise

## Paglalarawan

Tinutukoy kung ang ibinigay na value ay isang `Promise`.

### Kaso ng paggamit

Gamitin ang `isPromise` para i-validate ang mga unknown input bago ituring ang mga ito bilang isang `Promise`, gaya ng
kapag humahawak ng mga value na ibinabalik mula sa mga plugin, dynamic import, o mga API na maluwag ang typing.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Nagche-check ang `isPromise` gamit ang `instanceof Promise`, kaya nagbabalik lang ito ng `true` para sa mga totoong
`Promise` instance (hindi para sa mga generic na thenable).

### Mga bentahe

- Nagbibigay ng simpleng runtime check kung ang isang value ay isang `Promise`.
- Tumutulong magbantay ng mga code path na nangangailangan ng totoong `Promise` instance, na nagbabalik ng `true` o
  `false` nang predictable.
- Iniiwasan ang mga false positive mula sa mga “thenable” na object (hal., `{ then() {} }`) sa pamamagitan ng
  pag-require ng aktuwal na `Promise` instance.

## Paggamit

### Sintaks

Function:

- `isPromise(value)`

Mga parameter:

- `value`: Ang value na iche-check.

### Lokal na pag-import ng function

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // totoo
console.log(isPromise(b)); // mali
console.log(isPromise(123)); // mali
console.log(isPromise(null)); // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isPromise(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 23:54:33 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>