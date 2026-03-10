# isFloat

## Danasîn

`isFloat` diyar dike ka `value`-eke dayîn hejmareke floating-point a finite ye (hejmarek `number` ku integer nîne).

### Bikaranîn

Têketina hejmarî ya ji aliyê bikarhêner ve hatî dayîn piştrast bike ku li wir nirxên parçeyî pêwîst in (mînak: bihayên,
pîvan, rêjeyên) û integer, `NaN`, û infinities red bike.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isFloat` bi kar bîne dema ku divê tenê têketinên hejmarî yên finite û ne-integer qebûl bikî; ew integer û hejmarên
> ne-finite red dike.

### Avantaj

- Tenê ji bo hejmarên ne-integer û finite `true` vedigerîne (integeran, `NaN`, `Infinity`, û `-Infinity` derdixe derve).
- Bi her cureyê têketinê (`unknown`) re dixebite û bi kontrolkirina `typeof value === "number"` bi ewlehî tê tengkirin.
- Ji bo tevgerê pêşbînbar, parêzvanên hejmarî yên çêkirî (`Number.isInteger`, `Number.isFinite`) bi kar tîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isFloat(value)`

Parametreyên:

- `value`: Nirxa ku tê kontrolkirin ka gelo hejmareke floating-point e.

### Importa fonksiyona herêmî

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    //‎ value runtime de de jimare ye; finite ye û ne jimareyekî tam e
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isFloat(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isFloat](‎../_analysis/isFloat.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 16:08:34 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>