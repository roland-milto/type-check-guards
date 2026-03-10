# areBinaries

## Danasîn

Kontrol dike ka nirxa peyda kirî rêzekî ne-betale ya rêzokên binary yên derbasdar e an na û tenê dema ku hemû hêman
derbas bibin `true` vedigerîne.

### Bikaranîn

Dema ku tu lîsteyek nenas (mînak ji JSON, form, an API) wergirî û divê piştrast bikî ku ew berî parsekirin an
pêvajokirinê rêzekî ne-betale ya rêzokên binary ye, `areBinaries` bikar bîne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areBinaries` bikar bîne da ku berî veguherandina rêzokên binary bo hejmar/BigInts têketina nenas piştrast bikî; ew
> piştrast dike ku rêz ne-betale ye û her hêman rêzokekî binary ya derbasdar e.

### Avantaj

- Piştrast dike ku nirxek rêzekî ne-betale ye ku her hêmanekî wê rêzekê rêzokekî binary ya derbasdar e.
- Encamekî booleanî sade (`true`/`false`) vedigerîne ku ji bo guard, vegerandinên zû, û piştrastkirina têketinan guncaw
  e.
- Bi redkirina rêzên ku di nav de her têketinekî ne-binary heye, çewtiyên parsekirinê yên paşîn asteng dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areBinaries(array)`

Parametreyên:

- `array`: Nirxa ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // rast
console.log(areBinaries(b)); // çewt
console.log(areBinaries([])); // çewt
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areBinaries(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areBinaries](‎../_analysis/areBinaries.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 23:15:08 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>