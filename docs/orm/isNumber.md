# isNumber

## Ibsa

`isNumber` gatiin tokko lakkoofsa xumura-qabu, `NaN` hin taane ta'uu isaa ni sakatta'a.

### Haala itti fayyadama

Galtee lakkoofsaa madda hin amanamne irraa (foormii, query params, JSON payloads) herrega, kuusaa, yookaan sakatta'iinsa
daangaa dura mirkaneessi; lakkoofsota xumura-qaban qofa akka darbani (`true`) fi waan biraa hundi akka `false` deebisu
mirkaneessa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isNumber` fayyadami gatii `unknown` herrega dura mirkaneessuuf; inni `NaN`, `Infinity`, fi `-Infinity` ni haqa.

### Faayidaa

- `true` kan deebisa yoo lakkoofsi JavaScript dhugaa ta'e qofa (sakatta'iinsa gosa dabalatee `NaN` fi infinity ni haqa).
- Dogoggora mirkaneessaa beekamoo kan `NaN`, `Infinity`, yookaan `-Infinity` dogoggoraan akka lakkoofsaatti darbanii
  seenu ittisa.
- Akka eegduu yeroo raawwii (runtime guard) galtee hin beekamneef (fakkeenyaaf, JSON, galtee fayyadamaa, API alaa)
  gaariidha.
- Salphaa, saffisaa, fi miidhaa cinaa (side-effect) hin qabu.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isNumber(value)`

Paaraameetaroota:

- `value`: Gatii sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input lakkoofsa dhugaa fi daangaa qabu sirrii dha
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isNumber(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 13:10:31 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>