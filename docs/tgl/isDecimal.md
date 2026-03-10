# isDecimal

## Paglalarawan

Sinusuri ng `isDecimal` kung ang isang value ay representasyon ng decimal string na walang leading/trailing whitespace
at may wastong decimal na format.

### Kaso ng paggamit

I-validate ang mga field ng form, API payload, o configuration value na dapat ibigay bilang decimal string (maaaring may
sign) na walang anumang nakapaligid na whitespace, bago i-parse o i-store ang mga ito.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isDecimal` para i-validate ang input ng user bago ito i-convert (hal., gamit ang `Number(value)`), lalo
> na kapag kailangang tanggihan ang whitespace.

### Mga bentahe

- Mahigpit na tine-test na ang input ay isang string at tumutugma sa pattern ng decimal-literal.
- Tinatanggihan ang leading at trailing whitespace (kasama ang mga control character) upang maiwasan ang malabong
  pag-parse.
- Mabilis na mga paunang pagsusuri (type check at unang/huling character) bago patakbuhin ang regex.
- Nagbabalik ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard at pag-validate ng input.

## Paggamit

### Sintaks

Function:

- `isDecimal(value)`

Mga parameter:

- `value`: Ang value na susuriin kung nasa decimal string format.

### Lokal na pag-import ng function

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // ang v ay isang string dito (na-validate sa runtime)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isDecimal(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 15:54:54 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>