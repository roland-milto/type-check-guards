# isPromise

## Disgrifiad

Yn pennu a yw gwerth penodol yn `Promise`.

### Achos defnydd

Defnyddiwch `isPromise` i ddilysu mewnbynnau anhysbys cyn eu trin fel `Promise`, megis wrth drin gwerthoedd a ddychwelir
gan ategion, mewnforion deinamig, neu APIs â theipiau rhydd.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae `isPromise` yn gwirio drwy `instanceof Promise`, felly dim ond `true` y mae'n ei ddychwelyd ar gyfer enghreifftiau
`Promise` go iawn (nid thenables generig).

### Manteision

- Yn darparu gwiriad amser rhedeg syml i weld a yw gwerth yn `Promise`.
- Yn helpu i warchod llwybrau cod sy'n gofyn am enghraifft `Promise` go iawn, gan ddychwelyd `true` neu `false` yn
  rhagweladwy.
- Yn osgoi canlyniadau positif ffug o wrthrychau “thenable” (e.e., `{ then() {} }`) drwy fynnu enghraifft `Promise` go
  iawn.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isPromise(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // gwir
console.log(isPromise(b)); // ffug
console.log(isPromise(123)); // ffug
console.log(isPromise(null)); // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isPromise(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 23:52:29 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>