# isNullOrUndefined

## Descripció

Comprova si un valor determinat és `null` o `undefined`.

### Cas d’ús

Fes servir `isNullOrUndefined` quan necessitis tractar tant `null` com `undefined` com a “sense valor”, com ara en
validar entrades opcionals, normalitzar càrregues útils d'API o protegir camins de codi abans de desreferenciar un valor
potencialment absent.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isNullOrUndefined` per protegir-te contra valors absents abans d'accedir a propietats o cridar mètodes;
> retorna `true` només per a `null` i `undefined`.

### Avantatges

- Proporciona una guarda clara i reutilitzable per detectar `null` i `undefined` en un sol lloc.
- Retorna un booleà simple (`true`/`false`) que és fàcil de compondre en condicions i validacions.
- Ajuda a evitar errors habituals en temps d'execució comprovant valors absents abans d'accedir a propietats o cridar
  mètodes.

## Ús

### Sintaxi

Funció:

- `isNullOrUndefined(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar per a `null` o `undefined`.

### Importació local de funció

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // gestiona el valor absent
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isNullOrUndefined(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 00:33:13 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>