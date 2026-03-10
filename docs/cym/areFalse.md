# areFalse

## Disgrifiad

Mae `areFalse` yn gwirio a yw pob elfen mewn arae a ddarperir yn union y boole `false`.

### Achos defnydd

Dilysu bod rhestr o faneri nodwedd, gwiriadau, neu ganlyniadau guard i gyd yn `false` cyn parhau (e.e., cadarnhau nad
oes amodau rhwystro yn bresennol).

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areFalse` pan fydd angen dilysiad llym arnoch fod arae yn ddi-wag ac yn cynnwys dim ond y gwerth boole
`false`.

### Manteision

- Yn sicrhau bod pob elfen yn union `false` (dim gorfodaeth truthy/falsey).
- Yn dychwelyd `false` ar gyfer rhai nad ydynt yn araeau neu araeau gwag drwy fynnu arae wedi’i llenwi trwy
  `isFilledArray`.
- Yn stopio’n gynnar ar yr elfen gyntaf nad yw’n `false` er mwyn effeithlonrwydd.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areFalse(array)`

Paramedrau:

- `array`: Yr arae i’w wirio, sy’n cynnwys elfennau o unrhyw fath.

### Mewnforio swyddogaeth leol

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // gwir
const b = areFalse([false, true, false]);  // ffug
const c = areFalse([false, "false", false]); // ffug
const d = areFalse([]); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areFalse(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 16:16:39 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>