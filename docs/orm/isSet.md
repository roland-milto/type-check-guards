# isSet

## Ibsa

Gatiin kenname `Set` ta’uu isaa murteessa.

### Haala itti fayyadama

Galtee madda alaa irraa dhufu (fakkeenyaaf, JSON parsing, galtee fayyadamaa, yookaan APIwwan qaama sadaffaa)
mirkaneessi, hojiiwwan `Set` raawwachuun dura gatiin tokko `Set` ta’uu isaa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `unknown` gatiiwwan irratti, APIwwan `Set`-dhaaf addaa ta’an akka `.add`, `.has`, yookaan `.size` waamuun dura,
`isSet` fayyadami gosa isaa dhiphisuuf.

### Faayidaa

- Gatii yeroo hojii keessatti salphaa ta’e kenna, gatiin tokko `Set` ta’uu isaa mirkaneessuuf.
- Yeroo gatiin tokko `Set` hin ta’in, dursee addaan ba’uun dogoggora gosa (type errors) ittisuuf gargaara.
- Qabiyyee `Set` kamiyyuu waliin hojjeta (duwwaa yookaan kan guutame) fi yeroo hunda `true`/`false` wal-qixa deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isSet(value)`

Paaraameetaroota:

- `value`: Gatii qoramu.

### Galchii faankishinii naannoo

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a yeroo hojiitti Set dha
  console.log(a.size);
}

console.log(isSet(b)); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isSet(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isSet](../_analysis/isSet.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 23:10:47 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>