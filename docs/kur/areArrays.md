# areArrays

## Danasîn

`areArrays` diyar dike ka nirxek arrayek du-dimensîyonî ya tije ye ku hemû hêmanên wê jî array in an na.

### Bikaranîn

Ji bo piştrastkirina têketinên tabloyî an matris-şêwaz (mînak: rêzên CSV, daneyên grid, an lîsteyên komkirî) berî ku
operasyonên rêz/sitûn pêk bînî `areArrays` bi kar bîne; ew `false` vedigerîne heke têketin array nebe, vala be, an jî
her hêmanekî ne-array tê de hebe.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku pêdivî ye piştrast bikî ku nirxek arrayek 2D ya ne-valayî ye û ku her rêz arrayek e berî ku li ser wê bigerî
> an jî di nav arrayên nestkirî de index bikî, `areArrays` bi kar bîne.

### Avantaj

- Piştrast dike ku têketinê arrayek du-dimensîyonî ya ne-valayî ye ku her hêmanek jî arrayek e.
- Encamek boolean a sade (`true`/`false`) vedigerîne ku ji bo guard û derketinên zû guncaw e.
- Alîkarî dike ku çewtiyên runtime pêşî bixe gava ku koda paşîn operasyona arrayên nestkirî (mînak: mapkirina rêzan) tê
  texmîn kirin.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areArrays(array)`

Parametreyên:

- `array`: Têketina ku divê were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  //‎‎ value rêzika 2D ye ku hêmanên wê rêzikan in
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areArrays(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areArrays](‎../_analysis/areArrays.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 13:40:24 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>