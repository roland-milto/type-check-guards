# areJson

## Beskrivelse

Kontrollerer, om alle elementer i et array er JSON-strenge, og returnerer kun `true`, hvis arrayet er udfyldt, og hvert
element er gyldig JSON; ellers returnerer den `false`.

### Anvendelsestilfælde

Validér indkommende data (f.eks. fra query params, miljøvariabler eller eksterne API'er), hvor du forventer et array af
JSON-kodede strenge og vil afvise tomme arrays eller eventuelle ikke-JSON-elementer.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areJson`, når du har brug for at validere, at en `unknown[]` kun indeholder JSON-strenge, før du parser dem (
> f.eks. med `JSON.parse`).

### Fordele

- Returnerer kun `true`, når hvert element er en gyldig JSON-streng; ellers returnerer den `false`.
- Fejler hurtigt: stopper kontrollen, så snart der findes et ikke-JSON-element.
- Afviser tomme arrays som standard og returnerer `false` for ikke-udfyldt input.

## Brug

### Syntaks

Funktion:

- `areJson(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for JSON-strengelementer.

### Lokal import af funktion

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // sand
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // falsk
const empty = areJson([]); // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areJson(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areJson](../_analysis/areJson.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 16:15:29 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>