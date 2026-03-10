# getTypeOf

## Danasîn

`getTypeOf` ji bo nirxek diyarkirî etîketa cureyê ya hûrgulî û mirov-xwendbar vedigerîne, di nav de cureyên hejmarî yên
rafînekirî û cureyên taybet ên objeyan.

### Bikaranîn

Ji bo standardkirina nasîna cureyan di rastandina têketinan û diagnostîkê de `getTypeOf` bikar bîne—mînak, `nan` red
bike, tenê ID-yên `integer` qebûl bike, rêzên hejmarî yên wekî `decimal` ji `string`-a asayî cuda biki, an jî cureyên
rast ên objeyan wekî `date` û `regexp` bi hûrgulî têketin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Cureya vegerandinê `DataTypeAsString | string` e. Wê wekî etîketeke danasînî binihêre; dema ku şertan dike, bi
> literalên naskirî yên wekî `integer`, `float`, `nan`, `array`, `null`, û `undefined` re berawird bike.

### Avantaj

- Ji `typeof` ya JavaScriptê zêdetir bi hûrgulî rêzek cureyê vedigerîne, di nav de jêr-cureyên hejmarî yên wekî
  `integer`, `float`, û `nan`.
- `null` û `undefined` bi awayek eşkere wekî `null` û `undefined` ji hev cuda dike.
- Formêtên hevpar ên rêzên hejmarî nas dike û wan wekî `binary`, `octal`, `decimal`, an `hexadecimal` rapor dike, ne
  tenê wekî `string`.
- Her weha arrayan wekî `array` nas dike û `Object.prototype.toString` bikar tîne da ku navên taybet ên cureyên objeyan
  bide (mînak: `date`, `regexp`, `map`, `set`).
- Ji bo rastandin, têketin, û debugkirinê pir kêrhatî ye, gava ku etîketên cureyê yên hevgirtî û mirov-xwendbar pêwîst
  in.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `getTypeOf(value)`

Parametreyên:

- `value`: Nirxa ku ji bo wê cureya daneyan were diyarkirin.

### Importa fonksiyona herêmî

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

//‎ Nimûneyên kontrolkirinê
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.getTypeOf(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 13:13:11 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>