# isPrimitive

## Descripció

`isPrimitive` determina si un valor donat és un primitiu (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Cas d’ús

Valida entrades en temps d'execució (p. ex., camps de càrrega útil d'API, valors de configuració o dades proporcionades
per l'usuari) per assegurar que un valor és un primitiu abans de serialitzar, registrar o aplicar operacions només per a
primitius.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isPrimitive` per protegir entrades `unknown` abans de tractar-les com a objectes o funcions; retorna
`true` per als primitius i `false` per als objectes i les funcions.

### Avantatges

- Comprovació ràpida i sense assignacions per saber si un valor és un primitiu de JavaScript.
- Tracta correctament `null` com a primitiu (encara que `typeof null` sigui `"object"`).
- Ajuda a restringir valors `unknown` abans de fer operacions només per a objectes.

## Ús

### Sintaxi

Funció:

- `isPrimitive(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar per veure si és de tipus primitiu.

### Importació local de funció

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isPrimitive(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 23:55:39 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>