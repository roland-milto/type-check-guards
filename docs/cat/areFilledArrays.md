# areFilledArrays

## Descripció

`areFilledArrays` comprova si una matriu bidimensional no és buida i si totes les seves submatrius no són buides.

### Cas d’ús

Fes servir `areFilledArrays` per validar una entrada tabular o de tipus matriu (p. ex., files CSV, dades de graella,
resultats agrupats) de manera que puguis assumir amb seguretat que hi ha com a mínim una submatriu i que cap de les
submatrius és buida.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areFilledArrays` quan necessitis assegurar-te que una matriu 2D té com a mínim una fila i que cada fila té
> com a mínim un element abans d’iterar-hi o d’indexar-hi.

### Avantatges

- Valida que la matriu exterior no sigui buida i que cada submatriu interior també no sigui buida, retornant `true`
  només quan es compleixen totes dues condicions.
- Funciona amb qualsevol tipus d’elements dins de les submatrius (p. ex., nombres, cadenes, objectes, matrius niades)
  perquè només comprova l’estat de “plena” de la matriu, no el contingut dels elements.
- Proporciona un resultat booleà simple (`true`/`false`) adequat com a guarda abans de processar dades bidimensionals.

## Ús

### Sintaxi

Funció:

- `areFilledArrays(array)`

Paràmetres:

- `array`: La matriu bidimensional que s’ha de comprovar.

### Importació local de funció

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // cert
console.log(areFilledArrays(b)); // cert
console.log(areFilledArrays(c)); // cert
console.log(areFilledArrays(d)); // fals
console.log(areFilledArrays(e)); // fals
console.log(areFilledArrays(f)); // fals

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areFilledArrays(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 11:55:45 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>