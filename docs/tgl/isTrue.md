# isTrue

## Paglalarawan

Tinutukoy ng `isTrue` kung ang isang ibinigay na value ay mahigpit na katumbas ng `true`.

### Kaso ng paggamit

Gamitin ang `isTrue` para i-validate ang mga flag, feature toggle, o configuration value kung saan ang literal na `true`
lang ang dapat tanggapin at ang lahat ng iba pa ay dapat ituring na `false`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isTrue` kapag kailangan mong tanggapin lamang ang boolean literal na `true`, at hindi lang mga truthy na
> value.

### Mga bentahe

- Nagbibigay ng mahigpit na pagsusuri para sa boolean literal na `true` (walang coercion).
- Tumutulong na maiba ang `true` mula sa mga truthy na value tulad ng `1`, `"true"`, o `{}`.
- Simple at predictable na pag-uugali na angkop para sa mga guard at validation pipeline.

## Paggamit

### Sintaks

Function:

- `isTrue(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // totoo
const b = isTrue(1);         // mali
const c = isTrue("true");   // mali

if (isTrue(a)) {
  // totoo ang a dito
}
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isTrue(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 13:46:25 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>