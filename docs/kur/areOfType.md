# areOfType

## Danasîn

Kontrol dike ka hemû hêmanên di `array`-a dayî de ji `type`-a diyarkirî ne.

### Bikaranîn

`areOfType` bikar bîne da ku têketinên nenas (mînak: JSON-ê ku hatî parse kirin, payloadên API, têketinên bikarhêner)
berî ku li ser her hêmanekê ya arrayê operasyonên taybet bi cureyê pêk bîne, were rastandin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Ji ber ku `areOfType` celebekî cureyê ye, TypeScript di hundirê blokeke `if (areOfType(...)) {}` de arrayê tê
> tengkirin bo `Array<DataTypeOf<T>>`.

### Avantaj

- Parastina celebekî cureyê TypeScript peyda dike: dema ku `true` vedigere, têketin tê tengkirin bo
  `Array<DataTypeOf<T>>`.
- Her hêmanekê li gorî cureya xwestî ya runtime kontrol dike, û nahêle ku arrayên bi cureyên tevlihev derbas bibin.
- Bi lez têk diçe: her ku hêmanek ne lihevhatî were dîtin, di cih de `false` vedigere.
- Bi şêweya xweber arrayên ne-array û arrayên vala red dike (girêdayî ye bi `isFilledArray`).

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areOfType(array, type)`

Parametreyên:

- `array`: Arraya ku tê kontrol kirin.
- `type`: Cureya ku li hemû hêmanên di arrayê de tê beramberkirin.

### Importa fonksiyona herêmî

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  //‎ values niha number[] ye
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areOfType(array, type)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areOfType](‎../_analysis/areOfType.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 17:10:18 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>