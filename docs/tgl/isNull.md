# isNull

## Paglalarawan

Tinutukoy kung ang ibinigay na `value` ay `null`.

### Kaso ng paggamit

Gamitin ang `isNull` para i-validate ang mga input o mga field ng API payload kung saan ang `null` ay isang makabuluhang
sentinel value at dapat hawakan nang iba kaysa sa `undefined` o iba pang value.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isNull` kapag kailangan mong ihiwalay ang `null` mula sa `undefined` at iba pang falsy na value; `true`
> lang ang ibinabalik nito para sa `null`.

### Mga bentahe

- Nagbibigay ng tumpak na pagsusuri para sa `null` nang hindi ito ipinagkakamali o pinagsasama sa `undefined`.
- Gumagana nang maaasahan para sa anumang uri ng input dahil tumatanggap ito ng `unknown`.
- Simple, mabilis, at walang side effect; `true` o `false` lang ang ibinabalik.

## Paggamit

### Sintaks

Function:

- `isNull(value)`

Mga parameter:

- `value`: Ang value na susuriin kung `null`.

### Lokal na pag-import ng function

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // null ang a dito
}
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isNull(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isNull](../_analysis/isNull.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 15:41:10 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>