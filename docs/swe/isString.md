# isString

## Beskrivning

`isString` avgör om ett givet värde är en sträng.

### Användningsfall

Validera användarinmatning, fält i API-payloads eller konfigurationsvärden vid runtime för att säkerställa att ett värde
är en sträng innan strängoperationer tillämpas (t.ex. trimning, uppdelning, skiftlägeskonvertering).

> **Notis för TypeScript-användare:**
>
> Använd `isString` för att validera `unknown` eller löst typade värden innan du anropar strängmetoder; den returnerar
`true` endast när `typeof value === "string"`.

### Fördelar

- Enkel och snabb kontroll med `typeof`.
- Returnerar ett förutsägbart booleskt resultat: `true` för strängar, annars `false`.
- Fungerar för både tomma och icke-tomma strängar.
- Användbar som en lättviktig runtime-guard innan strängspecifika operationer utförs.

## Användning

### Syntax

Funktion:

- `isString(value)`

Parametrar:

- `value`: Värdet som ska testas för strängtyp.

### Lokal funktionsimport

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input är en sträng här
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isString(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isString](../_analysis/isString.md)

<br>

---

<small>Filen skapades 30 January 2026 at 13:15:45 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>