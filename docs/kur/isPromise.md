# isPromise

## Danasîn

Diyar dike ka nirxek dayîn `Promise` e an na.

### Bikaranîn

`isPromise` bikar bîne da ku berî ku wan wek `Promise` bihesibînî, têketinên nenas rastî bike; mînak dema ku bi nirxên
ku ji pluginan, importên dînamîk, an API-yên bi cureyên nezelal têne vegerandin re kar dikî.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isPromise` bi `instanceof Promise` kontrol dike, ji ber vê yekê tenê ji bo nimûneyên rastîn ên `Promise` `true`
> vedigerîne (ne ji bo thenable-yên giştî).

### Avantaj

- Ji bo ku nirxek `Promise` e an na, kontrola demê xebatê ya hêsan peyda dike.
- Alîkarî dike ku rêyên kodê yên ku pêdivî bi nimûneyek rastîn a `Promise` hene parastin, û bi awayek pêşbînbar `true`
  an `false` vedigerîne.
- Bi şertkirina nimûneyek rastîn a `Promise`, ji erênîyên şaş (false positives) yên ji objeyên “thenable” (mînak:
  `{ then() {} }`) dûr dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isPromise(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // rast
console.log(isPromise(b)); // nerast
console.log(isPromise(123)); // nerast
console.log(isPromise(null)); // nerast

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isPromise(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 23:53:25 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>