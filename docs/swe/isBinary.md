# isBinary

## Beskrivning

`isBinary` avgör om ett värde är en binär sträng (valfritt med prefixet `0b`/`0B`) och returnerar `true` eller `false`.

### Användningsfall

Validera användarangivna strängar (t.ex. formulärfält, CLI-argument, konfigurationsvärden) för att säkerställa att de
endast representerar binära siffror, valfritt med ett `0b`/`0B`-prefix, innan vidare bearbetning.

> **Notis för TypeScript-användare:**
>
> Använd `isBinary` som en typvakt innan du tolkar eller konverterar en sträng till `BigInt`/`Number` för att undvika
> ogiltig indata.

### Fördelar

- Accepterar binära strängar med eller utan prefixet `0b`/`0B`.
- Avvisar tomma strängar och strängar med inledande/efterföljande blanksteg (ASCII ≤ 32).
- Returnerar `true`/`false` utan att kasta undantag, vilket gör den säker för okända indata.

## Användning

### Syntax

Funktion:

- `isBinary(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // sant
const b = isBinary("1010");   // sant
const c = isBinary("0b1020"); // falskt
const d = isBinary(0b1010);     // falskt

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isBinary(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Filen skapades 31 January 2026 at 23:11:26 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>