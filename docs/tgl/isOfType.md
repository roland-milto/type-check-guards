# isOfType

## Paglalarawan

Tinutukoy kung ang ibinigay na `value` ay tumutugma sa isang tinukoy na type string, gamit ang `typeof` para sa mga
primitive at isang fallback para sa mga kumplikadong type.

### Kaso ng paggamit

I-validate at i-narrow ang mga `unknown` na input (hal., mga tugon ng API, input ng user, na-parse na JSON) sa
pamamagitan ng pagsuri kung ang isang value ay nasa inaasahang type string bago magsagawa ng mga operasyong partikular
sa type.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isOfType` para mag-branch batay sa mga runtime type kapag nagtatrabaho sa mga `unknown` na value;
> nagbabalik ito ng `true`/`false` at tahasang tinatrato ang `null` at `undefined`.

### Mga bentahe

- Sinusuri ang mga primitive gamit ang direktang `typeof` para sa bilis at kalinawan.
- Tamang hinahawakan ang `null` at `undefined`, na hindi kayang maiba nang ayon sa inaasahan gamit ang `typeof` lamang.
- Sinusuportahan nito ang mga kumplikado o pasadyang type string sa pamamagitan ng fallback na paghahambing gamit ang
  `getTypeOf`.
- Nagbabalik ito ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard at branching.

## Paggamit

### Sintaks

Function:

- `isOfType(value, type)`

Mga parameter:

- `value`: Ang value na susubukan laban sa `type`.
- `type`: Ang string na representasyon ng type na susuriin laban dito.

### Lokal na pag-import ng function

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // ang input ay isang numero dito
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // ang input ay isang string dito
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isOfType(value, type)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 17:06:44 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>