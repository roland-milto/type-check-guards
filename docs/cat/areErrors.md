# areErrors

## Descripció

Comprova si un array no és buit i conté només objectes `Error`, retornant `true` o `false`.

### Cas d’ús

Valida que un `unknown[]` proporcionat en temps d'execució (p. ex., fallades agregades, resultats de validació o dades
deserialitzades) sigui una llista no buida d'objectes `Error` abans d'iterar, registrar o tornar a llançar.

> **Nota per als usuaris de TypeScript:**
>
> `areErrors` retorna `true` només per a un array amb elements on cada ítem és un `Error`; retorna `false` per a un
> array buit o si algun element no és un `Error`.

### Avantatges

- Assegura que cada element és una instància d'`Error`, permetent una gestió d'errors i un registre segurs.
- Rebutja els arrays buits, evitant que estats accidentals de «sense errors» es tractin com a llistes d'errors vàlides.
- Funciona bé com a guarda en temps d'execució quan es treballa amb entrades `unknown[]` (p. ex., d'APIs o de blocs
  `catch`).

## Ús

### Sintaxi

Funció:

- `areErrors(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar per a objectes `Error`.

### Importació local de funció

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value és una matriu no buida d'objectes Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areErrors(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 12:32:56 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>