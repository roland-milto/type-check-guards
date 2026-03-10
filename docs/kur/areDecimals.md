# areDecimals

## Danasîn

Kontrol dike ka hemû hêmanên di rêzekê de hejmarên dehî ne û rêz tije ye, û `true` an `false` vedigerîne.

### Bikaranîn

Lîsteyên ku ji hêla bikarhêner ve têne dayîn (mînak: stûnên CSV an têketinên formê) piştrast bike da ku rêz vala nebe û
her têketin nirxekî dehî be berî parsekirin an hesabkirinan.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku hewceyê kontrola boolean a bilez bî ku `unknown[]` ne vala be û her hêman nîşandana dehî be, `areDecimals` bi
> kar bîne.

### Avantaj

- Pêşî şert dike ku têketin berî pejirandina hêmanan wekî rêzekî tije be, û qebûlkirina bêhemdî ya lîsteyên vala asteng
  dike.
- Her hêman bi `isDecimal` tê piştrastkirin, ji ber vê yekê nirxên tevlihev an nederbasdar di cih de encama `false`
  dide.
- Encamek boolean a hêsan (`true`/`false`) peyda dike ku ji bo guard û şêwazên piştrastkirina vegerandina zû guncaw e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areDecimals(array)`

Parametreyên:

- `array`: Rêza ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // rast
console.log(areDecimals(b)); // nerast
console.log(areDecimals(c)); // nerast
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areDecimals(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areDecimals](‎../_analysis/areDecimals.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 15:57:57 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>