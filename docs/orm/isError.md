# isError

## Ibsa

`value` kenname `Error` instance ta'uu isaa ni mirkaneessa.

### Haala itti fayyadama

`unknown` gatii (akka `catch` block, callback, yookaan library alaa irraa dhufu) yeroo argattu, `message`, `name`,
yookaan `stack` dubbisuu dura `Error` ta'uu isaa nagaan murteessuuf `isError` fayyadami.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `unknown` gatiiwwan (fakkeenyaaf, `catch` irraa) `Error` jechuun dura eeguuf `isError` fayyadami.

### Faayidaa

- Gatiin salphaa runtime irratti gatiin tokko `Error` instance ta'uu isaa mirkaneessuuf.
- `Error` amaloota akka `message` yookaan `stack` irratti seenuu dura galtee hin beekamne (unknown) dhiphisuuf gargaara.
- Gatiiwwan `catch`, API alaa, yookaan madda type hin qabne irraa dhufan yeroo qabatan keessatti dogoggora runtime (
  exceptions) uumamuu hir'isa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isError(value)`

Paaraameetaroota:

- `value`: Gatii `Error` type waliin wal bira qabamee ilaalamu.

### Galchii faankishinii naannoo

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isError(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isError](../_analysis/isError.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 12:46:40 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>