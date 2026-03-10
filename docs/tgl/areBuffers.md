# areBuffers

## Paglalarawan

Sinusuri ng `areBuffers` kung ang ibinigay na value ay isang hindi bakante, napunong array kung saan bawat elemento ay
isang `Buffer`, at nagbabalik ng `true` kung ganoon at `false` kung hindi.

### Kaso ng paggamit

I-validate ang mga papasok na chunk array (hal., mula sa streams, file uploads, o network packets) upang matiyak na
lahat ng bahagi ay mga `Buffer` instance bago i-concatenate, i-decode, o ipasa sa mga cryptographic o binary-processing
na function.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areBuffers` para i-validate ang `unknown[]` bago tumawag ng mga API na partikular sa Buffer tulad ng
`Buffer.concat`, tinitiyak na nagbabalik ang function ng `true` lamang kapag bawat elemento ay isang `Buffer`.

### Mga bentahe

- Tinitiyak na bawat elemento sa input ay isang Node.js `Buffer` instance, at nagbabalik ng `true` lamang kapag
  tumutugma ang buong array.
- Maagang tinatanggihan ang mga hindi valid na input sa pamamagitan ng paghingi ng hindi bakanteng, napunong array;
  nagbabalik ng `false` para sa mga bakanteng array o hindi array.
- Kapaki-pakinabang bilang guard bago magsagawa ng mga operasyong para sa buffer lamang (hal., concatenation, hashing,
  binary protocols).

## Paggamit

### Sintaks

Function:

- `areBuffers(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga buffer instance.

### Lokal na pag-import ng function

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areBuffers(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 16:27:32 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>