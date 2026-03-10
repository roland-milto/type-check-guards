# isFalse

## Disgrifiad

Mae `isFalse` yn gwirio a yw gwerth penodol yn hafal yn llym i'r llythrennydd booleaidd `false`.

### Achos defnydd

Dilysu data anhysbys (e.e., o JSON, paramedrau ymholiad, neu fewnbwn defnyddiwr) lle dylid trin dim ond y gwerth
booleaidd penodol `false` fel baner ddilys, a dylid gwrthod popeth arall.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isFalse` pan fydd angen derbyn dim ond y llythrennydd `false` a gwrthod pob gwerth ffug arall; mae'n
> dychwelyd `true` dim ond ar gyfer `value === false`.

### Manteision

- Yn darparu gwiriad llym ar gyfer y llythrennydd booleaidd `false` heb orfodaeth.
- Yn helpu i wahaniaethu `false` oddi wrth werthoedd ffug eraill fel `0`, `""`, `null`, ac `undefined`.
- Yn gwella darllenadwyedd drwy wneud y bwriad yn eglur wrth ddilysu mewnbwn anhysbys.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isFalse(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // mae input yn union yn false yma
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isFalse(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 16:21:15 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>