# areIntegers

## Paglalarawan

Tinutukoy ng `areIntegers` kung lahat ng elemento sa ibinigay na array ay mga integer, na nagbabalik ng `true` kung oo
at `false` kung hindi.

### Kaso ng paggamit

Gamitin ang `areIntegers` upang i-validate ang data na ibinigay ng user o mula sa external na pinagmulan (hal., query
parameters, JSON payloads, CSV rows) kapag ang iyong lohika ay nangangailangan ng filled na listahan ng mga integer
value gaya ng mga ID, counter, pagination offset, o array index.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areIntegers` bilang runtime guard para sa mga input na `unknown[]` bago ituring ang mga ito bilang
`number[]` na naglalaman lamang ng mga integer. Kung magbabalik ito ng `false`, ang input ay alinman sa hindi filled na
> array o naglalaman ng kahit isang value na hindi integer.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag bawat elemento ay isang integer; kung hindi, nagbabalik ng `false`.
- Tumutulong na i-validate ang hindi kilalang input bago magsagawa ng mga operasyong para sa integer lamang (hal.,
  pag-index, mga bilang, mga ID).
- Mabilis na bumibigay: humihinto sa pag-check sa sandaling may matagpuang elementong hindi integer.

## Paggamit

### Sintaks

Function:

- `areIntegers(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga elementong integer.

### Lokal na pag-import ng function

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // totoo
console.log(areIntegers(b)); // totoo
console.log(areIntegers(c)); // mali

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areIntegers(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 01:00:48 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>