# isPrimitive

## Paglalarawan

Tinutukoy ng `isPrimitive` kung ang ibinigay na value ay isang primitive (`null`, `undefined`, `boolean`, `number`,
`string`, `bigint`, `symbol`).

### Kaso ng paggamit

I-validate ang mga input sa runtime (hal., mga field ng API payload, mga value ng configuration, o data na ibinigay ng
user) upang matiyak na ang isang value ay primitive bago i-serialize, i-log, o ilapat ang mga operasyong para lang sa
primitive.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isPrimitive` para bantayan ang mga `unknown` na input bago ituring ang mga ito bilang mga object o
> function; nagbabalik ito ng `true` para sa mga primitive at `false` para sa mga object at function.

### Mga bentahe

- Mabilis, walang allocation na pagsusuri kung ang isang value ay isang JavaScript primitive.
- Tamang itinuturing ang `null` bilang primitive (kahit na ang `typeof null` ay `"object"`).
- Tumutulong magpaliit ng mga `unknown` na value bago magsagawa ng mga operasyong para lang sa object.

## Paggamit

### Sintaks

Function:

- `isPrimitive(value)`

Mga parameter:

- `value`: Ang value na susuriin kung primitive ang uri.

### Lokal na pag-import ng function

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isPrimitive(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 23:58:05 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>