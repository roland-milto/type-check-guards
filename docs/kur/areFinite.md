# areFinite

## Danasîn

`areFinite` kontrol dike ka nirxek rêzek ne-valayî ye ku hêmanên wê hemû hejmarên finite ne, heke wisa be `true`
vedigerîne û wekî din `false`.

### Bikaranîn

Berî ku hesabkirinan pêk bîne, rêzên têketinên hejmarî (mînak: rêzên chart, lîsteyên koordînat, nimûneyên pîvanê) erê
bike, da ku encam tenê dema ku hemû nirx hejmarên finite bin `true` be.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku pêwîst be ku rêzek ne-valayî be û tenê hejmarên finite tê de hebin `areFinite` bikar bîne; ji bo rêzên vala û
> ji bo rêzên ku `NaN` an jî infinity tê de hene `false` vedigerîne.

### Avantaj

- Tenê dema ku têketin rêzek ne-valayî be û hemû hêmanên wê hejmarên finite bin `true` vedigerîne.
- Bi piştrastkirinên `isFinite` ji bo her hêmanê, `Infinity`, `-Infinity` û `NaN` red dike.
- Encamek boolean a hêsan (`true`/`false`) peyda dike ku ji bo guard û rêbazên erêkirinê guncaw e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areFinite(array)`

Parametreyên:

- `array`: Rêza ku divê ji bo finitebûna hemû hêmanên wê were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // rast
console.log(areFinite(b)); // nerast
console.log(areFinite(c)); // nerast

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areFinite(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 16:35:41 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>