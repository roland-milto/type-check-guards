# isEmpty

## Beskrivelse

Afgør om en given værdi er tom og returnerer `true` for `null`, `undefined`, tomme/kun-mellemrum strenge, tomme arrays,
tom `Map`/`Set` eller objekter uden egne enumerable egenskaber.

### Anvendelsestilfælde

Brug `isEmpty` til at validere input og opdage manglende/tomme værdier på tværs af flere datatyper (fx formularfelter,
API-payloads, konfigurationsobjekter), hvor `null`, `undefined`, mellemrum-strenge, tomme samlinger og objekter uden
egenskaber skal behandles som tomme.

> **Bemærkning til TypeScript-brugere:**
>
> `isEmpty` er et hjælpeværktøj, der returnerer en boolean (ikke et TypeScript type predicate), så det indsnævrer ikke
> typer af sig selv; brug det til validering/forgrening frem for compile-time indsnævring.

### Fordele

- Behandler `null` og `undefined` som `true` ved tomhedstjek.
- Anser strenge, der kun består af mellemrum, som tomme ved at trimme før længden kontrolleres.
- Understøtter almindelige beholdertyper (arrays, `Map`, `Set`) samt almindelige objekter uden egne enumerable
  egenskaber.
- Undgår at tælle nedarvede egenskaber ved at bruge `hasOwnProperty`-tjek.
- Returnerer et simpelt boolesk resultat (`true`/`false`), der egner sig til guards og validering.

## Brug

### Syntaks

Funktion:

- `isEmpty(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for tomhed.

### Lokal import af funktion

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isEmpty(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 16:18:02 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>