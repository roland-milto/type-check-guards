# areIntegers

## Danasîn

`areIntegers` diyar dike ka hemû hêmanên di arrayekê de jimareyên tam in an na, heke wisa be `true` vedigerîne û wekî
din `false`.

### Bikaranîn

`areIntegers` bikar bîne da ku daneyên ji bikarhêner an jî ji derve hatine (mînak: parametreyên query, payloadên JSON,
rêzikên CSV) were rastandin, dema ku lojîka te pêdivî bi lîsteyek tije ya nirxên jimareyên tam hebe, wekî ID, jimarker,
offsetên pagination, an jî indeksên arrayê.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areIntegers` wekî parêzvanek runtime ji bo têketinên `unknown[]` bikar bîne berî ku wan wekî `number[]` ku tenê
> jimareyên tam tê de ne were hesibandin. Heke `false` vegerîne, têketin an ne arrayekî tije ye an jî herî kêm yek
> nirxek
> ne-jimareya-tam tê de heye.

### Avantaj

- Tenê dema ku hemû hêman jimareyên tam bin `true` vedigerîne; wekî din `false` vedigerîne.
- Berî ku operasyonên tenê-bi-jimareyên-tam (mînak: indekskirin, hejmarandin, ID) were kirin, alîkarî dike ku têketina
  nenas were rastandin.
- Bi lez têk diçe: gava ku yek hêmanek ne-jimareya-tam were dîtin, kontrolkirin rawestîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areIntegers(array)`

Parametreyên:

- `array`: Arraya ku ji bo hêmanên jimareyên tam tê kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // rast
console.log(areIntegers(b)); // rast
console.log(areIntegers(c)); // çewt

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areIntegers(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areIntegers](‎../_analysis/areIntegers.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 00:59:19 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>