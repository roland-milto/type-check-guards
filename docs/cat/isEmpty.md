# isEmpty

## Descripció

Determina si un valor donat és buit, retornant `true` per a `null`, `undefined`, cadenes buides/amb espais en blanc,
arrays buits, `Map`/`Set` buits o objectes sense propietats enumerables pròpies.

### Cas d’ús

Fes servir `isEmpty` per validar entrades i detectar valors absents/en blanc en múltiples tipus de dades (p. ex., camps
de formulari, càrregues útils d'API, objectes de configuració) on `null`, `undefined`, cadenes amb espais en blanc,
col·leccions buides i objectes sense propietats s'han de tractar com a buits.

> **Nota per als usuaris de TypeScript:**
>
> `isEmpty` és una utilitat que retorna un booleà (no un predicat de tipus de TypeScript), de manera que per si sola no
> restringeix els tipus; fes-la servir per a validació/ramificació més que no pas per a restricció en temps de
> compilació.

### Avantatges

- Tracta `null` i `undefined` com a `true` per a les comprovacions de buidor.
- Considera buides les cadenes només amb espais en blanc en retallar-les abans de comprovar-ne la longitud.
- Admet tipus de contenidor comuns (arrays, `Map`, `Set`) i objectes plans sense propietats enumerables pròpies.
- Evita comptar propietats heretades fent comprovacions amb `hasOwnProperty`.
- Retorna un resultat booleà simple (`true`/`false`) adequat per a guàrdies i validació.

## Ús

### Sintaxi

Funció:

- `isEmpty(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar per veure si és buit.

### Importació local de funció

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isEmpty(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 16:17:36 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>