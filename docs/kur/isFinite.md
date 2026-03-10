# isFinite

## Danasîn

Diyar dike ka `value`-ekî dayîn `number`-ekî finite ye an na.

### Bikaranîn

`isFinite` bi kar bîne da ku têketina nenas (mînak: ji JSON, form, an API) berî ku hesabên hejmarî pêk bînî rast bikî, û
piştrast bikî ku nirx hejmarekî rast û finite ye.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isFinite` tenê ji bo hejmarên finite `true` vedigerîne; ji bo `NaN`, `Infinity`, û her nirxekî ne-hejmar `false`
> vedigerîne.

### Avantaj

- Ji bo kontrolkirina finitebûnê ya bawer, `Number.isFinite`-a çêkirî bi kar tîne.
- Tenê ji bo hejmarên finite `true` vedigerîne; ji bo `NaN`, `Infinity`, û têketinên ne-hejmar `false` vedigerîne.
- Predicatekî hêsan, bê bandorên alî, ku ji bo rastandin û logîka parastinê guncaw e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isFinite(value)`

Parametreyên:

- `value`: Nirxa ku ji bo finitebûnê tê kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎ finiteNumbers ev: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎ value li vir jimareyekî sînorî ye
  const doubled = value * 2;
  console.log(doubled);
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isFinite(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 16:30:33 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>