# isError

## Maelezo

Hukagua kama `value` iliyotolewa ni mfano wa `Error`.

### Kesi ya matumizi

Tumia `isError` unapopokea thamani ya `unknown` (kama kutoka kwenye kizuizi cha `catch`, callback, au maktaba ya nje) na
unahitaji kubaini kwa usalama kama ni `Error` kabla ya kusoma `message`, `name`, au `stack`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isError` kulinda thamani za `unknown` (mfano, kutoka `catch`) kabla ya kuzichukulia kama `Error`.

### Faida

- Hutoa ukaguzi rahisi wa wakati wa utekelezaji ili kubaini kama thamani ni mfano wa `Error`.
- Husaidia kubana ingizo lisilojulikana kabla ya kufikia sifa za `Error` kama `message` au `stack`.
- Hupunguza hatari ya hitilafu za wakati wa utekelezaji unaposhughulikia thamani kutoka `catch`, API za nje, au vyanzo
  visivyo na aina.

## Matumizi

### Sintaksia

Kazi:

- `isError(value)`

Vigezo:

- `value`: Thamani ya kukagua dhidi ya aina ya `Error`.

### Uingizaji wa kazi wa ndani

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

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isError(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isError](../_analysis/isError.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 12:47:11 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>