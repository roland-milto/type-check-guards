# isInteger

## Beskrivelse

Afgør, om en given `value` er et sikkert heltalstal.

### Anvendelsestilfælde

Validér input, du ikke stoler på (f.eks. query-parametre, JSON-payloads, miljøvariabler), før du bruger det som et
heltal til array-indekser, paginering, tællere eller database-ID'er.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isInteger` til at validere ukendt input, før du behandler det som et numerisk heltal; den returnerer kun `true`
> for værdier, hvor `typeof value === "number"` og `Number.isSafeInteger(value)`.

### Fordele

- Kontrollerer både type og numerisk sikkerhed: returnerer kun `true`, når inputtet er et tal og et sikkert heltal.
- Forhindrer almindelige faldgruber ved numerisk typekonvertering: strenge som "5" returnerer korrekt `false`.
- Afviser ikke-heltal og usikre heltal, hvilket gør den velegnet til ID'er, tællere og array-indeksering.

## Brug

### Syntaks

Funktion:

- `isInteger(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for heltalsstatus.

### Lokal import af funktion

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // sand
const b = isInteger(-100);   // sand
const c = isInteger("5");    // falsk
const d = isInteger(5.5);    // falsk
const e = isInteger(null);   // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isInteger(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 00:49:33 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>