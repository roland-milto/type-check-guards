# isMap

## Ibsa

`value` kenname `Map` ta'uu isaa ni mirkaneessa; yoo ta'e `true` deebisa, yoo hin taane `false` deebisa.

### Haala itti fayyadama

`isMap` yeroo gatii `unknown` (fakkeenyaaf, JSON hiiku irraa, API alaa irraa, yookaan galtee fayyadamaa irraa) argattu,
hojii `Map` raawwachuun dura `Map` ta'uu isaa mirkaneessuu barbaadde itti fayyadami.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isMap` eegduu yeroo raawwii (runtime guard) dha; gatiin `Map` yoo ta'e `true` deebisa, yoo hin taane `false`; API
`Map` waamuun dura `unknown` dhiphisuuf itti fayyadami.

### Faayidaa

- Gatiin tokko `Map` ta'uu isaa saffisaan yeroo raawwii irratti mirkaneessa.
- Karaa koodii `Map` barbaadu eeguudhaan dogoggora gosa (type errors) ittisa; fakkeenyaaf mala `get`, `set`, fi `has`.
- `unknown` galtee waliin hojjetu keessatti akka tarkaanfii mirkaneessaa salphaa fi salphaa ta'etti gaariidha.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isMap(value)`

Paaraameetaroota:

- `value`: Gatii mirkaneessuuf.

### Galchii faankishinii naannoo

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isMap(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isMap](../_analysis/isMap.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 16:29:17 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>