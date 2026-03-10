# areIntegers

## Descripció

`areIntegers` determina si tots els elements d'una matriu donada són enters, retornant `true` si ho són i `false` en cas
contrari.

### Cas d’ús

Fes servir `areIntegers` per validar dades proporcionades per l'usuari o externes (p. ex., paràmetres de consulta,
càrregues útils JSON, files CSV) quan la teva lògica requereix una llista plena de valors enters com ara IDs,
comptadors, desplaçaments de paginació o índexs de matriu.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areIntegers` com a guarda en temps d'execució per a entrades `unknown[]` abans de tractar-les com a
`number[]` que contenen només enters. Si retorna `false`, l'entrada o bé no és una matriu plena o bé conté com a mínim
> un valor que no és enter.

### Avantatges

- Retorna `true` només quan cada element és un enter; en cas contrari retorna `false`.
- Ajuda a validar entrades desconegudes abans de fer operacions només amb enters (p. ex., indexació, recomptes, IDs).
- Falla ràpid: deixa de comprovar tan aviat com es troba un element que no és enter.

## Ús

### Sintaxi

Funció:

- `areIntegers(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per veure si conté elements enters.

### Importació local de funció

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // cert
console.log(areIntegers(b)); // cert
console.log(areIntegers(c)); // fals

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areIntegers(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 00:57:36 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>