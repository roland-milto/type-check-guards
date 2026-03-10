# isFilledArray

## Descripció

Comprova si `value` és una matriu amb com a mínim un element, retornant `true` o `false`.

### Cas d’ús

Fes servir `isFilledArray` per validar dades entrants (p. ex., càrregues útils d'API, valors de formulari, configuració)
abans d'iterar, accedir al primer element o aplicar lògica que requereixi com a mínim un element.

> **Nota per als usuaris de TypeScript:**
>
> `isFilledArray` és una guarda en temps d'execució que retorna un booleà; no restringeix els tipus dels elements més
> enllà de confirmar que la matriu no és buida.

### Avantatges

- Comprovació simple i ràpida d'una matriu no buida amb `Array.isArray` i una comprovació de longitud.
- Ajuda a evitar errors en temps d'execució quan el codi assumeix que una matriu té com a mínim un element.
- Resultat booleà clar: retorna `true` per a matrius no buides i `false` en cas contrari.

## Ús

### Sintaxi

Funció:

- `isFilledArray(value)`

Paràmetres:

- `value`: El valor a comprovar per veure si és una matriu no buida.

### Importació local de funció

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input és una matriu no buida en temps d'execució
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isFilledArray(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 11:46:28 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>