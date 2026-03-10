# isHexadecimal

## Paglalarawan

Sinusuri ng `isHexadecimal` kung ang ibinigay na value ay isang hexadecimal string literal na may obligadong `0x`/`0X`
na prefix.

### Kaso ng paggamit

Gamitin ang `isHexadecimal` para i-validate ang mga configuration value, field ng API payload, o CLI argument na dapat
ibigay bilang hexadecimal string literals (hal., mga ID, mask, o address) at hindi dapat maglaman ng whitespace sa
paligid.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isHexadecimal` kapag kailangan mong i-validate ang user input o serialized na data bilang isang mahigpit
> na hexadecimal literal string (kasama ang `0x`/`0X` na prefix) bago ito i-parse o i-convert.

### Mga bentahe

- Bine-verify na ang isang value ay string at tumutugma sa mahigpit na hexadecimal literal na format (nangangailangan ng
  `0x`/`0X` na prefix).
- Tinatanggihan ang mga string na may leading o trailing whitespace, na tumutulong maiwasan ang aksidenteng pagtanggap
  ng padded na input.
- Sinusuportahan ang opsyonal na sign at hindi sensitibo sa case para sa prefix at mga digit, at nagbabalik ng `true`/
  `false` nang predictable.

## Paggamit

### Sintaks

Function:

- `isHexadecimal(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (nawawalang prefix)
isHexadecimal(" 0x1A2B"); // false (nangungunang whitespace)
isHexadecimal(0x1a2b); // false (hindi isang string)
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isHexadecimal(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 23:01:22 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>