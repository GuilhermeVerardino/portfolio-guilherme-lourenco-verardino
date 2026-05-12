# 🎬 Laboratório de Classificação Visual: Viés e Ética em IA

## 📝 Descrição do Projeto
Este projeto consiste em um experimento prático desenvolvido para a atividade Laboratório de Classificação Visual, focado na identificação e análise de vieses em modelos de inteligência artificial. Utilizando o *Teachable Machine* do Google, treinamos um modelo de classificação de imagem com dados deliberadamente enviesados para observar como a seleção de dados corrompe a lógica algorítmica.

O objetivo principal é mitigar a "confiança cega" em sistemas automatizados, demonstrando que a inteligência artificial reflete diretamente os preconceitos presentes em seu conjunto de treinamento. O sistema processa imagens em tempo real para distinguir entre "Perfil Liderança" e "Perfil Operacional", utilizando critérios estereotipados para documentar falhas críticas de inferência.

![Dashboard de Classificação](https://placehold.co/800x400?text=Dashboard+de+Classificacao+de+Vies)
*Figura 1: Interface de treinamento e teste exibindo a classificação de perfis baseada em padrões visuais.*

## 🚀 Tecnologias Utilizadas
*   **Ferramentas:** Teachable Machine (Google), Google AI Studio
*   **Linguagem:** Markdown (Documentação Técnica)
*   **Conceitos:** Deep Learning, Classificação de Imagem, Ética em IA e Human-in-the-loop

## 📊 Resultados e Aprendizados
O experimento fornece evidências sólidas de como o viés de seleção impacta a acurácia ética do modelo, demonstrando que a lógica matemática é vulnerável a curadorias de dados viciadas.

### Memorial de Impacto e Ética
*   **Mecanismo do Viés:** A seleção restrita de dados **corrompe** a lógica do algoritmo porque **limita** o aprendizado a padrões superficiais e irrelevantes. O sistema **associa** o conceito de "Liderança" a elementos acessórios (como vestimentas formais) em vez de competências humanas, o que **gera** uma visão distorcida da realidade onde atributos físicos sobrepõem-se à essência dos dados.
*   **Consequência Social:** O sistema **marginaliza** indivíduos que não **correspondem** aos estereótipos de treinamento, **causando** invisibilidade profissional e exclusão sistêmica. Essa classificação incorreta **perpetua** desigualdades históricas e **afeta** o desenvolvimento de carreiras baseadas puramente no mérito e na diversidade.
*   **Ação Mitigadora:** A intervenção *Human-in-the-loop* **garante** a equidade através de uma curadoria diversa e crítica. Um auditor humano **avalia** o dataset antes do treinamento, **identifica** lacunas representativas e **insere** novos dados que **anulam** correlações discriminatórias, assegurando que o modelo final **reflita** a pluralidade humana de forma justa.

![Análise de Métricas](https://placehold.co/800x400?text=Registro+de+Falha+de+Classificacao)
*Figura 2: Registro do erro de classificação (falso positivo/negativo) devido ao viés dos dados.*

## 🔧 Como Executar
1.  **Acesse** o [Teachable Machine](https://teachablemachine.withgoogle.com/).
2.  **Crie** duas classes de classificação: "Perfil Liderança" e "Perfil Operacional".
3.  **Alimente** o modelo com 20 imagens deliberadamente enviesadas para cada categoria (ex: ternos para liderança, roupas informais para operacional).
4.  **Realize** testes de inferência com pessoas ou objetos que não se encaixem nos padrões capturados.
5.  **Documente** o erro e analise os impactos éticos utilizando o memorial acima.

![Pipeline de Dados](https://placehold.co/800x400?text=Pipeline+Ethical+AI+Training)
*Figura 3: Representação visual do pipeline de dados focado em curadoria ética e auditoria.*
