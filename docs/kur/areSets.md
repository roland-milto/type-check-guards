# areSets

## Danasîn

Kontrol dike ka rêzek nevala tenê ji nimûneyên `Set` pêk tê an na; heke wisa be `true` vedigerîne, û wekî din `false`.

### Bikaranîn

Piştrast bike ku nirxek (mînak ji têketina bikarhêner, parsekirina JSON, an API-yên derve) rêzek nevala ya objeyên `Set`
e berî ku her set were pêvajokirin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areSets` bikar bîne da ku têketina nenas berî ku tu li ser wê bigerî û API-yên `Set` (mînak: `.size`, `.has`, `.add`)
> li ser her hêmanê bang bikî, were rastandin.

### Avantaj

- Tenê dema ku têketin rêzek nevala be û her hêmanek jî nimûneyek `Set` be, `true` vedigerîne.
- Bi vegerandina `false` dema ku rêz hêman tune be, ji bo rêzên vala encamên şaş (false positives) asteng dike.
- Wek parêzvanek runtime berî ku li ser her hêmanê operasyonên taybet ên `Set` were kirin, kêrhatî ye.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areSets(array)`

Parametreyên:

- `array`: Rêza ku divê ji bo nimûneyên `Set` were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  //‎ a di dema runtime de rêzeya nimûneyên Set e
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // şaş
console.log(areSets(c)); // şaş
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areSets(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areSets](‎../_analysis/areSets.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 23:14:12 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>