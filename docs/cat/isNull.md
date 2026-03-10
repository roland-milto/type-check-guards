# isNull

## Descripció

Determina si el `value` proporcionat és `null`.

### Cas d’ús

Fes servir `isNull` per validar entrades o camps de càrrega útil d'API on `null` és un valor sentinella significatiu i
s'ha de gestionar de manera diferent que `undefined` o altres valors.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isNull` quan necessitis distingir `null` de `undefined` i d'altres valors falsy; retorna `true` només per
> a `null`.

### Avantatges

- Proporciona una comprovació precisa de `null` sense confondre'l amb `undefined`.
- Funciona de manera fiable per a qualsevol tipus d'entrada perquè accepta `unknown`.
- Simple, ràpid i sense efectes secundaris; només retorna `true` o `false`.

## Ús

### Sintaxi

Funció:

- `isNull(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar si és `null`.

### Importació local de funció

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a és null aquí
}
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isNull(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isNull](../_analysis/isNull.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 15:38:47 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>