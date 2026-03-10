# areSets

## Paglalarawan

Sinusuri kung ang isang ibinigay na hindi bakanteng array ay naglalaman lamang ng mga instance ng `Set`, na nagbabalik
ng `true` kung oo at `false` kung hindi.

### Kaso ng paggamit

I-validate na ang isang value (hal., mula sa user input, JSON parsing, o external APIs) ay isang hindi bakanteng array
ng mga `Set` object bago iproseso ang bawat set.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areSets` upang i-validate ang hindi kilalang input bago mag-iterate at tumawag ng mga `Set` API (hal.,
`.size`, `.has`, `.add`) sa bawat elemento.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang input ay isang hindi bakanteng array at bawat elemento ay isang instance ng
  `Set`.
- Pinipigilan ang mga maling positibo para sa mga bakanteng array sa pamamagitan ng pagbabalik ng `false` kapag walang
  elemento ang array.
- Kapaki-pakinabang bilang runtime guard bago magsagawa ng mga operasyong partikular sa `Set` sa bawat elemento.

## Paggamit

### Sintaks

Function:

- `areSets(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga instance ng `Set`.

### Lokal na pag-import ng function

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // ang a ay isang array ng mga instance ng Set sa runtime
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // mali
console.log(areSets(c)); // mali
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areSets(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areSets](../_analysis/areSets.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 23:15:36 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>