# isError

## Descripció

Comprova si un `value` donat és una instància d'`Error`.

### Cas d’ús

Fes servir `isError` quan rebis un valor `unknown` (com ara d'un bloc `catch`, un callback o una biblioteca externa) i
necessitis determinar de manera segura si és un `Error` abans de llegir `message`, `name` o `stack`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isError` per protegir valors `unknown` (p. ex., de `catch`) abans de tractar-los com un `Error`.

### Avantatges

- Proporciona una comprovació simple en temps d'execució per saber si un valor és una instància d'`Error`.
- Ajuda a restringir entrades desconegudes abans d'accedir a propietats d'`Error` com `message` o `stack`.
- Redueix el risc d'excepcions en temps d'execució en gestionar valors de `catch`, APIs externes o fonts sense tipatge.

## Ús

### Sintaxi

Funció:

- `isError(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar contra el tipus `Error`.

### Importació local de funció

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isError(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isError](../_analysis/isError.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 12:44:50 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>