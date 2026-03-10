# getTypeOf

## Ibsa

`getTypeOf` gatii kennameef mallattoo gosa bal’inaan ibsu, namaaf dubbifamuu danda’u deebisa; kanneen akka gosa
lakkoofsaa sirriitti fooyya’e fi gosa object addaa ni dabalata.

### Haala itti fayyadama

`getTypeOf` fayyadamuun, mirkaneessa galtee (input validation) fi qorannoo (diagnostics) keessatti adda baafannaa gosa
walfakkaataa gochuu dandeessa—fakkeenyaaf `nan` diduu, ID `integer` qofa fudhachuu, tarree lakkoofsaa akka `decimal`
ta’e `string` salphaa irraa adda gochuu, yookaan gosa object sirrii akka `date` fi `regexp` galmeessuu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Gosti deebii `DataTypeAsString | string` dha. Akka mallattoo ibsaatti itti fudhadhu; yeroo murtee (branching) gootu,
> jechoota beekamoo akka `integer`, `float`, `nan`, `array`, `null`, fi `undefined` waliin wal bira qabii.

### Faayidaa

- JavaScript `typeof` caalaa, tarree gosa (type) bal’inaan adda baasee deebisa; kanneen akka gosa lakkoofsaa keessaa
  `integer`, `float`, fi `nan` ni dabalata.
- `null` fi `undefined` ifatti adda baasa; akka `null` fi `undefined` jedhamee deebisa.
- Bifa tarree lakkoofsaa keessatti baratamoo ta’an ni adda baasa; `string` qofa osoo hin taane akka `binary`, `octal`,
  `decimal`, yookaan `hexadecimal` jedhamee gabaasa.
- Akkasumas array akka `array` jedhee adda baasa; akkasumas `Object.prototype.toString` fayyadamuun maqaa gosa object
  addaa (fakkeenyaaf `date`, `regexp`, `map`, `set`) ni kenna.
- Yeroo mirkaneessa (validation), galmeessa (logging), fi sirreessa dogoggoraa (debugging) keessatti, yeroo mallattoolee
  gosa namaaf dubbifamuu fi walfakkaataa barbaachisan baay’ee faayidaa qaba.

## Fayyadama

### Sinaaksii

Faankishinii:

- `getTypeOf(value)`

Paaraameetaroota:

- `value`: Gatii (value) gosa deetaa isaa murteessuuf.

### Galchii faankishinii naannoo

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

// Qorannoo fakkeenyaa
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.getTypeOf(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 13:14:01 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>