# isNumeric

## Danasîn

`isNumeric` diyar dike ka `value`-ek dayîn hejmarî tê hesibandin an na, bi kontrolkirina cureya wê ya hatî çareserkirin
li hember `NUMERIC_TYPES`.

### Bikaranîn

Berî ku operasyonên hejmarî pêk bînî, `isNumeric` bi kar bîne da ku têketinan (mînak, payloadên API, nirxên formê,
veavakirin) rast bike, û da ku bi awayek yekreng cureyên hejmarî-wek (wekî `BigInt`) li gorî `NUMERIC_TYPES` qebûl bike.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isNumeric` pêşbîrêk e ku boolean vedigerîne; wê wekî kontrola runtime ji bo ku nirxek di koma cureyên hejmarî yên ku
> pirtûkxane diyar dike de ye an na, bihesibîne.

### Avantaj

- `getTypeOf` û `NUMERIC_TYPES` bi kar tîne da ku mantiqa naskirina hejmarî navendî bike û kontrolan li seranserê
  bingeha kodê yekreng bihêle.
- Ji bo şaxkirin û bikaranîna şêwaza guard, tenê booleanek sade (`true`/`false`) vedigerîne.
- Piştgiriya gelek nîşandanên hejmarî dike (mînak, `number`, `BigInt`) wekî ku di `NUMERIC_TYPES` de hatine diyarkirin.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isNumeric(value)`

Parametreyên:

- `value`: Nirxa ku ji bo cureya hejmarî tê kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    //‎‎ v li gorî rêzikên cureyê yên pirtûkxaneyê wekî hejmarî tê hesibandin
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isNumeric(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isNumeric](‎../_analysis/isNumeric.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 15:53:25 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>