# isSymbol

## Ibsa

`isSymbol` gatiin kenname gosa `symbol` ta'uu isaa murteessa; symbol irratti `true` deebisa, kan biraa irratti immoo
`false` deebisa.

### Haala itti fayyadama

Gatii `unknown` tokko akka `symbol` ta'uu isaa mirkaneessi, akka mallattoo adda ta'e (unique identifier), furtuu
galmee (registry key), yookaan akka furtuu amalli (computed property key)tti objects fi maps keessatti fayyadamuun dura.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `unknown` gara `symbol`tti dhiphisuuf, hojiiwwan symbol waliin walqabatan waamuun dura yookaan akka furtuu amalli (
> computed property key)tti fayyadamuun dura `isSymbol` fayyadami.

### Faayidaa

- Gosa salphaa, amanamaa ta'e, yeroo raawwatamu irratti gosa `symbol` primitive JavaScript mirkaneessuuf ni kenna.
- APIwwan symbol irratti addatti hojjetan fayyadamuun dura yookaan akka furtuu ta'ee kuusuun dura, gatii `unknown`
  dhiphisuuf ni gargaara.
- Gatii `symbol` adda baasuuf karaa sirrii (canonical) ta'e `typeof` fayyadamuun, dogoggora (false positives) ni
  hambisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isSymbol(value)`

Paaraameetaroota:

- `value`: Gatii sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input asitti mallattoo dha
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isSymbol(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 14:28:09 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>