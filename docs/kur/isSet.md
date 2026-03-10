# isSet

## Danasîn

Diyar dike ka nirxek dayîn `Set` e an na.

### Bikaranîn

Têketinên ji çavkaniyên derve (mînak: parsekirina JSON, têketina bikarhêner, an jî API-yên aliyên sêyem) rast bike da ku
berî kirinê operasyonên `Set`-ê, piştrast bibe ku nirxek `Set` e.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isSet` bikar bîne da ku berî bangkirina API-yên taybet ên `Set`-ê wek `.add`, `.has`, an `.size` nirxên `unknown`
> teng bike.

### Avantaj

- Kontrolekî hêsan a demê xebitandinê peyda dike da ku piştrast bike ka nirxek `Set` e an na.
- Bi destûrdayîna şaxkirina zû dema ku nirxek `Set` nîne, alî dike ku ji çewtiyên cureyê (type errors) dûr bimîne.
- Bi her naveroka `Set`-ê re (vala an jî tije) dixebite û bi awayek hevgirtî `true`/`false` vedigerîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isSet(value)`

Parametreyên:

- `value`: Nirxa ku were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  //‎ a di dema demê de Set e
  console.log(a.size);
}

console.log(isSet(b)); // çewt
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isSet(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isSet](‎../_analysis/isSet.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 23:10:17 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>