# 🎨 QR Code Styling - Advanced Generator
 
## 📝 Descrição do Projeto
Este projeto consiste em um gerador avançado de QR Codes de alta fidelidade, inspirado no sistema **QR Code Styling**. O objetivo principal é oferecer uma interface intuitiva e profissional para a criação de identidades digitais customizáveis, permitindo ajustes detalhados em tempo real (*Vibecoding*) para garantir a harmonia visual entre o código e a marca do usuário.
 
Desenvolvido com foco em **Clean Code e Flexibilidade**, o sistema processa parâmetros complexos de estilização — como geometria de pixels, estilos de cantos e inserção de logotipos centrais — utilizando a biblioteca `qr-code-styling` de forma reativa para fornecer um preview instantâneo e preciso.
 
![./image/image1.png)
*Figura 1: Dashboard principal do sistema exibindo opções de estilização e preview LIVE.*
 
## 🚀 Tecnologias Utilizadas
* **Framework:** React 19 + TypeScript
* **Estilização:** Tailwind CSS (v4)
* **Componentes UI:** shadcn/ui (Accordion, Slider, Input, Select)
* **Biblioteca Core:** qr-code-styling
* **Ícones:** Lucide React
 
## 📊 Resultados e Aprendizados
O projeto alcançou um alto nível de fidelidade visual e funcional, demonstrando a eficácia da componentização atômica.
* **Sincronização em Tempo Real:** Implementei um `QRProvider` robusto que gerencia o estado global de opções, garantindo latência zero nas atualizações.
* **Escala Responsiva:** Desenvolvi uma lógica de container que escala inteligentemente o QR Code (Canvas/SVG), prevenindo overflow mesmo em resoluções de até 1000px.
* **Design Sistêmico:** Aprendi a utilizar gradientes cromáticos dinâmicos no CSS e a personalizar componentes de UI para uma estética "Brutalist Minimalista".
 
![Figura 2: Detalhe das ferramentas de ajuste de Dots e Corners](https://placehold.co/800x400/701a75/ffffff?text=Styling+Options+Detail)
*Figura 2: Análise das opções de customização de pixels e cantos.*
 
## 🔧 Como Executar
1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Inicie o servidor: `npm run dev`.
 
![Figura 3: Representação visual do pipeline de renderização reativa](https://placehold.co/800x400/e5e5e5/701a75?text=Data+Flow+and+Rendering+Pipeline)
*Figura 3: Representação visual do pipeline de dados e renderização.*
 
---
[Voltar ao início](https://github.com/guilv56)
