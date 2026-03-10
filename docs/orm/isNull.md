# isNull

## Ibsa

`value` kenname `null` ta'uu isaa murteessa.

### Haala itti fayyadama

Galtee ykn dirree payload API keessatti `null` akka gatii mallattoo (sentinel) hiika qabu ta'ee, `undefined` ykn gatii
biroo irraa adda ta'ee akka to'annoo addaa barbaadu yeroo ta'u, `isNull` fayyadami.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `null` akka `undefined` fi gatiiwwan falsy biroo irraa adda baastu yeroo barbaaddu `isNull` fayyadami; `null` qofaaf
`true` ni deebisa.

### Faayidaa

- `undefined` waliin walitti hin makiinaa, `null` irratti qorannoo sirrii ni kenna.
- Gosa galtee kamiyyuu irratti amanamummaan ni hojjata, sababni isaas `unknown` ni fudhata.
- Salphaa, saffisaa, fi miidhaa hin qabu; `true` ykn `false` qofa ni deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isNull(value)`

Paaraameetaroota:

- `value`: `null` ta'uu isaa mirkaneessuuf gatii qoramu.

### Galchii faankishinii naannoo

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // dhugaa
console.log(isNull(b)); // soba

if (isNull(a)) {
  // a asitti null dha
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isNull(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isNull](../_analysis/isNull.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 15:40:24 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>