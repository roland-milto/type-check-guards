# areBooleans

## Paglalarawan

Sinusuri ng `areBooleans` kung ang ibinigay na hindi bakanteng array ay naglalaman lamang ng mga boolean na value, at
nagbabalik ng `true` kung oo at `false` kung hindi.

### Kaso ng paggamit

I-validate ang data na ibinigay ng user o mula sa panlabas na pinagmulan (hal., mga JSON payload, query params, config
arrays) upang matiyak na ang isang hindi bakanteng listahan ay naglalaman lamang ng mga boolean bago mag-apply ng
boolean logic o ipasa ito sa mga API na umaasa ng `boolean[]`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areBooleans` para i-validate ang `unknown[]` bago ito ituring na `boolean[]`; nagbabalik ito ng `false`
> para sa mga bakanteng array, kaya i-handle nang hayagan ang kasong iyon kung dapat payagan ang isang bakanteng
> listahan.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang bawat elemento ay boolean at ang input ay isang hindi bakanteng array.
- Pinipigilan ang mga maling positibo sa pamamagitan ng pagtanggi sa mga bakanteng array (nagbabalik ng `false`).
- Mahusay gamitin bilang runtime guard bago ang mga operasyong para lang sa boolean (hal., `every`, `some`, mga lohikal
  na reduction).

## Paggamit

### Sintaks

Function:

- `areBooleans(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga elementong boolean.

### Lokal na pag-import ng function

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areBooleans(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 14:42:45 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>