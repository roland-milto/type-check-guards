# isPlainObject

## Ibsa

`value` kenname plain object ta’uu isaa ni ilaala; yoo ta’e `true` deebisa, yoo hin ta’in `false` deebisa.

### Haala itti fayyadama

Input `unknown` (fakkeenyaaf JSON parse ta’e, data alaa, yookaan function arguments) plain object ta’uu isaa mirkaneessi
dura keys dubbisuu yookaan gara typed configuration object tti map gochuu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isPlainObject` `unknown` dhiphisuuf faayidaa qaba dura akka record-fakkaatu objectitti itti fayyadamuu; gatiiwwan
> internal tag isaanii `[object Object]` ta’e qofaaf `true` deebisa.

### Faayidaa

- Gatii salphaa fi amanamoo ta’e tokko gatiin tokko plain object (jechuunis, `Object` / `{}`) ta’uu isaa mirkaneessuuf,
  `true` yookaan `false` deebisa.
- Plain objects adda baasuuf gargaara: arrays, functions, `null`, fi gosa non-plain object biroo irraa.
- TypeScript keessatti akka type guard tti fayyada; amala `unknown` dhiphisuun dura properties object irratti hojii
  gochuu dandeessisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isPlainObject(value)`

Paaraameetaroota:

- `value`: Gatii plain object ta’uu isaa qoramu.

### Galchii faankishinii naannoo

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input jechuun asitti wanta salphaa (plain object) dha
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // dhugaa
console.log(isPlainObject([])); // soba
console.log(isPlainObject(null)); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isPlainObject(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 12:19:11 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>