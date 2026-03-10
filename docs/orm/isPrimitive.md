# isPrimitive

## Ibsa

`isPrimitive` gatiin kenname primitive ta'uu isaa murteessa (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Haala itti fayyadama

Yeroo raawwiitti galtee mirkaneessi (fakkeenyaaf, dirreewwan payload API, gatiiwwan qindaa'inaa, yookaan deetaa
fayyadamaan kennu) gatiin tokko primitive ta'uu isaa mirkaneessuuf, erga sana booda serialize gochuu, log gochuu,
yookaan hojiiwwan primitive-qofa irratti hojiirra oolchuu dura.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `unknown` galtee irratti akka wantoota yookaan faankishiniiwwanitti ilaaluun dura `isPrimitive` akka eegu (guard)tti
> fayyadami; primitive irratti `true` deebisa, wantoota fi faankishiniiwwan irratti immoo `false` deebisa.

### Faayidaa

- Saffisaa, qoodinsa yaadannoo hin barbaadne (allocation-free) ta'ee gatii tokko primitive JavaScript ta'uu isaa
  mirkaneessuuf.
- `null` akka primitiveetti sirnaan ilaala (yeroo `typeof null` `"object"` ta'us).
- Hojiiwwan wanta (object) qofa irratti raawwataman dura gatii `unknown` dhiphisuuf gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isPrimitive(value)`

Paaraameetaroota:

- `value`: Gatii akaakuu primitive ta'uu isaa mirkaneessuuf.

### Galchii faankishinii naannoo

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isPrimitive(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 23:57:23 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>