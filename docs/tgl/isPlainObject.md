# isPlainObject

## Paglalarawan

Sinusuri kung ang ibinigay na `value` ay isang plain object at nagbabalik ng `true` kung oo, kung hindi ay `false`.

### Kaso ng paggamit

I-validate na ang isang `unknown` na input (hal., parsed JSON, external data, o mga argument ng function) ay isang plain
object bago basahin ang mga key o i-map ito sa isang typed na configuration object.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> `isPlainObject` ay kapaki-pakinabang para paliitin ang `unknown` bago ito ituring na record-like object; nagbabalik
> ito ng `true` lamang para sa mga value na ang internal tag ay `[object Object]`.

### Mga bentahe

- Nagbibigay ng simple at maaasahang pagsusuri kung ang isang value ay isang plain object (ibig sabihin, `Object` /
  `{}`), na nagbabalik ng `true` o `false`.
- Tumutulong na maiba ang mga plain object mula sa mga array, function, `null`, at iba pang uri na hindi plain object.
- Kapaki-pakinabang bilang type guard sa TypeScript upang paliitin ang mga `unknown` na value bago i-access ang mga
  property ng object.

## Paggamit

### Sintaks

Function:

- `isPlainObject(value)`

Mga parameter:

- `value`: Ang value na susubukan kung ito ay plain object.

### Lokal na pag-import ng function

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // ang input ay isang karaniwang object dito
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isPlainObject(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 12:20:11 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>