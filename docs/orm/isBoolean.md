# isBoolean

## Ibsa

Gatiin kenname `boolean` ta'uu isaa murteessa.

### Haala itti fayyadama

Daataa alaa ykn gosa hin ibsamne (fakkeenyaaf, environment variables, JSON payloads, query parameters) mirkaneessuudhaan
gatiin tokko lojiikii haala irratti fayyadamuun dura `boolean` ta'uu isaa mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Hojiiwwan `boolean` hojiirra oolchuu dura `unknown` gara `boolean`tti xiqqeessuuf `isBoolean` fayyadami.

### Faayidaa

- Mirkaneessa saffisaa fi salphaa yeroo raawwatamu `typeof` fayyadamuun.
- Lojiikii addaa `boolean` dura galtee hin beekamne mirkaneessuuf gargaara.
- Bu'aa `boolean` amanamaa (`true`/`false`) deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isBoolean(value)`

Paaraameetaroota:

- `value`: Gatii sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input asitti boolean dha
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isBoolean(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 14:37:25 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>