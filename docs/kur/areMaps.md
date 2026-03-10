# areMaps

## Danasîn

`areMaps` diyar dike ka rêzek dayîn ne-vala ye û hemû hêmanên wê nimûneyên `Map` in an na.

### Bikaranîn

Têketina nenas (mînak ji parsekirina JSON, APIyên derve, an çavkaniyên dînamîk) piştrast bike berî ku wê wekî lîsteyek
ne-vala ya objeyên `Map` were bikaranîn.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Ji bo rêzek vala `false` vedigerîne; tenê dema ku rêz tije be û her hêmanek `Map` be `true` vedigerîne.

### Avantaj

- Piştrast dike ku her hêmanek nimûneyek `Map` e, û tenê dema ku hemû rêzê kontrolê derbas dike `true` vedigerîne.
- Bi awayekî xweber rêzên vala red dike, û asteng dike ku bi xeletî “bêdane” wekî têketina derbasdar were pejirandin.
- Wekî parêzvanek berî pêkanîna operasyonên taybet bi `Map` (mînak: `.get()`, `.set()`, gerînandin) li ser komekê
  kêrhatî ye.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areMaps(array)`

Parametreyên:

- `array`: Rêza ku were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  //‎ items runtime de Map instanceyanê rêzika nevala ya ne vala ye garantî dike
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  //‎ ji bo: rêzikên vala, an jî rêzikên ku her nirxek ne-Map di nav de hene, false ye
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areMaps(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areMaps](‎../_analysis/areMaps.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 16:13:21 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>