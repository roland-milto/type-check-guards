# areEqual

## Descripció

`areEqual` comprova si tots els elements d'un array són iguals a un valor esperat determinat, retornant `true` només per
a arrays no buits en què cada element coincideix.

### Cas d’ús

Valida que una llista contingui només un únic valor permès (p. ex., que tots els indicadors d'estat siguin `true`, que
tots els rols siguin `"admin"`, o que totes les entrades numèriques siguin iguals a una constant requerida) tot tractant
l'entrada buida com a no vàlida (`false`).

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `areEqual` quan necessitis una comprovació estricta de tots els elements; retorna `false` per a arrays buits
> i per a qualsevol entrada que no sigui un array o que no estigui emplenada.

### Avantatges

- Retorna `true` només quan cada element coincideix amb el valor esperat; en cas contrari retorna `false`.
- Falla ràpid: deixa de comprovar tan aviat com es troba un element que no coincideix.
- Protegeix contra entrades no vàlides retornant `false` quan l'entrada no és un array emplenat.

## Ús

### Sintaxi

Funció:

- `areEqual(value, expected)`

Paràmetres:

- `value`: L'array que s'ha de comprovar.
- `expected`: L'element amb el qual es compara cada element de l'array.

### Importació local de funció

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areEqual(value, expected)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 23:49:53 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>