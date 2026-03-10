# isArray

## Beskrivning

`isArray` kontrollerar om ett givet värde är en array och returnerar `true` om det är det, annars `false`.

### Användningsfall

Validera okänd data (t.ex. parsad JSON eller API-svar) för att säkerställa att ett värde är en array innan du itererar,
indexerar eller använder `.length`.

> **Notis för TypeScript-användare:**
>
> Använd `isArray` när du behöver en runtime-kontroll för arrayer; den returnerar ett booleskt värde och är säker att
> anropa med `unknown`-värden.

### Fördelar

- Använder den inbyggda `Array.isArray` för tillförlitlig array-detektering över olika realms (t.ex. iframes).
- Returnerar ett enkelt booleskt resultat (`true`/`false`) som passar för guards och förgreningslogik.
- Fungerar med alla indatatyper eftersom parametern är `unknown`.

## Användning

### Syntax

Funktion:

- `isArray(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input är en array vid körning
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isArray(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isArray](../_analysis/isArray.md)

<br>

---

<small>Filen skapades 6 February 2026 at 11:32:12 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>