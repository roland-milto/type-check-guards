# isPlainObject

## Descripció

Comprova si un `value` determinat és un objecte pla i retorna `true` si ho és; en cas contrari, `false`.

### Cas d’ús

Valida que una entrada `unknown` (p. ex., JSON analitzat, dades externes o arguments de funció) sigui un objecte pla
abans de llegir-ne les claus o mapar-la a un objecte de configuració tipat.

> **Nota per als usuaris de TypeScript:**
>
> `isPlainObject` és útil per restringir `unknown` abans de tractar-lo com un objecte de tipus registre; retorna `true`
> només per a valors l’etiqueta interna dels quals és `[object Object]`.

### Avantatges

- Proporciona una comprovació senzilla i fiable de si un valor és un objecte pla (és a dir, `Object` / `{}`), retornant
  `true` o `false`.
- Ajuda a distingir els objectes plans de les matrius, les funcions, `null` i altres tipus que no són objectes plans.
- És útil com a guarda de tipus a TypeScript per restringir valors `unknown` abans d’accedir a propietats de l’objecte.

## Ús

### Sintaxi

Funció:

- `isPlainObject(value)`

Paràmetres:

- `value`: El valor que s’ha de provar per determinar si és un objecte pla.

### Importació local de funció

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // aquí input és un objecte pla
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // cert
console.log(isPlainObject([])); // fals
console.log(isPlainObject(null)); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isPlainObject(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 12:16:44 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>