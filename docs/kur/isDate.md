# isDate

## Danasîn

`isDate` diyar dike ka nirxek ku hatiye dayîn `Date` e an na; ji bo nimûneyên `Date` `true` vedigerîne û wekî din
`false`.

### Bikaranîn

Nirxên nenas (mînak: daneyên daxwazê, nirxên config, an JSON-ê ku hatiye parse kirin) piştrast bike û teng bike berî ku
operasyonên `Date` wekî formatkirin, berawirdkirin, an bangkirina `toISOString()` pêk bîne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isDate` bikar bîne da ku `unknown` di demdemê de bi `Date` re teng bike; ew tenê ji bo nimûneyên rastîn ên `Date`
`true` vedigerîne (ne ji bo rêzên dîrokê).

### Avantaj

- Ew parastinekî demdemî ya sade peyda dike ku kontrol bike ka nirxek `Date` e an na.
- Bi ewlehiya ku tenê nimûneyên `Date` derbasî piştrastkirinê dibin, alî dike ku ji çewtiyên cureyê (type errors) bê
  parastin.
- Ji bo piştrastkirina têketinên nenas (mînak: payloadên API) berî bikaranîna metodên taybet bi dîrokê re, bêtir kêrhatî
  ye.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isDate(value)`

Parametreyên:

- `value`: Nirxa ku divê ji bo cureya `Date` were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  //‎ input li vir Date ye li vir
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isDate(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isDate](‎../_analysis/isDate.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 15:46:37 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>