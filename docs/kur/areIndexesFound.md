# areIndexesFound

## Danasîn

`areIndexesFound` kontrol dike ka nirxek arrayek ne-valah e ku hêmanên wê hemû indexên derbasdar in, heke wisa be `true`
vedigerîne û wekî din `false`.

### Bikaranîn

Daneyên ku ji aliyê bikarhêner an ji derve têne (mînak: JSON ya parsekirî) ku tê hêvî kirin ku lîsteyek indexan bin,
berî ku bi wan re arrayan bigihîjî an jê qut bikî, piştrast bike.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areIndexesFound` bikar bîne da ku têketina nenas piştrast bike berî ku hêmanên wê wek indexên arrayê bihesibînî; ji
> bo arrayên vala û ji bo arrayên ku nirxên ne-index di nav de hene `false` vedigerîne.

### Avantaj

- Tenê dema ku têketin arrayek tijî be û her hêmanek indexek derbasdar be `true` vedigerîne.
- Bi lez têk diçe: her ku hêmanek ne-index were dîtin, di cih de `false` vedigerîne.
- Wek parêzvan berî ku nirx wek cihên arrayê an offsetan were bikaranîn, kêrhatî ye.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areIndexesFound(array)`

Parametreyên:

- `array`: Arraya ku divê ji bo lihevhatina bi indexan were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // rast
console.log(areIndexesFound(b)); // nerast
console.log(areIndexesFound(c)); // nerast

if (areIndexesFound(a)) {
  //‎ Li virê, `a` hate pejirandin ku ew rêzek tije ya indeksan e.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areIndexesFound(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areIndexesFound](‎../_analysis/areIndexesFound.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 00:42:35 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>