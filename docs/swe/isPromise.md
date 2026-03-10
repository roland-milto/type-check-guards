# isPromise

## Beskrivning

Avgör om ett givet värde är en `Promise`.

### Användningsfall

Använd `isPromise` för att validera okända indata innan du behandlar dem som en `Promise`, till exempel när du hanterar
värden som returneras från plugins, dynamiska importer eller löst typade API:er.

> **Notis för TypeScript-användare:**
>
> `isPromise` kontrollerar via `instanceof Promise`, så den returnerar bara `true` för riktiga `Promise`-instanser (inte
> generiska thenables).

### Fördelar

- Ger en enkel körningskontroll för om ett värde är en `Promise`.
- Hjälper till att skydda kodvägar som kräver en riktig `Promise`-instans och returnerar förutsägbart `true` eller
  `false`.
- Undviker falska positiva resultat från ”thenable”-objekt (t.ex. `{ then() {} }`) genom att kräva en faktisk `Promise`
  -instans.

## Användning

### Syntax

Funktion:

- `isPromise(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // sant
console.log(isPromise(b)); // falskt
console.log(isPromise(123)); // falskt
console.log(isPromise(null)); // falskt

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isPromise(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Filen skapades 30 January 2026 at 23:54:25 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>