# isError

## Beskrivning

Kontrollerar om ett givet `value` är en instans av `Error`.

### Användningsfall

Använd `isError` när du får ett `unknown`-värde (till exempel från ett `catch`-block, en callback eller ett externt
bibliotek) och du behöver avgöra på ett säkert sätt om det är ett `Error` innan du läser `message`, `name` eller
`stack`.

> **Notis för TypeScript-användare:**
>
> Använd `isError` för att skydda `unknown`-värden (t.ex. från `catch`) innan du behandlar dem som ett `Error`.

### Fördelar

- Ger en enkel körningskontroll för om ett värde är en instans av `Error`.
- Hjälper till att snäva in okända indata innan du får åtkomst till `Error`-egenskaper som `message` eller `stack`.
- Minskar risken för undantag vid körning när du hanterar värden från `catch`, externa API:er eller otypade källor.

## Användning

### Syntax

Funktion:

- `isError(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras mot typen `Error`.

### Lokal funktionsimport

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

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isError(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isError](../_analysis/isError.md)

<br>

---

<small>Filen skapades 6 February 2026 at 12:47:15 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>