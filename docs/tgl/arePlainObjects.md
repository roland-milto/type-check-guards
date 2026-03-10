# arePlainObjects

## Paglalarawan

Sinusuri kung ang lahat ng elemento ng isang array ay mga plain object, at magbabalik ng `true` lamang kung kwalipikado
ang bawat elemento.

### Kaso ng paggamit

I-validate ang panlabas o walang type na data (hal., na-parse na JSON, API payloads, mga isinumiteng form) upang matiyak
na nakatanggap ka ng isang hindi walang lamang array kung saan ang bawat entry ay isang plain object bago mag-iterate at
magbasa ng mga property.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `arePlainObjects` upang i-validate ang hindi kilalang input bago ito ituring bilang
`Record<string, unknown>[]` (o mas mahigpit na object shape) sa TypeScript.

### Mga bentahe

- Tinitiyak na ang bawat elemento sa input array ay isang plain object, at magbabalik ng `true` lamang kapag tumutugma
  ang lahat ng item.
- Maagang tinatanggihan ang mga hindi wastong input (hindi mga array o mga walang lamang array) sa pamamagitan ng
  pagbabalik ng `false`.
- Itinuturing na wasto bilang plain objects ang parehong object-literal objects at mga `Object.create(null)` objects.

## Paggamit

### Sintaks

Function:

- `arePlainObjects(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga plain object na elemento.

### Lokal na pag-import ng function

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // totoo
const b = arePlainObjects([{}, Object.create(null)]); // totoo
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // mali
const d = arePlainObjects([] as unknown[]); // mali
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.arePlainObjects(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 16:56:06 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>