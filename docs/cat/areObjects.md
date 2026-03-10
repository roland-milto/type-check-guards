# areObjects

## Descripció

`areObjects` comprova si una matriu plena proporcionada conté només objectes.

### Cas d’ús

Fes servir `areObjects` quan rebis una matriu desconeguda (p. ex., d’un parseig de JSON o d’APIs externes) i necessitis
assegurar-te que no és buida i que cada element és un objecte abans d’iterar i accedir a propietats d’objecte.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areObjects` per validar `unknown[]` abans de tractar els elements com a objectes; retorna `false` per a
> matrius buides.

### Avantatges

- Retorna `true` només quan l’entrada és una matriu plena i cada element és un objecte.
- S’atura aviat i retorna `false` tan bon punt es troba un element que no és un objecte.
- Ajuda a validar una entrada desconeguda abans de fer operacions específiques d’objectes.

## Ús

### Sintaxi

Funció:

- `areObjects(array)`

Paràmetres:

- `array`: La matriu que s’ha de comprovar per veure si conté elements objecte.

### Importació local de funció

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value és una matriu plena d'objectes
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areObjects(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 00:08:08 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>