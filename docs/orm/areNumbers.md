# areNumbers

## Ibsa

`areNumbers` gatiin tokko tarree duwwaa hin taane ta’ee elementiin hundi lakkoofsa ta'uu isaa ni sakatta'a.

### Haala itti fayyadama

Waan fayyadamaan kennu yookaan API irraa dhufu mirkaneessuun, walitti qabaa (totals), giddugaleessa (averages), yookaan
walitti qabaa lakkoofsaa biroo herreguu dura tarree lakkoofsota duwwaa hin taane ta'uu isaa mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areNumbers` fayyadami tarreewwan hin beekamne (unknown) hojii herrega lakkoofsaa dura mirkaneessuuf; tarreewwan
> duwwaa fi tarreewwan gatii lakkoofsa hin taane kamiyyuu of keessaa qaban irratti `false` deebisa.

### Faayidaa

- `true` qofa deebisa yoo galteen tarree duwwaa hin taane ta’ee fi elementiin hundi lakkoofsa ta’an qofa.
- Tarreewwan duwwaa fi galtee tarree hin taane fudhachuu diduun dogoggora mirkaneessaa (false positives) ni ittisa.
- Dogoggora yeroo raawwatamuu (runtime errors) irraa fagaachuuf hojiiwwan lakkoofsaa dura (fakkeenyaaf, ida'uu,
  giddugaleessa baafuu) akka eegu (guard) ta'ee ni fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areNumbers(array)`

Paaraameetaroota:

- `array`: Tarree elementoota lakkoofsaa ta'uu isaa mirkaneessuuf sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areNumbers(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 13:05:34 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>