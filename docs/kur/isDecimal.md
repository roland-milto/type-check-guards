# isDecimal

## Danasîn

`isDecimal` kontrol dike ka nirxek nîşandana stringa dehî (decimal) ye an na, bêyî valahiya pêşîn/paşîn û bi formata
decimal a derbasdar.

### Bikaranîn

Qadên formê, payloadên API, an nirxên veavakirinê piştrast bike ku divê wek stringek dehî (bi îmzekirinê yê vebijarkî)
bêyî her cure valahiya li derdorê were dayîn, berî parsekirin an tomar kirin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isDecimal` bikar bîne da ku berî veguherandinê (mînakî bi `Number(value)`), têketina bikarhêner piştrast bikî, bi
> taybetî dema ku divê valahî were red kirin.

### Avantaj

- Bi şertî piştrast dike ku têketin string e û bi şablona decimal-literal re lihev dike.
- Valahiya pêşîn û paşîn (di nav de karakterên kontrolê) red dike da ku ji parsekirina nezelal dûr bibe.
- Berî ku regex were xebitandin, pêş-kontrolên bilez (kontrola cureyê û karaktera yekem/dawî) dike.
- Encamek boolean a sade (`true`/`false`) vedigerîne ku ji bo guard û piştrastkirina têketinê guncaw e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isDecimal(value)`

Parametreyên:

- `value`: Nirxa ku ji bo formata stringa dehî (decimal) were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    //‎ v li vir rê rêzê ye li vir (di dema xebitandinê de hatî piştrastkirin)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isDecimal(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isDecimal](‎../_analysis/isDecimal.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 15:53:14 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>