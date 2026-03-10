# areValidDates

## Danasîn

Diyar dike ka arrayek ne-valayî ye û bi tevahî ji `Date`-ên derbasdar pêk tê.

### Bikaranîn

Ji bo kontrolkirina arrayên ku ji aliyê bikarhêner an API ve têne peyda kirin `areValidDates` bikar bîne berî ku
operasyonên li ser tarîxê (rêzkirin, kontrolkirina navberê, formatkirin) pêk bînî, da ku hemû têketin `Date`-ên rast û
derbasdar bin û lîste jî vala nebe.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areValidDates` ji bo arrayek vala `false` vedigerîne; berî ku wekî gava kontrolkirina derbasdarî li ser wê pêbawer
> bibî, piştrast bike ku array bi mebest ne-valayî ye.

### Avantaj

- Tenê dema ku hemû hêman `Date`-ên derbasdar bin `true` vedigerîne (ne `Date`-ên nederbasdar wek
  `new Date('invalid')`).
- Bi vegerandina `false` têketina vala red dike, û piştrast dike ku tu tenê lîsteyên tarîxê yên bi wate, ne-valayî qebûl
  dikî.
- Kontrolek hêsan a bi şêwaza parastinê (guard-style) ya boolean peyda dike ku bi hêsanî bi kontrolên din re tê tevlihev
  kirin.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areValidDates(array)`

Parametreyên:

- `array`: Arraya ku tê kontrol kirin, ku dibe ku `Date`-an tê de hebin.

### Importa fonksiyona herêmî

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // rast
console.log(areValidDates(b)); // nerast
console.log(areValidDates(c)); // nerast
console.log(areValidDates(d)); // nerast

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areValidDates(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areValidDates](‎../_analysis/areValidDates.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 14:32:38 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>