# areFloats

## Danasîn

`areFloats` kontrol dike ka rêzekî dayînî tije ye û hemû hêmanên wê float in.

### Bikaranîn

`areFloats` bikar bîne dema ku tu `unknown[]` distînî (mînakî ji JSON, parametreyên query, an jî API-yên derve) û divê
piştrast bikî ku ew rêzekî tije ye ku her tiştêk di nav de float e berî ku mantiqa hejmarî wek navînkirin,
interpolasyon, an hesabên statîstîkî were xebitandin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areFloats` bikar bîne da ku `unknown[]` biparêzî berî ku wê wek `number[]`-ek ku tenê float dihewîne bihesibînî; ji
> bo rêzên vala û ji bo her hêmanek ne-float `false` vedigerîne.

### Avantaj

- Tenê dema ku têketin rêzekî ne-valayî be û hemû hêmanên wê float bin `true` vedigerîne.
- Bi lez têk diçe: her ku hêmanek ne-float were dîtin, di cih de `false` vedigerîne.
- Alîkarî dike ku berî ku hesabên taybet bi float were kirin, têketina nenas were rastandin.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areFloats(array)`

Parametreyên:

- `array`: Rêza ku ji bo hêmanên float tê kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // rast
console.log(areFloats(b)); // çewt
console.log(areFloats(c)); // çewt

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areFloats(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 15:58:11 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>