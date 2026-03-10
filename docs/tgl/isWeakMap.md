# isWeakMap

## Paglalarawan

Tinutukoy kung ang ibinigay na `value` ay isang `WeakMap` instance.

### Kaso ng paggamit

Gamitin ang `isWeakMap` kapag tumatanggap ka ng isang `unknown` na value (hal., mula sa isang public API, plugin system,
o dynamic configuration) at kailangan mong tiyakin na ito ay isang `WeakMap` bago gumamit ng `WeakMap`-specific na
behavior.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Ang `isWeakMap` ay nagsasagawa ng `instanceof WeakMap` check; isa itong runtime guard na nagbabalik ng `true` lamang
> para sa mga tunay na `WeakMap` instance.

### Mga bentahe

- Simpleng runtime check kung ang isang value ay isang `WeakMap`.
- Tumutulong maiwasan ang maling paggamit ng mga API na nangangailangan ng `WeakMap` sa pamamagitan ng pagbabalik ng
  `true`/`false` sa halip na mag-throw.
- Gumagana sa mga `unknown` na input, kaya maginhawa sa mga hangganan ng module (hal., pag-parse, panlabas na data, o
  untyped na code).

## Paggamit

### Sintaks

Function:

- `isWeakMap(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // ang a ay isang WeakMap sa runtime
}

console.log(isWeakMap(a)); // totoo
console.log(isWeakMap(b)); // mali
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isWeakMap(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 13:27:13 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>