# isFalse

## Danasîn

`isFalse` kontrol dike ka nirxek dayîn bi awayekî hişk bi literalê boolean `false` re wekhev e an na.

### Bikaranîn

Daneyên nenas (mînak: ji JSON, query params, an têketina bikarhêner) rast bike, ku tenê nirxa boolean a eşkere `false`
divê wek alayek derbasdar were hesibandin, û hemû tiştên din divê werin red kirin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isFalse` bikar bîne dema ku divê tenê literalê `false` qebûl bikî û hemû nirxên din ên falsy red bikî; ew tenê ji bo
`value === false` `true` vedigerîne.

### Avantaj

- Bêyî koerckirin, ji bo literalê boolean `false` kontrola hişk peyda dike.
- Alîkarî dike ku `false` ji nirxên din ên falsy wek `0`, `""`, `null`, û `undefined` were cûda kirin.
- Bi eşkere kirina mebestê dema rastandina têketina nenas, xwendinê baştir dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isFalse(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  //‎ input li vir de tam false ye
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isFalse(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isFalse](‎../_analysis/isFalse.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 16:41:18 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>