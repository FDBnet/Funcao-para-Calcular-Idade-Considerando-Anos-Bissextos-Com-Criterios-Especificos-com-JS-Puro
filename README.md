# Função para Calcular Idade Considerando Anos Bissextos Com Critérios Específicos com JS Puro
Função para Calcular Idade Considerando Anos Bissextos Com Critérios Específicos com JS Puro


Esta função JavaScript calcula a idade a partir de uma data de nascimento fornecida e retorna a idade formatada de acordo com o critério especificado (`ano`, `mes`, `dia`).

## Uso

Para usar esta função, inclua-a em seu projeto JavaScript e passe a data de nascimento no formato `AAAA-MM-DD` e o formato desejado para o retorno da idade.

### Parâmetros

- `dataNascimento`: String no formato `AAAA-MM-DD`.
- `formato`: String especificando o formato de retorno (`ano`, `mes`, `dia`).

### Retorno

A função retorna a idade formatada como uma string ou uma mensagem indicando que a data de nascimento é inválida ou a idade não está disponível.

### Exemplos

```javascript
console.log(calcularIdade('2000-05-25', 'ano')); // Retorna '23 anos'
console.log(calcularIdade('2000-05-25', 'ano mes dia')); // Retorna '23 anos, 0 meses, 15 dias'
console.log(calcularIdade('2024-05-25', 'ano mes dia')); // Retorna 'Recém-nascido' se a data atual for '2024-05-25'
