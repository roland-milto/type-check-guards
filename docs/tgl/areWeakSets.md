# areWeakSets

## Paglalarawan

Sinusuri kung ang input ay isang hindi walang laman na array kung saan ang bawat elemento ay isang `WeakSet`, at
nagbabalik lamang ng `true` sa kasong iyon.

### Kaso ng paggamit

I-validate ang runtime input (hal., mula sa mga API, configuration, o data na ibinigay ng user) upang matiyak na mayroon
kang hindi walang laman na listahan ng mga instance ng `WeakSet` bago magpatuloy sa lohika na umaasa sa pag-uugali ng
`WeakSet`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areWeakSets` upang i-validate ang hindi kilalang input bago ito ituring bilang `WeakSet[]`. Nagbabalik
> ito ng `false` para sa mga walang lamang array at mga hindi array.

### Mga bentahe

- Tinitiyak na ang bawat elemento sa input array ay isang `WeakSet`.
- Nagbabalik ng `false` para sa mga walang lamang array, na pumipigil sa aksidenteng resulta na “lahat ay valid” kapag
  kulang ang data.
- Ligtas na pumapalya sa pamamagitan ng pagbabalik ng `false` kapag ang input ay hindi isang napunong array (kabilang
  ang `null`).
- Kapaki-pakinabang bilang guard bago magsagawa ng mga operasyon na nangangailangan ng mga instance ng `WeakSet`.

## Paggamit

### Sintaks

Function:

- `areWeakSets(array)`

Mga parameter:

- `array`: Ang array na susuriin kung naglalaman ng mga `WeakSet` object.

### Lokal na pag-import ng function

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // ang a ay isang hindi walang-lamang array ng mga instance ng WeakSet
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areWeakSets(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 14:11:16 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>