# areNullOrUndefined

## Danasîn

Kontrol dike ka hemû hêmanên di rêza dayîn de `null` an `undefined` in.

### Bikaranîn

Piştrast bike ku lîsteyek ji qadên vebijarkî berî ku biryar bidî ku pêvajoyê derbas bikî an jî rewşa “nirx nehatine
peyda kirin” nîşan bidî, tu nirxên rastîn nîne (tenê `null`/`undefined`).

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku divê piştrast bikî ku rêzek tenê nirxên winda (`null`/`undefined`) dihewîne, `areNullOrUndefined` bi kar bîne.
> Bala xwe bidê ku ji bo rêzek vala `false` vedigerîne.

### Avantaj

- Tenê dema ku hemû hêman `null` an `undefined` bin `true` vedigerîne.
- Ji bo rêzên vala `false` vedigerîne, ku alîkar dike ku “dane tune” ji “hemû nirxên winda” were cihêkirin.
- Bi `unknown[]` re dixebite, ji ber vê yekê berî ku cureyan were tengkirin ew ewle ye.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areNullOrUndefined(array)`

Parametreyên:

- `array`: Rêza ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎ allMissing === rast

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎ containsValue === nerast

const empty = areNullOrUndefined([]);
//‎ empty === nerast
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areNullOrUndefined(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 00:30:19 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>