# isDecimal

## Descripció

`isDecimal` comprova si un valor és una representació de cadena decimal sense espais en blanc inicials/finals i amb un
format decimal vàlid.

### Cas d’ús

Valida camps de formulari, càrregues útils d'API o valors de configuració que s'han de proporcionar com una cadena
decimal (opcionalment amb signe) sense cap espai en blanc al voltant, abans d'analitzar-los o desar-los.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isDecimal` per validar l'entrada de l'usuari abans de convertir-la (p. ex., amb `Number(value)`),
> especialment quan s'han de rebutjar els espais en blanc.

### Avantatges

- Valida estrictament que l'entrada sigui una cadena i coincideixi amb un patró de literal decimal.
- Rebutja els espais en blanc inicials i finals (incloent-hi caràcters de control) per evitar un anàlisi ambigu.
- Comprovacions prèvies ràpides (comprovació de tipus i primer/últim caràcter) abans d'executar l'expressió regular.
- Retorna un resultat booleà simple (`true`/`false`) adequat per a guards i validació d'entrada.

## Ús

### Sintaxi

Funció:

- `isDecimal(value)`

Paràmetres:

- `value`: El valor que cal comprovar per a un format de cadena decimal.

### Importació local de funció

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v és una cadena aquí (validada en temps d'execució)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isDecimal(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 15:51:31 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>