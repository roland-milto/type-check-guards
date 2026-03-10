# areNaNs

## Descripció

`areNaNs` comprova si tots els elements d'un array són `NaN` i retorna `true` només si cada element és `NaN`.

### Cas d’ús

Valida dades entrants on `NaN` s'utilitza com a valor sentinella i has d'assegurar-te que tot l'array consisteix
exclusivament en `NaN` (p. ex., detectar una sèrie numèrica amb totes les dades absents).

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areNaNs` quan necessitis validar que un array conté només el valor numèric `NaN` (sense conversió de
> cadena a nombre).

### Avantatges

- Retorna `true` només quan cada element és `NaN` (comprovació estricta de tots els elements).
- No converteix cadenes a nombres; valors com "NaN" continuen sent no-`NaN` i fan que el resultat sigui `false`.
- Retorna `false` per a arrays no emplenats, evitant un `true` accidental amb una entrada buida.

## Ús

### Sintaxi

Funció:

- `areNaNs(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar per a valors `NaN`.

### Importació local de funció

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // cert
const b = areNaNs([NaN, 1, NaN]); // fals
const c = areNaNs([NaN, "NaN", NaN]); // fals
const d = areNaNs([NaN, null, NaN]); // fals
const e = areNaNs([] as unknown[]); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areNaNs(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 15:50:41 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>