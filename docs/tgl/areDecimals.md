# areDecimals

## Paglalarawan

Sinusuri kung ang lahat ng elemento sa isang array ay mga decimal na numero at kung ang array ay napuno, at ibinabalik
ang `true` o `false`.

### Kaso ng paggamit

I-validate ang mga listahang ibinigay ng user (hal., mga column ng CSV o mga input sa form) upang matiyak na ang array
ay hindi walang laman at ang bawat entry ay isang decimal na value bago mag-parse o magkalkula.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areDecimals` kapag kailangan mo ng mabilis na boolean check na ang isang `unknown[]` ay hindi walang
> laman at ang bawat elemento ay isang decimal na representasyon.

### Mga bentahe

- Tinitiyak na ang input ay isang napunong array bago i-validate ang mga item, na pumipigil sa aksidenteng pagtanggap ng
  mga walang laman na listahan.
- Vina-validate ang bawat elemento gamit ang `isDecimal`, kaya ang halo-halo o di-wastong mga value ay agad na
  magreresulta sa `false`.
- Nagbibigay ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard at mga daloy ng validation na
  may maagang pagbalik (early-return).

## Paggamit

### Sintaks

Function:

- `areDecimals(array)`

Mga parameter:

- `array`: Ang array na susuriin.

### Lokal na pag-import ng function

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // totoo
console.log(areDecimals(b)); // mali
console.log(areDecimals(c)); // mali
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areDecimals(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 15:59:22 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>