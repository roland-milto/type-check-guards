# isMap

## Descripció

Comprova si el `value` donat és un `Map`, retornant `true` si ho és i `false` en cas contrari.

### Cas d’ús

Fes servir `isMap` quan rebis un valor `unknown` (p. ex., d'un parseig de JSON, d'API externes o d'entrada d'usuari) i
necessitis assegurar-te que és un `Map` abans de fer operacions de `Map`.

> **Nota per als usuaris de TypeScript:**
>
> `isMap` és una guarda en temps d'execució que retorna `true` quan el valor és un `Map` i `false` en cas contrari;
> fes-la servir per restringir `unknown` abans de cridar les API de `Map`.

### Avantatges

- Proporciona una comprovació ràpida en temps d'execució per saber si un valor és un `Map`.
- Ajuda a prevenir errors de tipus protegint els camins de codi que requereixen mètodes de `Map` com `get`, `set` i
  `has`.
- Funciona bé com a pas de validació lleuger quan es gestionen entrades `unknown`.

## Ús

### Sintaxi

Funció:

- `isMap(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isMap(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isMap](../_analysis/isMap.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 16:03:54 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>