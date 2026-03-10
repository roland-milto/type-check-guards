# areWeakSets

## Beskrivning

Kontrollerar om en indata är en icke-tom array där varje element är en `WeakSet`, och returnerar `true` endast i det
fallet.

### Användningsfall

Validera indata vid körning (t.ex. från API:er, konfiguration eller användarlevererad data) för att säkerställa att du
har en icke-tom lista med `WeakSet`-instanser innan du fortsätter med logik som är beroende av `WeakSet`-beteende.

> **Notis för TypeScript-användare:**
>
> Använd `areWeakSets` för att validera okänd indata innan du behandlar den som `WeakSet[]`. Den returnerar `false` för
> tomma arrayer och icke-arrayer.

### Fördelar

- Säkerställer att varje element i indataarrayen är en `WeakSet`.
- Returnerar `false` för tomma arrayer, vilket förhindrar oavsiktliga “alla giltiga”-resultat vid saknad data.
- Misslyckas säkert genom att returnera `false` när indata inte är en ifylld array (inklusive `null`).
- Användbar som en vakt innan du utför operationer som kräver `WeakSet`-instanser.

## Användning

### Syntax

Funktion:

- `areWeakSets(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för `WeakSet`-objekt.

### Lokal funktionsimport

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a är en icke-tom array av WeakSet-instanser
}

console.log(areWeakSets(a)); // sant
console.log(areWeakSets(b)); // falskt
console.log(areWeakSets(c)); // falskt
console.log(areWeakSets(null as unknown)); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areWeakSets(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Filen skapades 30 January 2026 at 14:11:07 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>