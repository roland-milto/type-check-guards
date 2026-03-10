# areBooleans

## Danasîn

`areBooleans` kontrol dike ka arrayek nevala ya dayîn tenê nirxên booleyan dihewîne an na; heke dihewîne `true`
vedigerîne û wekî din `false`.

### Bikaranîn

Daneyên ku ji aliyê bikarhêner an jî ji derve têne peyda kirin (mînak, payloadên JSON, parametreyên query, arrayên
config) rast bike da ku piştrast bibe ku lîsteyek nevala tenê booleyan dihewîne berî ku mantiqa booleyan bisepîne an jî
wê bişîne API-yên ku `boolean[]` hêvî dikin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areBooleans` bikar bîne da ku `unknown[]` berî ku wê wekî `boolean[]` bihesibînî rast bike; ji bo arrayên vala
`false` vedigerîne, ji ber vê yekê heke divê lîsteyek vala were qebûl kirin, wê rewşê bi awayek eşkere bi rê ve bibe.

### Avantaj

- Tenê dema ku hemû hêman booleyan bin û têketin arrayek nevala be, `true` vedigerîne.
- Bi redkirina arrayên vala ( `false` vedigerîne) encamên şaş (false positives) asteng dike.
- Wek parêzvanek runtime berî operasyonên tenê-booleyan (mînak, `every`, `some`, kêmkirinên mantiqî) baş dixebite.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areBooleans(array)`

Parametreyên:

- `array`: Arraya ku divê ji bo hêmanên booleyan were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areBooleans(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areBooleans](‎../_analysis/areBooleans.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 14:41:10 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>