# isFilledArray

## Paglalarawan

Sinusuri kung ang `value` ay isang array na may kahit isang elemento, at nagbabalik ng `true` o `false`.

### Kaso ng paggamit

Gamitin ang `isFilledArray` para i-validate ang papasok na data (hal., mga API payload, mga value ng form,
configuration) bago mag-iterate, i-access ang unang elemento, o mag-apply ng lohika na nangangailangan ng kahit isang
item.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Ang `isFilledArray` ay isang runtime guard na nagbabalik ng boolean; hindi nito pinapakitid ang mga uri ng elemento
> lampas sa pagkumpirmang ang array ay hindi bakante.

### Mga bentahe

- Simple at mabilis na pagsusuri para sa hindi bakanteng array gamit ang `Array.isArray` at pagsusuri ng haba.
- Tumutulong maiwasan ang mga runtime error kapag ipinapalagay ng code na ang isang array ay may kahit isang elemento.
- Malinaw na boolean na resulta: nagbabalik ng `true` para sa mga hindi bakanteng array at `false` kung hindi.

## Paggamit

### Sintaks

Function:

- `isFilledArray(value)`

Mga parameter:

- `value`: Ang value na susuriin kung ito ay isang hindi bakanteng array.

### Lokal na pag-import ng function

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // ang input ay isang hindi bakanteng array sa runtime
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isFilledArray(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 11:49:07 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>