# areHexadecimals

## Ibsa

Elementoonni arreyii keessaa hundi satirii heksadeesimaalii taʼuu isaanii ni ilaala; arreyii duwwaa hin taʼin keessatti
wantoonni hundi sirrii yoo taʼan qofa `true` ni deebisa.

### Haala itti fayyadama

`areHexadecimals` fayyadamiitii galtee fayyadamaa yookaan deetaa alaa (fakkeenyaaf, IDwwan, checksums, koodii halluu '#'
duraa hin qabne) gara hiika heksadeesimaalii (hexadecimal parsing) yookaan adeemsa dabalataa dura mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areHexadecimals` fayyadamiitii galtee hin beekamne (unknown) gara parse ykn jijjiirraa dura mirkaneessi (fakkeenyaaf,
`parseInt(value, 16)` dura yookaan jijjiirraa BigInt dura).

### Faayidaa

- Tokkoon tokkoon elementiin satirii heksadeesimaalii taʼuu isaa ni mirkaneessa; wantoonni hundi yoo walsiman qofa
  `true` ni deebisa.
- Akkaataa dizaayiniitiin arreyii duwwaa ni dida; deetaa galtee dhabameef `false` ni deebisa.
- Buʼaa booliinii salphaa (`true`/`false`) kan eegumsa (guards) fi mirkaneessa deebii ariifachiisaa (early-return)
  irratti mijatu ni kenna.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areHexadecimals(array)`

Paaraameetaroota:

- `array`: Arreyii elementoota satirii heksadeesimaalii taʼan qabachuu isaa ilaaluuf.

### Galchii faankishinii naannoo

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areHexadecimals(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 23:07:28 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>