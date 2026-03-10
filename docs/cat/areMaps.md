# areMaps

## Descripció

`areMaps` determina si una matriu donada no és buida i si tots els seus elements són instàncies de `Map`.

### Cas d’ús

Valida una entrada desconeguda (p. ex., d'una anàlisi de JSON, API externes o fonts dinàmiques) abans de tractar-la com
una llista no buida d'objectes `Map`.

> **Nota per als usuaris de TypeScript:**
>
> Retorna `false` per a una matriu buida; només retorna `true` quan la matriu està plena i cada element és un `Map`.

### Avantatges

- Assegura que cada element sigui una instància de `Map`, retornant `true` només quan tota la matriu supera la
  comprovació.
- Rebutja les matrius buides per disseny, evitant l'acceptació accidental de «sense dades» com a entrada vàlida.
- Útil com a guarda abans de fer operacions específiques de `Map` (p. ex., `.get()`, `.set()`, iteració) en una
  col·lecció.

## Ús

### Sintaxi

Funció:

- `areMaps(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar.

### Importació local de funció

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // es garanteix que items sigui un array no buit d'instàncies de Map en temps d'execució
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // fals per a: arrays buits o arrays que contenen qualsevol valor que no sigui un Map
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areMaps(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 16:11:51 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>