# isTrue

## Ibsa

`isTrue` gatiin kenname `true` waliin sirriitti walqixa ta'uu isaa murteessa.

### Haala itti fayyadama

`isTrue` fayyadamuun flags, feature toggles, yookaan gatiiwwan configuration keessatti `true` litiraalii qofa akka
fudhatamu mirkaneessi; kan biraa hundi `false` akka ta'utti ilaali.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Yeroo booliinii litiraalii `true` qofa fudhachuu barbaaddu, gatiiwwan truthy qofa osoo hin taane, `isTrue` fayyadami.

### Faayidaa

- Booliinii litiraalii `true` irratti qorannoo cimdaa kenna (coercion hin qabu).
- `true` gatiiwwan truthy akka `1`, `"true"`, yookaan `{}` irraa adda baasuuf gargaara.
- Amala salphaa, tilmaamamuu danda'u kan guards fi validation pipelines irratti mijataa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isTrue(value)`

Paaraameetaroota:

- `value`: Gatii qoramu.

### Galchii faankishinii naannoo

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // dhugaa
const b = isTrue(1);         // soba
const c = isTrue("true");   // soba

if (isTrue(a)) {
  // a asitti dhugaa dha
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isTrue(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 13:45:52 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>