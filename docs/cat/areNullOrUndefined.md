# areNullOrUndefined

## Descripció

Comprova si tots els elements de l’array donat són `null` o `undefined`.

### Cas d’ús

Valida que una llista de camps opcionals no contingui cap valor real (només `null`/`undefined`) abans de decidir ometre
el processament o mostrar un estat de «no s’han proporcionat valors».

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `areNullOrUndefined` quan necessitis verificar que un array conté només valors absents (`null`/`undefined`).
> Tingues en compte que retorna `false` per a un array buit.

### Avantatges

- Retorna `true` només quan cada element és `null` o `undefined`.
- Retorna `false` per a arrays buits, ajudant a distingir «sense dades» de «tots els valors absents».
- Funciona amb `unknown[]`, cosa que el fa segur d’utilitzar abans d’acotar els tipus.

## Ús

### Sintaxi

Funció:

- `areNullOrUndefined(array)`

Paràmetres:

- `array`: L’array que s’ha de comprovar.

### Importació local de funció

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areNullOrUndefined(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 00:29:12 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>