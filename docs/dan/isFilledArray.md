# isFilledArray

## Beskrivelse

Kontrollerer, om `value` er et array med mindst ét element, og returnerer `true` eller `false`.

### Anvendelsestilfælde

Brug `isFilledArray` til at validere indkommende data (f.eks. API-payloads, formularværdier, konfiguration), før du
itererer, tilgår det første element eller anvender logik, der kræver mindst ét element.

> **Bemærkning til TypeScript-brugere:**
>
> `isFilledArray` er en runtime-guard, der returnerer en boolean; den indsnævrer ikke elementtyper ud over at bekræfte,
> at arrayet ikke er tomt.

### Fordele

- Simpel og hurtig kontrol af et ikke-tomt array ved hjælp af `Array.isArray` og en længdekontrol.
- Hjælper med at undgå runtime-fejl, når kode antager, at et array har mindst ét element.
- Klart boolsk resultat: returnerer `true` for ikke-tomme arrays og `false` ellers.

## Brug

### Syntaks

Funktion:

- `isFilledArray(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for, om den er et ikke-tomt array.

### Lokal import af funktion

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input er et ikke-tomt array ved kørselstid
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isFilledArray(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 11:46:48 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>