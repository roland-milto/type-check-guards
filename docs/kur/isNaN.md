# isNaN

## Danasîn

Diyar dike ka `value`-a peyda kirî `NaN`-ek ji cureya `number` e an na, bêyî ku rêzên nivîsê veguherîne.

### Bikaranîn

Têketinên neewle an bi cureyên nerm (mînak: payloadên API, nirxên formê, JSON-ê ku hatiye parse kirin) rast bike da ku
nirxa taybet `NaN` were nas kirin û bi awayekî eşkere were rêvebirin, di heman demê de têketinên ne-hejmar wekî ne-`NaN`
were hesibandin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku pêdivî ye nirxa hejmarî ya taybet `NaN` nas bike û di heman demê de piştrast bî ku têketin bi rastî `number`
> e (bê veguherandina string-bo-number), `isNaN` bi kar bîne.

### Avantaj

- Dibe ku nirxek `NaN` e an na, bêyî ku ne-hejmaran (mînak: rêzên nivîsê) bike hejmar.
- `true` tenê ji bo nirxên ku hem ji cureya `number` in û hem jî `NaN` in vedigerîne.
- Ji bo têketinên `unknown` ewle ye û ji veguherandinên nepenî dûr dike ku encamên çewt (false positives) çêne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isNaN(value)`

Parametreyên:

- `value`: Nirxa ku tê kontrol kirin ka `NaN`-ek ji cureya `number` e an na.

### Importa fonksiyona herêmî

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // rast
console.log(isNaN(b)); // çewt
console.log(isNaN(c)); // çewt

if (isNaN(a)) {
  //‎ a hejmarek e û bi taybetî NaN e
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isNaN(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isNaN](‎../_analysis/isNaN.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 15:46:52 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>