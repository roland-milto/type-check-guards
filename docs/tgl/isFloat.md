# isFloat

## Paglalarawan

Tinutukoy ng `isFloat` kung ang ibinigay na `value` ay isang finite na floating-point na numero (isang `number` na hindi
integer).

### Kaso ng paggamit

I-validate ang numeric input na ibinigay ng user kung saan kinakailangan ang mga fractional value (hal., mga presyo,
sukat, rate) at tanggihan ang mga integer, `NaN`, at mga infinity.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isFloat` kapag kailangan mong tumanggap lamang ng mga finite, hindi-integer na numeric input;
> tinatanggihan nito ang mga integer at mga hindi-finite na numero.

### Mga bentahe

- Nagbabalik ng `true` lamang para sa mga finite, hindi-integer na numero (hindi kasama ang mga integer, `NaN`,
  `Infinity`, at `-Infinity`).
- Gumagana sa anumang uri ng input (`unknown`) at ligtas na pinapakitid ang uri sa pamamagitan ng pag-check ng
  `typeof value === "number"`.
- Gumagamit ng mga built-in na numeric guard (`Number.isInteger`, `Number.isFinite`) para sa predictable na pag-uugali.

## Paggamit

### Sintaks

Function:

- `isFloat(value)`

Mga parameter:

- `value`: Ang value na susuriin kung ito ay isang floating-point na numero.

### Lokal na pag-import ng function

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // ang value ay isang numero sa runtime; ito ay may hangganan at hindi isang integer
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isFloat(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 16:10:06 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>