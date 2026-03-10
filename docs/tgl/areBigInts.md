# areBigInts

## Paglalarawan

Tinutukoy ng `areBigInts` kung ang isang value ay isang hindi bakanteng array na naglalaman lamang ng mga `bigint` na
value.

### Kaso ng paggamit

I-validate ang hindi tiyak na input (hal., na-parse na JSON-like na data, mga API payload, o mga parameter ng function
na naka-type bilang `unknown`) upang matiyak na ito ay isang hindi bakanteng array ng mga `bigint` na value bago
iproseso; nagbabalik ng `true` lamang kapag lahat ng elemento ay `bigint`, kung hindi ay `false`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areBigInts` bilang runtime guard bago magsagawa ng mga operasyong para lamang sa `bigint` (hal.,
> aritmetika, mga paghahambing) sa hindi tiyak na input.

### Mga bentahe

- Tinitiyak na bawat elemento ay isang `bigint`, at nagbabalik lamang ng `true` kapag tumutugma ang buong array.
- Tinatanggihan ang mga hindi array at mga walang lamang array ayon sa disenyo (sa pamamagitan ng `isFilledArray`),
  upang maiwasan ang hindi sinasadyang pagtanggap ng mga di-wastong input.
- Mabilis na pagpalya: nagbabalik ng `false` sa sandaling may matagpuang elementong hindi `bigint`.

## Paggamit

### Sintaks

Function:

- `areBigInts(array)`

Mga parameter:

- `array`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // totoo
console.log(areBigInts(b)); // mali
console.log(areBigInts(c)); // mali
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areBigInts(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 23:27:35 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>