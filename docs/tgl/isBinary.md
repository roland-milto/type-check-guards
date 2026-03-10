# isBinary

## Paglalarawan

Tinutukoy ng `isBinary` kung ang isang value ay isang binary string (maaaring may `0b`/`0B` na prefix) at nagbabalik ng
`true` o `false`.

### Kaso ng paggamit

I-validate ang mga string na ibinigay ng user (hal., mga field ng form, CLI args, mga value ng config) upang matiyak na
mga binary digit lamang ang kinakatawan ng mga ito, opsyonal na may `0b`/`0B` na prefix, bago ang karagdagang
pagproseso.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isBinary` bilang type guard bago mag-parse o mag-convert ng string sa `BigInt`/`Number` upang maiwasan
> ang hindi valid na input.

### Mga bentahe

- Tumatanggap ng mga binary string na may o walang `0b`/`0B` na prefix.
- Tinatanggihan ang mga walang laman na string at mga string na may whitespace sa unahan/hulihan (ASCII ≤ 32).
- Nagbabalik ng `true`/`false` nang hindi naghahagis ng error, kaya ligtas ito para sa mga hindi tiyak na input.

## Paggamit

### Sintaks

Function:

- `isBinary(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // totoo
const b = isBinary("1010");   // totoo
const c = isBinary("0b1020"); // mali
const d = isBinary(0b1010);     // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isBinary(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 23:11:32 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>