# isArray

## Danasîn

`isArray` kontrol dike ka nirxek diyarkirî rêz e an na û heke rêz be `true` vedigerîne, wekî din `false`.

### Bikaranîn

Daneyên nenas (mînak: JSON-ya parsekirî an bersivên API) rastandin da ku berî gerandin, indexkirin, an gihîştina
`.length` piştrast bibe ku nirx rêz e.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku ji bo rêzikan pêdivî bi kontrola runtime heye `isArray` bi kar bîne; ew boolean vedigerîne û bi nirxên
`unknown` re bangkirina wê ewle ye.

### Avantaj

- Ji bo naskirina rêzikan bi awayek bawerbar di nav cîhanên cuda de (mînak: iframe), `Array.isArray`-a hundirîn bi kar
  tîne.
- Encamek boolean a sade (`true`/`false`) vedigerîne ku ji bo guard û logîka şaxkirinê guncaw e.
- Bi her cureyê têketinê re dixebite, ji ber ku parametre `unknown` e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isArray(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  //‎‎ input di dema runtime de array e
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isArray(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isArray](‎../_analysis/isArray.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 11:31:08 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>