# areOneOfType

## Paglalarawan

Sinusuri ng `areOneOfType` kung ang lahat ng elemento sa isang hindi walang-lamang array ay isa sa mga tinukoy na
runtime type.

### Kaso ng paggamit

I-validate ang papasok na data (hal., na-parse na JSON) kung saan ang isang field ay dapat isang hindi walang-lamang
array na ang mga item ay limitado sa isang kilalang set ng mga primitive type; magbalik ng `false` kapag walang laman
ang array o may anumang hindi pinapayagang type.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Nagbabalik ang function na ito ng boolean at hindi nito pinapakitid ang mga type ng elemento ng array sa compile time;
> gamitin ito bilang hakbang ng runtime validation bago ang karagdagang pagproseso.

### Mga bentahe

- Tinitiyak na bawat elemento sa isang array ay tumutugma sa kahit isa sa mga pinapayagang runtime type, at nagbabalik
  ng `true` lamang kapag pumasa ang buong array.
- Maagang tinatanggihan ang mga hindi valid na input: nagbabalik ng `false` kapag ang `array` o `types` ay walang laman
  o hindi isang napunong array.
- Kapaki-pakinabang para sa pag-validate ng mga koleksiyong halo-halo ang type (hal., mga number at string) gamit ang
  iisang tawag sa `areOneOfType`.

## Paggamit

### Sintaks

Function:

- `areOneOfType(array, types)`

Mga parameter:

- `array`: Isang array ng mga elementong ibe-verify laban sa ibinigay na mga type.
- `types`: Isang array ng mga string na kumakatawan sa mga data type na susuriin.

### Lokal na pag-import ng function

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areOneOfType(array, types)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 23:38:53 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>