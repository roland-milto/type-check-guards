# areIntegers

## Ibsa

`areIntegers` elementoonni hundi array kenname keessatti lakkoofsa guutuu ta'uu isaanii murteessa; yoo ta’an `true`
deebisa, yoo hin ta’in `false` deebisa.

### Haala itti fayyadama

Yeroo loojikiin kee tarree guutuu lakkoofsa guutuu barbaadu (fkn, ID, counter, pagination offset, yookaan indeksii
array) `areIntegers` fayyadamuun daataa fayyadamaa irraa dhufe yookaan alaa irraa dhufe (fkn, query parameters, JSON
payloads, CSV rows) mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areIntegers` akka eegduu yeroo raawwii (runtime guard) galtee `unknown[]` irratti fayyadami dura `number[]` jechuun
> lakkoofsa guutuu qofa of keessaa qaba jedhanii ilaaluun. Yoo `false` deebise, galteen sun array guutuu miti yookaan
> gatii lakkoofsa guutuu hin taane tokko yookaan isaa ol of keessaa qaba.

### Faayidaa

- Elementiin hundi lakkoofsa guutuu yoo ta’e qofa `true` deebisa; yoo kana hin ta’in `false` deebisa.
- Hojiiwwan lakkoofsa guutuu qofa irratti hundaa’an (fkn, indeksii, lakkoofsa, ID) raawwachuu dura galtee hin beekamne
  mirkaneessuuf gargaara.
- Saffisaan ni kufa: akkuma elementiin lakkoofsa guutuu hin taane argameen sakatta'uu dhaaba.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areIntegers(array)`

Paaraameetaroota:

- `array`: Array elementoota lakkoofsa guutuu ta’an qabuuf sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // dhugaa
console.log(areIntegers(b)); // dhugaa
console.log(areIntegers(c)); // soba

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areIntegers(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 00:59:56 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>