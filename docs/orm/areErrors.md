# areErrors

## Ibsa

Array tokko duwwaa akka hin taane fi `Error` objects qofa akka of keessaa qabu ni sakattaʼa; `true` yookaan `false` ni
deebisa.

### Haala itti fayyadama

`unknown[]` runtime irraa kennamu (fakkeenyaaf kufaatii walitti qabame, buʼaa mirkaneessaa, yookaan data deserialized)
irra deemu, galmeessu, yookaan irra deebiin darbuu dura tarree `Error` objects duwwaa hin taane taʼuu isaa mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areErrors` `true` kan deebisu array guutame tokko keessatti item hundi `Error` taʼee yoo argame qofa; array duwwaa
> irratti yookaan elementiin kamiyyuu `Error` hin taane yoo jiraate `false` ni deebisa.

### Faayidaa

- Elementiin hundi `Error` instance taʼuu isaa mirkaneessa; kunis dogoggora haala nageenya qabuun qabachuu fi galmeessuu
  ni dandeessisa.
- Arraywwan duwwaa ni dida; kunis haala “dogoggorri hin jiru” jedhu akka tasaa tarree dogoggoraa sirrii fakkaatu irraa
  ni ittisa.
- `unknown[]` galtee waliin yeroo hojjettu (fakkeenyaaf API irraa yookaan `catch` blocks keessaa) akka runtime guard
  taʼee gaariidha.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areErrors(array)`

Paaraameetaroota:

- `array`: Array `Error` objects jedhu mirkaneessuuf ilaalamu.

### Galchii faankishinii naannoo

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value jechuun Error wantoota keessaa tarree duwwaa hin taane dha
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areErrors(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 12:35:03 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>