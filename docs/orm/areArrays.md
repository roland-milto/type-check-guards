# areArrays

## Ibsa

`areArrays` gatiin tokko galtee akka galchii guutame (hin duwwaanne) akka ta’e, akkasumas itemoonni isaa hundi galtee
akka ta’an murteessa.

### Haala itti fayyadama

Galtee akka gabatee yookaan matrix fakkaatu (fakkeenyaaf, tarreewwan CSV, deetaa grid, yookaan tarreewwan gurmaa’an)
hojii row/column raawwachuu dura mirkaneessuuf `areArrays` fayyadami; yoo seensi galtee hin ta’in, duwwaa ta’e, yookaan
elementii galtee hin taane tokko illee qabaate `false` deebisa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Yeroo gatiin tokko galtee 2D hin duwwaanne ta’uu fi tarreen (row) hundi galtee ta’uu mirkaneessuu barbaaddu, osoo hin
> iterating gochuu yookaan nested arrays keessatti index gochuu dura `areArrays` fayyadami.

### Faayidaa

- Galtee akka galchii seenuu akka ta’e mirkaneessa; kan hin duwwaanne fi elementiin hundi isaanii galtee ta’an.
- Bu’aa boolean salphaa (`true`/`false`) deebisa; kunis guard fi ba’ii ariifachiisaa (early exit) irratti fayyada.
- Dogoggora yeroo raawwii (runtime errors) ittisa; yeroo koodiin boodaa hojii galtee keessaa (nested array operations)
  akka fudhatu (fakkeenyaaf, tarreewwan map gochuu) yaadu.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areArrays(array)`

Paaraameetaroota:

- `array`: Seensa sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value jechuun tarree 2D dha; elementoonni isaa tarreewwan dha
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areArrays(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 13:41:00 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>