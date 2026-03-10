# isOctal

## Danasîn

Diyar dike ka nirxek rêzeke literalê oktalê ya derbasdar e an na (mînak `0o755`).

### Bikaranîn

Têketina bikarhêner an nirxên veavakirinê yên ku divê wekî rêzeke literalê oktalê were nivîsandin (mînak modên destûrên
pelan wek `0o644`) berî ku werin parse kirin an veguherandin, rastîkirin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isOctal` parastina cureyî ye (`value is string`). Piştî encamek `true`, TypeScript guhêrbarê ku hat kontrol kirin bi
`string` teng dike.

### Avantaj

- Parastina cihê ya cureyî ya hişk peyda dike: tenê dema ku têketin rêzek e ku bi formata literalê oktalê re lihev dike
  `true` vedigerîne.
- Rêzekên vala û rêzekên bi valahiyên pêş/paş (kontrol/valahiya ASCII) red dike, û ev hevgirtinên bêhejmar kêm dike.
- Nîşana vebijarkî (sign) piştgirî dike û ji bo pêşgira `0o`/`0O` bêhest e.
- Ji bo têketinên ne-rêzekî bi vegerandina `false` nerm e, li şûna ku xeletiyek bavêje.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isOctal(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // rast
console.log(isOctal(b)); // rast
console.log(isOctal(c)); // nerast
console.log(isOctal(d)); // nerast

if (isOctal(a)) {
  //‎ a li vir de string e
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isOctal(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isOctal](‎../_analysis/isOctal.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 15:42:03 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>