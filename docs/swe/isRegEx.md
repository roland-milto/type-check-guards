# isRegEx

## Beskrivning

Avgör om ett angivet värde är en `RegExp`-instans.

### Användningsfall

Validera användarangivna eller dynamiska värden (t.ex. konfiguration, API-nyttolast, plugin-indata) innan du behandlar
dem som ett reguljärt uttryck.

> **Notis för TypeScript-användare:**
>
> Använd `isRegEx` för att snäva in `unknown`- (eller unions-)värden innan du använder RegExp-specifika egenskaper eller
> metoder; den returnerar `true` endast för värden som är instanser av `RegExp`.

### Fördelar

- Ger en enkel typvakt vid körning för att kontrollera om ett värde är en `RegExp`.
- Hjälper till att förhindra fel när kod förväntar sig ett reguljärt uttryck (t.ex. innan man anropar `test`, `exec`
  eller läser `source`).
- Fungerar med både regex-litteraler och instanser skapade via `new RegExp(...)`.
- Returnerar ett tydligt booleskt resultat (`true`/`false`) utan att kasta fel för icke-regex-indata.

## Användning

### Syntax

Funktion:

- `isRegEx(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input är ett RegExp här
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isRegEx(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Filen skapades 30 January 2026 at 23:31:09 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>