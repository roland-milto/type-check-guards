# areArrays

## Descripció

`areArrays` determina si un valor és una matriu bidimensional plena els elements de la qual són tots matrius.

### Cas d’ús

Fes servir `areArrays` per validar entrades tabulars o de tipus matriu (p. ex., files CSV, dades de graella o llistes
agrupades) abans de fer operacions de fila/columna; retorna `false` si l'entrada no és una matriu, és buida o conté
algun element que no és una matriu.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areArrays` quan necessitis assegurar que un valor és una matriu 2D no buida i que cada fila és una matriu
> abans d'iterar o indexar dins de matrius niuades.

### Avantatges

- Valida que l'entrada sigui una matriu bidimensional no buida on cada element és una matriu.
- Retorna un resultat booleà simple (`true`/`false`) adequat per a guardes i sortides anticipades.
- Ajuda a prevenir errors en temps d'execució quan el codi posterior assumeix operacions de matrius niuades (p. ex.,
  mapar files).

## Ús

### Sintaxi

Funció:

- `areArrays(array)`

Paràmetres:

- `array`: L'entrada que s'ha de comprovar.

### Importació local de funció

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value és una matriu 2D amb matrius com a elements
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areArrays(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 13:38:56 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>