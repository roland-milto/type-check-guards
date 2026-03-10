# isNumeric

## Beskrivning

`isNumeric` avgör om ett givet `value` betraktas som numeriskt genom att kontrollera dess upplösta typ mot
`NUMERIC_TYPES`.

### Användningsfall

Använd `isNumeric` för att validera indata (t.ex. API-payloads, formulärvärden, konfiguration) innan du utför numeriska
operationer, och för att konsekvent acceptera numeriska typer (såsom `BigInt`) enligt `NUMERIC_TYPES`.

> **Notis för TypeScript-användare:**
>
> `isNumeric` är ett predikat som returnerar boolean; behandla det som en runtime-kontroll för om ett värde tillhör den
> biblioteksdefinierade uppsättningen numeriska typer.

### Fördelar

- Använder `getTypeOf` tillsammans med `NUMERIC_TYPES` för att centralisera logiken för numerisk detektering och hålla
  kontroller konsekventa i en kodbas.
- Returnerar en enkel boolean (`true`/`false`) för enkel förgrening och användning i guard-stil.
- Stöder flera numeriska representationer (t.ex. `number`, `BigInt`) enligt definitionen i `NUMERIC_TYPES`.

## Användning

### Syntax

Funktion:

- `isNumeric(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för numerisk typ.

### Lokal funktionsimport

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v anses vara numeriskt enligt bibliotekets typregler
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isNumeric(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Filen skapades 6 February 2026 at 15:54:44 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>