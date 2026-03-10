# isEmpty

## Beskrivning

Avgör om ett givet värde är tomt och returnerar `true` för `null`, `undefined`, tomma/blankstegssträngar, tomma arrayer,
tom `Map`/`Set` eller objekt utan egna uppräkningsbara egenskaper.

### Användningsfall

Använd `isEmpty` för att validera indata och upptäcka saknade/tomma värden över flera datatyper (t.ex. formulärfält,
API-payloads, konfigurationsobjekt) där `null`, `undefined`, blankstegssträngar, tomma samlingar och objekt utan
egenskaper ska behandlas som tomma.

> **Notis för TypeScript-användare:**
>
> `isEmpty` är ett verktyg som returnerar boolean (inte ett TypeScript-typ-predikat), så det snävar inte in typer av sig
> självt; använd det för validering/förgrening snarare än för kompileringstids-inträngning.

### Fördelar

- Behandlar `null` och `undefined` som `true` vid kontroller av tomhet.
- Anser att strängar som bara består av blanksteg är tomma genom att trimma innan längden kontrolleras.
- Stöder vanliga behållartyper (arrayer, `Map`, `Set`) och vanliga objekt utan egna uppräkningsbara egenskaper.
- Undviker att räkna ärvda egenskaper genom att använda `hasOwnProperty`-kontroller.
- Returnerar ett enkelt booleskt resultat (`true`/`false`) som passar för guards och validering.

## Användning

### Syntax

Funktion:

- `isEmpty(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för tomhet.

### Lokal funktionsimport

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isEmpty(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Filen skapades 6 February 2026 at 16:21:02 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>