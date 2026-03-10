# areNumbers

## Beskrivning

`areNumbers` kontrollerar om ett värde är en icke-tom array där alla element är tal.

### Användningsfall

Validera data som tillhandahålls av användare eller API:er för att säkerställa att det är en icke-tom array av tal innan
du beräknar summor, medelvärden eller andra numeriska aggregeringar.

> **Notis för TypeScript-användare:**
>
> Använd `areNumbers` för att validera okända arrayer innan du utför numeriska beräkningar; den returnerar `false` för
> tomma arrayer och för arrayer som innehåller något värde som inte är ett tal.

### Fördelar

- Returnerar `true` endast när indata är en icke-tom array och varje element är ett tal.
- Förhindrar falska positiva resultat genom att avvisa tomma arrayer och indata som inte är arrayer.
- Användbar som en vakt före numeriska operationer (t.ex. summering, medelvärdesberäkning) för att undvika körtidsfel.

## Användning

### Syntax

Funktion:

- `areNumbers(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för tal-element.

### Lokal funktionsimport

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areNumbers(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Filen skapades 30 January 2026 at 13:06:04 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>