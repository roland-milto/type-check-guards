# isFalse

## Paglalarawan

Sinusuri ng `isFalse` kung ang ibinigay na value ay mahigpit na katumbas ng boolean literal na `false`.

### Kaso ng paggamit

I-validate ang hindi kilalang data (hal., mula sa JSON, query params, o input ng user) kung saan ang tanging tahasang
boolean value na `false` ang dapat ituring na valid na flag, at ang lahat ng iba pa ay dapat tanggihan.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isFalse` kapag kailangan mong tanggapin lamang ang literal na `false` at tanggihan ang lahat ng iba pang
> falsy na value; nagbabalik ito ng `true` lamang para sa `value === false`.

### Mga bentahe

- Nagbibigay ng mahigpit na pagsusuri para sa boolean literal na `false` nang walang coercion.
- Tumutulong na maiba ang `false` mula sa iba pang falsy na value tulad ng `0`, `""`, `null`, at `undefined`.
- Pinapabuti nito ang pagiging madaling basahin sa pamamagitan ng paggawa ng intensyon na malinaw kapag bine-validate
  ang hindi kilalang input.

## Paggamit

### Sintaks

Function:

- `isFalse(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // ang input ay eksaktong false dito
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isFalse(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 16:44:48 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>