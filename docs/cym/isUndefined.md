# isUndefined

## Disgrifiad

Yn gwirio a yw gwerth penodol yn `undefined`.

### Achos defnydd

Defnyddiwch `isUndefined` i warchod mewnbynnau dewisol, canfod priodweddau coll, neu wahaniaethu rhwng “heb ei
ddarparu” (`undefined`) a “gwag yn benodol” (`null`).

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isUndefined` pan fydd angen i chi ganfod `undefined` yn benodol (nid `null`). Mae'n ddiogel oherwydd ei
> fod yn dibynnu ar `typeof value === "undefined"`.

### Manteision

- Yn darparu gwiriad clir, pendant ar gyfer `undefined` gan ddefnyddio `typeof`, gan osgoi achosion ymyl gyda newidynnau
  heb eu datgan.
- Yn dychwelyd canlyniad boole syml (`true`/`false`) sy'n addas ar gyfer gwarchodion, canghennu, a rhesymeg dilysu.
- Yn helpu i wahaniaethu `undefined` oddi wrth werthoedd “gwag” eraill fel `null`, `0`, `""`, neu `NaN`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isUndefined(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // mae x yn anniffiniedig yma
} else {
  // nid yw x yn anniffiniedig yma
}

const a = isUndefined(undefined); // gwir
const b = isUndefined(null);      // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isUndefined(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:02:25 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>