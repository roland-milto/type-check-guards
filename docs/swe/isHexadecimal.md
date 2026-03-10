# isHexadecimal

## Beskrivning

`isHexadecimal` kontrollerar om ett givet värde är en hexadecimalt strängliteral med obligatoriskt `0x`/`0X`-prefix.

### Användningsfall

Använd `isHexadecimal` för att validera konfigurationsvärden, API-payloadfält eller CLI-argument som måste anges som
hexadecimala strängliteraler (t.ex. ID:n, masker eller adresser) och inte får innehålla omgivande blanksteg.

> **Notis för TypeScript-användare:**
>
> Använd `isHexadecimal` när du behöver validera användarinmatning eller serialiserad data som en strikt hexadecimal
> literalsträng (inklusive `0x`/`0X`-prefixet) innan du tolkar eller konverterar den.

### Fördelar

- Validerar att ett värde är en sträng och matchar ett strikt hexadecimalt literalformat (kräver prefixet `0x`/`0X`).
- Avvisar strängar med inledande eller avslutande blanksteg, vilket hjälper till att undvika oavsiktlig acceptans av
  inmatning med utfyllnad.
- Stöder valfritt tecken och är skiftlägesokänslig för prefix och siffror, och returnerar `true`/`false` på ett
  förutsägbart sätt.

## Användning

### Syntax

Funktion:

- `isHexadecimal(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // sant
isHexadecimal("-0Xff"); // sant
isHexadecimal("1A2B"); // falskt (saknar prefix)
isHexadecimal(" 0x1A2B"); // falskt (inledande blanksteg)
isHexadecimal(0x1a2b); // falskt (inte en sträng)
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isHexadecimal(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Filen skapades 31 January 2026 at 23:01:06 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>