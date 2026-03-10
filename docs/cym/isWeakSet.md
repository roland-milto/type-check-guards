# isWeakSet

## Disgrifiad

Yn penderfynu a yw’r `value` a roddir yn `WeakSet` o wrthrychau.

### Achos defnydd

Defnyddiwch `isWeakSet` wrth dderbyn mewnbwn heb deip (e.e., o APIs allanol, cyfluniad deinamig, neu werthoedd
`unknown`) ac mae angen i chi wirio ei fod yn `WeakSet` cyn defnyddio gweithrediadau penodol i `WeakSet`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isWeakSet` i gulhau gwerth `unknown` i `WeakSet<object>` ar amser rhedeg; nodwch mai dim ond cyfeiriadau
> gwrthrych y gall `WeakSet` eu cynnwys.

### Manteision

- Yn darparu gwiriad amser rhedeg syml i weld a yw gwerth yn `WeakSet`.
- Yn helpu i atal gwallau math drwy sicrhau mai dim ond enghreifftiau `WeakSet` sy’n cael eu trin felly.
- Yn gweithio gydag unrhyw fewnbwn `unknown` ac yn dychwelyd canlyniad booleaidd clir (`true`/`false`).

## Defnydd

### Cystrawen

Swyddogaeth:

- `isWeakSet(value)`

Paramedrau:

- `value`: Y gwerth i’w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // gwir
console.log(isWeakSet(b)); // ffug

if (isWeakSet(a)) {
  // mae a yn WeakSet ar amser rhedeg
}
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isWeakSet(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:14:21 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>