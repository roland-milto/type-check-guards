# isOfType

## Descripció

Determina si un `value` determinat coincideix amb una cadena de tipus especificada, fent servir `typeof` per als
primitius i una alternativa per als tipus complexos.

### Cas d’ús

Valida i restringeix entrades `unknown` (p. ex., respostes d'API, entrada d'usuari, JSON analitzat) comprovant si un
valor és d'un tipus esperat en forma de cadena abans de fer operacions específiques del tipus.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isOfType` per bifurcar segons els tipus en temps d'execució quan treballis amb valors `unknown`; retorna
`true`/`false` i tracta `null` i `undefined` explícitament.

### Avantatges

- Comprova els primitius amb un `typeof` directe per velocitat i claredat.
- Gestiona correctament `null` i `undefined`, que `typeof` tot sol no pot distingir com es pretén.
- Admet cadenes de tipus complexes o personalitzades mitjançant una comparació alternativa amb `getTypeOf`.
- Retorna un resultat booleà simple (`true`/`false`) adequat per a guàrdies i bifurcacions.

## Ús

### Sintaxi

Funció:

- `isOfType(value, type)`

Paràmetres:

- `value`: El valor que s'ha de provar contra el `type`.
- `type`: La representació en cadena del tipus contra el qual s'ha de comprovar.

### Importació local de funció

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // aquí input és un nombre
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // aquí input és una cadena
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isOfType(value, type)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 16:58:48 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>