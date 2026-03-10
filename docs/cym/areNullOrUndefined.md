# areNullOrUndefined

## Disgrifiad

Yn gwirio a yw pob elfen yn yr arae a roddir yn `null` neu `undefined`.

### Achos defnydd

Dilysu bod rhestr o feysydd dewisol yn cynnwys dim gwerthoedd gwirioneddol (dim ond `null`/`undefined`) cyn penderfynu
hepgor prosesu neu ddangos cyflwr “dim gwerthoedd wedi’u darparu”.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areNullOrUndefined` pan fydd angen i chi wirio bod arae yn cynnwys gwerthoedd coll yn unig (`null`/
`undefined`). Sylwch ei fod yn dychwelyd `false` ar gyfer arae wag.

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn `null` neu `undefined`.
- Yn dychwelyd `false` ar gyfer araeau gwag, gan helpu i wahaniaethu “dim data” oddi wrth “pob gwerth ar goll”.
- Yn gweithio gyda `unknown[]`, gan ei wneud yn ddiogel i’w ddefnyddio cyn culhau mathau.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areNullOrUndefined(array)`

Paramedrau:

- `array`: Yr arae i’w wirio.

### Mewnforio swyddogaeth leol

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areNullOrUndefined(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 00:29:27 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>