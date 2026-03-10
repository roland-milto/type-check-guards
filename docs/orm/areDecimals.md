# areDecimals

## Ibsa

Elementoonni tarree keessa jiran hundi lakkoofsa deesimaalii ta’uu isaanii fi tarreen guutame ta’uu isaa sakatta’a;
`true` yookaan `false` deebisa.

### Haala itti fayyadama

Tarreewwan fayyadamaan kennaman (fakkeenyaaf, kolomii CSV yookaan galtee foormii) mirkaneessuuf, tarreen duwwaa akka hin
taane fi galteen hundi gatii deesimaalii ta’uu isaa mirkaneessuun dura parse yookaan herrega raawwachuu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areDecimals` fayyadami yeroo sakatta’iinsa booliyaanaa saffisaa barbaaddu, `unknown[]` duwwaa hin taane fi elementiin
> hundi bakka bu’iinsa deesimaalii ta’uu isaa mirkaneessuuf.

### Faayidaa

- Wantiwwan galtee akka tarree guutame ta’e mirkaneessa dura wantoota mirkaneessuu, tarreewwan duwwaa dogoggoraan
  fudhatamuu irraa ittisa.
- Tokkoon tokkoon elementii `isDecimal`tiin mirkaneessa; kanaaf gatiiwwan wal-makaa ykn sirrii hin taane battalumatti
  bu’aa `false` fida.
- Bu’aa booliyaanaa salphaa (`true`/`false`) kenna; kunis guardii fi adeemsa mirkaneessaa early-returnf mijataa dha.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areDecimals(array)`

Paaraameetaroota:

- `array`: Tarree sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // dhugaa
console.log(areDecimals(b)); // soba
console.log(areDecimals(c)); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areDecimals(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 15:58:35 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>