# isString

## Descripció

`isString` determina si un valor donat és una cadena.

### Cas d’ús

Valida l'entrada d'usuari, camps de càrrega útil d'API o valors de configuració en temps d'execució per assegurar que un
valor és una cadena abans d'aplicar operacions de cadena (p. ex., retallar, dividir, conversió de
majúscules/minúscules).

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isString` per validar valors `unknown` o amb tipatge poc estricte abans de cridar mètodes de cadena;
> retorna `true` només quan `typeof value === "string"`.

### Avantatges

- Comprovació simple i ràpida amb `typeof`.
- Retorna un resultat booleà previsible: `true` per a cadenes, altrament `false`.
- Funciona tant per a cadenes buides com no buides.
- Útil com a guarda lleugera en temps d'execució abans de fer operacions específiques de cadenes.

## Ús

### Sintaxi

Funció:

- `isString(value)`

Paràmetres:

- `value`: El valor que s'ha de provar per al tipus cadena.

### Importació local de funció

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // l'entrada és una cadena aquí
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isString(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isString](../_analysis/isString.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 13:13:22 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>