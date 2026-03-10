# isFalse

## Beskrivning

`isFalse` kontrollerar om ett givet värde är strikt lika med den booleska literalens värde `false`.

### Användningsfall

Validera okända data (t.ex. från JSON, frågeparametrar eller användarinmatning) där endast det explicita booleska värdet
`false` ska behandlas som en giltig flagga, och allt annat ska avvisas.

> **Notis för TypeScript-användare:**
>
> Använd `isFalse` när du bara vill acceptera literalvärdet `false` och avvisa alla andra falska värden; den returnerar
`true` endast för `value === false`.

### Fördelar

- Ger en strikt kontroll av den booleska literalens värde `false` utan typomvandling.
- Hjälper till att skilja `false` från andra falska värden som `0`, `""`, `null` och `undefined`.
- Förbättrar läsbarheten genom att göra avsikten tydlig när okänd indata valideras.

## Användning

### Syntax

Funktion:

- `isFalse(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input är exakt false här
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isFalse(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Filen skapades 31 January 2026 at 16:44:42 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>