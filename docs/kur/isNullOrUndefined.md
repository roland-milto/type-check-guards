# isNullOrUndefined

## Danasîn

Kontrol dike ka nirxek diyarkirî `null` an `undefined` e an na.

### Bikaranîn

`isNullOrUndefined` bikar bîne dema ku divê herdu `null` û `undefined` wekî “nirx tune” were hesibandin, mînakî di
rastandina têketinên vebijarkî de, normalîzekirina payloadên API de, an jî parastina rêçên kodê berî dereferencekirina
nirxeke ku dibe ku winda be.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isNullOrUndefined` bikar bîne da ku berî gihîştina taybetmendiyan an jî bangkirina metodan li dijî nirxên winda
> parastinê bike; ew tenê ji bo `null` û `undefined` `true` vedigerîne.

### Avantaj

- Di yek cihê de parastineke zelal û ji nû ve bikarhêner pêşkêş dike ji bo tespîtkirina `null` û `undefined`.
- Booleyaneke sade (`true`/`false`) vedigerîne ku di şertan û rastandinê de bi hêsanî tê tevlihevkirin.
- Bi kontrolkirina nirxên winda berî gihîştina taybetmendiyan an jî bangkirina metodan, alîkarî dike ku ji xeletiyên
  runtime yên gelemperî dûr bimîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isNullOrUndefined(value)`

Parametreyên:

- `value`: Nirxa ku divê ji bo `null` an `undefined` were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎ nirxê winda/nebûyî bi rê ve bibe
}

console.log(isNullOrUndefined(b)); // rast
console.log(isNullOrUndefined(c)); // nerast

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isNullOrUndefined(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 00:34:23 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>