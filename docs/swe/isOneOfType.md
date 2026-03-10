# isOneOfType

## Beskrivning

`isOneOfType` avgör om ett givet `value` matchar minst en av de angivna typsträngarna och returnerar `true` om någon
matchning hittas, annars `false`.

### Användningsfall

Validera löst typad eller extern data (t.ex. parsad JSON, frågeparametrar) genom att tillåta flera acceptabla
runtime-typer (som `number` eller `string`) innan du går vidare med ytterligare logik.

> **Notis för TypeScript-användare:**
>
> Använd `isOneOfType` när du vill göra en runtime-kontroll att ett värde matchar någon av flera tillåtna typer; den
> returnerar `true` om minst en typ matchar, annars `false`.

### Fördelar

- Kontrollerar ett värde mot flera tillåtna typer i ett enda anrop och returnerar `true` vid första träffen.
- Fungerar med `unknown`-indata, vilket gör den användbar vid gränser i runtime (t.ex. extern data, användarinmatning).
- Ger ett enkelt booleskt resultat (`true`/`false`) som fungerar bra tillsammans med villkorslogik och tidiga returer.

## Användning

### Syntax

Funktion:

- `isOneOfType(value, types)`

Parametrar:

- `value`: Värdet som ska kontrolleras mot de angivna typerna.
- `types`: En array med typsträngar som representerar värdets möjliga typer.

### Lokal funktionsimport

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input är ett objekt vid körning
}

console.log(isOneOfType(3, ["number", "string"])); // sant
console.log(isOneOfType("hello", ["number", "boolean"])); // falskt

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isOneOfType(value, types)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Filen skapades 6 February 2026 at 13:54:30 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>