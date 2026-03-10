# areFinite

## Paglalarawan

Sinusuri ng `areFinite` kung ang isang value ay isang hindi bakanteng array na ang mga elemento ay pawang finite na mga
numero, at nagbabalik ng `true` kung ganoon at `false` kung hindi.

### Kaso ng paggamit

I-validate ang mga array ng numeric na input (hal., chart series, mga listahan ng coordinate, mga sample ng sukat) bago
magsagawa ng mga kalkulasyon, tinitiyak na ang resulta ay `true` lamang kapag ang lahat ng value ay mga finite na
numero.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areFinite` kapag kailangan mong tiyakin na ang isang array ay hindi bakante at naglalaman lamang ng mga
> finite na numero; nagbabalik ito ng `false` para sa mga bakanteng array at para sa mga array na naglalaman ng `NaN` o
> mga infinity.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang input ay isang hindi bakanteng array at bawat elemento ay isang finite na
  numero.
- Tinatanggihan ang `Infinity`, `-Infinity`, at `NaN` sa pamamagitan ng pag-asa sa mga `isFinite` na pagsusuri para sa
  bawat elemento.
- Nagbibigay ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard at daloy ng pag-validate.

## Paggamit

### Sintaks

Function:

- `areFinite(array)`

Mga parameter:

- `array`: Ang array na susuriin kung finite ang lahat ng elemento nito.

### Lokal na pag-import ng function

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // totoo
console.log(areFinite(b)); // mali
console.log(areFinite(c)); // mali

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areFinite(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 16:37:38 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>