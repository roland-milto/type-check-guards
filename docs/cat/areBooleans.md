# areBooleans

## Descripció

`areBooleans` comprova si un array no buit determinat conté només valors booleans, retornant `true` si és així i `false`
en cas contrari.

### Cas d’ús

Valida dades proporcionades per l'usuari o externes (p. ex., càrregues útils JSON, paràmetres de consulta, arrays de
configuració) per assegurar que una llista no buida conté només booleans abans d'aplicar lògica booleana o de passar-la
a APIs que esperen `boolean[]`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areBooleans` per validar `unknown[]` abans de tractar-lo com a `boolean[]`; retorna `false` per als arrays
> buits, així que gestiona aquest cas explícitament si s'hauria de permetre una llista buida.

### Avantatges

- Retorna `true` només quan cada element és un booleà i l'entrada és un array no buit.
- Evita falsos positius rebutjant els arrays buits (retorna `false`).
- Funciona bé com a guarda en temps d'execució abans d'operacions només per a booleans (p. ex., `every`, `some`,
  reduccions lògiques).

## Ús

### Sintaxi

Funció:

- `areBooleans(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar per veure si conté elements booleans.

### Importació local de funció

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areBooleans(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:39:27 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>