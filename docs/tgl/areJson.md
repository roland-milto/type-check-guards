# areJson

## Paglalarawan

Sinusuri kung ang lahat ng elemento ng isang array ay mga JSON string, at nagbabalik ng `true` lamang kung ang array ay
may laman at bawat item ay balidong JSON; kung hindi, nagbabalik ng `false`.

### Kaso ng paggamit

I-validate ang papasok na data (hal., mula sa query params, environment variables, o external APIs) kung saan inaasahan
mo ang isang array ng mga JSON-encoded string at gusto mong tanggihan ang mga walang lamang array o anumang entry na
hindi JSON.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areJson` kapag kailangan mong i-validate na ang isang `unknown[]` ay naglalaman lamang ng mga JSON string
> bago mo i-parse ang mga ito (hal., gamit ang `JSON.parse`).

### Mga bentahe

- Nagbabalik ng `true` lamang kapag bawat elemento ay isang balidong JSON string; kung hindi, nagbabalik ng `false`.
- Mabilis na bumibigay: humihinto sa pag-check sa sandaling may matagpuang elementong hindi JSON.
- Tinatanggihan ang mga walang lamang array ayon sa disenyo, kaya nagbabalik ng `false` para sa input na hindi napunan.

## Paggamit

### Sintaks

Function:

- `areJson(array)`

Mga parameter:

- `array`: Ang array na susuriin kung naglalaman ng mga elementong JSON string.

### Lokal na pag-import ng function

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // totoo
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // mali
const empty = areJson([]); // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areJson(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areJson](../_analysis/areJson.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 16:17:49 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>