# areNumbers

## Paglalarawan

Sinusuri ng `areNumbers` kung ang isang value ay isang hindi bakanteng array kung saan lahat ng elemento ay mga numero.

### Kaso ng paggamit

I-validate ang data na ibinigay ng user o API upang matiyak na ito ay isang hindi bakanteng array ng mga numero bago
mag-compute ng mga total, average, o iba pang numeric na aggregation.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areNumbers` upang i-validate ang mga unknown na array bago magsagawa ng mga numeric na kalkulasyon;
> nagbabalik ito ng `false` para sa mga bakanteng array at para sa mga array na naglalaman ng anumang value na hindi
> numero.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang input ay isang hindi bakanteng array at bawat elemento ay isang numero.
- Pinipigilan ang mga false positive sa pamamagitan ng pagtanggi sa mga bakanteng array at mga input na hindi array.
- Kapaki-pakinabang bilang guard bago ang mga numeric na operasyon (hal., pag-sum, pag-average) upang maiwasan ang mga
  runtime error.

## Paggamit

### Sintaks

Function:

- `areNumbers(array)`

Mga parameter:

- `array`: Ang array na susuriin kung ang mga elemento ay mga numero.

### Lokal na pag-import ng function

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areNumbers(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 13:06:11 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>