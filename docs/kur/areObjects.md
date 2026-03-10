# areObjects

## Danasîn

`areObjects` kontrol dike ka arrayek tije ya hatî peyda kirin tenê objeyan dihewîne an na.

### Bikaranîn

`areObjects` bikar bîne dema ku tu arrayek nenas (mînakî ji parsekirina JSON an APIyên derve) wergirî û divê piştrast
bikî ku ew ne vala ye û ku her hêman objeyek e berî ku tu li ser wê bigerî û taybetmendiyên objeyan bixwînî.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areObjects` bikar bîne da ku berî ku hêmanan wek objeyan bihesibînî `unknown[]` piştrast bikî; ji bo arrayên vala
`false` vedigerîne.

### Avantaj

- Tenê dema ku têketin arrayek tije be û her hêmanek objeyek be `true` vedigerîne.
- Gava ku yekem hêmanek ne-objeyî tê dîtin zû raweste û `false` vedigerîne.
- Berî ku operasyonên taybet bi objeyan re were kirin, alîkariya pejirandina têketina nenas dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areObjects(array)`

Parametreyên:

- `array`: Arraya ku divê ji bo hêmanên objeyî were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  //‎ value têk rêzika tijî ya tiştên objeyan e
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areObjects(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areObjects](‎../_analysis/areObjects.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 00:09:30 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>