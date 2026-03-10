# isDate

## Descripció

`isDate` determina si un valor proporcionat és un `Date`, retornant `true` per a instàncies de `Date` i `false` en cas
contrari.

### Cas d’ús

Valida i restringeix valors desconeguts (p. ex., dades de sol·licitud, valors de configuració o JSON analitzat) abans de
fer operacions amb `Date`, com ara el format, les comparacions o cridar `toISOString()`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isDate` per restringir `unknown` a `Date` en temps d'execució; retorna `true` només per a instàncies reals
> de `Date` (no per a cadenes de data).

### Avantatges

- Proporciona una comprovació senzilla en temps d'execució per verificar si un valor és un `Date`.
- Ajuda a prevenir errors de tipus assegurant que només les instàncies de `Date` superin la validació.
- Útil per validar entrades desconegudes (p. ex., càrregues útils d'API) abans d'utilitzar mètodes específics de dates.

## Ús

### Sintaxi

Funció:

- `isDate(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar per al tipus `Date`.

### Importació local de funció

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // aquí input és una Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isDate(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isDate](../_analysis/isDate.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 15:36:45 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>