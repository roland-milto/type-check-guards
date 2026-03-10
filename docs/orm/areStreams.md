# areStreams

## Ibsa

`areStreams` gatiin tokko galfata guutuu ta’ee, keessatti wanti hundi `Stream` ta’uu isaa murteessa.

### Haala itti fayyadama

Walitti qabama fayyadamaan kenne ykn haala jijjiiramaa keessatti ijaarame (fakkeenyaaf, streamwwan faayilii hedduu
dubbisuu) dura mirkaneessi; achiin booda piping, resume gochuu, ykn akka gareetti irratti hojii hojjechuuf.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areStreams` fayyadamiitii galtee hin beekamne hojii irra oolchuu dura mirkaneessi; akka `Stream[]`tti ilaaluuf. Inni
`true` kan deebisu yeroo gatiin sun galfata duwwaa hin taane ta’ee, wanti hundi `Stream` ta’e qofa.

### Faayidaa

- Galtee akka galfata guutuu ta’e mirkaneessa; keessatti wanti hundi `Stream` ta’a.
- Qorannoo salphaa `true`/`false` kenna; walitti qabama stream hojii jalqabuu dura mirkaneessuuf.
- Saffisaan kufa: yeroo jalqaba wanti `Stream` hin taane argamu `false` deebisa.
- Yeroo koodiin wantoota hunda akka `Stream` ta’an yaadu dogoggora runtime ittisuuf gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areStreams(array)`

Paaraameetaroota:

- `array`: Galfata wantoota Stream ta’an ilaaluuf sakatta’amu.

### Galchii faankishinii naannoo

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input jechuun tarree guutuu wantoota Stream ti
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areStreams(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 23:35:10 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>