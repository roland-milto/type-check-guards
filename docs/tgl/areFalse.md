# areFalse

## Paglalarawan

Sinusuri ng `areFalse` kung ang lahat ng elemento sa ibinigay na array ay mahigpit na boolean na `false`.

### Kaso ng paggamit

Beripikahin na ang isang listahan ng mga feature flag, check, o resulta ng guard ay lahat `false` bago magpatuloy (hal.,
kumpirmahin na walang mga kundisyong humahadlang).

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areFalse` kapag kailangan mo ng mahigpit na beripikasyon na ang isang array ay hindi walang laman at
> naglalaman lamang ng boolean na halagang `false`.

### Mga bentahe

- Tinitiyak na ang bawat elemento ay mahigpit na `false` (walang truthy/falsey coercion).
- Nagbabalik ng `false` para sa mga hindi array o walang laman na array sa pamamagitan ng pag-aatas ng punong array
  gamit ang `isFilledArray`.
- Maagang humihinto sa unang elementong hindi `false` para sa mas mahusay na pagganap.

## Paggamit

### Sintaks

Function:

- `areFalse(array)`

Mga parameter:

- `array`: Ang array na susuriin, na naglalaman ng mga elemento ng anumang uri.

### Lokal na pag-import ng function

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // totoo
const b = areFalse([false, true, false]);  // mali
const c = areFalse([false, "false", false]); // mali
const d = areFalse([]); // mali
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areFalse(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 16:18:51 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>