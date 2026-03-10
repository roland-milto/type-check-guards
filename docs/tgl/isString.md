# isString

## Paglalarawan

Tinutukoy ng `isString` kung ang ibinigay na value ay isang string.

### Kaso ng paggamit

I-validate ang user input, mga field ng API payload, o mga value ng configuration sa runtime upang matiyak na ang isang
value ay string bago mag-apply ng mga string operation (hal., trimming, splitting, case conversion).

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isString` upang i-validate ang `unknown` o maluwag ang type na mga value bago tumawag ng mga string
> method; nagbabalik ito ng `true` lamang kapag `typeof value === "string"`.

### Mga bentahe

- Simple at mabilis na pagsusuri gamit ang `typeof`.
- Nagbabalik ng inaasahang boolean na resulta: `true` para sa mga string, kung hindi ay `false`.
- Gumagana para sa parehong walang laman at may laman na mga string.
- Kapaki-pakinabang bilang magaan na runtime guard bago magsagawa ng mga operasyong partikular sa string.

## Paggamit

### Sintaks

Function:

- `isString(value)`

Mga parameter:

- `value`: Ang value na susuriin kung string ang uri.

### Lokal na pag-import ng function

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // ang input ay isang string dito
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isString(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isString](../_analysis/isString.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 13:15:52 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>