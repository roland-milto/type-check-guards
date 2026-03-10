# isFilledArray

## Descrição

Verifica se `value` é um array com pelo menos um elemento, retornando `true` ou `false`.

### Caso de uso

Use `isFilledArray` para validar dados de entrada (por exemplo, payloads de API, valores de formulário, configuração)
antes de iterar, acessar o primeiro elemento ou aplicar lógica que exija pelo menos um item.

> **Nota para utilizadores de TypeScript:**
>
> `isFilledArray` é uma guarda em tempo de execução que retorna um booleano; não restringe os tipos dos elementos além
> de confirmar que o array não está vazio.

### Vantagens

- Verificação simples e rápida de um array não vazio usando `Array.isArray` e uma verificação de comprimento.
- Ajuda a evitar erros em tempo de execução quando o código pressupõe que um array tem pelo menos um elemento.
- Resultado booleano claro: retorna `true` para arrays não vazios e `false` caso contrário.

## Uso

### Sintaxe

Função:

- `isFilledArray(value)`

Parâmetros:

- `value`: O valor a verificar para saber se é um array não vazio.

### Importação local da função

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input é um array não vazio em tempo de execução
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isFilledArray(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 11:48:32 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>