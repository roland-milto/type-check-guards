# isNumeric

## Paglalarawan

Tinutukoy ng `isNumeric` kung ang ibinigay na `value` ay itinuturing na numeriko sa pamamagitan ng pag-check sa
naresolbang uri nito laban sa `NUMERIC_TYPES`.

### Kaso ng paggamit

Gamitin ang `isNumeric` upang i-validate ang mga input (hal., API payloads, mga value ng form, configuration) bago
magsagawa ng mga operasyong numeriko, at upang pare-parehong tanggapin ang mga numerikong uri (tulad ng `BigInt`) ayon
sa `NUMERIC_TYPES`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Ang `isNumeric` ay predicate na nagbabalik ng boolean; ituring ito bilang runtime check kung ang isang value ay
> kabilang sa numeric type set na tinukoy ng library.

### Mga bentahe

- Gumagamit ng `getTypeOf` kasama ang `NUMERIC_TYPES` upang isentro ang lohika ng pagtukoy ng numeriko at panatilihing
  pare-pareho ang mga pagsusuri sa buong codebase.
- Nagbabalik ng simpleng boolean (`true`/`false`) para sa madaling pag-branch at paggamit na parang guard.
- Sumusuporta sa maraming representasyon ng numeriko (hal., `number`, `BigInt`) ayon sa itinakda ng `NUMERIC_TYPES`.

## Paggamit

### Sintaks

Function:

- `isNumeric(value)`

Mga parameter:

- `value`: Ang value na susuriin kung numerikong uri.

### Lokal na pag-import ng function

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // itinuturing na numeriko ang v ayon sa mga tuntunin ng uri ng library
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isNumeric(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 15:54:54 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>