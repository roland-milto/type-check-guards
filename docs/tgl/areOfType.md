# areOfType

## Paglalarawan

Sinusuri kung lahat ng elemento sa ibinigay na `array` ay nasa tinukoy na `type`.

### Kaso ng paggamit

Gamitin ang `areOfType` para i-validate ang hindi tiyak na input (hal., parsed JSON, API payloads, user input) bago
magsagawa ng mga operasyong partikular sa type sa bawat elemento ng isang array.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Dahil ang `areOfType` ay isang type guard, ini-narrow ng TypeScript ang array sa loob ng `if (areOfType(...)) {}`
> block tungo sa `Array<DataTypeOf<T>>`.

### Mga bentahe

- Nagbibigay ng TypeScript type guard: kapag nagbalik ito ng `true`, ang input ay nai-narrow sa `Array<DataTypeOf<T>>`.
- Bine-validate ang bawat elemento laban sa hinihinging runtime type, kaya napipigilan ang mga array na halo-halo ang
  type na makalusot.
- Mabilis na bumabagsak: nagbabalik ng `false` sa sandaling may matagpuang elementong hindi tumutugma.
- Tinatanggihan ang mga hindi array at mga bakanteng array ayon sa disenyo (nakadepende sa `isFilledArray`).

## Paggamit

### Sintaks

Function:

- `areOfType(array, type)`

Mga parameter:

- `array`: Ang array na susuriin.
- `type`: Ang type na ipapantapat sa bawat elemento sa array.

### Lokal na pag-import ng function

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // ang values ay number[] na ngayon
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areOfType(array, type)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 17:11:42 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>