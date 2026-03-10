# isUndefined

## Danasîn

Kontrol dike ka nirxek hatî dayîn `undefined` e an na.

### Bikaranîn

`isUndefined` bikar bîne ji bo parastina têketinên vebijarkî, tespîtkirina taybetmendiyên winda, an jî ji bo cudakirinê
di navbera “nehatî peyda kirin” (`undefined`) û “bi eşkere vala” (`null`) de.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isUndefined` bikar bîne dema ku tu bi taybetî hewceyî tespîtkirina `undefined` yî (ne `null`). Ew ewle ye ji ber ku
> li ser `typeof value === "undefined"` tê damezrandin.

### Avantaj

- Bi `typeof`-ê re kontrolkirekî zelal û eşkere ji bo `undefined` peyda dike, û ji rewşên kêlekî yên bi guherbarên
  nehatine diyarkirin re dûr dikeve.
- Encamek boolean a sade (`true`/`false`) vedigere ku ji bo guard, şertkirin (branching) û logîka rastandinê (
  validation) guncaw e.
- `undefined` ji nirxên din ên “vala” wek `null`, `0`, `""`, an `NaN` cuda dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isUndefined(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎ x li vir ne diyar e
} else {
  //‎ x li vir ne ne diyar e
}

const a = isUndefined(undefined); // rast
const b = isUndefined(null);      // nerast
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isUndefined(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 14:03:25 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>