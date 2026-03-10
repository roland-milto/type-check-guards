# isFloat

## Maelezo

`isFloat` huamua kama `value` iliyotolewa ni nambari ya nukta inayoelea yenye kikomo (yaani `number` ambayo si nambari
kamili).

### Kesi ya matumizi

Thibitisha ingizo la nambari lililotolewa na mtumiaji pale ambapo thamani za sehemu zinahitajika (kwa mfano, bei,
vipimo, viwango) na ukatae nambari kamili, `NaN`, na nambari zisizo na kikomo.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isFloat` unapohitaji kukubali tu ingizo za nambari zenye kikomo zisizo nambari kamili; hukataa nambari kamili
> na nambari zisizo na kikomo.

### Faida

- Hurejesha `true` tu kwa nambari zenye kikomo zisizo nambari kamili (huondoa nambari kamili, `NaN`, `Infinity`, na
  `-Infinity`).
- Hufanya kazi na aina yoyote ya ingizo (`unknown`) na hupunguza aina kwa usalama kwa kukagua
  `typeof value === "number"`.
- Hutumia walinzi wa nambari waliopo tayari (`Number.isInteger`, `Number.isFinite`) kwa tabia inayotabirika.

## Matumizi

### Sintaksia

Kazi:

- `isFloat(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa ikiwa ni nambari ya nukta inayoelea.

### Uingizaji wa kazi wa ndani

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // thamani ni nambari wakati wa utekelezaji; ni yenye kikomo na si nambari kamili
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isFloat(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 16:09:55 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>