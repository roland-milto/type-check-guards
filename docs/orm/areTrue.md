# areTrue

## Ibsa

Array duwwaa hin taane tokko gatii boolean `true` qofa qabaachuu isaa ni sakatta’a.

### Haala itti fayyadama

`areTrue` fayyadami setii preconditions yookaan feature flags hundi isaanii hojii irra jiraachuu isaanii (gatiiwwan
hundi `true`) ittiin mirkaneessituuf dura itti fufuu, akkasumas galtee duwwaa yookaan dogoggoraa akka hin guutamneetti (
`false`) ilaaluuf.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areTrue` array duwwaa fi array keessatti gatiin kamiyyuu sirriitti `true` hin taane yoo jiraate `false` deebisa.

### Faayidaa

- `true` qofa deebisa yoo elementiin hundi isaanii sirriitti `true` ta’anii fi arrayn sun duwwaa hin taane qofa.
- Saffisaan dhaaba: akkuma gatiin `true` hin taane argameen `false` deebisa.
- Galtee sirrii hin taane (array hin taane yookaan array duwwaa) `false` deebisuun ni dida.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areTrue(array)`

Paaraameetaroota:

- `array`: Array kan gatiiwwan `true` qofa qabaachuu isaa mirkaneessuuf sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areTrue(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 13:52:21 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>