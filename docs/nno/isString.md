# isString

## Skildring

`isString` avgjer om ein gitt verdi er ein streng.

### Brukstilfelle

Valider brukarinput, API-payload-felt eller konfigurasjonsverdiar ved runtime for å sikre at ein verdi er ein streng før
du brukar strengoperasjonar (t.d. trimming, splitting, endring av store/små bokstavar).

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isString` til å validere `unknown` eller laust typa verdiar før du kallar strengmetodar; han returnerer `true`
> berre når `typeof value === "string"`.

### Fordelar

- Enkel og rask sjekk ved bruk av `typeof`.
- Returnerer eit føreseieleg boolsk resultat: `true` for strengar, elles `false`.
- Fungerer for både tomme og ikkje-tomme strengar.
- Nyttig som ein lettvekts runtime-guard før du utfører strengspesifikke operasjonar.

## Bruk

### Syntaks

Funksjon:

- `isString(value)`

Parameter:

- `value`: Verdien som skal testast for strengtype.

### Lokal funksjonsimport

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input er ein streng her
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isString(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isString](../_analysis/isString.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 13:15:02 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>