# isBigInt

## Bschrybig

`isBigInt` prüeft, öb e gegebene Wärt vom Typ `bigint` isch, und git `true` zrugg für BigInt-Primitive und susch
`false`.

### Aawändig

Wärt validiere und iischränke, wo us untypisierte Quelle chömed (z.B. JSON-Parsing, User-Input, externi APIs), bevor
BigInt-spezifischi Berechnige gmacht wärde oder si i BigInt-nur-Fälder gspeicheret wärde.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isBigInt`, zum `unknown` uf `bigint` iizschränke, bevor du BigInt-Arithmetik machsch (z.B. `+`, `*`), wo
> BigInt-Operande brucht.

### Vorteil

- Bietet e eifachi, zueverlässigi Runtime-Prüefig für dr `bigint`-Primitive-Typ.
- Hilft, `unknown`-Wärt z iischränke, bevor BigInt-nur-Operatione usgführt wärde.
- Verhindert Falsch-Positiv: normali Zahle, Strings und anderi Type gäbe `false` zrugg.

## Verwendig

### Syntax

Funktion:

- `isBigInt(value)`

Parameter:

- `value`: Dr Wärt, wo söll überprüeft wärde.

### Lokale Funktions-Import

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // wahr
console.log(isBigInt(10));  // falsch
console.log(isBigInt("10")); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isBigInt(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 23:31:51 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>