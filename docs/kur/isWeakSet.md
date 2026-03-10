# isWeakSet

## Danasîn

Diyar dike ka `value`-a dayîn `WeakSet`-eke ji objeyan e an na.

### Bikaranîn

`isWeakSet` bikar bîne dema ku têketina bêcure (mînak: ji API-yên derve, veavakirina dînamîk, an nirxên `unknown`) qebûl
dikî û divê berî bikaranîna operasyonên taybet ên `WeakSet` piştrast bikî ku ew `WeakSet` e.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isWeakSet` bikar bîne da ku di demê xebatê de nirxek `unknown` bi `WeakSet<object>` re teng bike; bala xwe bide ku
`WeakSet` tenê dikare referansên objeyan dihewîne.

### Avantaj

- Ji bo ku nirxekirina demê xebatê ya hêsan peyda dike ku ka nirxek `WeakSet` e an na.
- Bi piştrastkirina ku tenê nimûneyên `WeakSet` wekî wisa têne hesibandin, alî dike ku ji çewtiyên cureyê (type errors)
  dûr bimînin.
- Bi her têketina `unknown` re dixebite û encamek boolean a zelal (`true`/`false`) vedigerîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isWeakSet(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // rast
console.log(isWeakSet(b)); // nerast

if (isWeakSet(a)) {
  //‎ a di dema WeakSet e di dema demê de
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isWeakSet(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 14:17:56 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>