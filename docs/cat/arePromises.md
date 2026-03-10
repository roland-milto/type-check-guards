# arePromises

## Descripció

`arePromises` determina si tots els elements d'un array són instàncies de `Promise`.

### Cas d’ús

Valida que una llista construïda dinàmicament o proporcionada externament contingui només promeses abans d'agregar-les (
p. ex., amb `Promise.all`).

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `arePromises` per validar `unknown[]` abans de cridar `Promise.all` o altres operacions només de promeses;
> retorna `false` per a arrays buits.

### Avantatges

- Assegura que cada element és una `Promise` abans de continuar amb la lògica específica de promeses.
- Retorna `false` per a arrays buits, evitant resultats ambigus per a entrades buides.
- Útil com a guarda en temps d'execució quan es treballa amb `unknown[]` de fonts externes.

## Ús

### Sintaxi

Funció:

- `arePromises(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar per a instàncies de Promise.

### Importació local de funció

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values és un array d'instàncies de Promise en temps d'execució
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.arePromises(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 23:47:40 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>