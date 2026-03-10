# areArrays

## Paglalarawan

Tinutukoy ng `areArrays` kung ang isang value ay isang napunong dalawang-dimensiyong array na ang lahat ng item ay mga
array.

### Kaso ng paggamit

Gamitin ang `areArrays` para beripikahin ang mga tabular o matrix-like na input (hal., mga CSV row, grid data, o mga
naka-grupong listahan) bago magsagawa ng mga operasyon sa row/column; nagbabalik ito ng `false` kung ang input ay hindi
array, ay bakante, o may anumang elementong hindi array.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areArrays` kapag kailangan mong tiyakin na ang isang value ay isang hindi bakanteng 2D array at na ang
> bawat row ay isang array bago mag-iterate o mag-index sa mga nested array.

### Mga bentahe

- Bine-beripika na ang input ay isang hindi bakanteng dalawang-dimensiyong array kung saan ang bawat elemento ay isang
  array.
- Nagbabalik ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard at maagang paglabas.
- Tumutulong na maiwasan ang mga runtime error kapag ipinapalagay ng susunod na code ang mga operasyon sa nested array (
  hal., pagma-map ng mga row).

## Paggamit

### Sintaks

Function:

- `areArrays(array)`

Mga parameter:

- `array`: Ang input na susuriin.

### Lokal na pag-import ng function

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // ang value ay isang 2D array na may mga array bilang mga elemento
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areArrays(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 13:41:48 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>