# isFilledArray

## Danasîn

Kontrol dike ka `value` arrayek bi kêmanî yek hêman heye an na, û `true` an `false` vedigerîne.

### Bikaranîn

`isFilledArray` bikar bîne da ku daneyên têketinê (mînak: payloadên API, nirxên formê, veavakirin) berî ku te li ser wan
bigerî, hêmanê yekem bigihîjî, an jî mantiqê ku bi kêmanî yek tişt hewce dike, bisepîne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isFilledArray` parêzvanek runtime ye ku boolean vedigerîne; ew cureyên hêmanan ji derveyî pejirandina ku array
> ne-valayî ye, teng nake.

### Avantaj

- Bi `Array.isArray` û kontrola dirêjahiyê re, kontrola hêsan û bilez ji bo arrayek ne-valayî.
- Alîkar dike ku ji çewtiyên runtime dûr bimînin dema ku kod texmîn dike array bi kêmanî yek hêman heye.
- Encama boolean a zelal: ji bo arrayên ne-valayî `true` vedigerîne û ji bo yên din `false`.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isFilledArray(value)`

Parametreyên:

- `value`: Nirxa ku were kontrol kirin ka arrayek ne-valayî ye an na.

### Importa fonksiyona herêmî

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  //‎‎ input di dema runtime de rêzika ne vala ye
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isFilledArray(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isFilledArray](‎../_analysis/isFilledArray.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 11:47:51 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>