# isNumber

## Danasîn

`isNumber` kontrol dike ka nirx hejmarekî finite, ne-`NaN` e an na.

### Bikaranîn

Berî hesabkirin, tomar kirin, an kontrolkirina navberê, têketina hejmarî ji çavkaniyên ne-bawerbar (form, parametreyên
query, payload-ên JSON) rast bike, da ku tenê hejmarên finite derbas bibin (`true`) û hemû tiştên din `false` vegerînin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isNumber` bikar bîne da ku berî kirina hesabkirinê nirxên `unknown` rast bike; ew `NaN`, `Infinity`, û `-Infinity`
> red dike.

### Avantaj

- Tenê ji bo hejmarên rastîn ên JavaScript `true` vedigerîne (kontrola cureyê + redkirina `NaN` û bêdawî).
- Çewtiyên gelemperî yên pejirandinê asteng dike ku `NaN`, `Infinity`, an `-Infinity` bi xeletî wek hejmar derbas bibin.
- Wek parêzvanek demê-xebitandinê ji bo têketinên nenas baş dixebite (mînak: JSON, têketina bikarhêner, API-yên derve).
- Hêsan, bilez, û bê-efektên alî ye.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isNumber(value)`

Parametreyên:

- `value`: Nirxa ku were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎‎ input hejmarekî derbasdar û bi dawî ye
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isNumber(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 13:09:50 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>