# areStrings

## Descripció

`areStrings` comprova si un array no és buit i si tots els seus elements són cadenes, retornant `true` només en aquest
cas.

### Cas d’ús

Valida dades externes o proporcionades per l'usuari (p. ex., paràmetres de consulta, càrregues JSON, camps CSV) per
assegurar-te que tens una llista no buida de cadenes abans de processar-les.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areStrings` per validar arrays desconeguts abans d'aplicar lògica només de cadenes; retorna `false` per
> als arrays buits.

### Avantatges

- Assegura que cada element sigui una cadena i rebutja els arrays de tipus mixt retornant `false`.
- Rebutja els arrays buits, de manera que `true` només indica una llista no buida de cadenes.
- Útil com a comprovació ràpida en temps d'execució abans de fer operacions només de cadenes (p. ex., `trim`,
  `toLowerCase`).

## Ús

### Sintaxi

Funció:

- `areStrings(value)`

Paràmetres:

- `value`: Expected type `string[]`.

### Importació local de funció

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input és un string[] no buit en temps d'execució
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areStrings(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 13:17:25 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>