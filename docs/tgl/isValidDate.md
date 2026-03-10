# isValidDate

## Paglalarawan

Sinusuri ng `isValidDate` kung ang ibinigay na value ay isang valid na `Date` object at nagbabalik ng `true` lamang para
sa mga totoong, hindi-invalid na petsa.

### Kaso ng paggamit

I-validate ang user input o API data na maaaring may mga petsa, tinitiyak na ang value ay isang totoong `Date` instance
at hindi isang invalid na petsa bago magsagawa ng mga kalkulasyon sa petsa, pag-format, o paghahambing.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isValidDate` bago tumawag ng mga `Date` method (hal., `toISOString`, `getTime`) sa mga value na naka-type
> bilang `unknown` para matiyak na mga valid na `Date` object ang mga ito.

### Mga bentahe

- Tinitiyak na ang isang value ay isang `Date` instance at hindi lang isang string o number na mukhang petsa.
- Tinatanggihan ang mga invalid na petsa (hal., `new Date("invalid")`) sa pamamagitan ng pag-check ng `NaN` na time
  values.
- Simpleng boolean guard na madaling gamitin sa mga conditional at validation pipeline.
- Tumutulong maiwasan ang mga runtime error kapag tumatawag ng mga date method sa pamamagitan ng pag-verify muna ng
  input.

## Paggamit

### Sintaks

Function:

- `isValidDate(value)`

Mga parameter:

- `value`: Ang value na iche-check.

### Lokal na pag-import ng function

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // ang input ay isang balidong instance ng Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // mali
console.log(isValidDate("2025-12-22")); // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isValidDate(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 16:53:12 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>