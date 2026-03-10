# areFloats

## Paglalarawan

Sinusuri ng `areFloats` kung ang ibinigay na array ay may laman at lahat ng elemento nito ay mga float.

### Kaso ng paggamit

Gamitin ang `areFloats` kapag tumatanggap ka ng `unknown[]` (hal., mula sa JSON, mga query parameter, o mga external
API) at kailangan mong tiyakin na ito ay isang array na may laman kung saan bawat item ay isang float bago magpatakbo ng
numeric na lohika tulad ng pagkuha ng average, interpolation, o mga kalkulasyong pang-estadistika.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areFloats` para bantayan ang `unknown[]` bago ito ituring na `number[]` na naglalaman lamang ng mga
> float; nagbabalik ito ng `false` para sa mga bakanteng array at para sa anumang elementong hindi float.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang input ay isang hindi bakanteng array at bawat elemento ay isang float.
- Mabilis na bumibigay: nagbabalik ng `false` sa sandaling may matagpuang elementong hindi float.
- Tumutulong mag-validate ng hindi kilalang input bago magsagawa ng mga kalkulasyong partikular sa float.

## Paggamit

### Sintaks

Function:

- `areFloats(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga elementong float.

### Lokal na pag-import ng function

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // totoo
console.log(areFloats(b)); // mali
console.log(areFloats(c)); // mali

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areFloats(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 15:59:59 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>