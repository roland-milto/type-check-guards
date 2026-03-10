# isArray

## Paglalarawan

Sinusuri ng `isArray` kung ang ibinigay na value ay isang array at nagbabalik ng `true` kung oo, kung hindi ay `false`.

### Kaso ng paggamit

I-validate ang hindi kilalang data (hal., na-parse na JSON o mga tugon ng API) upang matiyak na ang isang value ay array
bago mag-iterate, mag-index, o mag-access ng `.length`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isArray` kapag kailangan mo ng runtime check para sa mga array; nagbabalik ito ng boolean at ligtas
> tawagin gamit ang mga `unknown` na value.

### Mga bentahe

- Ginagamit ang built-in na `Array.isArray` para sa maaasahang pagtukoy ng array sa iba’t ibang realm (hal., iframes).
- Nagbabalik ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard at branching logic.
- Gumagana sa anumang uri ng input dahil ang parameter ay `unknown`.

## Paggamit

### Sintaks

Function:

- `isArray(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // ang input ay isang array sa runtime
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isArray(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isArray](../_analysis/isArray.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 11:32:19 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>