# areStrings

## Descrição

`areStrings` verifica se um array não está vazio e se todos os seus elementos são strings, retornando `true` apenas
nesse caso.

### Caso de uso

Validar dados externos ou fornecidos pelo usuário (por exemplo, parâmetros de consulta, payloads JSON, campos CSV) para
garantir que você tenha uma lista não vazia de strings antes de processar.

> **Nota para utilizadores de TypeScript:**
>
> Use `areStrings` para validar arrays desconhecidos antes de aplicar lógica apenas de strings; ele retorna `false` para
> arrays vazios.

### Vantagens

- Garante que cada elemento seja uma string e rejeita arrays de tipos mistos retornando `false`.
- Rejeita arrays vazios, portanto `true` indica apenas uma lista não vazia de strings.
- Útil como uma verificação rápida em tempo de execução antes de realizar operações apenas com strings (por exemplo,
  `trim`, `toLowerCase`).

## Uso

### Sintaxe

Função:

- `areStrings(value)`

Parâmetros:

- `value`: Expected type `string[]`.

### Importação local da função

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input é um string[] não vazio em tempo de execução
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areStrings(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 13:20:05 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>