# isBoolean

## Descripció

Determina si un valor donat és un `boolean`.

### Cas d’ús

Valida dades externes o sense tipar (p. ex., variables d'entorn, càrregues útils JSON, paràmetres de consulta) per
assegurar que un valor és un `boolean` abans d'utilitzar-lo en lògica condicional.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isBoolean` per restringir `unknown` a `boolean` abans d'aplicar operacions booleanes.

### Avantatges

- Comprovació d'execució simple i ràpida amb `typeof`.
- Ajuda a validar una entrada desconeguda abans d'aplicar lògica específica de booleans.
- Retorna un resultat `boolean` previsible (`true`/`false`).

## Ús

### Sintaxi

Funció:

- `isBoolean(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input és booleà aquí
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isBoolean(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:35:51 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>