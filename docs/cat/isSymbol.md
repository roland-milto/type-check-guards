# isSymbol

## Descripció

`isSymbol` determina si un valor determinat és del tipus `symbol`, retornant `true` per als símbols i `false` en cas
contrari.

### Cas d’ús

Valida que un valor `unknown` sigui un `symbol` abans d'utilitzar-lo com a identificador únic, una clau de registre o
una clau de propietat calculada en objectes i mapes.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isSymbol` per restringir `unknown` a `symbol` abans de cridar funcions relacionades amb símbols o
> d'utilitzar-lo com a clau de propietat calculada.

### Avantatges

- Proporciona una comprovació d'execució senzilla i fiable per al tipus primitiu `symbol` de JavaScript.
- Ajuda a restringir valors `unknown` abans d'utilitzar API específiques de símbols o d'emmagatzemar-los com a claus.
- Evita falsos positius fent servir `typeof`, que és la manera canònica de detectar valors `symbol`.

## Ús

### Sintaxi

Funció:

- `isSymbol(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input és un símbol aquí
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isSymbol(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:26:05 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>