# areUndefined

## Paglalarawan

Sinusuri ng `areUndefined` kung ang bawat elemento sa ibinigay na array ay `undefined`.

### Kaso ng paggamit

I-validate na ang isang listahan ng mga opsyonal na resulta ay walang aktuwal na halaga (tanging `undefined` lang),
hal., pagkatapos ng pag-map ng mga lookup kung saan ang mga nawawalang entry ay kinakatawan bilang `undefined`, at gusto
mong tiyakin na lahat ng lookup ay nabigo.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areUndefined` kapag kailangan mong tiyakin na ang isang `unknown[]` ay naglalaman lamang ng mga halagang
`undefined`; nagbabalik ito ng `false` para sa mga walang lamang array at mga hindi array/di-wastong input dahil sa
> panloob na pagsusuring `isFilledArray`.

### Mga bentahe

- Nagbabalik ng `false` para sa mga hindi array at mga walang lamang array sa pamamagitan ng paghingi ng punô na array
  gamit ang `isFilledArray`.
- Tinitiyak na bawat elemento ay `undefined`, hindi lang ilan, kaya ginagawang malinaw ang layunin.
- Kapaki-pakinabang bilang predicate na parang guard kapag nagva-validate ng mga koleksyon ng hindi kilalang input.

## Paggamit

### Sintaks

Function:

- `areUndefined(array)`

Mga parameter:

- `array`: Ang array na susuriin para sa mga elementong `undefined`.

### Lokal na pag-import ng function

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Tandaan: nagbabalik ng false para sa mga walang lamang array
const r4 = areUndefined([]); // false

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areUndefined(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 13:58:18 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>