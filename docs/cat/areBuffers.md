# areBuffers

## Descripció

`areBuffers` comprova si el valor proporcionat és una matriu no buida i emplenada on cada element és un `Buffer`,
retornant `true` si és així i `false` en cas contrari.

### Cas d’ús

Valida matrius de fragments entrants (p. ex., de streams, pujades de fitxers o paquets de xarxa) per assegurar que totes
les parts són instàncies de `Buffer` abans de concatenar, descodificar o passar-les a funcions criptogràfiques o de
processament binari.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areBuffers` per validar `unknown[]` abans de cridar API específiques de Buffer com `Buffer.concat`,
> assegurant que la funció retorna `true` només quan cada element és un `Buffer`.

### Avantatges

- Assegura que cada element de l'entrada sigui una instància de `Buffer` de Node.js, retornant `true` només quan tota la
  matriu coincideix.
- Rebutja aviat les entrades no vàlides exigint una matriu no buida i emplenada; retorna `false` per a matrius buides o
  valors que no són matrius.
- Útil com a guarda abans de fer operacions només de buffer (p. ex., concatenació, hashing, protocols binaris).

## Ús

### Sintaxi

Funció:

- `areBuffers(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per a instàncies de buffer.

### Importació local de funció

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areBuffers(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 16:24:30 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>