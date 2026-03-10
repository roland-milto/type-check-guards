# isFinite

## Paglalarawan

Tinutukoy kung ang ibinigay na `value` ay isang finite na `number`.

### Kaso ng paggamit

Gamitin ang `isFinite` upang i-validate ang hindi tiyak na input (hal., mula sa JSON, mga form, o mga API) bago
magsagawa ng mga numeric na kalkulasyon, tinitiyak na ang value ay isang tunay, finite na numero.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> `isFinite` ay nagbabalik ng `true` lamang para sa mga finite na numero; nagbabalik ito ng `false` para sa `NaN`,
`Infinity`, at anumang value na hindi numero.

### Mga bentahe

- Gumagamit ng built-in na `Number.isFinite` para sa maaasahang pagsusuri ng pagiging finite.
- Nagbabalik ng `true` lamang para sa mga finite na numero; nagbabalik ng `false` para sa `NaN`, `Infinity`, at mga
  input na hindi numero.
- Simple, walang side effect na predicate na angkop para sa validation at guarding logic.

## Paggamit

### Sintaks

Function:

- `isFinite(value)`

Mga parameter:

- `value`: Ang value na susuriin kung finite.

### Lokal na pag-import ng function

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers ay: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // ang value ay isang may hangganang numero dito
  const doubled = value * 2;
  console.log(doubled);
}
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isFinite(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 16:31:57 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>