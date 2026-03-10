# arePrimitives

## Beskrivning

`arePrimitives` utvärderar om alla element i en angiven, icke-tom array är primitiva typer.

### Användningsfall

Validera att inkommande data (t.ex. frågeparametrar, CSV-radvärden eller en lista med ID:n/taggar) endast innehåller
primitiva värden innan serialisering, hashning, loggning eller innan det skickas till API:er som inte får ta emot
objekt.

> **Notis för TypeScript-användare:**
>
> Använd `arePrimitives` när du behöver säkerställa att en `unknown[]` endast innehåller primitiva värden (string,
> number, bigint, boolean, symbol, undefined eller null) innan vidare bearbetning.

### Fördelar

- Returnerar `true` endast när varje element är ett primitivt värde, vilket gör den till en strikt kontroll för arrayer
  utan ”objekt/funktioner”.
- Misslyckas snabbt: returnerar `false` så snart ett icke-primitivt element hittas.
- Returnerar också `false` för icke-arrayer och tomma arrayer (via kontrollen för ifylld array), vilket förhindrar att
  ogiltig indata av misstag accepteras.

## Användning

### Syntax

Funktion:

- `arePrimitives(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för element av primitiv typ.

### Lokal funktionsimport

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // sant
const r2 = arePrimitives(b); // sant
const r3 = arePrimitives(c); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.arePrimitives(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Filen skapades 31 January 2026 at 00:06:39 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>