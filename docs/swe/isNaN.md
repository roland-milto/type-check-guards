# isNaN

## Beskrivning

Avgör om det angivna `value` är ett `NaN` av typen `number` utan att konvertera strängar.

### Användningsfall

Validera opålitlig eller löst typad indata (t.ex. API-payloads, formulärvärden, parsad JSON) för att upptäcka det
speciella `NaN`-värdet och hantera det explicit, samtidigt som icke-numeriska indata behandlas som inte `NaN`.

> **Notis för TypeScript-användare:**
>
> Använd `isNaN` när du behöver upptäcka det speciella numeriska värdet `NaN` samtidigt som du säkerställer att indata
> faktiskt är ett `number` (ingen sträng-till-tal-konvertering).

### Fördelar

- Kontrollerar om ett värde är `NaN` utan att tvinga icke-tal (t.ex. strängar) att bli tal.
- Returnerar `true` endast för värden som både är av typen `number` och `NaN`.
- Säker för `unknown`-indata och undviker falska positiva resultat från implicita konverteringar.

## Användning

### Syntax

Funktion:

- `isNaN(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras om det är ett `NaN` av typen `number`.

### Lokal funktionsimport

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // sant
console.log(isNaN(b)); // falskt
console.log(isNaN(c)); // falskt

if (isNaN(a)) {
  // a är ett tal och specifikt NaN
}
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isNaN(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Filen skapades 30 January 2026 at 15:48:13 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>