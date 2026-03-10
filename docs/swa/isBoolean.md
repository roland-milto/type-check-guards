# isBoolean

## Maelezo

Huamua kama thamani iliyotolewa ni `boolean`.

### Kesi ya matumizi

Thibitisha data ya nje au isiyo na aina (mf., environment variables, JSON payloads, query parameters) ili kuhakikisha
thamani ni `boolean` kabla ya kuitumia katika mantiki ya masharti.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isBoolean` kupunguza `unknown` hadi `boolean` kabla ya kutumia uendeshaji wa boolean.

### Faida

- Ukaguzi rahisi na wa haraka wa wakati wa utekelezaji kwa kutumia `typeof`.
- Husaidia kuthibitisha ingizo lisilojulikana kabla ya mantiki mahususi ya boolean.
- Hurejesha matokeo ya `boolean` yanayotabirika (`true`/`false`).

## Matumizi

### Sintaksia

Kazi:

- `isBoolean(value)`

Vigezo:

- `value`: Thamani inayopaswa kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input ni boolean hapa
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isBoolean(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 14:37:57 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>