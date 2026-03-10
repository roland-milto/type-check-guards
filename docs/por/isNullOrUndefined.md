# isNullOrUndefined

## Descrição

Verifica se um determinado valor é `null` ou `undefined`.

### Caso de uso

Use `isNullOrUndefined` quando você precisar tratar tanto `null` quanto `undefined` como “sem valor”, como ao validar
entradas opcionais, normalizar payloads de API ou proteger caminhos de código antes de desreferenciar um valor
potencialmente ausente.

> **Nota para utilizadores de TypeScript:**
>
> Use `isNullOrUndefined` para se proteger contra valores ausentes antes de acessar propriedades ou chamar métodos; ele
> retorna `true` apenas para `null` e `undefined`.

### Vantagens

- Fornece uma verificação clara e reutilizável para detectar `null` e `undefined` em um só lugar.
- Retorna um booleano simples (`true`/`false`) que é fácil de compor em condições e validações.
- Ajuda a evitar erros comuns em tempo de execução ao verificar valores ausentes antes de acessar propriedades ou chamar
  métodos.

## Uso

### Sintaxe

Função:

- `isNullOrUndefined(value)`

Parâmetros:

- `value`: O valor a ser verificado quanto a `null` ou `undefined`.

### Importação local da função

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // lidar com valor ausente
}

console.log(isNullOrUndefined(b)); // verdadeiro
console.log(isNullOrUndefined(c)); // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isNullOrUndefined(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 00:34:59 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>