# isFalse

## Ibsa

`isFalse` gatiin kenname booliinaa `false` wajjin sirriitti walqixa ta'uu isaa ni sakatta'a.

### Haala itti fayyadama

Daataa hin beekamne (fakkeenyaaf, JSON irraa, query params irraa, yookaan galtee fayyadamaa irraa) mirkaneessuu
keessatti, gatiin booliinaa ifa ta'e `false` qofa akka mallattoo sirrii ta'ee fudhatamu, kan biraa hundi immoo akka
didamu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isFalse` yeroo booliinaa `false` qofa fudhachuu fi gatiiwwan sobaa fakkaatan hunda diduu barbaaddanitti fayyadamaa;
`value === false` qofaaf `true` ni deebisa.

### Faayidaa

- Dirqama booliinaa `false` irratti qofa, dirqisiisuu (coercion) malee, sakatta'insa cimaa ni kenna.
- `false` gatiiwwan sobaa fakkaatan biroo akka `0`, `""`, `null`, fi `undefined` irraa adda baasuuf ni gargaara.
- Galtee hin beekamne mirkaneessu yeroo kaayyoo ifa godhuun dubbifamuu ni fooyyessa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isFalse(value)`

Paaraameetaroota:

- `value`: Gatii sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input asitti soba asitti false dha
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isFalse(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 16:44:06 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>