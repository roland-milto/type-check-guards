# isTrue

## Disgrifiad

Mae `isTrue` yn penderfynu a yw gwerth penodol yn hollol gyfartal â `true`.

### Achos defnydd

Defnyddiwch `isTrue` i ddilysu baneri, toglau nodwedd, neu werthoedd ffurfweddu lle dylid derbyn dim ond y llythrennydd
`true` a rhaid trin popeth arall fel `false`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isTrue` pan fydd angen i chi dderbyn dim ond y llythrennydd booleaidd `true`, nid dim ond gwerthoedd
> truthy.

### Manteision

- Yn darparu gwiriad llym ar gyfer y llythrennydd booleaidd `true` (dim gorfodaeth).
- Yn helpu i wahaniaethu `true` oddi wrth werthoedd truthy fel `1`, `"true"`, neu `{}`.
- Ymddygiad syml, rhagweladwy sy'n addas ar gyfer gwarchodwyr a phiblinellau dilysu.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isTrue(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // gwir
const b = isTrue(1);         // ffug
const c = isTrue("true");   // ffug

if (isTrue(a)) {
  // mae a yn wir yma
}
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isTrue(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 13:41:59 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>