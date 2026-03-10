# areBuffers

## Beskrivning

`areBuffers` kontrollerar om det angivna värdet är en icke-tom, ifylld array där varje element är en `Buffer`, och
returnerar `true` i så fall och `false` annars.

### Användningsfall

Validera inkommande chunk-arrayer (t.ex. från strömmar, filuppladdningar eller nätverkspaket) för att säkerställa att
alla delar är `Buffer`-instanser innan de sammanfogas, avkodas eller skickas till kryptografiska eller binärbearbetande
funktioner.

> **Notis för TypeScript-användare:**
>
> Använd `areBuffers` för att validera `unknown[]` innan du anropar Buffer-specifika API:er som `Buffer.concat`, så att
> funktionen returnerar `true` endast när varje element är en `Buffer`.

### Fördelar

- Säkerställer att varje element i indata är en Node.js-`Buffer`-instans och returnerar `true` endast när hela arrayen
  matchar.
- Avvisar ogiltiga indata tidigt genom att kräva en icke-tom, ifylld array; returnerar `false` för tomma arrayer eller
  icke-arrayer.
- Användbar som en vakt innan buffert-endast-operationer utförs (t.ex. sammanfogning, hashning, binära protokoll).

## Användning

### Syntax

Funktion:

- `areBuffers(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för buffertinstanser.

### Lokal funktionsimport

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areBuffers(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Filen skapades 31 January 2026 at 16:27:22 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>