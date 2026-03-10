# isOfType

## Ibsa

`value` kenname type string murtaa’e waliin walsimuun isaa ni murteessa; primitives irratti `typeof` fayyadama, type
walxaxaa irratti immoo fallback fayyadama.

### Haala itti fayyadama

Galiiwwan `unknown` (fakkeenyaaf, deebii API, galtee fayyadamaa, JSON parse ta’e) mirkaneessuu fi xiqqeessuu (narrow)
gochuuf; hojii type irratti hundaa’e raawwachuu dura gatiin type string eegame tokko ta’uu isaa qorachuun.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `unknown` gatiiwwan waliin hojjetu yeroo, type runtime irratti damee (branch) baasuuf `isOfType` fayyadami; inni
`true`/`false` ni deebisa, `null` fi `undefined` immoo ifatti ni ilaala.

### Faayidaa

- `typeof` kallatti fayyadamuun saffisaa fi ifa ta’een primitive ni mirkaneessa.
- `null` fi `undefined` sirnaan ni qabata; kan `typeof` qofaatiin akka barbaadameetti addaan baafachuun hin danda’amu.
- `getTypeOf` fayyadamuun walbira qabuu bakka bu’aa (fallback) irratti hundaa’uun, type string walxaxaa ykn kan ofii (
  custom) ni deeggara.
- Bu’aa boolean salphaa (`true`/`false`) kan guards fi branching irratti mijatu ni deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isOfType(value, type)`

Paaraameetaroota:

- `value`: Gatii `type` waliin qoramu.
- `type`: Bakka bu’iinsa string kan type, kan ittiin mirkaneeffamu.

### Galchii faankishinii naannoo

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input asitti lakkoofsa dha
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input asitti diraa dha
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isOfType(value, type)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 17:05:43 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>