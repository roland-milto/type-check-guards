# isInteger

## Paglalarawan

Tinutukoy kung ang ibinigay na `value` ay isang ligtas na integer na numero.

### Kaso ng paggamit

I-validate ang hindi pinagkakatiwalaang input (hal., query params, mga JSON payload, environment variables) bago ito
gamitin bilang integer para sa mga array index, pagination, counter, o mga database ID.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isInteger` upang i-validate ang hindi kilalang input bago ito ituring bilang numerikong integer;
> nagbabalik ito ng `true` lamang para sa mga value kung saan `typeof value === "number"` at
`Number.isSafeInteger(value)`.

### Mga bentahe

- Sinusuri ang parehong uri at numerikong kaligtasan: nagbabalik ng `true` lamang kapag ang input ay isang numero at
  isang ligtas na integer.
- Iniiwasan ang mga karaniwang bitag sa numerikong coercion: ang mga string tulad ng "5" ay tama na nagbabalik ng
  `false`.
- Tinatanggihan ang mga hindi-integer at mga hindi ligtas na integer, kaya angkop ito para sa mga ID, counter, at
  pag-index ng array.

## Paggamit

### Sintaks

Function:

- `isInteger(value)`

Mga parameter:

- `value`: Ang value na susuriin para sa katayuang integer.

### Lokal na pag-import ng function

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // totoo
const b = isInteger(-100);   // totoo
const c = isInteger("5");    // mali
const d = isInteger(5.5);    // mali
const e = isInteger(null);   // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isInteger(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 00:51:41 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>