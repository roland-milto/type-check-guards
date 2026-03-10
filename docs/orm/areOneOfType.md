# areOneOfType

## Ibsa

`areOneOfType` tarree duwwaa hin taane keessaa elementiin hundi gosa runtime murtaa'e keessaa tokko ta'uu isaanii ni
ilaala.

### Haala itti fayyadama

Deetaa seenu (fakkeenyaaf, JSON hiikame) mirkaneessi; bakka dirree tokko tarree duwwaa hin taane ta'uu fi wantoonni isaa
gosa primitive beekamaa muraasa qofaan daangeffamuu qabu. Tarreen duwwaa ta'e yookaan gosa hin hayyamamne tokko illee
yoo qabaate `false` deebisi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Faankishiniin kun boolean deebisa; yeroo compile irratti gosa elementoota tarree hin dhiphisu. Adeemsa itti aanutti
> seenuun dura akka tarkaanfii mirkaneessa runtime tti itti fayyadami.

### Faayidaa

- Elementiin hundi tarree keessaa hundi yoo xiqqaate gosa runtime hayyamame tokko wajjin akka walsimu mirkaneessa;
  tarreen guutuun yoo darbe qofa `true` deebisa.
- Galtee sirrii hin taane dursee ni dida: yoo `array` yookaan `types` duwwaa ta'e yookaan tarree guutame hin ta'in ta'e
  `false` deebisa.
- Walitti qabama gosa wal-makaa (fakkeenyaaf, lakkoofsa fi barruu) mirkaneessuuf waamicha tokkoon `areOneOfType`
  fayyadamuu ni gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areOneOfType(array, types)`

Paaraameetaroota:

- `array`: Tarree elementoota gosa kenname irratti mirkaneessuuf.
- `types`: Tarree barruuwwan gosa deetaa ittiin qoramu bakka bu'an.

### Galchii faankishinii naannoo

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areOneOfType(array, types)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 23:38:09 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>