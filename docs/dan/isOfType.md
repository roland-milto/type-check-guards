# isOfType

## Beskrivelse

Afgør om en given `value` matcher en angivet typestreng ved at bruge `typeof` for primitive typer og en fallback for
komplekse typer.

### Anvendelsestilfælde

Validér og indsnævr `unknown`-input (f.eks. API-svar, brugerinput, parset JSON) ved at tjekke om en værdi er af en
forventet typestreng, før der udføres type-specifikke operationer.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isOfType` til at forgrene på runtime-typer, når du arbejder med `unknown`-værdier; den returnerer `true`/`false`
> og behandler `null` og `undefined` eksplicit.

### Fordele

- Tjekker primitive typer via direkte `typeof` for hastighed og klarhed.
- Håndterer korrekt `null` og `undefined`, som `typeof` alene ikke kan skelne efter hensigten.
- Understøtter komplekse eller brugerdefinerede typestrenge via en fallback-sammenligning ved brug af `getTypeOf`.
- Returnerer et simpelt boolesk resultat (`true`/`false`), velegnet til guards og forgrening.

## Brug

### Syntaks

Funktion:

- `isOfType(value, type)`

Parametre:

- `value`: Værdien, der skal testes mod `type`.
- `type`: Strengrepræsentationen af typen, der skal tjekkes imod.

### Lokal import af funktion

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input er et tal her
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input er en streng her
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isOfType(value, type)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 16:59:11 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>