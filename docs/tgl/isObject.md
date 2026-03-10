# isObject

## Paglalarawan

Tinutukoy kung ang ibinigay na `value` ay isang `object` (hindi kasama ang `null`).

### Kaso ng paggamit

Gamitin ang `isObject` upang i-validate ang mga hindi kilalang input (hal., na-parse na JSON, mga tugon ng API, event
payloads) bago mag-access ng mga property, upang matiyak na ang value ay isang object at hindi `null`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Ang `isObject` ay isang runtime guard na nagbabalik ng boolean; hindi nito pinapaliit (narrow) sa isang partikular na
> hugis ng object. Pagsamahin ito sa mga karagdagang check (hal., pag-iral ng property) kapag kailangan mo ng mas mahigpit
> na typing.

### Mga bentahe

- Nagbabalik ng `true` lamang para sa mga hindi-`null` na value na ang `typeof` ay `"object"`.
- Pinipigilan ang karaniwang pagkakamali sa JavaScript kung saan ang `null` ay ituturing na object.
- Gumagana para sa mga plain object at mga built-in na instance ng object (hal., `Date`, `RegExp`).
- Simple at mabilis na runtime check na angkop para sa defensive programming at pag-validate ng input.

## Paggamit

### Sintaks

Function:

- `isObject(value)`

Mga parameter:

- `value`: Ang value na susuriin kung ito ay isang `object`.

### Lokal na pag-import ng function

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // ang input ay isang hindi-null na object sa runtime
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isObject(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isObject](../_analysis/isObject.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 00:20:37 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>