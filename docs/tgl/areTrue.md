# areTrue

## Paglalarawan

Sinusuri kung ang isang hindi walang lamang array ay naglalaman lamang ng mga boolean na halagang `true`.

### Kaso ng paggamit

Gamitin ang `areTrue` upang i-validate na ang isang hanay ng mga precondition o feature flag ay lahat naka-enable (lahat
ng halaga ay `true`) bago magpatuloy, habang itinuturing ang mga walang laman o maling anyong input bilang hindi
natutugunan (`false`).

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Nagbabalik ang `areTrue` ng `false` para sa isang walang lamang array at para sa mga array na naglalaman ng anumang
> halagang hindi mahigpit na `true`.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag ang bawat elemento ay mahigpit na `true` at ang array ay hindi walang laman.
- Mabilis na bumibigay: nagbabalik ng `false` sa sandaling may matagpuang halagang hindi `true`.
- Tinatanggihan ang mga hindi wastong input (hindi mga array o mga walang lamang array) sa pamamagitan ng pagbabalik ng
  `false`.

## Paggamit

### Sintaks

Function:

- `areTrue(array)`

Mga parameter:

- `array`: Ang array na susuriin kung lahat ay mga halagang `true`.

### Lokal na pag-import ng function

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areTrue(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 13:53:00 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>