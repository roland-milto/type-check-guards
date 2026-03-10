# isSet

## Descripció

Determina si un valor determinat és un `Set`.

### Cas d’ús

Valida les entrades de fonts externes (p. ex., anàlisi de JSON, entrada d'usuari o API de tercers) per assegurar que un
valor és un `Set` abans de fer operacions de `Set`.

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `isSet` per restringir valors `unknown` abans de cridar API específiques de `Set` com `.add`, `.has` o
`.size`.

### Avantatges

- Proporciona una comprovació senzilla en temps d'execució per confirmar si un valor és un `Set`.
- Ajuda a prevenir errors de tipus permetent bifurcar aviat quan un valor no és un `Set`.
- Funciona amb qualsevol contingut de `Set` (buit o amb elements) i retorna `true`/`false` de manera consistent.

## Ús

### Sintaxi

Funció:

- `isSet(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a és un Set en temps d'execució
  console.log(a.size);
}

console.log(isSet(b)); // fals

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isSet(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isSet](../_analysis/isSet.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 23:09:06 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>