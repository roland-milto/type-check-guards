# isString

## Beskrivelse

`isString` afgør, om en given værdi er en streng.

### Anvendelsestilfælde

Validér brugerinput, API-payloadfelter eller konfigurationsværdier ved runtime for at sikre, at en værdi er en streng,
før der anvendes strengoperationer (f.eks. trimning, opdeling, ændring af store/små bogstaver).

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isString` til at validere `unknown` eller løst typede værdier, før du kalder strengmetoder; den returnerer kun
`true`, når `typeof value === "string"`.

### Fordele

- Enkel og hurtig kontrol ved hjælp af `typeof`.
- Returnerer et forudsigeligt boolesk resultat: `true` for strenge, ellers `false`.
- Virker for både tomme og ikke-tomme strenge.
- Nyttig som en letvægts runtime-guard, før der udføres strengspecifikke operationer.

## Brug

### Syntaks

Funktion:

- `isString(value)`

Parametre:

- `value`: Værdien, der skal testes for strengtypen.

### Lokal import af funktion

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input er en streng her
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isString(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isString](../_analysis/isString.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 13:13:39 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>