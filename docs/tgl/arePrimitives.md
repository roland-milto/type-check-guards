# arePrimitives

## Paglalarawan

Sinusuri ng `arePrimitives` kung lahat ng elemento sa ibinigay na hindi bakanteng array ay mga primitibong uri.

### Kaso ng paggamit

I-validate na ang papasok na data (hal., mga query parameter, mga value ng CSV row, o listahan ng mga ID/tag) ay
naglalaman lamang ng mga primitibong halaga bago i-serialize, i-hash, i-log, o ipasa ito sa mga API na hindi dapat
makatanggap ng mga object.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `arePrimitives` kapag kailangan mong tiyakin na ang isang `unknown[]` ay naglalaman lamang ng mga
> primitibong halaga (string, number, bigint, boolean, symbol, undefined, o null) bago ang karagdagang pagproseso.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag bawat elemento ay isang primitibong halaga, kaya ito ay isang mahigpit na bantay
  para sa mga array na “walang objects/functions”.
- Mabilis na bumibigay: nagbabalik ng `false` sa sandaling may matagpuang hindi primitibong elemento.
- Nagbabalik din ng `false` para sa mga hindi array at mga walang lamang array (sa pamamagitan ng filled-array check),
  na pumipigil sa aksidenteng pagtanggap ng di-wastong input.

## Paggamit

### Sintaks

Function:

- `arePrimitives(array)`

Mga parameter:

- `array`: Ang array na susuriin kung ang mga elemento ay primitibong uri.

### Lokal na pag-import ng function

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // totoo
const r2 = arePrimitives(b); // totoo
const r3 = arePrimitives(c); // mali

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.arePrimitives(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 00:06:48 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>