# isBuffer

## Danasîn

Kontrol dike ka nirxek Node.js `Buffer` e an na û `true` an `false` vedigerîne.

### Bikaranîn

Têketinan di runtime de rast bike (mînak: payload-yên API, daneyên pelan, an buffer-yên peyaman) da ku berî pêvajokirinê
piştrast bikî ku nirxek `Buffer` e, û bi ewlehî `false` bistînî dema ku li derveyî Node.js dimeşî ku `Buffer` dibe ku
tune be.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isBuffer` bikar bîne da ku berî ku tu rêbazên taybet bi Buffer re bang bikî, nirxên `unknown` bi `Buffer` teng bikî (
> narrow).

### Avantaj

- Bi ewlehî instance-yên Node.js `Buffer` bi bikaranîna `Buffer.isBuffer` tê dîtin.
- Di cîhên ku `Buffer` tune ye de `false` vedigerîne, û ji xeletiyên runtime dûr dikeve.
- Bi têketina `unknown` re dixebite, ku ew ji bo rastkirina runtime û tengkirina cureyê (type narrowing) guncaw dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isBuffer(value)`

Parametreyên:

- `value`: Nirxa ku divê were testkirin.

### Importa fonksiyona herêmî

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // rast
console.log(isBuffer(b)); // nerast

if (isBuffer(a)) {
  //‎ a li vir Buffer e
  console.log(a.toString("utf8"));
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isBuffer(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 16:32:15 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>