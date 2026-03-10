# areOneOfType

## Beskrivning

`areOneOfType` kontrollerar om alla element i en icke-tom array är av någon av de angivna körtidstyperna.

### Användningsfall

Validera inkommande data (t.ex. parsad JSON) där ett fält måste vara en icke-tom array vars objekt är begränsade till en
känd uppsättning primitiva typer; returnera `false` när arrayen är tom eller innehåller någon otillåten typ.

> **Notis för TypeScript-användare:**
>
> Den här funktionen returnerar ett booleskt värde och snävar inte in arrayelementens typer vid kompilering; använd den
> som ett körtidsvalideringssteg innan vidare bearbetning.

### Fördelar

- Säkerställer att varje element i en array matchar minst en tillåten körtidstyp och returnerar `true` endast när hela
  arrayen godkänns.
- Avvisar ogiltiga indata tidigt: returnerar `false` när `array` eller `types` är tom eller inte är en ifylld array.
- Användbart för att validera samlingar med blandade typer (t.ex. tal och strängar) med ett enda anrop till
  `areOneOfType`.

## Användning

### Syntax

Funktion:

- `areOneOfType(array, types)`

Parametrar:

- `array`: En array med element som ska verifieras mot de angivna typerna.
- `types`: En array av strängar som representerar datatyperna att kontrollera mot.

### Lokal funktionsimport

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areOneOfType(array, types)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Filen skapades 31 January 2026 at 23:38:46 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>