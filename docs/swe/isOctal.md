# isOctal

## Beskrivning

Avgör om ett värde är en giltig oktal literalsträng (t.ex. `0o755`).

### Användningsfall

Validera användarinmatning eller konfigurationsvärden som måste uttryckas som en oktal literalsträng (till exempel
filbehörighetslägen som `0o644`) innan de parsas eller konverteras.

> **Notis för TypeScript-användare:**
>
> `isOctal` är en typvakt (`value is string`). Efter ett `true`-resultat snävar TypeScript in den kontrollerade
> variabeln till `string`.

### Fördelar

- Ger en strikt typvakt: returnerar `true` endast när indata är en sträng som matchar ett oktalt literalformat.
- Avvisar tomma strängar och strängar med inledande/avslutande blanksteg (ASCII-kontroll/blanksteg), vilket minskar
  oavsiktliga matchningar.
- Stöder valfritt tecken och är skiftlägesokänslig för prefixet `0o`/`0O`.
- Tolerant mot icke-strängindata genom att returnera `false` i stället för att kasta ett fel.

## Användning

### Syntax

Funktion:

- `isOctal(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // sant
console.log(isOctal(b)); // sant
console.log(isOctal(c)); // falskt
console.log(isOctal(d)); // falskt

if (isOctal(a)) {
  // a är en sträng här
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isOctal(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Filen skapades 30 January 2026 at 15:43:32 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>