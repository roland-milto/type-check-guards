# isWeakMap

## Descripció

Determina si un `value` determinat és una instància de `WeakMap`.

### Cas d’ús

Utilitza `isWeakMap` quan acceptis un valor `unknown` (p. ex., d'una API pública, un sistema de connectors o una
configuració dinàmica) i necessitis verificar que és un `WeakMap` abans d'utilitzar comportaments específics de
`WeakMap`.

> **Nota per als usuaris de TypeScript:**
>
> `isWeakMap` fa una comprovació `instanceof WeakMap`; és un guard en temps d'execució que retorna `true` només per a
> instàncies reals de `WeakMap`.

### Avantatges

- Comprovació senzilla en temps d'execució per saber si un valor és un `WeakMap`.
- Ajuda a prevenir l'ús indegut d'API que requereixen un `WeakMap` retornant `true`/`false` en lloc de llançar una
  excepció.
- Funciona amb entrades `unknown`, cosa que el fa convenient als límits del mòdul (p. ex., anàlisi, dades externes o
  codi sense tipar).

## Ús

### Sintaxi

Funció:

- `isWeakMap(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a és un WeakMap en temps d'execució
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isWeakMap(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 13:24:22 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>