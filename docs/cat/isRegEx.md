# isRegEx

## Descripció

Determina si un valor proporcionat és una instància de `RegExp`.

### Cas d’ús

Valida valors proporcionats per l'usuari o dinàmics (p. ex., configuració, càrregues útils d'API, entrades de
connectors) abans de tractar-los com una expressió regular.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isRegEx` per restringir valors `unknown` (o d'unió) abans d'utilitzar propietats o mètodes específics de
> RegExp; retorna `true` només per a valors que són instàncies de `RegExp`.

### Avantatges

- Proporciona un senzill guardià de tipus en temps d'execució per comprovar si un valor és un `RegExp`.
- Ajuda a prevenir errors quan el codi espera una expressió regular (p. ex., abans de cridar `test`, `exec` o llegir
  `source`).
- Funciona tant amb literals de regex com amb instàncies creades mitjançant `new RegExp(...)`.
- Retorna un resultat booleà clar (`true`/`false`) sense llançar errors per a entrades que no són regex.

## Ús

### Sintaxi

Funció:

- `isRegEx(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input és una RegExp aquí
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isRegEx(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 23:28:45 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>