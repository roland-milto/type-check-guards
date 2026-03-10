# arePromises

## Beskrivning

`arePromises` avgör om alla element i en array är `Promise`-instanser.

### Användningsfall

Validera att en dynamiskt byggd eller externt tillhandahållen lista endast innehåller promises innan du aggregerar dem (
t.ex. med `Promise.all`).

> **Notis för TypeScript-användare:**
>
> Använd `arePromises` för att validera `unknown[]` innan du anropar `Promise.all` eller andra operationer som endast
> gäller promises; den returnerar `false` för tomma arrayer.

### Fördelar

- Säkerställer att varje element är en `Promise` innan du fortsätter med promise-specifik logik.
- Returnerar `false` för tomma arrayer, vilket förhindrar tvetydiga resultat för tomma indata.
- Användbar som en körningsvakt när du arbetar med `unknown[]` från externa källor.

## Användning

### Syntax

Funktion:

- `arePromises(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för Promise-instanser.

### Lokal funktionsimport

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values är en array av Promise-instanser vid körning
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.arePromises(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Filen skapades 30 January 2026 at 23:50:02 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>