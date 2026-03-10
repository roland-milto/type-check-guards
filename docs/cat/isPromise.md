# isPromise

## Descripció

Determina si un valor determinat és una `Promise`.

### Cas d’ús

Fes servir `isPromise` per validar entrades desconegudes abans de tractar-les com una `Promise`, com ara quan gestiones
valors retornats per connectors, importacions dinàmiques o API amb tipatge lax.

> **Nota per als usuaris de TypeScript:**
>
> `isPromise` comprova mitjançant `instanceof Promise`, de manera que només retorna `true` per a instàncies reals de
`Promise` (no per a thenables genèrics).

### Avantatges

- Proporciona una comprovació senzilla en temps d'execució per saber si un valor és una `Promise`.
- Ajuda a protegir els camins de codi que requereixen una instància real de `Promise`, retornant `true` o `false` de
  manera previsible.
- Evita falsos positius d'objectes “thenable” (p. ex., `{ then() {} }`) exigint una instància real de `Promise`.

## Ús

### Sintaxi

Funció:

- `isPromise(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // cert
console.log(isPromise(b)); // fals
console.log(isPromise(123)); // fals
console.log(isPromise(null)); // fals

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isPromise(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 23:52:16 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>