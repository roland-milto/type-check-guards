# isWeakSet

## Descripció

Determina si el `value` proporcionat és un `WeakSet` d'objectes.

### Cas d’ús

Fes servir `isWeakSet` quan acceptis entrada sense tipar (p. ex., d'API externes, configuració dinàmica o valors
`unknown`) i necessitis verificar que és un `WeakSet` abans d'utilitzar operacions específiques de `WeakSet`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isWeakSet` per restringir un valor `unknown` a `WeakSet<object>` en temps d'execució; tingues en compte
> que `WeakSet` només pot contenir referències a objectes.

### Avantatges

- Proporciona una comprovació senzilla en temps d'execució per saber si un valor és un `WeakSet`.
- Ajuda a prevenir errors de tipus assegurant que només les instàncies de `WeakSet` es tractin com a tals.
- Funciona amb qualsevol entrada `unknown` i retorna un resultat booleà clar (`true`/`false`).

## Ús

### Sintaxi

Funció:

- `isWeakSet(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a és un WeakSet en temps d'execució
}
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isWeakSet(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:14:10 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>