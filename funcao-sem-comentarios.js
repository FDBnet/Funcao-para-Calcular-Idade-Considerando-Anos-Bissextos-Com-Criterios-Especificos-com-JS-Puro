function calcularIdade(dataNascimento, formato) {
    if (typeof dataNascimento !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(dataNascimento)) {
        return 'Data de nascimento inválida';
    }

    const [ano, mes, dia] = dataNascimento.split('-').map(Number);
    const hoje = new Date();
    const nascimento = new Date(ano, mes - 1, dia);
    
    if (nascimento.getFullYear() !== ano || nascimento.getMonth() + 1 !== mes || nascimento.getDate() !== dia) {
        return 'Data de nascimento inválida';
    }

    let anos = hoje.getFullYear() - ano;
    let meses = hoje.getMonth() - (mes - 1);
    let dias = hoje.getDate() - dia;

    if (dias < 0) {
        meses--;
        dias += new Date(ano, mes, 0).getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const resultados = [];
    if (formato.includes('ano')) resultados.push(`${anos} ${anos === 1 ? 'ano' : 'anos'}`);
    if (formato.includes('mes')) resultados.push(`${meses} ${meses === 1 ? 'mês' : 'meses'}`);
    if (formato.includes('dia')) resultados.push(`${dias} ${dias === 1 ? 'dia' : 'dias'}`);

    if (anos === 0 && meses === 0 && dias === 0) {
        return 'Recém-nascido';
    }

    return resultados.length > 0 ? resultados.join(', ') : 'Idade não disponível';
}
