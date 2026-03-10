# isTrue

## Descripció

`isTrue` determina si un valor donat és estrictament igual a `true`.

### Cas d’ús

Fes servir `isTrue` per validar flags, feature toggles o valors de configuració on només s'ha d'acceptar el literal
`true` i tota la resta s'ha de tractar com a `false`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isTrue` quan necessitis acceptar només el literal booleà `true`, i no simplement valors truthy.

### Avantatges

- Proporciona una comprovació estricta del literal booleà `true` (sense coerció).
- Ajuda a distingir `true` de valors truthy com `1`, `"true"` o `{}`.
- Comportament simple i previsible, adequat per a guards i canals de validació.

## Ús

### Sintaxi

Funció:

- `isTrue(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // cert
const b = isTrue(1);         // fals
const c = isTrue("true");   // fals

if (isTrue(a)) {
  // a és cert aquí
}
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isTrue(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 13:41:48 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>