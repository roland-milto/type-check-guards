# areStrings

## Paglalarawan

Sinusuri ng `areStrings` kung ang isang array ay hindi walang laman at lahat ng mga elemento nito ay mga string, at
nagbabalik lamang ng `true` sa kasong iyon.

### Kaso ng paggamit

I-validate ang panlabas o ibinigay ng user na data (hal., query params, JSON payloads, CSV fields) upang matiyak na
mayroon kang hindi walang lamang listahan ng mga string bago iproseso.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areStrings` upang i-validate ang mga hindi tiyak na array bago mag-apply ng lohikang para sa string
> lamang; nagbabalik ito ng `false` para sa mga walang lamang array.

### Mga bentahe

- Tinitiyak na bawat elemento ay isang string at tinatanggihan ang mga array na halo-halo ang uri sa pamamagitan ng
  pagbabalik ng `false`.
- Tinatanggihan ang mga walang lamang array, kaya ang `true` ay nagpapahiwatig lamang ng isang hindi walang lamang
  listahan ng mga string.
- Kapaki-pakinabang bilang mabilis na runtime guard bago magsagawa ng mga operasyong para sa string lamang (hal.,
  `trim`, `toLowerCase`).

## Paggamit

### Sintaks

Function:

- `areStrings(value)`

Mga parameter:

- `value`: Expected type `string[]`.

### Lokal na pag-import ng function

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // ang input ay isang hindi bakanteng string[] sa runtime
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areStrings(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 13:20:43 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>