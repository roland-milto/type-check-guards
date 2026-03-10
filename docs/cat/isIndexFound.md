# isIndexFound

## Descripció

`isIndexFound` determina si un valor donat és un enter no negatiu, indicant que s’ha trobat un índex.

### Cas d’ús

Valida que un resultat de cerca representi un índex utilitzable (enter `>= 0`) abans d’indexar en un array o una cadena,
evitant l’ús accidental de `-1` o de valors no numèrics.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isIndexFound` després d’operacions com `indexOf`, `findIndex` o cerques personalitzades on `-1` (o altres
> valors no vàlids) poden indicar “no trobat”. Quan retorna `true`, el valor és un nombre i és segur d’utilitzar com a
> índex d’un array/cadena.

### Avantatges

- Proporciona un guard de tipus senzill per detectar si s’ha trobat un índex comprovant que sigui un enter no negatiu.
- Retorna `true` només per a valors vàlids semblants a un índex (enters `>= 0`), rebutjant negatius, no enters i no
  nombres.
- Ajuda a evitar errors d’un desfasament d’una unitat i de valors sentinella quan es treballa amb API que retornen `-1`
  per a “no trobat”.

## Ús

### Sintaxi

Funció:

- `isIndexFound(value)`

Paràmetres:

- `value`: El valor que s’ha de comprovar per veure si és un enter no negatiu.

### Importació local de funció

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx és un nombre aquí i és >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Ús típic amb indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isIndexFound(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 00:45:07 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>