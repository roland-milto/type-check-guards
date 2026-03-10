# isFalse

## Descrição

`isFalse` verifica se um determinado valor é estritamente igual ao literal booleano `false`.

### Caso de uso

Validar dados desconhecidos (por exemplo, de JSON, parâmetros de consulta ou entrada do usuário) em que apenas o valor
booleano explícito `false` deve ser tratado como um sinalizador válido, e todo o restante deve ser rejeitado.

> **Nota para utilizadores de TypeScript:**
>
> Use `isFalse` quando você precisar aceitar apenas o literal `false` e rejeitar todos os outros valores falsy; ele
> retorna `true` somente para `value === false`.

### Vantagens

- Fornece uma verificação estrita para o literal booleano `false` sem coerção.
- Ajuda a distinguir `false` de outros valores falsy como `0`, `""`, `null` e `undefined`.
- Melhora a legibilidade ao tornar a intenção explícita ao validar uma entrada desconhecida.

## Uso

### Sintaxe

Função:

- `isFalse(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input é exatamente false aqui
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isFalse(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 16:44:13 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>