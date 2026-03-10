# isObject

## Danasîn

Diyar dike ka `value`-ek dayîn `object` e (bi derxistina `null`).

### Bikaranîn

Ji bo rastandinê ya têketinên nenas (mînak: JSON-ê ku hatî parse kirin, bersivên API, payload-ên bûyeran) berî ku
bigihîjî taybetmendiyan `isObject` bikar bîne, da ku piştrast bibe nirx objeyek e û ne `null`.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isObject` parastkerek runtime ye ku boolean vedigerîne; ew bi şêweyek taybet a objeyê re tîpê teng nake. Dema ku
> tîpkirina bihêztir dixwazî, wê bi kontrolên din re (mînak: hebûna taybetmendiyê) bi hev re bikar bîne.

### Avantaj

- Tenê ji bo nirxên ne-`null` ên ku `typeof`-a wan `"object"` e `true` vedigerîne.
- Ji xeletiya gelemperî ya JavaScriptê asteng dike ku `null` wekî objeyek were hesibandin.
- Ji bo objeyên sade û jî mînakên objeyên çêkirî yên navxweyî (mînak: `Date`, `RegExp`) dixebite.
- Kontrolek runtime ya hêsan û bilez e ku ji bo bernamesaziya parastinî û rastandinê ya têketinan guncaw e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isObject(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrol kirin ka `object` e an na.

### Importa fonksiyona herêmî

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  //‎ input di dema demê de objeyek ne-null e
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isObject(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isObject](‎../_analysis/isObject.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 00:19:11 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>