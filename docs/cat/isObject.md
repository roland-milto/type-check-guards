# isObject

## Descripció

Determina si un `value` donat és un `object` (excloent `null`).

### Cas d’ús

Fes servir `isObject` per validar entrades desconegudes (p. ex., JSON analitzat, respostes d'API, càrregues útils
d'esdeveniments) abans d'accedir a propietats, assegurant que el valor és un objecte i no `null`.

> **Nota per als usuaris de TypeScript:**
>
> `isObject` és un guard en temps d'execució que retorna un booleà; no restringeix a una forma d'objecte específica.
> Combina'l amb comprovacions addicionals (p. ex., existència de propietats) quan necessitis un tipatge més fort.

### Avantatges

- Retorna `true` només per a valors no `null` el `typeof` dels quals és `"object"`.
- Evita el parany habitual de JavaScript en què `null` altrament es tractaria com un objecte.
- Funciona per a objectes plans i instàncies d'objectes integrats (p. ex., `Date`, `RegExp`).
- Comprovació simple i ràpida en temps d'execució, adequada per a programació defensiva i validació d'entrades.

## Ús

### Sintaxi

Funció:

- `isObject(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar per veure si és un `object`.

### Importació local de funció

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input és un objecte no nul en temps d'execució
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isObject(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isObject](../_analysis/isObject.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 00:17:50 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>