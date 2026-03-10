# isBuffer

## Ibsa

Gatiin tokko Node.js `Buffer` ta'uu isaa ni mirkaneessa; `true` yookaan `false` deebisa.

### Haala itti fayyadama

Galtee runtime irratti (fakkeenyaaf, API payloads, data faayilii, yookaan message buffers) mirkaneessi; hojii irra
oolchuu dura gatiin tokko `Buffer` ta'uu isaa akka mirkanaa'u godhi, akkasumas Node.js ala keessatti yeroo hojjetamu
`Buffer` jiraachuu dhiisuu danda'u waan ta'eef amanamummaan `false` argadhu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `unknown` gatiiwwan irratti mala `Buffer`-dhaaf addaa ta'an waamuun dura, `isBuffer` fayyadamiitii gara `Buffer`tti
> xiqqeessi.

### Faayidaa

- `Buffer.isBuffer` fayyadamuun Node.js `Buffer` instance haala nageenya qabuun adda baasa.
- Naannoo `Buffer` hin jirre keessatti `false` deebisa; dogoggora runtime irraa ni ittisa.
- Galtee `unknown` waliin ni hojjata; kanaaf mirkaneessa runtime fi type narrowing irratti mijataa dha.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isBuffer(value)`

Paaraameetaroota:

- `value`: Gatii qoramu.

### Galchii faankishinii naannoo

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // dhugaa
console.log(isBuffer(b)); // soba

if (isBuffer(a)) {
  // a asitti Buffer dha
  console.log(a.toString("utf8"));
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isBuffer(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 16:32:50 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>