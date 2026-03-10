# areNullOrUndefined

## Paglalarawan

Sinusuri kung ang lahat ng elemento sa ibinigay na array ay `null` o `undefined`.

### Kaso ng paggamit

I-validate na ang isang listahan ng mga opsyonal na field ay walang aktuwal na value (tanging `null`/`undefined` lamang)
bago magpasya na laktawan ang pagproseso o magpakita ng estado na “walang ibinigay na value”.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areNullOrUndefined` kapag kailangan mong tiyakin na ang isang array ay naglalaman lamang ng mga
> nawawalang value (`null`/`undefined`). Tandaan na nagbabalik ito ng `false` para sa isang walang lamang array.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang bawat elemento ay `null` o `undefined`.
- Nagbabalik ng `false` para sa mga walang lamang array, na tumutulong na maiba ang “walang data” mula sa “lahat ay
  nawawalang value”.
- Gumagana sa `unknown[]`, kaya ligtas itong gamitin bago paliitin ang mga type.

## Paggamit

### Sintaks

Function:

- `areNullOrUndefined(array)`

Mga parameter:

- `array`: Ang array na susuriin.

### Lokal na pag-import ng function

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areNullOrUndefined(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 00:31:39 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>