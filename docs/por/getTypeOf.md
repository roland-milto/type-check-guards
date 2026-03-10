# getTypeOf

## Descrição

`getTypeOf` retorna um rótulo de tipo detalhado e legível por humanos para um determinado valor, incluindo tipos
numéricos refinados e tipos específicos de objetos.

### Caso de uso

Use `getTypeOf` para normalizar a detecção de tipos na validação de entrada e em diagnósticos — por exemplo, para
rejeitar `nan`, aceitar apenas IDs `integer`, tratar strings numéricas como `decimal` de forma diferente de uma `string`
comum, ou para registrar tipos precisos de objetos como `date` e `regexp`.

> **Nota para utilizadores de TypeScript:**
>
> O tipo de retorno é `DataTypeAsString | string`. Trate-o como um rótulo descritivo; compare com literais conhecidos
> como `integer`, `float`, `nan`, `array`, `null` e `undefined` ao ramificar.

### Vantagens

- Retorna uma string de tipo mais granular do que o `typeof` do JavaScript, incluindo subtipos numéricos como `integer`,
  `float` e `nan`.
- Distingue `null` e `undefined` explicitamente como `null` e `undefined`.
- Detecta formatos comuns de strings numéricas e os reporta como `binary`, `octal`, `decimal` ou `hexadecimal` em vez de
  apenas `string`.
- Também identifica arrays como `array` e usa `Object.prototype.toString` para fornecer nomes específicos de tipos de
  objeto (por exemplo, `date`, `regexp`, `map`, `set`).
- É muito útil para validação, logging e depuração quando são necessários rótulos de tipo consistentes e legíveis por
  humanos.

## Uso

### Sintaxe

Função:

- `getTypeOf(value)`

Parâmetros:

- `value`: O valor para o qual determinar o tipo de dado.

### Importação local da função

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Verificações de exemplo
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.getTypeOf(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 13:14:11 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>