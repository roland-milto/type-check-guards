# isObject

## Ibsa

`value` kenname akka `object` ta’e (garuu `null` dabalatee osoo hin taane) murteessa.

### Haala itti fayyadama

`isObject` fayyadamiitii input hin beekamne (fakkeenyaaf, JSON parse godhame, deebii API, payload event) property
irratti seenuu dura mirkaneessi; gatiin sun object ta’uu fi `null` hin ta’in akka ta’e ni mirkaneessa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isObject` eegduu runtime dha kan boolean deebisu; bifa object addaa tokkootti hin xiqqeessu. Yeroo typing cimaa
> barbaaddu, sakatta’iinsa dabalataa (fakkeenyaaf, jiraachuu property) waliin walitti maki.

### Faayidaa

- `typeof`-n isaa `"object"` ta’e qofaaf, gatiiwwan `null` hin taane irratti qofa `true` deebisa.
- Dogoggora JavaScript keessatti yeroo baay’ee mul’atu kan `null` akka objectitti ilaalamu ni ittisa.
- Object salphaa fi instance object ijaaraman keessaa (fakkeenyaaf, `Date`, `RegExp`) irratti ni hojjata.
- Qorannoo runtime salphaa, saffisaa, kan defensive programming fi input validation irratti mijataa ta’e.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isObject(value)`

Paaraameetaroota:

- `value`: Gatii akka `object` ta’uu isaa mirkaneessuuf sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input yeroo ammaa keessatti wanta null hin taane dha
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isObject(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isObject](../_analysis/isObject.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 00:19:48 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>