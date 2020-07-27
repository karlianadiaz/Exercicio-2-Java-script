alert ("comparacao de idade" );

        let nome1 = prompt ('Digite seu Nome');
        let sobrenome1 = prompt ("Digite o Sobrenome");
        let idade1 = Number(prompt ("Digite sua idade"));
        let nome2 = prompt ('Digite o nome do ussuario 2');
        let sobrenome2 = prompt ("Digite o Sobrenome do usuario 2");
        let idade2 = Number (prompt ("digite a idade do usuario 2"));
        console.log (`Dados de ${nome1} e ${nome2}`)


        if (idade1>idade2) {
            console.log(`${nome1} sua idade é maior em comparação com ${nome2}`)
        }


        else if 
        (idade1<idade2) {
            console.log(`${nome2} sua idade é maior em comparação com ${nome1}`)
        }

        else if (idade1==idade2) {
            console.log (`${nome1} e ${nome2} suas idades são iguais`)
        }