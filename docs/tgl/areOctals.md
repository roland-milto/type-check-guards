# areOctals

## Paglalarawan

Tinutukoy ng `areOctals` kung ang ibinigay na value ay isang hindi bakanteng array ng mga valid na octal string.

### Kaso ng paggamit

Gamitin ang `areOctals` kapag bine-beripika ang input ng user, mga value ng configuration, o mga API payload na dapat
maglaman ng mga octal literal (hal., mga mode ng pahintulot ng file tulad ng `0o755`) at gusto mong tanggihan ang mga
bakanteng array o anumang hindi valid na entry sa pamamagitan ng pagbabalik ng `false`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areOctals` upang matiyak na mayroon kang isang hindi bakanteng `unknown[]` kung saan bawat entry ay isang
> valid na octal string bago mag-convert (hal., gamit ang `Number(...)` o custom na pag-parse).

### Mga bentahe

- Bine-beripika na ang isang value ay isang hindi bakanteng array kung saan bawat elemento ay isang octal string, at
  nagbabalik lamang ng `true` kapag pumasa ang lahat ng item.
- Mabilis na bumabagsak: nagbabalik ng `false` sa sandaling may matagpuang hindi-octal na elemento.
- Kapaki-pakinabang bilang guard bago mag-parse o mag-convert ng mga octal string upang maiwasan ang mga runtime error
  at hindi pare-parehong paghawak ng input.

## Paggamit

### Sintaks

Function:

- `areOctals(array)`

Mga parameter:

- `array`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // ang value ay isang hindi bakanteng array ng mga octal na string
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areOctals(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 14:58:36 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>