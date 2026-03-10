# isArray

## Descrição

`isArray` verifica se um determinado valor é um array e retorna `true` se for, caso contrário `false`.

### Caso de uso

Validar dados desconhecidos (por exemplo, JSON analisado ou respostas de API) para garantir que um valor seja um array
antes de iterar, indexar ou acessar `.length`.

> **Nota para utilizadores de TypeScript:**
>
> Use `isArray` quando você precisar de uma verificação em tempo de execução para arrays; ele retorna um booleano e é
> seguro chamar com valores `unknown`.

### Vantagens

- Usa o `Array.isArray` embutido para detecção confiável de arrays entre realms (por exemplo, iframes).
- Retorna um resultado booleano simples (`true`/`false`) adequado para guards e lógica de ramificação.
- Funciona com qualquer tipo de entrada porque o parâmetro é `unknown`.

## Uso

### Sintaxe

Função:

- `isArray(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input é um array em tempo de execução
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isArray(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isArray](../_analysis/isArray.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 11:31:46 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>