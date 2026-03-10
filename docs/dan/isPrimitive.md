# isPrimitive

## Beskrivelse

`isPrimitive` afgør, om en given værdi er en primitiv (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Anvendelsestilfælde

Validér input ved kørsel (f.eks. API-payloadfelter, konfigurationsværdier eller brugerleverede data) for at sikre, at en
værdi er en primitiv, før serialisering, logning eller anvendelse af operationer, der kun gælder for primitiver.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isPrimitive` til at beskytte `unknown`-input, før du behandler dem som objekter eller funktioner; den returnerer
`true` for primitiver og `false` for objekter og funktioner.

### Fordele

- Hurtig kontrol uden allokering for, om en værdi er en JavaScript-primitiv.
- Behandler korrekt `null` som primitiv (selvom `typeof null` er `"object"`).
- Hjælper med at indsnævre `unknown`-værdier, før der udføres operationer, der kun gælder for objekter.

## Brug

### Syntaks

Funktion:

- `isPrimitive(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for primitiv type.

### Lokal import af funktion

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isPrimitive(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 23:55:53 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>