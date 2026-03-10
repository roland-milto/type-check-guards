# areDates

## Beskrivning

`areDates` avgör om en given array är ifylld och endast innehåller `Date`-objekt, och returnerar `true` endast när alla
element är giltiga datum.

### Användningsfall

Använd `areDates` för att validera okänd indata (t.ex. parsad JSON, formulärdata, API-payloads) innan du kör
datum-specifik logik som sortering efter tid, formatering eller beräkning av intervall.

> **Notis för TypeScript-användare:**
>
> Returnerar `true` endast för icke-tomma arrayer där varje element är en `Date`; tomma arrayer ger `false`.

### Fördelar

- Säkerställer att en array inte är tom innan dess innehåll valideras, vilket förhindrar `true` för tomma indata.
- Verifierar att varje element är en `Date`-instans och returnerar `false` omedelbart vid första avvikelsen.
- Användbar som en guard-liknande kontroll innan datum-specifika operationer utförs på arrayens objekt.

## Användning

### Syntax

Funktion:

- `areDates(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för `Date`-objekt.

### Lokal funktionsimport

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // sant
console.log(areDates(b)); // falskt
console.log(areDates(c)); // falskt

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areDates(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areDates](../_analysis/areDates.md)

<br>

---

<small>Filen skapades 31 January 2026 at 15:32:31 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>