# areSymbols

## Paglalarawan

Sinusuri kung ang isang input ay isang filled array na ang mga elemento ay pawang mga symbol, at nagbabalik ng `true` o
`false`.

### Kaso ng paggamit

I-validate na ang isang configuration field (hal., isang listahan ng mga natatanging key na kinakatawan bilang mga
symbol) ay isang hindi bakanteng array na naglalaman lamang ng mga symbol bago ito gamitin sa mga API na nangangailangan
ng `symbol[]`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areSymbols` para i-validate ang hindi kilalang input bago ito ituring na `symbol[]`; nagbabalik ito ng
`false` para sa mga hindi array at mga bakanteng array.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang input ay isang hindi bakanteng array at bawat elemento ay isang symbol.
- Pinipigilan ang mga false positive sa pamamagitan ng pagtanggi sa mga hindi array at mga bakanteng array gamit ang
  internal na filled-array check.
- Kapaki-pakinabang bilang runtime type guard para sa pag-validate ng mga listahang symbol-only bago ang karagdagang
  pagproseso.

## Paggamit

### Sintaks

Function:

- `areSymbols(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga elementong symbol.

### Lokal na pag-import ng function

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // ang a ay isang array na puro symbol sa runtime
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areSymbols(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 14:24:06 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>