# areNaNs

## Danasîn

`areNaNs` kontrol dike ka hemû hêmanên di arrayekê de `NaN` in û tenê heke her hêman `NaN` be `true` vedigerîne.

### Bikaranîn

Daneyên têketinê piştrast bike ku tê de `NaN` wek nirxek nîşan (sentinel) tê bikaranîn û divê piştrast bikî ku hemû
array bi tenê `NaN` pêk tê (mînak: nasandina rêzek hejmarî ya bi tevahî winda).

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku pêdivî ye piştrast bikî ku arrayek tenê nirxa hejmarî ya `NaN` dihewîne (bê guherandina string-bo-hejmar),
`areNaNs` bi kar bîne.

### Avantaj

- Tenê dema ku hemû hêman `NaN` bin `true` vedigerîne (kontrola hişk a hemû-hêmanan).
- Rêzikên nivîsî (string) bi zorê naguherîne bo hejmar; nirxên wek "NaN" ne-`NaN` dimînin û encamê `false` dikin.
- Ji bo arrayên ne-tijîkirî `false` vedigerîne, û `true`-bûna bêhemdî li ser têketina vala asteng dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areNaNs(array)`

Parametreyên:

- `array`: Arraya ku ji bo nirxên `NaN` tê kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // rast
const b = areNaNs([NaN, 1, NaN]); // nerast
const c = areNaNs([NaN, "NaN", NaN]); // nerast
const d = areNaNs([NaN, null, NaN]); // nerast
const e = areNaNs([] as unknown[]); // nerast
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areNaNs(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areNaNs](‎../_analysis/areNaNs.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 15:52:14 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>