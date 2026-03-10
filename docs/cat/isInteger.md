# isInteger

## Descripció

Determina si un `value` donat és un nombre enter segur.

### Cas d’ús

Valida entrades no fiables (p. ex., paràmetres de consulta, càrregues útils JSON, variables d’entorn) abans
d’utilitzar-les com a enter per a índexs d’array, paginació, comptadors o identificadors de base de dades.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isInteger` per validar entrades desconegudes abans de tractar-les com un enter numèric; retorna `true`
> només per a valors on `typeof value === "number"` i `Number.isSafeInteger(value)`.

### Avantatges

- Comprova tant el tipus com la seguretat numèrica: retorna `true` només quan l’entrada és un nombre i un enter segur.
- Evita errors habituals amb la coerció numèrica: cadenes com "5" retornen correctament `false`.
- Rebutja els no enters i els enters no segurs, cosa que el fa adequat per a identificadors, comptadors i indexació
  d’arrays.

## Ús

### Sintaxi

Funció:

- `isInteger(value)`

Paràmetres:

- `value`: El valor que s’ha de comprovar per determinar si és un enter.

### Importació local de funció

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // cert
const b = isInteger(-100);   // cert
const c = isInteger("5");    // fals
const d = isInteger(5.5);    // fals
const e = isInteger(null);   // fals

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isInteger(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 00:49:18 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>