# areBinaries

## Descripció

Comprova si el valor proporcionat és una matriu no buida de cadenes binàries vàlides i retorna `true` només si tots els
elements passen la validació.

### Cas d’ús

Utilitza `areBinaries` quan rebis una llista desconeguda (p. ex., de JSON, formularis o API) i necessitis assegurar-te
que és una matriu no buida de cadenes binàries abans d'analitzar-la o processar-la.

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `areBinaries` per validar una entrada desconeguda abans de convertir cadenes binàries a nombres/BigInts;
> garanteix que la matriu no és buida i que cada element és una cadena binària vàlida.

### Avantatges

- Valida que un valor sigui una matriu no buida on cada element és una cadena binària vàlida.
- Retorna un resultat booleà simple (`true`/`false`) adequat per a guards, retorns anticipats i validació d'entrada.
- Evita errors d'anàlisi posteriors rebutjant matrius que continguin qualsevol entrada no binària.

## Ús

### Sintaxi

Funció:

- `areBinaries(array)`

Paràmetres:

- `array`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // cert
console.log(areBinaries(b)); // fals
console.log(areBinaries([])); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areBinaries(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 23:13:59 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>