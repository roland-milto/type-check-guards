# isDate

## Ibsa

`isDate` gatiin kenname `Date` ta’uu isaa murteessa; `Date` ta’eef `true` deebisa, kan biraa hundaaf immoo `false`
deebisa.

### Haala itti fayyadama

Gatii hin beekamne (fkn, deetaa gaaffii, gatii config, yookaan JSON hiikame) mirkaneessiitii dhiphisi, hojii `Date` akka
foormaat gochuu, walbira qabuu, yookaan `toISOString()` waamu dura.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isDate` fayyadami `unknown` gara `Date`tti yeroo hojii irratti dhiphisuuf; `Date` dhugaa qofaaf `true` deebisa (
> stringii guyyaa miti).

### Faayidaa

- Gatii yeroo hojii salphaa ta’e kenna, gatiin tokko `Date` ta’uu isaa mirkaneessuuf.
- Dogoggora gosa (type errors) ittisuuf gargaara; `Date` qofa akka mirkaneeffannaa darbu mirkaneessa.
- Galtee hin beekamne (fkn, payload API) irratti, malaalee `Date` irratti hundaa’an fayyadamuu dura mirkaneessuuf ni
  fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isDate(value)`

Paaraameetaroota:

- `value`: Gatii gosa `Date` ta’uu isaa sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input asitti Guyyaa (Date) dha
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isDate(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isDate](../_analysis/isDate.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 15:47:15 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>