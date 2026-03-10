# areMaps

## Paglalarawan

Tinutukoy ng `areMaps` kung ang ibinigay na array ay hindi walang laman at lahat ng elemento nito ay mga `Map` instance.

### Kaso ng paggamit

I-validate ang hindi kilalang input (hal., mula sa JSON parsing, external APIs, o mga dynamic na pinagmumulan) bago ito
ituring bilang isang hindi walang lamang listahan ng mga `Map` object.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Nagbabalik ng `false` para sa isang walang lamang array; nagbabalik lamang ito ng `true` kapag puno ang array at bawat
> elemento ay isang `Map`.

### Mga bentahe

- Tinitiyak na bawat elemento ay isang `Map` instance, at nagbabalik lamang ng `true` kapag pumasa sa pagsusuri ang
  buong array.
- Sadyang tinatanggihan ang mga walang lamang array, na pumipigil sa hindi sinasadyang pagtanggap sa “walang data”
  bilang balidong input.
- Kapaki-pakinabang bilang guard bago magsagawa ng mga operasyong partikular sa `Map` (hal., `.get()`, `.set()`,
  pag-iterate) sa isang koleksyon.

## Paggamit

### Sintaks

Function:

- `areMaps(array)`

Mga parameter:

- `array`: Ang array na susuriin.

### Lokal na pag-import ng function

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // ang items ay garantisadong isang hindi walang-lamang array ng mga instance ng Map sa runtime
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // mali para sa: mga array na walang laman, o mga array na naglalaman ng anumang halagang hindi Map
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areMaps(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 16:14:54 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>