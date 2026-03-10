# isEmpty

## Paglalarawan

Tinutukoy kung ang isang ibinigay na value ay walang laman, na nagbabalik ng `true` para sa `null`, `undefined`, mga
empty/whitespace na string, mga empty na array, empty na `Map`/`Set`, o mga object na walang sariling enumerable na
property.

### Kaso ng paggamit

Gamitin ang `isEmpty` upang i-validate ang mga input at matukoy ang mga nawawala/blangkong value sa iba’t ibang uri ng
data (hal., mga field ng form, API payload, mga configuration object) kung saan ang `null`, `undefined`, mga string na
puro whitespace, mga empty na koleksyon, at mga object na walang property ay dapat ituring na walang laman.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Ang `isEmpty` ay isang utility na nagbabalik ng boolean (hindi isang TypeScript type predicate), kaya hindi nito
> pinapakitid ang mga type nang mag-isa; gamitin ito para sa validation/branching sa halip na compile-time narrowing.

### Mga bentahe

- Itinuturing ang `null` at `undefined` bilang `true` para sa mga pagsusuri ng pagiging walang laman.
- Itinuturing na walang laman ang mga string na puro whitespace sa pamamagitan ng pag-trim bago suriin ang haba.
- Sinusuportahan ang mga karaniwang uri ng container (mga array, `Map`, `Set`) at mga plain object na walang sariling
  enumerable na property.
- Iniiwasang bilangin ang mga minanang property sa pamamagitan ng paggamit ng mga pagsusuring `hasOwnProperty`.
- Nagbabalik ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard at validation.

## Paggamit

### Sintaks

Function:

- `isEmpty(value)`

Mga parameter:

- `value`: Ang value na susuriin kung walang laman.

### Lokal na pag-import ng function

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isEmpty(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 16:21:12 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>