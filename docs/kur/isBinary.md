# isBinary

## Danasîn

`isBinary` diyar dike ka nirxek rêzek duî (binary) ye (bi vebijarkî bi pêşgira `0b`/`0B`) û `true` an `false` vedigere.

### Bikaranîn

Rêzên ku ji aliyê bikarhêner ve têne dayîn (mînak: qadên formê, argumanên CLI, nirxên config) piştrast bike da ku tenê
hejmarên duî nîşan bidin, bi vebijarkî bi pêşgira `0b`/`0B`, berî ku pêvajoya din were kirin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isBinary` wekî parêzvana cureyê (type guard) berî parse kirin an veguherandina rêzekê bo `BigInt`/`Number` bikar bîne
> da ku ji têketinên nederbasdar dûr bimîne.

### Avantaj

- Rêzên duî (binary) qebûl dike, bi pêşgira `0b`/`0B` an jî bêyî wê.
- Rêzên vala û rêzên ku li serdest/paşdest xwedî valahiyê ne (ASCII ≤ 32) red dike.
- `true`/`false` vedigere bêyî ku derxe, ji ber vê yekê ji bo têketinên nenas ew ewle ye.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isBinary(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // rast
const b = isBinary("1010");   // rast
const c = isBinary("0b1020"); // nerast
const d = isBinary(0b1010);     // nerast

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isBinary(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isBinary](‎../_analysis/isBinary.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 23:10:28 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>