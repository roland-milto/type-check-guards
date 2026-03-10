# isPromise

## Beskrivelse

Afgør, om en given værdi er en `Promise`.

### Anvendelsestilfælde

Brug `isPromise` til at validere ukendte input, før de behandles som en `Promise`, f.eks. når du håndterer værdier
returneret fra plugins, dynamiske imports eller løst typede API'er.

> **Bemærkning til TypeScript-brugere:**
>
> `isPromise` tjekker via `instanceof Promise`, så den returnerer kun `true` for rigtige `Promise`-instanser (ikke
> generiske thenables).

### Fordele

- Giver en enkel runtime-kontrol af, om en værdi er en `Promise`.
- Hjælper med at beskytte kodeveje, der kræver en ægte `Promise`-instans, og returnerer forudsigeligt `true` eller
  `false`.
- Undgår falske positiver fra “thenable”-objekter (f.eks. `{ then() {} }`) ved at kræve en faktisk `Promise`-instans.

## Brug

### Syntaks

Funktion:

- `isPromise(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // sand
console.log(isPromise(b)); // falsk
console.log(isPromise(123)); // falsk
console.log(isPromise(null)); // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isPromise(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 23:52:34 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>