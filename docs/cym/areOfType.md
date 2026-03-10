# areOfType

## Disgrifiad

Yn gwirio a yw pob elfen yn yr `array` a roddwyd o’r `type` penodedig.

### Achos defnydd

Defnyddiwch `areOfType` i ddilysu mewnbwn anhysbys (e.e., JSON wedi’i pharsio, llwythi tâl API, mewnbwn defnyddiwr) cyn
perfformio gweithrediadau penodol i fath ar bob elfen o arae.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Gan fod `areOfType` yn warchodwr math, mae TypeScript yn culhau’r arae y tu mewn i floc `if (areOfType(...)) {}` i
`Array<DataTypeOf<T>>`.

### Manteision

- Yn darparu gwarchodwr math TypeScript: pan fydd yn dychwelyd `true`, caiff y mewnbwn ei gulhau i
  `Array<DataTypeOf<T>>`.
- Yn dilysu pob elfen yn erbyn y math amser-rhedeg a ofynnwyd, gan atal araeau cymysg eu math rhag pasio.
- Yn methu’n gyflym: yn dychwelyd `false` cyn gynted ag y canfyddir elfen nad yw’n cyfateb.
- Yn gwrthod rhai nad ydynt yn araeau ac araeau gwag yn ôl y dyluniad (yn dibynnu ar `isFilledArray`).

## Defnydd

### Cystrawen

Swyddogaeth:

- `areOfType(array, type)`

Paramedrau:

- `array`: Yr arae i’w gwirio.
- `type`: Y math i’w wirio yn erbyn pob elfen yn yr arae.

### Mewnforio swyddogaeth leol

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // mae values bellach yn number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areOfType(array, type)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 17:09:10 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>