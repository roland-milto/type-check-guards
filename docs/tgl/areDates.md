# areDates

## Paglalarawan

Tinutukoy ng `areDates` kung ang ibinigay na array ay may laman at naglalaman lamang ng mga `Date` object, at nagbabalik
ng `true` lamang kapag lahat ng elemento ay mga valid na petsa.

### Kaso ng paggamit

Gamitin ang `areDates` upang i-validate ang hindi kilalang input (hal., na-parse na JSON, data ng form, mga payload ng
API) bago magpatakbo ng lohikang partikular sa petsa tulad ng pag-sort ayon sa oras, pag-format, o pag-compute ng mga
saklaw.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Nagbabalik ng `true` lamang para sa mga hindi walang laman na array kung saan ang bawat elemento ay isang `Date`; ang
> mga walang laman na array ay nagbubunga ng `false`.

### Mga bentahe

- Tinitiyak na hindi walang laman ang isang array bago i-validate ang nilalaman nito, na pumipigil sa pagbalik ng `true`
  para sa mga walang laman na input.
- Bine-verify na ang bawat elemento ay isang instance ng `Date`, at agad na nagbabalik ng `false` sa unang hindi
  pagtutugma.
- Kapaki-pakinabang bilang guard-style na pagsusuri bago magsagawa ng mga operasyong partikular sa petsa sa mga item ng
  array.

## Paggamit

### Sintaks

Function:

- `areDates(array)`

Mga parameter:

- `array`: Ang array na susuriin para sa mga `Date` object.

### Lokal na pag-import ng function

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // totoo
console.log(areDates(b)); // mali
console.log(areDates(c)); // mali

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areDates(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areDates](../_analysis/areDates.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 15:32:41 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>