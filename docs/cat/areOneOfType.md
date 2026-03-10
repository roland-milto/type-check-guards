# areOneOfType

## Descripció

`areOneOfType` comprova si tots els elements d’un array no buit són d’un dels tipus d’execució especificats.

### Cas d’ús

Validar dades entrants (p. ex., JSON analitzat) on un camp ha de ser un array no buit i els seus elements estan
restringits a un conjunt conegut de tipus primitius; retorna `false` quan l’array és buit o conté algun tipus no permès.

> **Nota per als usuaris de TypeScript:**
>
> Aquesta funció retorna un booleà i no restringeix els tipus dels elements de l’array en temps de compilació; fes-la
> servir com a pas de validació en temps d’execució abans de continuar el processament.

### Avantatges

- Garanteix que cada element d’un array coincideixi amb almenys un tipus d’execució permès, retornant `true` només quan
  tot l’array passa la validació.
- Rebutja entrades no vàlides aviat: retorna `false` quan `array` o `types` és buit o no és un array emplenat.
- Útil per validar col·leccions de tipus mixt (p. ex., números i cadenes) amb una sola crida a `areOneOfType`.

## Ús

### Sintaxi

Funció:

- `areOneOfType(array, types)`

Paràmetres:

- `array`: Un array d’elements per verificar contra els tipus proporcionats.
- `types`: Un array de cadenes que representen els tipus de dades contra els quals comprovar.

### Importació local de funció

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areOneOfType(array, types)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 23:36:14 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>