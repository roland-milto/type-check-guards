# isBigInt

## Danasîn

`isBigInt` kontrol dike ka nirxek dayîn ji cureya `bigint` e an na, ji bo BigInt primitive `true` vedigerîne û wekî din
`false`.

### Bikaranîn

Berî ku hesabkirinên taybet bi BigInt were kirin an jî di qadên tenê-BigInt de were tomar kirin, nirxên ku ji çavkaniyên
bêcure tên (mînak, parsekirina JSON, têketina bikarhêner, API-yên derveyî) rast bike û teng bike.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isBigInt` bikar bîne da ku `unknown` berî kirina arîtmetîka BigInt (mînak, `+`, `*`) ku operandên BigInt pêdivî dike,
> bibe `bigint`.

### Avantaj

- Ji bo cureyê bingehîn yê `bigint` kontrola demê xebatê ya hêsan û pêbawer peyda dike.
- Berî ku operasyonên tenê-BigInt were kirin, alîkarî dike ku nirxên `unknown` were tengkirin.
- Pozîtîfên şaş dûr dike: hejmarên asayî, rêzên nivîsê, û cureyên din `false` vedigerînin.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isBigInt(value)`

Parametreyên:

- `value`: Nirxa ku were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // rast
console.log(isBigInt(10));  // çewt
console.log(isBigInt("10")); // çewt
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isBigInt(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isBigInt](‎../_analysis/isBigInt.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 23:32:25 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>