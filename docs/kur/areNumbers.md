# areNumbers

## Danasîn

`areNumbers` kontrol dike ka nirxek rêzek nevala ye ku hemû hêmanên wê jimar in an na.

### Bikaranîn

Daneyên ku ji hêla bikarhêner an API ve têne peyda kirin rast bike da ku piştrast bibe ku ew rêzek nevala ya jimaran e
berî ku kom, navîn, an komkirinên din ên jimartî were hesab kirin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areNumbers` bikar bîne da ku berî ku hesabên jimartî pêk bînî rêzên nenas rast bike; ew ji bo rêzên vala û ji bo
> rêzên ku di nav de her nirxek ne-jimar hebe `false` vedigerîne.

### Avantaj

- Tenê dema ku têketin rêzek nevala ye û hemû hêman jimar in `true` vedigerîne.
- Bi redkirina rêzên vala û têketinên ne-rêzê, pêşî li erênîyên şaş digire.
- Wekî parêzvanek berî operasyonên jimartî (mînak: komkirin, navînkirin) kêrhatî ye da ku ji çewtiyên dema xebitandinê
  dûr bikeve.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areNumbers(array)`

Parametreyên:

- `array`: Rêza ku divê ji bo hêmanên jimartî were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areNumbers(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areNumbers](‎../_analysis/areNumbers.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 13:04:58 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>