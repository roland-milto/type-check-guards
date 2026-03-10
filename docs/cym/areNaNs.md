# areNaNs

## Disgrifiad

Mae `areNaNs` yn gwirio a yw pob elfen mewn arae yn `NaN` ac yn dychwelyd `true` dim ond os yw pob elfen yn `NaN`.

### Achos defnydd

Dilysu data sy’n dod i mewn lle defnyddir `NaN` fel gwerth sentinel a rhaid i chi sicrhau bod yr arae gyfan yn cynnwys
`NaN` yn unig (e.e., canfod cyfres rifiadol lle mae popeth ar goll).

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areNaNs` pan fydd angen i chi ddilysu bod arae yn cynnwys dim ond y gwerth rhifiadol `NaN` (heb orfodi
> llinyn-i-rif).

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn `NaN` (gwiriad llym ar bob elfen).
- Nid yw’n gorfodi llinynnau i rifau; mae gwerthoedd fel "NaN" yn aros yn rhai nad ydynt yn `NaN` ac yn gwneud i’r
  canlyniad fod yn `false`.
- Yn dychwelyd `false` ar gyfer araeau heb eu llenwi, gan atal `true` damweiniol ar fewnbwn gwag.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areNaNs(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio am werthoedd `NaN`.

### Mewnforio swyddogaeth leol

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // gwir
const b = areNaNs([NaN, 1, NaN]); // ffug
const c = areNaNs([NaN, "NaN", NaN]); // ffug
const d = areNaNs([NaN, null, NaN]); // ffug
const e = areNaNs([] as unknown[]); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areNaNs(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 15:51:01 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>