# isSet

## Disgrifiad

Yn pennu a yw gwerth penodol yn `Set`.

### Achos defnydd

Dilysu mewnbynnau o ffynonellau allanol (e.e., parsio JSON, mewnbwn defnyddiwr, neu APIau trydydd parti) i sicrhau bod
gwerth yn `Set` cyn perfformio gweithrediadau `Set`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isSet` i gulhau gwerthoedd `unknown` cyn galw APIau penodol i `Set` fel `.add`, `.has`, neu `.size`.

### Manteision

- Yn darparu gwiriad amser rhedeg syml i gadarnhau a yw gwerth yn `Set`.
- Yn helpu i atal gwallau math drwy ganiatáu canghennu cynnar pan nad yw gwerth yn `Set`.
- Yn gweithio gydag unrhyw gynnwys `Set` (gwag neu wedi’i lenwi) ac yn dychwelyd `true`/`false` yn gyson.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isSet(value)`

Paramedrau:

- `value`: Y gwerth i’w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // mae a yn Set ar amser rhedeg
  console.log(a.size);
}

console.log(isSet(b)); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isSet(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isSet](../_analysis/isSet.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 23:09:18 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>