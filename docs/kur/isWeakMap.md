# isWeakMap

## Danasîn

Diyar dike ka `value`-a dayîn `WeakMap`-ek e an na.

### Bikaranîn

Dema ku tu nirxek `unknown` qebûl dikî (mînak: ji API-ya giştî, pergala pêvekê, an veavakirina dînamîk) û pêdivî ye berî
bikaranîna tevgerên taybet ên `WeakMap` piştrast bikî ku ew `WeakMap` e, `isWeakMap` bikar bîne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isWeakMap` kontrola `instanceof WeakMap` pêk tîne; ew parêzvanek xebatê ye ku tenê ji bo nimûneyên rastîn ên
`WeakMap` `true` vedigerîne.

### Avantaj

- Kontrola xebatê ya hêsan ku nirxek `WeakMap` e an na.
- Bi vegerandina `true`/`false` li şûna avêtina çewtiyê, alî dike ku ji bikaranîna çewt a API-yên ku `WeakMap` dixwazin
  were pêşîgirtin.
- Bi têketinên `unknown` re dixebite, ku li sînorên modulê (mînak: parskirin, daneyên derveyî, an koda bê-type) re
  karûbarî dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isWeakMap(value)`

Parametreyên:

- `value`: Nirxa ku were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎ a di dema WeakMap e runtime de ye
}

console.log(isWeakMap(a)); // rast
console.log(isWeakMap(b)); // şaş
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isWeakMap(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 13:25:46 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>