# areNaNs

## Paglalarawan

Sinusuri ng `areNaNs` kung lahat ng elemento sa isang array ay `NaN` at nagbabalik ng `true` lamang kung bawat elemento
ay `NaN`.

### Kaso ng paggamit

I-validate ang papasok na data kung saan ginagamit ang `NaN` bilang sentinel value at kailangan mong tiyakin na ang
buong array ay binubuo lamang ng `NaN` (hal., pagtukoy ng isang numeric series na puro nawawala ang mga value).

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areNaNs` kapag kailangan mong i-validate na ang isang array ay naglalaman lamang ng numerikong value na
`NaN` (nang walang string-to-number coercion).

### Mga bentahe

- Nagbabalik ng `true` lamang kapag bawat elemento ay `NaN` (mahigpit na pagsusuri sa lahat ng elemento).
- Hindi kino-coerce ang mga string papuntang mga numero; ang mga value tulad ng "NaN" ay nananatiling hindi-`NaN` at
  ginagawa ang resulta na `false`.
- Nagbabalik ng `false` para sa mga array na walang laman, na pumipigil sa aksidenteng `true` kapag walang input.

## Paggamit

### Sintaks

Function:

- `areNaNs(array)`

Mga parameter:

- `array`: Ang array na susuriin para sa mga value na `NaN`.

### Lokal na pag-import ng function

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // totoo
const b = areNaNs([NaN, 1, NaN]); // mali
const c = areNaNs([NaN, "NaN", NaN]); // mali
const d = areNaNs([NaN, null, NaN]); // mali
const e = areNaNs([] as unknown[]); // mali
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areNaNs(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 15:53:48 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>