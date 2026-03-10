# isArray

## Disgrifiad

Mae `isArray` yn gwirio a yw gwerth penodol yn arae ac yn dychwelyd `true` os ydyw, fel arall `false`.

### Achos defnydd

Dilysu data anhysbys (e.e., JSON wedi'i ddadansoddi neu ymatebion API) i sicrhau bod gwerth yn arae cyn ailadrodd,
mynegeio, neu gyrchu `.length`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isArray` pan fydd angen gwiriad amser rhedeg ar gyfer araeau; mae'n dychwelyd booleaidd ac mae'n ddiogel
> i'w alw gyda gwerthoedd `unknown`.

### Manteision

- Yn defnyddio'r `Array.isArray` adeiledig ar gyfer canfod araeau'n ddibynadwy ar draws parthau (e.e., iframes).
- Yn dychwelyd canlyniad booleaidd syml (`true`/`false`) sy'n addas ar gyfer gwarchodwyr a rhesymeg canghennu.
- Yn gweithio gydag unrhyw fath o fewnbwn oherwydd bod y paramedr yn `unknown`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isArray(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // mae input yn arae ar amser rhedeg
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isArray(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isArray](../_analysis/isArray.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 11:30:08 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>