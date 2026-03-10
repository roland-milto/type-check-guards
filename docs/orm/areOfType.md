# areOfType

## Ibsa

`array` kenname keessatti elementoonni hundi `type` ibsame keessaa ta'uu isaanii ni ilaala.

### Haala itti fayyadama

`areOfType` galtee hin beekamne (fakkeenyaaf JSON parse godhame, payload API, galtee fayyadamaa) mirkaneessuuf
fayyadami; booda elementii hunda irratti hojii gosa irratti hundaaye raawwachuu dandeessa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Sababni isaas `areOfType` type guard waan ta'eef, TypeScript `if (areOfType(...)) {}` keessatti array sana gara
`Array<DataTypeOf<T>>`tti ni xiqqeessa.

### Faayidaa

- Eeguardii gosa TypeScript ni kenna: yeroo inni `true` deebisu, galteen gara `Array<DataTypeOf<T>>`tti xiqqaatta.
- Tokkoon tokkoon elementii gosa runtime gaafatameen ni mirkaneessa; arraywwan gosa wal-makaa ta’an akka hin darbne ni
  ittisa.
- Saffisaan ni kufa: akkuma elementiin walsimu hin argamne `false` deebisa.
- Akka seeraatti array hin taane fi array duwwaa ni dida (kun `isFilledArray` irratti hirkata).

## Fayyadama

### Sinaaksii

Faankishinii:

- `areOfType(array, type)`

Paaraameetaroota:

- `array`: Array ilaaluuf.
- `type`: Gosa elementii hunda irratti ittiin ilaalu.

### Galchii faankishinii naannoo

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values amma amma number[] dha
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areOfType(array, type)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 17:10:54 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>