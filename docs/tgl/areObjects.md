# areObjects

## Paglalarawan

Sinusuri ng `areObjects` kung ang ibinigay na napunong array ay naglalaman lamang ng mga object.

### Kaso ng paggamit

Gamitin ang `areObjects` kapag tumatanggap ka ng hindi kilalang array (hal., mula sa JSON parsing o mga external API) at
kailangan mong tiyakin na hindi ito walang laman at na bawat elemento ay isang object bago mag-iterate at mag-access ng
mga property ng object.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areObjects` upang i-validate ang `unknown[]` bago ituring ang mga item bilang mga object; nagbabalik ito
> ng `false` para sa mga walang lamang array.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang input ay isang napunong array at bawat elemento ay isang object.
- Maagang humihinto at nagbabalik ng `false` sa sandaling may matagpuang elementong hindi object.
- Tumutulong na i-validate ang hindi kilalang input bago magsagawa ng mga operasyong partikular sa object.

## Paggamit

### Sintaks

Function:

- `areObjects(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga elementong object.

### Lokal na pag-import ng function

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // ang value ay isang napunong array ng mga object
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areObjects(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 00:10:41 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>