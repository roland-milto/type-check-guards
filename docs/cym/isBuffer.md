# isBuffer

## Disgrifiad

Yn gwirio a yw gwerth yn `Buffer` Node.js ac yn dychwelyd `true` neu `false`.

### Achos defnydd

Dilyswch fewnbynnau ar amser rhedeg (e.e., llwythi API, data ffeil, neu byfferau negeseuon) i sicrhau bod gwerth yn
`Buffer` cyn ei brosesu, a chael `false` yn ddibynadwy wrth redeg y tu allan i Node.js lle efallai na fydd `Buffer` yn
bodoli.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isBuffer` i gulhau gwerthoedd `unknown` i `Buffer` cyn galw dulliau penodol i Buffer.

### Manteision

- Yn canfod enghreifftiau `Buffer` Node.js yn ddiogel gan ddefnyddio `Buffer.isBuffer`.
- Yn dychwelyd `false` mewn amgylcheddau lle nad yw `Buffer` ar gael, gan osgoi gwallau amser rhedeg.
- Yn gweithio gyda mewnbwn `unknown`, gan ei wneud yn addas ar gyfer dilysu amser rhedeg a chulhau mathau.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isBuffer(value)`

Paramedrau:

- `value`: Y gwerth i'w brofi.

### Mewnforio swyddogaeth leol

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // gwir
console.log(isBuffer(b)); // ffug

if (isBuffer(a)) {
  // mae a yn Buffer yma
  console.log(a.toString("utf8"));
}
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isBuffer(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 16:31:12 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>