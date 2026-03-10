# areBooleans

## Ibsa

`areBooleans` tarree duwwaa hin taane kenname keessaa gatiiwwan boolean qofa akka jiran ni mirkaneessa; yoo akkas taʼe
`true` deebisa, yoo hin taʼin `false` deebisa.

### Haala itti fayyadama

Deetaa fayyadamaan kennamu ykn alaa dhufu (fkn, JSON payloads, query params, config arrays) mirkaneessuuf, tarreen
duwwaa hin taane boolean qofa akka of keessaa qabu dura mirkaneessi; sana booda loojikii boolean irratti hojiirra oolchi
ykn APIwwan `boolean[]` eeganiif dabarsi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areBooleans` fayyadami `unknown[]` akka `boolean[]`tti ilaaluun dura mirkaneessuuf; tarreewwan duwwaa irratti `false`
> deebisa, kanaaf yoo tarreen duwwaan eeyyamamu qaba taʼe haala sana addatti qabi.

### Faayidaa

- `true` qofa deebisa yoo elementiin hundi boolean taʼee fi galteen tarree duwwaa hin taane taʼe qofa.
- Tarreewwan duwwaa fudhachuu diduun ( `false` deebisuun) dogoggora mirkaneessuu (false positives) ni ittisa.
- Hojiiwwan boolean qofa irratti hojjetaman dura akka eegumsa yeroo raawwii (runtime guard)tti gaariidha (fkn, `every`,
  `some`, logical reductions).

## Fayyadama

### Sinaaksii

Faankishinii:

- `areBooleans(array)`

Paaraameetaroota:

- `array`: Tarree elementoota boolean taʼuu isaanii mirkaneessuuf qoramu.

### Galchii faankishinii naannoo

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areBooleans(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 14:41:48 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>