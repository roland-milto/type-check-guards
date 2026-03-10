# isDecimal

## Descrição

`isDecimal` verifica se um valor é uma representação em string de um decimal, sem espaços em branco no início/fim e com
um formato decimal válido.

### Caso de uso

Validar campos de formulário, payloads de API ou valores de configuração que devem ser fornecidos como uma string
decimal (opcionalmente com sinal), sem qualquer espaço em branco ao redor, antes de analisar ou armazenar.

> **Nota para utilizadores de TypeScript:**
>
> Use `isDecimal` para validar a entrada do usuário antes de convertê-la (por exemplo, com `Number(value)`),
> especialmente quando espaços em branco devem ser rejeitados.

### Vantagens

- Valida rigorosamente que a entrada é uma string e corresponde a um padrão de literal decimal.
- Rejeita espaços em branco no início e no fim (incluindo caracteres de controle) para evitar análise ambígua.
- Faz pré-verificações rápidas (verificação de tipo e do primeiro/último caractere) antes de executar a regex.
- Retorna um resultado booleano simples (`true`/`false`) adequado para guards e validação de entrada.

## Uso

### Sintaxe

Função:

- `isDecimal(value)`

Parâmetros:

- `value`: O valor a verificar quanto ao formato de string decimal.

### Importação local da função

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v é uma string aqui (validada em tempo de execução)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isDecimal(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 15:54:07 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>