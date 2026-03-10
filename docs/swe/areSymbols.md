# areSymbols

## Beskrivning

Kontrollerar om en indata är en ifylld array vars element alla är symboler, och returnerar `true` eller `false`.

### Användningsfall

Validera att ett konfigurationsfält (t.ex. en lista med unika nycklar representerade som symboler) är en icke-tom array
som endast innehåller symboler innan du använder det i API:er som kräver `symbol[]`.

> **Notis för TypeScript-användare:**
>
> Använd `areSymbols` för att validera okänd indata innan du behandlar den som `symbol[]`; den returnerar `false` för
> icke-arrayer och tomma arrayer.

### Fördelar

- Returnerar `true` endast när indata är en icke-tom array och varje element är en symbol.
- Förhindrar falska positiva resultat genom att avvisa icke-arrayer och tomma arrayer via den interna kontrollen för
  ifylld array.
- Användbar som en typvakt vid körning för att validera listor som endast innehåller symboler innan vidare bearbetning.

## Användning

### Syntax

Funktion:

- `areSymbols(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för symbolelement.

### Lokal funktionsimport

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a är en array med enbart symboler vid körning
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areSymbols(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Filen skapades 30 January 2026 at 14:23:58 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>