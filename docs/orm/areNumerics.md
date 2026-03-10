# areNumerics

## Ibsa

`areNumerics` gatiin tokko tarree duwwaa hin taane ta’ee elementiin hundi lakkoofsa ta’uu isaa ni mirkaneessa.

### Haala itti fayyadama

`areNumerics` fayyadami daataa alaa ykn gosa hin ibsamne (fakkeenyaaf, JSON payloads, query parameters, form input)
walitti qabuu, giddugaleessa, ykn hojii lakkoofsaa biroo herreguu dura mirkaneessuuf; galteen tarree lakkoofsaa duwwaa
hin taane ta’uu isaa mirkaneessa, yoo akkas hin ta’in `false` deebisa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areNumerics` fayyadami galtee `unknown` eeguuf dura akka tarree lakkoofsaa ta’etti ilaalu; tarree hin taane fi tarree
> duwwaa irratti `false` deebisa.

### Faayidaa

- `true` deebisa yoo galteen tarree duwwaa hin taane ta’ee fi elementiin hundi lakkoofsa ta’an qofa.
- Saffisaan dhaabata: akkuma elementiin lakkoofsa hin taane argameen qorannoo dhaaba, `false` deebisa.
- Hojii lakkoofsaa raawwachuu dura galtee hin beekamne nagaan mirkaneessuuf gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areNumerics(array)`

Paaraameetaroota:

- `array`: Tarree elementoota lakkoofsaa ta’an mirkaneessuuf ilaalamu.

### Galchii faankishinii naannoo

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // dhugaa
console.log(areNumerics(b)); // dhugaa
console.log(areNumerics(c)); // soba
console.log(areNumerics(d)); // soba
console.log(areNumerics(e)); // soba

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areNumerics(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 16:06:50 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>