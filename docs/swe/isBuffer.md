# isBuffer

## Beskrivning

Kontrollerar om ett värde är en Node.js-`Buffer` och returnerar `true` eller `false`.

### Användningsfall

Validera indata vid körning (t.ex. API-nyttolaster, fildata eller meddelandebuffertar) för att säkerställa att ett värde
är en `Buffer` innan du bearbetar det, och få pålitligt `false` när du kör utanför Node.js där `Buffer` kanske inte
finns.

> **Notis för TypeScript-användare:**
>
> Använd `isBuffer` för att snäva in `unknown`-värden till `Buffer` innan du anropar Buffer-specifika metoder.

### Fördelar

- Upptäcker säkert Node.js-`Buffer`-instanser med `Buffer.isBuffer`.
- Returnerar `false` i miljöer där `Buffer` inte är tillgängligt, vilket undviker körningsfel.
- Fungerar med indata av typen `unknown`, vilket gör den lämplig för körningsvalidering och typinsnävning.

## Användning

### Syntax

Funktion:

- `isBuffer(value)`

Parametrar:

- `value`: Värdet som ska testas.

### Lokal funktionsimport

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // sant
console.log(isBuffer(b)); // falskt

if (isBuffer(a)) {
  // a är en Buffer här
  console.log(a.toString("utf8"));
}
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isBuffer(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Filen skapades 31 January 2026 at 16:33:24 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>