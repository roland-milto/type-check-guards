# isOfType

## Beskrivning

Avgör om ett givet `value` matchar en angiven typsträng, med `typeof` för primitiver och en reservlösning för komplexa
typer.

### Användningsfall

Validera och snäva in `unknown`-indata (t.ex. API-svar, användarinmatning, parsad JSON) genom att kontrollera om ett
värde har en förväntad typsträng innan du utför typspecifika operationer.

> **Notis för TypeScript-användare:**
>
> Använd `isOfType` för att förgrena på körtidstyper när du arbetar med `unknown`-värden; den returnerar `true`/`false`
> och behandlar `null` och `undefined` explicit.

### Fördelar

- Kontrollerar primitiver via direkt `typeof` för hastighet och tydlighet.
- Hanterar korrekt `null` och `undefined`, vilket enbart `typeof` inte kan skilja åt som avsett.
- Stöder komplexa eller anpassade typsträngar via en reservjämförelse med `getTypeOf`.
- Returnerar ett enkelt booleskt resultat (`true`/`false`) som passar för guards och förgreningar.

## Användning

### Syntax

Funktion:

- `isOfType(value, type)`

Parametrar:

- `value`: Värdet som ska testas mot `type`.
- `type`: Strängrepresentationen av typen att kontrollera mot.

### Lokal funktionsimport

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input är ett tal här
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input är en sträng här
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isOfType(value, type)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Filen skapades 30 January 2026 at 17:06:32 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>