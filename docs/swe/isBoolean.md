# isBoolean

## Beskrivning

Avgör om ett givet värde är en `boolean`.

### Användningsfall

Validera extern eller otypad data (t.ex. miljövariabler, JSON-nyttolaster, frågeparametrar) för att säkerställa att ett
värde är en `boolean` innan det används i villkorslogik.

> **Notis för TypeScript-användare:**
>
> Använd `isBoolean` för att snäva in `unknown` till `boolean` innan du tillämpar booleska operationer.

### Fördelar

- Enkel och snabb körningskontroll med `typeof`.
- Hjälper till att validera okänd indata innan boolesk-specifik logik.
- Returnerar ett förutsägbart `boolean`-resultat (`true`/`false`).

## Användning

### Syntax

Funktion:

- `isBoolean(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input är en boolean här
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isBoolean(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Filen skapades 30 January 2026 at 14:37:59 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>