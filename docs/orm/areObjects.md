# areObjects

## Ibsa

`areObjects` tarreen guutame kenname wantoota (objects) qofa qabaachuu isaa ni sakatta’a.

### Haala itti fayyadama

`areObjects` fayyadami yeroo tarree hin beekamne (fakkeenyaaf, JSON parsing ykn API alaa irraa) argattu, itti fufuun
dura tarreen sun duwwaa akka hin taane fi elementiin hundi wanta (object) akka ta’an mirkaneessuu fi booda irra
deemuudhaan amaloota wantaa (object properties) argachuuf.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areObjects` fayyadami `unknown[]` mirkaneessuuf dura wantoota akka ta’anitti ilaaluun; tarree duwwaa irratti `false`
> deebisa.

### Faayidaa

- `true` deebisa yoo galteen tarree guutame ta’ee fi elementiin hundi wanta (object) ta’an qofa.
- Ariitii dhaaba; akkuma elementiin wanta hin taane argameen `false` deebisa.
- Hojiiwwan wanta irratti hundaa’an raawwachuu dura galtee hin beekamne mirkaneessuuf gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areObjects(array)`

Paaraameetaroota:

- `array`: Tarree elementoota wanta (object) ta’an mirkaneessuuf sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value tarree wantoota guutame kan wantoota ta'e
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areObjects(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 00:09:58 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>