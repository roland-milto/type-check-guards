# isNumber

## Paglalarawan

Sinusuri ng `isNumber` kung ang isang value ay isang finite, hindi-`NaN` na number.

### Kaso ng paggamit

I-validate ang numeric input mula sa mga hindi mapagkakatiwalaang source (mga form, query params, JSON payloads) bago
ang mga kalkulasyon, pag-iimbak, o range checks, tinitiyak na mga finite number lamang ang pumapasa (`true`) at ang
lahat ng iba pa ay nagbabalik ng `false`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isNumber` para i-validate ang mga `unknown` na value bago magsagawa ng arithmetic; tinatanggihan nito ang
`NaN`, `Infinity`, at `-Infinity`.

### Mga bentahe

- Nagbabalik ng `true` lamang para sa mga tunay na JavaScript number (type check kasama ang pagtanggi sa `NaN` at
  infinity).
- Pinipigilan ang mga karaniwang bug sa validation kung saan ang `NaN`, `Infinity`, o `-Infinity` ay aksidenteng
  pumapasa bilang mga number.
- Mahusay gamitin bilang runtime guard para sa hindi kilalang input (hal., JSON, input ng user, mga external API).
- Simple, mabilis, at walang side effect.

## Paggamit

### Sintaks

Function:

- `isNumber(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // ang input ay isang balidong may hangganang numero
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isNumber(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 13:11:21 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>