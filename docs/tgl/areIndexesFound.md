# areIndexesFound

## Paglalarawan

Sinusuri ng `areIndexesFound` kung ang isang value ay isang hindi bakanteng array na ang mga elemento ay pawang mga
wastong index, at nagbabalik ng `true` kung ganoon at `false` kung hindi.

### Kaso ng paggamit

I-validate ang datos na ibinigay ng user o mula sa panlabas na pinagmulan (hal., na-parse na JSON) na inaasahang isang
listahan ng mga index bago ito gamitin upang mag-access o mag-slice ng mga array.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areIndexesFound` upang i-validate ang hindi kilalang input bago ituring ang mga elemento nito bilang mga
> index ng array; nagbabalik ito ng `false` para sa mga bakanteng array at para sa mga array na naglalaman ng mga value na
> hindi index.

### Mga bentahe

- Nagbabalik ito ng `true` lamang kapag ang input ay isang napunong array at bawat elemento ay isang wastong index.
- Mabilis na bumibigay: nagbabalik ng `false` sa sandaling may matagpuang elementong hindi index.
- Kapaki-pakinabang bilang guard bago gamitin ang mga value bilang mga posisyon o offset sa array.

## Paggamit

### Sintaks

Function:

- `areIndexesFound(array)`

Mga parameter:

- `array`: Ang array na susuriin para sa pagsunod sa pagiging index.

### Lokal na pag-import ng function

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Dito, nakumpirma na ang `a` ay isang napunong array ng mga index.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areIndexesFound(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 01:04:28 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>