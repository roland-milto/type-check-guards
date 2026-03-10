# isWeakMap

## Disgrifiad

Yn penderfynu a yw `value` penodol yn enghraifft o `WeakMap`.

### Achos defnydd

Defnyddiwch `isWeakMap` pan fyddwch yn derbyn gwerth `unknown` (e.e., o API cyhoeddus, system ategion, neu gyfluniad
deinamig) ac angen gwirio ei fod yn `WeakMap` cyn defnyddio ymddygiad penodol i `WeakMap`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae `isWeakMap` yn perfformio gwiriad `instanceof WeakMap`; mae'n warchodwr amser rhedeg sy'n dychwelyd `true` dim ond
> ar gyfer enghreifftiau `WeakMap` go iawn.

### Manteision

- Gwiriad amser rhedeg syml i weld a yw gwerth yn `WeakMap`.
- Yn helpu i atal camddefnyddio APIau sy'n gofyn am `WeakMap` drwy ddychwelyd `true`/`false` yn lle taflu eithriad.
- Yn gweithio gyda mewnbynnau `unknown`, gan ei wneud yn gyfleus ar ffiniau modiwlau (e.e., dosrannu, data allanol, neu
  god heb deipiau).

## Defnydd

### Cystrawen

Swyddogaeth:

- `isWeakMap(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // mae a yn WeakMap ar amser rhedeg
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isWeakMap(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 13:24:39 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>