# arePrimitives

## Danasîn

`arePrimitives` nirxandin dike ka hemû hêmanên di rêzekê de ku hatî peyda kirin û ne vala ye, ji cureyên bingehîn (
primitive) ne.

### Bikaranîn

Piştrast bike ku daneyên têketinê (mînak: parametreyên query, nirxên rêza CSV, an lîsteyek ID/tag) tenê nirxên bingehîn
dihewîne berî serialîzekirin, hashing, logging, an şandina wan bo API-yên ku divê object qebûl nekin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku pêdivî ye piştrast bikî ku `unknown[]` tenê nirxên bingehîn (string, number, bigint, boolean, symbol,
> undefined, an null) dihewîne berî ku pêvajoya din were kirin, `arePrimitives` bi kar bîne.

### Avantaj

- Tenê dema ku hemû hêman nirxên bingehîn (primitive) bin `true` vedigerîne، û wisa dibe parêzvanekî hişk ji bo rêzên
  “bê tiştên object/function”.
- Bi lez têk diçe: her ku hêmanek ne-bingehîn were dîtin, di cih de `false` vedigerîne.
- Herwiha ji bo ne-rêz (non-array) û rêzên vala jî `false` vedigerîne (bi kontrola filled-array), û wisa qebûlkirina
  bê-hevce ya têketinên nederbasdar asteng dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `arePrimitives(array)`

Parametreyên:

- `array`: Rêza ku divê were kontrolkirin ka hêmanên wê ji cureyên bingehîn (primitive) ne.

### Importa fonksiyona herêmî

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // rast
const r2 = arePrimitives(b); // rast
const r3 = arePrimitives(c); // nerast
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.arePrimitives(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [arePrimitives](‎../_analysis/arePrimitives.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 00:05:24 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>