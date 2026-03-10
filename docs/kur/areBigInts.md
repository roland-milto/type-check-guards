# areBigInts

## Danasîn

`areBigInts` diyar dike ka nirxek rêzekî ne-vala ye ku tenê nirxên `bigint` tê de hene an na.

### Bikaranîn

Têketina nenas (mînak: daneyên wekî-JSON yên hatine parsekirin, payloadên API, an parametreyên fonksiyonê yên ku wekî
`unknown` hatine type kirin) piştrast bike ku ew rêzekî ne-vala ya nirxên `bigint` e berî ku were pêvajokirin; tenê dema
ku hemû hêman `bigint` bin `true` vedigerîne, wekî din `false`.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areBigInts` wekî parêzvanek runtime bikar bîne berî ku li ser têketina nenas operasyonên tenê-`bigint` (mînak:
> hesabkirin, berawird) pêk bînî.

### Avantaj

- Piştrast dike ku her hêmanek `bigint` e, û tenê dema ku hemû rêz (array) li hev tê, `true` vedigerîne.
- Bi awayekî xweber rêzên ne-array û rêzên vala red dike (bi rêya `isFilledArray`), û qebûlkirina bêhemdî ya têketinên
  nederbasdar asteng dike.
- Fast fail: her ku hêmanek ne-`bigint` were dîtin, di demê de `false` vedigerîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areBigInts(array)`

Parametreyên:

- `array`: Nirxa ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // rast
console.log(areBigInts(b)); // çewt
console.log(areBigInts(c)); // çewt
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areBigInts(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areBigInts](‎../_analysis/areBigInts.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 23:26:33 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>