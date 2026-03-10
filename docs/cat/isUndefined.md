# isUndefined

## Descripció

Comprova si un valor determinat és `undefined`.

### Cas d’ús

Utilitza `isUndefined` per protegir entrades opcionals, detectar propietats que falten o diferenciar entre “no
proporcionat” (`undefined`) i “explícitament buit” (`null`).

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `isUndefined` quan necessitis específicament detectar `undefined` (no `null`). És segur perquè es basa en
`typeof value === "undefined"`.

### Avantatges

- Proporciona una comprovació clara i explícita de `undefined` mitjançant `typeof`, evitant casos límit amb variables no
  declarades.
- Retorna un resultat booleà simple (`true`/`false`) adequat per a guàrdies, bifurcacions i lògica de validació.
- Ajuda a distingir `undefined` d'altres valors “buits” com `null`, `0`, `""` o `NaN`.

## Ús

### Sintaxi

Funció:

- `isUndefined(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x és undefined aquí
} else {
  // x no és undefined aquí
}

const a = isUndefined(undefined); // cert
const b = isUndefined(null);      // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isUndefined(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:02:08 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>