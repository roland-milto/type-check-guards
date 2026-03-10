# isNull

## Danasîn

Diyar dike ka `value`-a peyda kirî `null` e an na.

### Bikaranîn

`isNull` bikar bîne ji bo rastandinê têketinan an qadanên payload-ê yên API-yê, ku `null` nirxeke nîşan (sentinel) ya
girîng e û divê ji `undefined` an nirxên din cuda were rêvebirin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isNull` bikar bîne dema ku divê tu `null` ji `undefined` û nirxên din ên falsy cuda bikî; ew tenê ji bo `null` `true`
> vedigerîne.

### Avantaj

- Kontroleke rast û diyar ji bo `null` peyda dike bê ku wê bi `undefined` re tevlihev bike.
- Ji bo her cureyê têketinê bi bawerî dixebite, ji ber ku `unknown` qebûl dike.
- Hêsan, bilez û bê bandorên alî; tenê `true` an `false` vedigerîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isNull(value)`

Parametreyên:

- `value`: Nirxa ku ji bo `null` tê kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // rast
console.log(isNull(b)); // nerast

if (isNull(a)) {
  //‎ a li vir null e
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isNull(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 15:39:51 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>