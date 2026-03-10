# areTrue

## Danasîn

Kontrol dike ka arrayek ne-vala tenê nirxên boolean `true` dihewîne an na.

### Bikaranîn

Ji bo piştrastkirina ku komek şertên pêşîn an flagên taybetmendiyan hemû çalak in (hemû nirx `true` ne) berî ku
bidomînî, `areTrue` bi kar bîne, û têketinên vala an şaş wekî nehatine pêk anîn (`false`) bihesibîne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areTrue` ji bo arrayek vala û ji bo arrayên ku her nirxek wan bi awayekî tam `true` nîne `false` vedigere.

### Avantaj

- Tenê dema ku her hêman bi awayekî tam `true` be û array vala nebe `true` vedigere.
- Bi lez têk diçe: her ku carek nirxek ne-`true` were dîtin, di cih de `false` vedigere.
- Têketinên nederbasdar (ne-array an jî arrayên vala) bi vegerandina `false` red dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areTrue(array)`

Parametreyên:

- `array`: Arraya ku ji bo hemû nirxên `true` tê kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areTrue(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areTrue](‎../_analysis/areTrue.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 13:51:51 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>