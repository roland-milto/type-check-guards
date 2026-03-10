# areNumbers

## Descripció

`areNumbers` comprova si un valor és un array no buit on tots els elements són nombres.

### Cas d’ús

Valida dades proporcionades per l'usuari o per una API per assegurar que és un array no buit de nombres abans de
calcular totals, mitjanes o altres agregacions numèriques.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areNumbers` per validar arrays desconeguts abans de fer càlculs numèrics; retorna `false` per a arrays
> buits i per a arrays que continguin qualsevol valor que no sigui un nombre.

### Avantatges

- Retorna `true` només quan l'entrada és un array no buit i cada element és un nombre.
- Evita falsos positius rebutjant arrays buits i entrades que no són arrays.
- És útil com a guarda abans d'operacions numèriques (p. ex., sumar, fer mitjanes) per evitar errors en temps
  d'execució.

## Ús

### Sintaxi

Funció:

- `areNumbers(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar per veure si conté elements numèrics.

### Importació local de funció

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areNumbers(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 13:03:39 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>