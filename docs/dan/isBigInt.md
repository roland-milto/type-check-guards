# isBigInt

## Beskrivelse

`isBigInt` kontrollerer, om en given værdi er af typen `bigint`, og returnerer `true` for BigInt-primitiver og ellers
`false`.

### Anvendelsestilfælde

Validér og indsnævr værdier, der kommer fra utypede kilder (f.eks. JSON-parsing, brugerinput, eksterne API'er), før der
udføres BigInt-specifikke beregninger eller de gemmes i felter, der kun accepterer BigInt.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isBigInt` til at indsnævre `unknown` til `bigint`, før du laver BigInt-aritmetik (f.eks. `+`, `*`), som kræver
> BigInt-operander.

### Fordele

- Giver en enkel og pålidelig runtime-kontrol for den primitive type `bigint`.
- Hjælper med at indsnævre `unknown`-værdier, før der udføres operationer, der kun gælder for BigInt.
- Undgår falske positiver: almindelige tal, strenge og andre typer returnerer `false`.

## Brug

### Syntaks

Funktion:

- `isBigInt(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // sand
console.log(isBigInt(10));  // falsk
console.log(isBigInt("10")); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isBigInt(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 23:31:32 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>