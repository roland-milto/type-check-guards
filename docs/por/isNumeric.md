# isNumeric

## Descrição

`isNumeric` determina se um determinado `value` é considerado numérico ao verificar seu tipo resolvido em relação a
`NUMERIC_TYPES`.

### Caso de uso

Use `isNumeric` para validar entradas (por exemplo, payloads de API, valores de formulário, configuração) antes de
realizar operações numéricas e para aceitar de forma consistente tipos semelhantes a numéricos (como `BigInt`) de acordo
com `NUMERIC_TYPES`.

> **Nota para utilizadores de TypeScript:**
>
> `isNumeric` é um predicado que retorna booleano; trate-o como uma verificação em tempo de execução para saber se um
> valor pertence ao conjunto de tipos numéricos definido pela biblioteca.

### Vantagens

- Usa `getTypeOf` junto com `NUMERIC_TYPES` para centralizar a lógica de detecção numérica e manter as verificações
  consistentes em toda a base de código.
- Retorna um booleano simples (`true`/`false`) para facilitar ramificações e uso no estilo de guard.
- Oferece suporte a múltiplas representações numéricas (por exemplo, `number`, `BigInt`) conforme definido por
  `NUMERIC_TYPES`.

## Uso

### Sintaxe

Função:

- `isNumeric(value)`

Parâmetros:

- `value`: O valor a ser verificado quanto ao tipo numérico.

### Importação local da função

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v é considerado numérico pelas regras de tipo da biblioteca
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isNumeric(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 15:54:12 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>