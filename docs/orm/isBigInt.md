# isBigInt

## Ibsa

`isBigInt` gatiin kenname gosa `bigint` ta'uu isaa ni mirkaneessa; BigInt primitives irratti `true` deebisa, kan biraa
irratti immoo `false` deebisa.

### Haala itti fayyadama

Madda gosa hin qabne irraa dhufan (fkn, JSON parsing, galtee fayyadamaa, API alaa) gatiiwwan mirkaneessuu fi dhiphisuun,
herrega BigInt irratti addatti hojjechuu dura yookaan dirreewwan BigInt qofa keessatti kuusuun dura.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `unknown` gara `bigint`tti dhiphisuuf `isBigInt` fayyadami; booda herrega BigInt (fkn, `+`, `*`) gochuuf, kanneen
> operandii BigInt barbaadan.

### Faayidaa

- Gosa salphaa fi amanamummaa qabu kan yeroo hojii (runtime) irratti gosa `bigint` (primitive) mirkaneessu ni kenna.
- Hojiiwwan BigInt qofa irratti hojjechuu dura gatii `unknown` dhiphisuuf ni gargaara.
- Dogoggora mirkaneessaa (false positives) ni hambisa: lakkoofsa idilee, qubee (strings), fi gosoonni biroo `false`
  deebisu.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isBigInt(value)`

Paaraameetaroota:

- `value`: Gatii mirkaneessuuf.

### Galchii faankishinii naannoo

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // dhugaa
console.log(isBigInt(10));  // soba
console.log(isBigInt("10")); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isBigInt(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 23:32:56 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>