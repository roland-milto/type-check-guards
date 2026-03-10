# isIndexFound

## Paglalarawan

Tinutukoy ng `isIndexFound` kung ang ibinigay na value ay isang hindi negatibong integer, na nagpapahiwatig na may
nahanap na index.

### Kaso ng paggamit

I-validate na ang resulta ng paghahanap ay kumakatawan sa isang magagamit na index (integer `>= 0`) bago mag-index sa
isang array o string, upang maiwasan ang aksidenteng paggamit ng `-1` o mga hindi numerong value.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isIndexFound` pagkatapos ng mga operasyon tulad ng `indexOf`, `findIndex`, o mga custom na paghahanap
> kung saan ang `-1` (o iba pang hindi wastong value) ay maaaring magpahiwatig ng “hindi nahanap”. Kapag nagbalik ito ng
`true`, ang value ay isang numero at ligtas gamitin bilang index ng array/string.

### Mga bentahe

- Nagbibigay ng simpleng type guard upang matukoy kung may nahanap na index sa pamamagitan ng pag-check kung ito ay
  isang hindi negatibong integer.
- Nagbabalik ng `true` lamang para sa mga wastong value na parang index (mga integer na `>= 0`), tinatanggihan ang mga
  negatibo, hindi integer, at hindi numero.
- Tumutulong maiwasan ang mga pagkakamaling off-by-one at sentinel-value kapag nagtatrabaho sa mga API na nagbabalik ng
  `-1` para sa “hindi nahanap”.

## Paggamit

### Sintaks

Function:

- `isIndexFound(value)`

Mga parameter:

- `value`: Ang value na susuriin kung ito ay isang hindi negatibong integer.

### Lokal na pag-import ng function

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // ang idx ay isang numero dito at ay >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Karaniwang paggamit gamit ang indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isIndexFound(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 00:48:12 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>