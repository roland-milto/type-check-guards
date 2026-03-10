# isWeakSet

## Paglalarawan

Tinutukoy kung ang ibinigay na `value` ay isang `WeakSet` ng mga object.

### Kaso ng paggamit

Gamitin ang `isWeakSet` kapag tumatanggap ng input na walang type (hal., mula sa mga external API, dynamic na
configuration, o mga `unknown` na value) at kailangan mong tiyakin na ito ay isang `WeakSet` bago gumamit ng mga
operasyong partikular sa `WeakSet`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isWeakSet` upang paliitin ang isang `unknown` na value tungo sa `WeakSet<object>` sa runtime; tandaan na
> ang `WeakSet` ay maaari lamang maglaman ng mga reference ng object.

### Mga bentahe

- Nagbibigay ng simpleng runtime check kung ang isang value ay isang `WeakSet`.
- Tumutulong na maiwasan ang mga type error sa pamamagitan ng pagtiyak na tanging mga instance ng `WeakSet` lang ang
  itinuturing na ganoon.
- Gumagana sa anumang `unknown` na input at nagbabalik ng malinaw na boolean na resulta (`true`/`false`).

## Paggamit

### Sintaks

Function:

- `isWeakSet(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // ang a ay isang WeakSet sa runtime
}
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isWeakSet(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 14:19:28 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>