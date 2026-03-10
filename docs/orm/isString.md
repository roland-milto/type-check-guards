# isString

## Ibsa

`isString` gatiin kenname string ta'uu isaa murteessa.

### Haala itti fayyadama

Yeroo runtime irratti galtee fayyadamaa, dirree payload API, ykn gatiiwwan qindaa'inaa mirkaneessi gatiin string ta'uu
isaa, hojiiwwan string irratti (fakkeenyaaf, trimming, splitting, case conversion) hojjachuu dura.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isString` fayyadami `unknown` ykn gatiiwwan gosa isaanii sirnaan hin ibsamne mirkaneessuuf dura mala string waamuun;
`true` kan deebisu qofa yeroo `typeof value === "string"` ta'etti.

### Faayidaa

- Sakatta'aa fi saffisaa `typeof` fayyadamuun qorachuu.
- Bu'aa boolean kan tilmaamamu deebisa: `true` yoo string ta'e, yoo kana hin ta'in `false`.
- String duwwaa fi kan hin duwwaan lamaan irratti ni hojjeta.
- Hojiiwwan string irratti addaa ta'an raawwachuu dura akka eegumsa runtime salphaa ta'ee fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isString(value)`

Paaraameetaroota:

- `value`: Gatii akka string ta'uu isaa qoramu.

### Galchii faankishinii naannoo

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input asitti satringii dha
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isString(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isString](../_analysis/isString.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 13:15:12 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>