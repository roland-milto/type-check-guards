# areNumerics

## Paglalarawan

Sinusuri ng `areNumerics` kung ang isang value ay isang hindi bakanteng array kung saan lahat ng elemento ay numeriko.

### Kaso ng paggamit

Gamitin ang `areNumerics` upang i-validate ang panlabas o walang type na data (hal., mga JSON payload, query parameter,
input sa form) bago kalkulahin ang mga suma, average, o iba pang operasyong numeriko, tinitiyak na ang input ay isang
hindi bakanteng numerikong array at nagbabalik ng `false` kung hindi.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areNumerics` upang bantayan ang `unknown` na input bago ito ituring bilang isang numerikong array;
> nagbabalik ito ng `false` para sa mga hindi array at mga bakanteng array.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang input ay isang hindi bakanteng array at bawat elemento ay numeriko.
- Mabilis na bumibigo: humihinto sa pag-check sa sandaling may matagpuang hindi numerikong elemento, at nagbabalik ng
  `false`.
- Tumutulong na ligtas na ma-validate ang hindi kilalang input bago magsagawa ng mga operasyong numeriko.

## Paggamit

### Sintaks

Function:

- `areNumerics(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga numerikong elemento.

### Lokal na pag-import ng function

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // totoo
console.log(areNumerics(b)); // totoo
console.log(areNumerics(c)); // mali
console.log(areNumerics(d)); // mali
console.log(areNumerics(e)); // mali

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areNumerics(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 16:07:51 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>