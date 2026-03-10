# areSymbols

## Ibsa

Galtee tarree guutame (filled array) ta’ee elementiin isaa hundi mallattoowwan (symbols) ta’uu isaa ni sakatta’a; `true`
yookaan `false` ni deebisa.

### Haala itti fayyadama

Dirree qindaa’inaa (fakkeenyaaf, tarree furtuuwwan addaa mallattoodhaan bakka bu’an) tarree duwwaa hin taane fi
mallattoowwan (symbols) qofa of keessaa qabu ta’uu isaa APIwwan `symbol[]` barbaadan keessatti itti fayyadamuun dura
mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areSymbols` fayyadami galtee hin beekamne `symbol[]` jechuun dura mirkaneessuuf; tarree hin taane fi tarree duwwaa
> irratti `false` ni deebisa.

### Faayidaa

- Galtee `true` qofa deebisa yeroo galtee tarree duwwaa hin taane ta’ee fi elementiin hundi mallattoo (symbol) ta’an.
- Tarree hin taane fi tarree duwwaa sakatta’iinsa keessaa filled-array fayyadamuun fudhatama dogoggoraa (false
  positives) ni ittisa.
- Akka runtime type guard tti faayidaa qaba; tarreewwan mallattoo qofa of keessaa qaban hojii itti aanutti darbuu dura
  mirkaneessuuf.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areSymbols(array)`

Paaraameetaroota:

- `array`: Tarree elementoota mallattoo (symbol) ta’an qabaachuu isaa sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a yeroo hojii irraatti tarree mallattoo qofaati
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areSymbols(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 14:23:18 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>