# areValidDates

## Paglalarawan

Tinutukoy kung ang isang array ay hindi walang laman at binubuo nang buo ng mga valid na `Date` object.

### Kaso ng paggamit

Gamitin ang `areValidDates` upang i-validate ang mga array na ibinigay ng user o ng API bago magsagawa ng mga operasyong
nakabatay sa petsa (pag-uuri, mga range check, pag-format), tinitiyak na ang lahat ng entry ay tunay at valid na mga
`Date` object at na hindi walang laman ang listahan.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Nagbabalik ang `areValidDates` ng `false` para sa isang walang laman na array; tiyaking nilalayong hindi walang laman
> ang array bago umasa rito bilang hakbang sa validation.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang bawat elemento ay isang wastong instance ng `Date` (walang mga hindi valid na
  petsa tulad ng `new Date('invalid')`).
- Tinatanggihan ang walang laman na input sa pamamagitan ng pagbabalik ng `false`, tinitiyak na makakatanggap ka lamang
  ng makabuluhan, hindi walang laman na mga listahan ng petsa.
- Nagbibigay ng simpleng boolean na guard-style na pagsusuri na madaling pagsamahin sa iba pang mga validation.

## Paggamit

### Sintaks

Function:

- `areValidDates(array)`

Mga parameter:

- `array`: Ang array na susuriin, na posibleng naglalaman ng mga `Date` object.

### Lokal na pag-import ng function

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // totoo
console.log(areValidDates(b)); // mali
console.log(areValidDates(c)); // mali
console.log(areValidDates(d)); // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areValidDates(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 14:34:10 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>