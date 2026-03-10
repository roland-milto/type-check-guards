# areWeakSets

## Descripció

Comprova si una entrada és una matriu no buida on cada element és un `WeakSet`, retornant `true` només en aquest cas.

### Cas d’ús

Valida l'entrada en temps d'execució (p. ex., d'APIs, configuració o dades proporcionades per l'usuari) per assegurar
que tens una llista no buida d'instàncies de `WeakSet` abans de continuar amb la lògica que depèn del comportament de
`WeakSet`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areWeakSets` per validar una entrada desconeguda abans de tractar-la com a `WeakSet[]`. Retorna `false`
> per a matrius buides i per a valors que no són matrius.

### Avantatges

- Assegura que cada element de la matriu d'entrada és un `WeakSet`.
- Retorna `false` per a matrius buides, evitant resultats accidentals de «tot vàlid» quan falten dades.
- Falla de manera segura retornant `false` quan l'entrada no és una matriu emplenada (incloent-hi `null`).
- És útil com a guarda abans de fer operacions que requereixen instàncies de `WeakSet`.

## Ús

### Sintaxi

Funció:

- `areWeakSets(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per a objectes `WeakSet`.

### Importació local de funció

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a és una matriu no buida d'instàncies de WeakSet
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areWeakSets(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:07:49 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>