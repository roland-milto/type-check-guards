# isRegEx

## Paglalarawan

Tinutukoy kung ang ibinigay na value ay isang `RegExp` instance.

### Kaso ng paggamit

I-validate ang mga value na ibinigay ng user o dynamic (hal., configuration, API payloads, plugin inputs) bago ituring
ang mga ito bilang isang regular expression.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isRegEx` upang paliitin ang `unknown` (o union) na mga value bago gamitin ang mga property o method na
> partikular sa RegExp; nagbabalik ito ng `true` lamang para sa mga value na mga instance ng `RegExp`.

### Mga bentahe

- Nagbibigay ng simpleng runtime type guard upang suriin kung ang isang value ay isang `RegExp`.
- Tumutulong maiwasan ang mga error kapag inaasahan ng code ang isang regular expression (hal., bago tawagin ang `test`,
  `exec`, o basahin ang `source`).
- Gumagana sa parehong regex literals at mga instance na ginawa gamit ang `new RegExp(...)`.
- Nagbabalik ng malinaw na boolean na resulta (`true`/`false`) nang hindi nagtatapon ng error para sa mga input na hindi
  regex.

## Paggamit

### Sintaks

Function:

- `isRegEx(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // ang input ay isang RegExp dito
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isRegEx(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 23:31:16 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>