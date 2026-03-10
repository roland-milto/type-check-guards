# isNaN

## Paglalarawan

Tinutukoy kung ang ibinigay na `value` ay isang `NaN` na uri na `number` nang hindi kino-convert ang mga string.

### Kaso ng paggamit

I-validate ang hindi mapagkakatiwalaan o maluwag ang type na input (hal. mga API payload, mga value ng form, na-parse na
JSON) upang matukoy ang espesyal na value na `NaN` at pangasiwaan ito nang tahasan, habang itinuturing ang mga hindi
numerong input bilang hindi `NaN`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isNaN` kapag kailangan mong matukoy ang espesyal na numerikong value na `NaN` habang tinitiyak na ang
> input ay talagang isang `number` (walang string-to-number conversion).

### Mga bentahe

- Sinusuri kung ang isang value ay `NaN` nang hindi kino-convert ang mga hindi numero (hal. mga string) tungo sa mga
  numero.
- Nagbabalik ng `true` lamang para sa mga value na parehong uri na `number` at `NaN`.
- Ligtas para sa mga `unknown` na input at iniiwasan ang mga false positive mula sa implicit na conversions.

## Paggamit

### Sintaks

Function:

- `isNaN(value)`

Mga parameter:

- `value`: Ang value na susuriin kung ito ay isang `NaN` na uri na `number`.

### Lokal na pag-import ng function

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // totoo
console.log(isNaN(b)); // mali
console.log(isNaN(c)); // mali

if (isNaN(a)) {
  // ang a ay isang numero at partikular na NaN
}
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isNaN(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 15:48:21 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>