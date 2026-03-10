# isValidDate

## Descripció

`isValidDate` comprova si un valor donat és un objecte `Date` vàlid i retorna `true` només per a dates reals i no
invàlides.

### Cas d’ús

Valida l'entrada d'usuari o dades d'API que poden contenir dates, assegurant que el valor és una instància real de
`Date` i no una data invàlida abans de fer càlculs, formatar o comparar dates.

> **Nota per als usuaris de TypeScript:**
>
> Usa `isValidDate` abans de cridar mètodes de `Date` (p. ex., `toISOString`, `getTime`) en valors tipats com `unknown`
> per assegurar que són objectes `Date` vàlids.

### Avantatges

- Assegura que un valor siga una instància de `Date` i no només una cadena o un número amb aparença de data.
- Rebutja dates no vàlides (p. ex., `new Date("invalid")`) comprovant valors de temps `NaN`.
- Guarda booleana simple que és fàcil d'usar en condicionals i canals de validació.
- Ajuda a prevenir errors en temps d'execució en cridar mètodes de data verificant primer l'entrada.

## Ús

### Sintaxi

Funció:

- `isValidDate(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input és una instància vàlida de Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // fals
console.log(isValidDate("2025-12-22")); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isValidDate(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 16:39:09 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>