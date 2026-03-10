# isMap

## Paglalarawan

Sinusuri kung ang ibinigay na `value` ay isang `Map`, at ibinabalik ang `true` kung ito ay `Map` at `false` kung hindi.

### Kaso ng paggamit

Gamitin ang `isMap` kapag nakakatanggap ka ng isang `unknown` na value (hal., mula sa JSON parsing, mga external API, o
input ng user) at kailangan mong tiyakin na ito ay isang `Map` bago magsagawa ng mga `Map` operation.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> `isMap` ay isang runtime guard na nagbabalik ng `true` kapag ang value ay isang `Map` at `false` kung hindi; gamitin
> ito upang paliitin ang `unknown` bago tumawag ng mga `Map` API.

### Mga bentahe

- Nagbibigay ng mabilis na runtime check kung ang isang value ay isang `Map`.
- Tumutulong na maiwasan ang mga type error sa pamamagitan ng pag-guard sa mga code path na nangangailangan ng mga `Map`
  method tulad ng `get`, `set`, at `has`.
- Gumagana ito nang maayos bilang magaan na hakbang sa pag-validate kapag humahawak ng mga `unknown` na input.

## Paggamit

### Sintaks

Function:

- `isMap(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isMap(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isMap](../_analysis/isMap.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 16:42:20 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>