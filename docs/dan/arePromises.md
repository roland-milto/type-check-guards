# arePromises

## Beskrivelse

`arePromises` afgør, om alle elementer i et array er `Promise`-instanser.

### Anvendelsestilfælde

Validér, at en dynamisk opbygget eller eksternt leveret liste kun indeholder promises, før du aggregerer dem (f.eks. med
`Promise.all`).

> **Bemærkning til TypeScript-brugere:**
>
> Brug `arePromises` til at validere `unknown[]`, før du kalder `Promise.all` eller andre operationer, der kun gælder
> for promises; den returnerer `false` for tomme arrays.

### Fordele

- Sikrer, at hvert element er en `Promise`, før du fortsætter med promise-specifik logik.
- Returnerer `false` for ikke-udfyldte arrays, hvilket forhindrer tvetydige resultater ved tomme input.
- Nyttig som en runtime-guard, når du arbejder med `unknown[]` fra eksterne kilder.

## Brug

### Syntaks

Funktion:

- `arePromises(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for Promise-instanser.

### Lokal import af funktion

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values er et array af Promise-instanser ved kørsel
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.arePromises(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 23:47:57 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>