# areUndefined

## Danasîn

`areUndefined` kontrol dike ka her hêman di arraya peyda kirî de `undefined` e an na.

### Bikaranîn

Rastandin ku lîsteyek ji encamên vebijarkî tu nirxên rastîn nîne (tenê `undefined`), mînakî piştî mapkirina lêgerînên ku
tê de têketinên winda wek `undefined` têne nîşandan, û tu dixwazî piştrast bikî ku hemû lêgerîn têk çûne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku pêdivî ye tu piştrast bikî ku `unknown[]` tenê nirxên `undefined` dihewîne, `areUndefined` bi kar bîne; ji ber
> kontrola hundirîn a `isFilledArray` ji bo arrayên vala û têketinên ne-array/nederbasdar `false` vedigerîne.

### Avantaj

- Ji bo ne-array û arrayên vala `false` vedigerîne, ji ber ku bi `isFilledArray` re pêdivî ye ku arrayek tije hebe.
- Piştrast dike ku her hêman `undefined` e, ne tenê hinan, û wateyê bi eşkereyî diyar dike.
- Wek pêşbînîna şêwaza guard dema ku komên têketinên nenas têne rastandin, kêrhatî ye.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areUndefined(array)`

Parametreyên:

- `array`: Arraya ku ji bo hêmanên `undefined` tê kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // rast
const r2 = areUndefined(b); // çewt
const r3 = areUndefined(c); // çewt

//‎ Not: ji bo rêzên vala false vedigere
const r4 = areUndefined([]); // çewt

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areUndefined(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 13:56:41 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>