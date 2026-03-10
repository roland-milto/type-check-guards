# isBigInt

## Beskrivning

`isBigInt` kontrollerar om ett givet värde är av typen `bigint` och returnerar `true` för BigInt-primitiver och `false`
annars.

### Användningsfall

Validera och snäva in värden som kommer från otypade källor (t.ex. JSON-tolkning, användarinmatning, externa API:er)
innan du utför BigInt-specifika beräkningar eller lagrar dem i fält som endast accepterar BigInt.

> **Notis för TypeScript-användare:**
>
> Använd `isBigInt` för att snäva in `unknown` till `bigint` innan du gör BigInt-aritmetik (t.ex. `+`, `*`) som kräver
> BigInt-operander.

### Fördelar

- Ger en enkel och pålitlig körningskontroll för den primitiva typen `bigint`.
- Hjälper till att snäva in `unknown`-värden innan BigInt-specifika operationer utförs.
- Undviker falska positiva: vanliga tal, strängar och andra typer returnerar `false`.

## Användning

### Syntax

Funktion:

- `isBigInt(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // sant
console.log(isBigInt(10));  // falskt
console.log(isBigInt("10")); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isBigInt(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Filen skapades 31 January 2026 at 23:33:26 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>