# areFloats

## Ibsa

`areFloats` tarreen kenname guutamee jiraachuu fi elementiin isaa hundi float ta'uu isaa ni mirkaneessa.

### Haala itti fayyadama

`unknown[]` (fakkeenyaaf JSON irraa, query parameters irraa, yookaan external APIs irraa) yeroo argattu fi tarreen sun
guutamee jiraachuu fi item hundi float ta'uu isaa mirkaneessuu barbaadde, loojikii lakkoofsaa akka averaging,
interpolation, yookaan statistical calculations dura `areFloats` fayyadami.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areFloats` fayyadami `unknown[]` akka `number[]` float qofa of keessaa qabuutti ittiin eeguuf; tarree duwwaa fi
> elementii float hin taane kamiyyuu irratti `false` deebisa.

### Faayidaa

- `true` deebisa yoo galteen tarree duwwaa hin taane ta'ee fi elementiin hundi isaanii float ta'an qofa.
- Saffisaan dhaabata: akkuma elementiin float hin taane argameen `false` deebisa.
- Herrega float irratti hundaa'e raawwachuu dura galtee hin beekamne mirkaneessuuf gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areFloats(array)`

Paaraameetaroota:

- `array`: Tarree elementoota float ta'an mirkaneessuuf ilaalamu.

### Galchii faankishinii naannoo

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // dhugaa
console.log(areFloats(b)); // soba
console.log(areFloats(c)); // soba

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areFloats(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 15:58:58 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>