# isDate

## Paglalarawan

Tinutukoy ng `isDate` kung ang ibinigay na value ay isang `Date`, na nagbabalik ng `true` para sa mga `Date` instance at
`false` kung hindi.

### Kaso ng paggamit

I-validate at i-narrow ang mga hindi kilalang value (hal., request data, config value, o na-parse na JSON) bago
magsagawa ng mga `Date` operation tulad ng pag-format, paghahambing, o pagtawag ng `toISOString()`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isDate` upang i-narrow ang `unknown` sa `Date` sa runtime; nagbabalik ito ng `true` lamang para sa mga
> aktuwal na `Date` instance (hindi mga date string).

### Mga bentahe

- Nagbibigay ito ng simpleng runtime guard upang beripikahin kung ang isang value ay isang `Date`.
- Nakakatulong itong maiwasan ang mga type error sa pamamagitan ng pagtiyak na tanging mga `Date` instance lang ang
  pumapasa sa validation.
- Kapaki-pakinabang ito para sa pag-validate ng mga hindi kilalang input (hal., mga API payload) bago gumamit ng mga
  method na partikular sa date.

## Paggamit

### Sintaks

Function:

- `isDate(value)`

Mga parameter:

- `value`: Ang value na susuriin kung `Date` type.

### Lokal na pag-import ng function

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // ang input ay isang Date dito
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isDate(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isDate](../_analysis/isDate.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 15:48:02 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>