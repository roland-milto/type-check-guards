# areIndexesFound

## Descripció

`areIndexesFound` comprova si un valor és un array no buit els elements del qual són tots índexos vàlids, retornant
`true` si ho són i `false` en cas contrari.

### Cas d’ús

Valida dades proporcionades per l’usuari o externes (p. ex., JSON analitzat) que s’espera que siguin una llista
d’índexos abans d’utilitzar-les per accedir a arrays o per fer-ne talls.

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `areIndexesFound` per validar una entrada desconeguda abans de tractar els seus elements com a índexos d’un
> array; retorna `false` per a arrays buits i per a arrays que contenen valors que no són índexos.

### Avantatges

- Retorna `true` només quan l’entrada és un array no buit i cada element és un índex vàlid.
- Falla ràpid: retorna `false` tan aviat com es troba un element que no és un índex.
- Útil com a guarda abans d’utilitzar valors com a posicions o desplaçaments d’un array.

## Ús

### Sintaxi

Funció:

- `areIndexesFound(array)`

Paràmetres:

- `array`: L’array que s’ha de comprovar per verificar el compliment d’índexos.

### Importació local de funció

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Aquí, es confirma que `a` és un array d'índexs emplenat.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areIndexesFound(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 00:41:10 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>