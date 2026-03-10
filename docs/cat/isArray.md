# isArray

## Descripció

`isArray` comprova si un valor donat és un array i retorna `true` si ho és; altrament, `false`.

### Cas d’ús

Valida dades desconegudes (p. ex., JSON analitzat o respostes d'API) per assegurar que un valor és un array abans
d'iterar, indexar o accedir a `.length`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isArray` quan necessitis una comprovació en temps d'execució per a arrays; retorna un booleà i és segur
> cridar-lo amb valors `unknown`.

### Avantatges

- Fa servir el `Array.isArray` integrat per a una detecció fiable d'arrays entre realms (p. ex., iframes).
- Retorna un resultat booleà simple (`true`/`false`) adequat per a guards i lògica de ramificació.
- Funciona amb qualsevol tipus d'entrada perquè el paràmetre és `unknown`.

## Ús

### Sintaxi

Funció:

- `isArray(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input és un array en temps d'execució
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isArray(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isArray](../_analysis/isArray.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 11:29:51 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>