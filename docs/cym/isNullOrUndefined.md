# isNullOrUndefined

## Disgrifiad

Yn gwirio a yw gwerth penodol yn `null` neu `undefined`.

### Achos defnydd

Defnyddiwch `isNullOrUndefined` pan fydd angen i chi drin `null` ac `undefined` ill dau fel “dim gwerth”, megis dilysu
mewnbynnau dewisol, normaleiddio llwythi tâl API, neu warchod llwybrau cod cyn dadgyfeirio gwerth a allai fod ar goll.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isNullOrUndefined` i warchod rhag gwerthoedd coll cyn cyrchu priodweddau neu alw dulliau; mae’n dychwelyd
`true` dim ond ar gyfer `null` a `undefined`.

### Manteision

- Yn darparu gwarchodwr clir, ailddefnyddiadwy ar gyfer canfod `null` a `undefined` mewn un man.
- Yn dychwelyd boole syml (`true`/`false`) sy’n hawdd ei gyfansoddi mewn amodau a dilysiadau.
- Yn helpu i osgoi gwallau amser rhedeg cyffredin drwy wirio am werthoedd coll cyn cyrchu priodweddau neu alw dulliau.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isNullOrUndefined(value)`

Paramedrau:

- `value`: Y gwerth i’w wirio am `null` neu `undefined`.

### Mewnforio swyddogaeth leol

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // trin gwerth coll
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isNullOrUndefined(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 00:33:25 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>