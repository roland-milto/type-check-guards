# isFinite

## Maelezo

Huamua ikiwa `value` iliyotolewa ni `number` yenye ukomo.

### Kesi ya matumizi

Tumia `isFinite` kuthibitisha ingizo lisilojulikana (mfano, kutoka JSON, fomu, au API) kabla ya kufanya hesabu za
nambari, kuhakikisha thamani ni nambari halisi yenye ukomo.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isFinite` hurejesha `true` tu kwa nambari zenye ukomo; hurejesha `false` kwa `NaN`, `Infinity`, na thamani yoyote
> isiyo nambari.

### Faida

- Hutumia `Number.isFinite` iliyojengwa ndani kwa ukaguzi wa kuaminika wa kuwa na ukomo.
- Hurejesha `true` tu kwa nambari zenye ukomo; hurejesha `false` kwa `NaN`, `Infinity`, na ingizo lisilo nambari.
- Prediketi rahisi isiyo na athari za pembeni inayofaa kwa uthibitishaji na mantiki ya ulinzi.

## Matumizi

### Sintaksia

Kazi:

- `isFinite(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa ikiwa ina ukomo.

### Uingizaji wa kazi wa ndani

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers ni: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value ni nambari yenye kikomo hapa
  const doubled = value * 2;
  console.log(doubled);
}
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isFinite(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 16:31:44 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>