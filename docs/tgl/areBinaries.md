# areBinaries

## Paglalarawan

Sinusuri kung ang ibinigay na value ay isang hindi bakanteng array ng mga balidong binary string at nagbabalik ng `true`
lamang kung pumasa sa beripikasyon ang lahat ng item.

### Kaso ng paggamit

Gamitin ang `areBinaries` kapag tumatanggap ka ng hindi kilalang listahan (hal., mula sa JSON, mga form, o mga API) at
kailangan mong tiyakin na ito ay isang hindi bakanteng array ng mga binary string bago ito i-parse o iproseso.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areBinaries` upang beripikahin ang hindi kilalang input bago i-convert ang mga binary string sa mga
> number/BigInt; tinitiyak nito na hindi bakante ang array at bawat elemento ay isang balidong binary string.

### Mga bentahe

- Bine-beripika na ang isang value ay isang hindi bakanteng array kung saan bawat elemento ay isang balidong binary
  string.
- Nagbabalik ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard, maagang pagbalik (early
  returns), at pagberipika ng input.
- Pinipigilan ang mga error sa pag-parse sa mga susunod na hakbang sa pamamagitan ng pagtanggi sa mga array na may kahit
  isang entry na hindi binary.

## Paggamit

### Sintaks

Function:

- `areBinaries(array)`

Mga parameter:

- `array`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // totoo
console.log(areBinaries(b)); // mali
console.log(areBinaries([])); // mali
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areBinaries(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 23:16:09 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>