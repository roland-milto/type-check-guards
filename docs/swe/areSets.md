# areSets

## Beskrivning

Kontrollerar om en given icke-tom array endast innehåller `Set`-instanser och returnerar `true` om den gör det, annars
`false`.

### Användningsfall

Validera att ett värde (t.ex. från användarinmatning, JSON-parsning eller externa API:er) är en icke-tom array av `Set`
-objekt innan varje set bearbetas.

> **Notis för TypeScript-användare:**
>
> Använd `areSets` för att validera okänd indata innan du itererar och anropar `Set`-API:er (t.ex. `.size`, `.has`,
`.add`) på varje element.

### Fördelar

- Returnerar `true` endast när indata är en icke-tom array och varje element är en instans av `Set`.
- Förhindrar falska positiva resultat för tomma arrayer genom att returnera `false` när arrayen saknar element.
- Användbar som en runtime-guard innan `Set`-specifika operationer utförs på varje element.

## Användning

### Syntax

Funktion:

- `areSets(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för `Set`-instanser.

### Lokal funktionsimport

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a är en array av Set-instanser vid körning
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // falskt
console.log(areSets(c)); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areSets(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areSets](../_analysis/areSets.md)

<br>

---

<small>Filen skapades 30 January 2026 at 23:15:30 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>