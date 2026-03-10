# arePrimitives

## Ibsa

`arePrimitives` array kennamu, kan duwwaa hin taane keessatti elementiin hundi gosa primitiivii ta’uu isaanii ni
madaala.

### Haala itti fayyadama

Deetaa seenu (fakkeenyaaf, query parameters, gatiiwwan tarree CSV, yookaan tarree ID/tag) serializing, hashing, logging,
yookaan APIwwan object hin fudhanneef dabarsuun dura gatiiwwan primitiivii qofa qabaachuu isaa mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `arePrimitives` yeroo `unknown[]` keessatti gatiiwwan primitiivii qofa (string, number, bigint, boolean, symbol,
> undefined, yookaan null) jiraachuu isaa hojii itti aanutti seenuun dura mirkaneessuu barbaadde fayyadami.

### Faayidaa

- `true` kan deebisa yeroo elementiin hundi gatiiwwan primitiivii ta’an qofa yoo ta’e, kanaaf array “object/function hin
  qabne” irratti eegu (guard) cimaa dha.
- Saffisaan ni dhaabata: akkuma elementiin primitiivii hin taane argameen `false` ni deebisa.
- Akkasumas array hin taane fi array duwwaa irratti `false` ni deebisa (mirkaneessa array guutameen), kanaaf galtee
  dogoggoraa akka tasaa fudhatamuu ni ittisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `arePrimitives(array)`

Paaraameetaroota:

- `array`: Array elementoota gosa primitiivii ta’an qabaachuu isaa mirkaneessuuf sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // dhugaa
const r2 = arePrimitives(b); // dhugaa
const r3 = arePrimitives(c); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.arePrimitives(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 00:06:02 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>