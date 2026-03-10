# isEmpty

## Disgrifiad

Yn penderfynu a yw gwerth penodol yn wag, gan ddychwelyd `true` ar gyfer `null`, `undefined`, llinynnau gwag/llinynnau â
bylchau yn unig, araeau gwag, `Map`/`Set` gwag, neu wrthrychau heb unrhyw briodweddau eu hunain y gellir eu rhestru.

### Achos defnydd

Defnyddiwch `isEmpty` i ddilysu mewnbynnau a chanfod gwerthoedd coll/gwag ar draws sawl math o ddata (e.e. meysydd
ffurflen, llwythi API, gwrthrychau ffurfweddu) lle dylid trin `null`, `undefined`, llinynnau â bylchau yn unig,
casgliadau gwag, a gwrthrychau heb briodweddau fel rhai gwag.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> `isEmpty` yw cyfleustodyn sy'n dychwelyd boole (nid rhagfynegiad math TypeScript), felly nid yw'n culhau mathau ar ei
> ben ei hun; defnyddiwch ef ar gyfer dilysu/canghennu yn hytrach na chulhau amser-cydosod.

### Manteision

- Yn trin `null` a `undefined` fel `true` ar gyfer gwiriadau gwacter.
- Yn ystyried llinynnau sy'n cynnwys bylchau yn unig yn wag drwy docio cyn gwirio hyd.
- Yn cefnogi mathau cynhwysydd cyffredin (araeau, `Map`, `Set`) a gwrthrychau plaen heb unrhyw briodweddau eu hunain y
  gellir eu rhestru.
- Yn osgoi cyfrif priodweddau etifeddol drwy ddefnyddio gwiriadau `hasOwnProperty`.
- Yn dychwelyd canlyniad boole syml (`true`/`false`) sy'n addas ar gyfer gwarchodwyr a dilysu.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isEmpty(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio am wacter.

### Mewnforio swyddogaeth leol

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isEmpty(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 16:18:01 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>