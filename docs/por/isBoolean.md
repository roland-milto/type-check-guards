# isBoolean

## Descrição

Determina se um determinado valor é um `boolean`.

### Caso de uso

Validar dados externos ou sem tipagem (por exemplo, variáveis de ambiente, payloads JSON, parâmetros de consulta) para
garantir que um valor seja um `boolean` antes de usá-lo em lógica condicional.

> **Nota para utilizadores de TypeScript:**
>
> Use `isBoolean` para restringir `unknown` a `boolean` antes de aplicar operações booleanas.

### Vantagens

- Verificação de tempo de execução simples e rápida usando `typeof`.
- Ajuda a validar entrada desconhecida antes de lógica específica de booleanos.
- Retorna um resultado `boolean` previsível (`true`/`false`).

## Uso

### Sintaxe

Função:

- `isBoolean(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input é booleano aqui
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isBoolean(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 14:37:35 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>