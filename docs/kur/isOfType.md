# isOfType

## Danasîn

Diyar dike ka `value`-ek hatî dayîn bi rêzikek cureyê ya diyarkirî re li hev tê an na, bi karanîna `typeof` ji bo
primitiveyan û fallback ji bo cureyên tevlihev.

### Bikaranîn

Têketinên `unknown` (mînak: bersivên API, têketina bikarhêner, JSON-ê hatî parsekirin) rast bike û teng bike bi
kontrolkirina ku nirxek berî ku operasyonên taybet-bi-cure were kirin, bi rêzikek cureyê ya hêvîkirî re li hev tê an na.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku bi nirxên `unknown` re dixebitî, `isOfType` bikar bîne da ku li ser cureyên runtime branching bikî; ew `true`/
`false` vedigerîne û `null` û `undefined` bi awayekî eşkere têgihîştinê dike.

### Avantaj

- Ji bo lez û ronahiyê, primitiveyan bi `typeof`-a rasterast kontrol dike.
- `null` û `undefined` bi awayekî rast digire, yên ku `typeof` bi tenê nikare wan bi awayê ku tê xwestin ji hev cuda
  bike.
- Bi karanîna berhevkirina paşve (fallback) ya `getTypeOf`, piştgirî dide rêzikên cureyê yên tevlihev an jî taybet.
- Encamek boolean a sade (`true`/`false`) vedigerîne ku ji bo guard û branching guncav e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isOfType(value, type)`

Parametreyên:

- `value`: Nirxa ku li hember `type` tê ceribandin.
- `type`: Nîşandana rêzikî ya cureyê ku li hember wê tê kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  //‎ input li vir jimare ye
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  //‎ input li vir rêzok ye
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isOfType(value, type)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isOfType](‎../_analysis/isOfType.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 17:05:05 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>