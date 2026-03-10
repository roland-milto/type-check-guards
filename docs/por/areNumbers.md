# areNumbers

## Descrição

`areNumbers` verifica se um valor é um array não vazio em que todos os elementos são números.

### Caso de uso

Validar dados fornecidos por usuários ou por APIs para garantir que sejam um array não vazio de números antes de
calcular totais, médias ou outras agregações numéricas.

> **Nota para utilizadores de TypeScript:**
>
> Use `areNumbers` para validar arrays desconhecidos antes de realizar cálculos numéricos; ele retorna `false` para
> arrays vazios e para arrays que contenham qualquer valor que não seja número.

### Vantagens

- Retorna `true` somente quando a entrada é um array não vazio e cada elemento é um número.
- Evita falsos positivos ao rejeitar arrays vazios e entradas que não são arrays.
- Útil como uma guarda antes de operações numéricas (por exemplo, soma, média) para evitar erros em tempo de execução.

## Uso

### Sintaxe

Função:

- `areNumbers(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos numéricos.

### Importação local da função

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areNumbers(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 13:05:39 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>