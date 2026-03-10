# areWeakSets

## Danasîn

Kontrol dike ka têketin rêzek ne-vala ye ku her hêmanek wê `WeakSet` e, û tenê di wê rewşê de `true` vedigerîne.

### Bikaranîn

Têketina demê-derbasdar (mînak: ji APIyan, veavakirinê, an daneyên ku bikarhêner pêşkêş dike) rast bike da ku berî ku bi
mantiqê ku li ser tevgera `WeakSet` girêdayî ye bidomînî, lîsteyek ne-vala ya nimûneyên `WeakSet` hebî.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areWeakSets` bikar bîne da ku têketina nenas berî ku wê wek `WeakSet[]` bihesibînî rast bike. Ji bo rêzên vala û
> ne-rêzan `false` vedigerîne.

### Avantaj

- Piştrast dike ku her hêmanek di rêza têketinê de `WeakSet` e.
- Ji bo rêzên vala `false` vedigerîne, û encamên “hemû derbasdar” yên bêhemdî li ser daneyên winda asteng dike.
- Bi ewlehî têk diçe bi vegerandina `false` dema ku têketin ne rêzek tije be (di nav de `null`).
- Wek parêzvanek (guard) berî kirinê operasyonên ku pêdivî bi nimûneyên `WeakSet` hene, kêrhatî ye.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areWeakSets(array)`

Parametreyên:

- `array`: Rêza ku divê ji bo objeyên `WeakSet` were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  //‎ a yek araye nê-vala ya nimûneyên WeakSet e
}

console.log(areWeakSets(a)); // rast
console.log(areWeakSets(b)); // nerast
console.log(areWeakSets(c)); // nerast
console.log(areWeakSets(null as unknown)); // nerast

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areWeakSets(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areWeakSets](‎../_analysis/areWeakSets.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 14:09:34 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>