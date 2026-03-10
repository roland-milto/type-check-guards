# isUndefined

## Paglalarawan

Sinusuri kung ang ibinigay na value ay `undefined`.

### Kaso ng paggamit

Gamitin ang `isUndefined` para mag-guard ng mga optional na input, matukoy ang mga nawawalang property, o maiba ang
“hindi ibinigay” (`undefined`) at “tahasang walang laman” (`null`).

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isUndefined` kapag partikular mong kailangang matukoy ang `undefined` (hindi `null`). Ligtas ito dahil
> umaasa ito sa `typeof value === "undefined"`.

### Mga bentahe

- Nagbibigay ng malinaw at tahasang pagsusuri para sa `undefined` gamit ang `typeof`, na iniiwasan ang mga edge case sa
  mga hindi nade-deklarang variable.
- Nagbabalik ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard, branching, at validation
  logic.
- Tumutulong na maiba ang `undefined` mula sa iba pang “walang laman” na value tulad ng `null`, `0`, `""`, o `NaN`.

## Paggamit

### Sintaks

Function:

- `isUndefined(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // ang x ay undefined dito
} else {
  // ang x ay hindi undefined dito
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isUndefined(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 14:04:39 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>