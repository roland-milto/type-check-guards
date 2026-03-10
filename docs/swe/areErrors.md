# areErrors

## Beskrivning

Kontrollerar om en array är icke-tom och endast innehåller `Error`-objekt, och returnerar `true` eller `false`.

### Användningsfall

Validera att en `unknown[]` som tillhandahålls vid körning (t.ex. aggregerade fel, valideringsresultat eller
deserialiserad data) är en icke-tom lista med `Error`-objekt innan du itererar, loggar eller kastar vidare.

> **Notis för TypeScript-användare:**
>
> `areErrors` returnerar `true` endast för en fylld array där varje element är en `Error`; den returnerar `false` för en
> tom array eller om något element inte är en `Error`.

### Fördelar

- Säkerställer att varje element är en `Error`-instans, vilket möjliggör säker felhantering och loggning.
- Avvisar tomma arrayer, vilket förhindrar att oavsiktliga ”inga fel”-tillstånd behandlas som giltiga fellistor.
- Fungerar bra som en runtime-guard när man hanterar `unknown[]`-indata (t.ex. från API:er eller `catch`-block).

## Användning

### Syntax

Funktion:

- `areErrors(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras efter `Error`-objekt.

### Lokal funktionsimport

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value är en icke-tom array av Error-objekt
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areErrors(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Filen skapades 6 February 2026 at 12:35:44 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>