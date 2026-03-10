# arePromises

## Ibsa

`arePromises` elementiin hundi array keessa jiran `Promise` ta'uu isaanii murteessa.

### Haala itti fayyadama

Tarree haala jijjiiramaa keessatti ijaarame ykn alaa irraa kenname keessatti waadaan (promises) qofa jiraachuu isaa
mirkaneessi dura walitti qabuu isaanii (fakkeenyaaf, `Promise.all` waliin).

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `arePromises` fayyadami `unknown[]` mirkaneessuuf dura `Promise.all` ykn hojiiwwan promise-qofa irratti; array duwwaaf
`false` deebisa.

### Faayidaa

- Loogiika waadaa (promise) irratti hojjechuu dura, elementiin hundi `Promise` ta'uu isaa mirkaneessa.
- Arraywwan hin guutamneef `false` deebisa; kunis galtee duwwaa irratti bu'aa walxaxaa akka hin uumamne ittisa.
- Yeroo `unknown[]` madda alaa irraa dhufu waliin hojjetanitti akka eegumsa runtime tajaajila.

## Fayyadama

### Sinaaksii

Faankishinii:

- `arePromises(array)`

Paaraameetaroota:

- `array`: Array `Promise` ta'uu isaanii mirkaneessuuf sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values yeroo ammaa keessatti tarree Promise instances dha
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.arePromises(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 23:49:27 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>