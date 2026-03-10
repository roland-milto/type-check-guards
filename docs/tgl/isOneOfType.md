# isOneOfType

## Paglalarawan

Tinutukoy ng `isOneOfType` kung ang ibinigay na `value` ay tumutugma sa kahit isa sa mga ibinigay na type string, at
nagbabalik ng `true` kung may natagpuang tugma at `false` kung wala.

### Kaso ng paggamit

I-validate ang maluwag ang pagkatype o panlabas na data (hal., na-parse na JSON, query parameters) sa pamamagitan ng
pagpayag sa maraming katanggap-tanggap na runtime type (gaya ng `number` o `string`) bago magpatuloy sa karagdagang
lohika.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isOneOfType` kapag gusto mo ng runtime check na ang isang value ay tumutugma sa alinman sa ilang
> pinapayagang uri; nagbabalik ito ng `true` kung kahit isang uri ang tumugma, kung hindi ay `false`.

### Mga bentahe

- Sinusuri ang isang value laban sa maraming pinapayagang uri sa iisang tawag, at nagbabalik ng `true` sa unang tugma.
- Gumagana sa mga `unknown` na input, kaya kapaki-pakinabang ito sa mga hangganan ng runtime (hal., panlabas na data,
  input ng user).
- Nagbibigay ito ng simpleng boolean na resulta (`true`/`false`) na madaling isama sa conditional logic at mga maagang
  pagbalik (early returns).

## Paggamit

### Sintaks

Function:

- `isOneOfType(value, types)`

Mga parameter:

- `value`: Ang value na susuriin laban sa mga tinukoy na uri.
- `types`: Isang array ng mga string ng uri na kumakatawan sa mga posibleng uri ng value.

### Lokal na pag-import ng function

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // ang input ay isang object sa runtime
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isOneOfType(value, types)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 13:54:39 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>