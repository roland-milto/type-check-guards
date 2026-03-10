# isSet

## Paglalarawan

Tinutukoy kung ang ibinigay na value ay isang `Set`.

### Kaso ng paggamit

I-validate ang mga input mula sa mga panlabas na pinagmumulan (hal., JSON parsing, user input, o mga third-party API)
upang matiyak na ang isang value ay isang `Set` bago magsagawa ng mga operasyon sa `Set`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isSet` upang paliitin ang mga `unknown` na value bago tumawag ng mga API na partikular sa `Set` tulad ng
`.add`, `.has`, o `.size`.

### Mga bentahe

- Nagbibigay ng simpleng runtime check upang kumpirmahin kung ang isang value ay isang `Set`.
- Tumutulong na maiwasan ang mga type error sa pamamagitan ng pagpayag sa maagang pag-branch kapag ang isang value ay
  hindi isang `Set`.
- Gumagana sa anumang nilalaman ng `Set` (walang laman o may laman) at palaging nagbabalik ng `true`/`false` nang
  pare-pareho.

## Paggamit

### Sintaks

Function:

- `isSet(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // ang a ay isang Set sa runtime
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isSet(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isSet](../_analysis/isSet.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 23:11:26 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>