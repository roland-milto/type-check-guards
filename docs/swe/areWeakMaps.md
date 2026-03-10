# areWeakMaps

## Beskrivning

`areWeakMaps` kontrollerar om ett värde är en icke-tom array där varje element är en `WeakMap`, och returnerar `true`
endast i det fallet och annars `false`.

### Användningsfall

Validera runtime-data (t.ex. parsad JSON, plugin-indata eller löst typad konfiguration) för att säkerställa att det är
en icke-tom array av `WeakMap`-instanser innan du itererar och anropar `WeakMap`-metoder; returnerar `false` när något
element inte är en `WeakMap` eller när arrayen är tom.

> **Notis för TypeScript-användare:**
>
> Använd `areWeakMaps` för att validera okänd indata innan du behandlar den som en icke-tom `WeakMap[]`; den returnerar
`false` för tomma arrayer.

### Fördelar

- Säkerställer att varje element i den angivna arrayen är en instans av `WeakMap`.
- Returnerar `false` för tomma arrayer, vilket förhindrar att “ingen data” av misstag accepteras som giltig indata.
- Användbar som en guard innan `WeakMap`-specifika operationer utförs på alla objekt.

## Användning

### Syntax

Funktion:

- `areWeakMaps(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för `WeakMap`-instanser.

### Lokal funktionsimport

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list är en icke-tom array av WeakMap-instanser
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // inte en icke-tom WeakMap[]
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areWeakMaps(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Filen skapades 30 January 2026 at 13:39:38 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>