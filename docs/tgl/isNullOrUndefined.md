# isNullOrUndefined

## Paglalarawan

Sinusuri kung ang ibinigay na value ay `null` o `undefined`.

### Kaso ng paggamit

Gamitin ang `isNullOrUndefined` kapag kailangan mong ituring ang parehong `null` at `undefined` bilang “walang value”,
gaya ng pagbe-validate ng mga optional na input, pagno-normalize ng mga API payload, o pagga-guard ng mga code path bago
i-dereference ang posibleng nawawalang value.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isNullOrUndefined` bilang guard laban sa mga nawawalang value bago i-access ang mga property o tumawag ng
> mga method; nagbabalik ito ng `true` lamang para sa `null` at `undefined`.

### Mga bentahe

- Nagbibigay ng malinaw at magagamit-muli na guard para matukoy ang `null` at `undefined` sa iisang lugar.
- Nagbabalik ng simpleng boolean (`true`/`false`) na madaling pagsamahin sa mga kondisyon at pagbe-validate.
- Tumutulong maiwasan ang mga karaniwang runtime error sa pamamagitan ng pag-check sa mga nawawalang value bago i-access
  ang mga property o tumawag ng mga method.

## Paggamit

### Sintaks

Function:

- `isNullOrUndefined(value)`

Mga parameter:

- `value`: Ang value na iche-check kung `null` o `undefined`.

### Lokal na pag-import ng function

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // hawakan ang nawawalang halaga
}

console.log(isNullOrUndefined(b)); // totoo
console.log(isNullOrUndefined(c)); // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isNullOrUndefined(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 00:35:30 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>