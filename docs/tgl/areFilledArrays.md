# areFilledArrays

## Paglalarawan

Sinusuri ng `areFilledArrays` kung ang isang two-dimensional na array ay hindi walang laman at kung lahat ng mga
subarray nito ay hindi walang laman.

### Kaso ng paggamit

Gamitin ang `areFilledArrays` para i-validate ang tabular o matrix-like na input (hal., mga CSV row, grid data, mga
naka-grupong resulta) upang ligtas mong maipagpalagay na may kahit isang subarray at wala sa mga subarray ang walang
laman.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areFilledArrays` kapag kailangan mong tiyakin na ang isang 2D array ay may kahit isang row at ang bawat
> row ay may kahit isang elemento bago mag-iterate o mag-index dito.

### Mga bentahe

- Tinitiyak na ang panlabas na array ay hindi walang laman at na ang bawat panloob na array ay hindi rin walang laman,
  at nagbabalik ng `true` lamang kapag natugunan ang parehong kondisyon.
- Gumagana sa anumang uri ng elemento sa loob ng mga subarray (hal., mga numero, string, object, mga nested array) dahil
  sinusuri lang nito kung “punô” ang array, hindi ang nilalaman ng mga elemento.
- Nagbibigay ng simpleng boolean na resulta (`true`/`false`) na angkop bilang guard bago magproseso ng two-dimensional
  na data.

## Paggamit

### Sintaks

Function:

- `areFilledArrays(array)`

Mga parameter:

- `array`: Ang two-dimensional na array na susuriin.

### Lokal na pag-import ng function

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // totoo
console.log(areFilledArrays(b)); // totoo
console.log(areFilledArrays(c)); // totoo
console.log(areFilledArrays(d)); // mali
console.log(areFilledArrays(e)); // mali
console.log(areFilledArrays(f)); // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areFilledArrays(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 11:59:21 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>