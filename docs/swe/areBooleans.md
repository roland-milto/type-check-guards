# areBooleans

## Beskrivning

`areBooleans` kontrollerar om en given icke-tom array endast innehåller boolean-värden och returnerar `true` om den gör
det, annars `false`.

### Användningsfall

Validera användarlevererade eller externa data (t.ex. JSON-payloads, query-parametrar, konfigurationsarrayer) för att
säkerställa att en icke-tom lista endast innehåller booleans innan du tillämpar boolean-logik eller skickar den till
API:er som förväntar sig `boolean[]`.

> **Notis för TypeScript-användare:**
>
> Använd `areBooleans` för att validera `unknown[]` innan du behandlar den som `boolean[]`; den returnerar `false` för
> tomma arrayer, så hantera det fallet uttryckligen om en tom lista ska vara tillåten.

### Fördelar

- Returnerar `true` endast när varje element är en boolean och indata är en icke-tom array.
- Förhindrar falska positiva resultat genom att avvisa tomma arrayer (returnerar `false`).
- Fungerar bra som en runtime-guard före operationer som endast ska köras på booleans (t.ex. `every`, `some`, logiska
  reduktioner).

## Användning

### Syntax

Funktion:

- `areBooleans(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för boolean-element.

### Lokal funktionsimport

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areBooleans(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Filen skapades 30 January 2026 at 14:42:35 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>