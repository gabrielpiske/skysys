document.addEventListener('DOMContentLoaded', function() {
    // Navegação entre páginas
    const menuLinks = document.querySelectorAll('.main-menu a');
    const pages = document.querySelectorAll('.page');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page') + '-page';
            
            // Esconde todas as páginas
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Mostra a página selecionada
            document.getElementById(pageId).classList.add('active');
        });
    });
    
    // Botão de voltar
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Esconde todas as páginas
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Mostra a página inicial
            document.getElementById('home-page').classList.add('active');
        });
    });
    
    // Relatórios - Seleção de mês
    const reportMonthButtons = document.querySelectorAll('#reports-page .month-btn');
    const reportContent = document.querySelector('#reports-page .report-content');
    
    reportMonthButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            reportMonthButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe active ao botão clicado
            this.classList.add('active');
            
            const month = this.getAttribute('data-month');
            const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            
            // Gera conteúdo fictício para o relatório
            reportContent.innerHTML = `
                <h4>Relatório de ${monthNames[month-1]} - 2024</h4>
                <div class="report-details">
                    <p><strong>Total de Vendas:</strong> R$ ${(Math.random() * 500000 + 100000).toFixed(2)}</p>
                    <p><strong>Despesas Operacionais:</strong> R$ ${(Math.random() * 200000 + 50000).toFixed(2)}</p>
                    <p><strong>Lucro Líquido:</strong> R$ ${(Math.random() * 300000 + 80000).toFixed(2)}</p>
                    <p><strong>Funcionários Ativos:</strong> ${Math.floor(Math.random() * 20 + 30)}</p>
                    <p><strong>Produtividade Média:</strong> ${(Math.random() * 30 + 70).toFixed(1)}%</p>
                </div>
                <div class="report-summary">
                    <p>O mês de ${monthNames[month-1]} apresentou um desempenho ${Math.random() > 0.5 ? 'acima' : 'abaixo'} da média esperada. 
                    As principais ${Math.random() > 0.5 ? 'vendas' : 'despesas'} foram ${Math.random() > 0.5 ? 'no setor de produção' : 'no departamento administrativo'}.</p>
                </div>
            `;
        });
    });
    
    // Treinamentos - Seleção de mês
    const trainingMonthButtons = document.querySelectorAll('#training-page .month-btn');
    const trainingContent = document.querySelector('#training-page .training-content');
    
    trainingMonthButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            trainingMonthButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe active ao botão clicado
            this.classList.add('active');
            
            const month = this.getAttribute('data-month');
            const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            
            // Gera conteúdo fictício para treinamentos
            const trainingTypes = ['Segurança no Trabalho', 'Operação de Máquinas', 'Qualidade', 'Soft Skills', 'Novos Processos'];
            const departments = ['Produção', 'Administrativo', 'Logística', 'TI', 'RH'];
            const trainers = ['Carlos Silva', 'Ana Paula', 'Roberto Almeida', 'Juliana Santos', 'Marcos Oliveira'];
            
            let trainingsHTML = `<h4>Treinamentos Programados para ${monthNames[month-1]} - 2024</h4>`;
            
            // Gera de 2 a 5 treinamentos aleatórios
            const numTrainings = Math.floor(Math.random() * 4) + 2;
            
            for (let i = 0; i < numTrainings; i++) {
                trainingsHTML += `
                    <div class="training-item">
                        <h5>${trainingTypes[Math.floor(Math.random() * trainingTypes.length)]}</h5>
                        <p><strong>Data:</strong> ${Math.floor(Math.random() * 28) + 1}/${month}</p>
                        <p><strong>Horário:</strong> ${Math.floor(Math.random() * 5) + 8}:00 - ${Math.floor(Math.random() * 5) + 13}:00</p>
                        <p><strong>Departamento:</strong> ${departments[Math.floor(Math.random() * departments.length)]}</p>
                        <p><strong>Instrutor:</strong> ${trainers[Math.floor(Math.random() * trainers.length)]}</p>
                        <p><strong>Participantes:</strong> ${Math.floor(Math.random() * 15) + 5}</p>
                    </div>
                `;
            }
            
            trainingContent.innerHTML = trainingsHTML;
        });
    });
    
    // Manutenção - Seleção de categoria
    const categoryButtons = document.querySelectorAll('#maintenance-page .category-btn');
    const maintenanceContent = document.querySelector('#maintenance-page .maintenance-content');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe active ao botão clicado
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            const categoryNames = {
                'producao': 'Produção',
                'embalagem': 'Embalagem',
                'transporte': 'Transporte',
                'informatica': 'Informática'
            };
            
            // Gera conteúdo fictício para manutenção
            const machineTypes = {
                'producao': ['Máquina de Corte', 'Prensa Hidráulica', 'Esteira Transportadora', 'Injetora'],
                'embalagem': ['Empacotadora', 'Seladora', 'Etiquetadora', 'Paletizadora'],
                'transporte': ['Empilhadeira', 'Guincho', 'Rebocador', 'Transportador de Carga'],
                'informatica': ['Servidor', 'Workstation', 'Notebook', 'Impressora Industrial']
            };
            
            const statuses = ['Concluída', 'Pendente', 'Em Andamento', 'Agendada'];
            const priorities = ['Alta', 'Média', 'Baixa'];
            
            let maintenanceHTML = `<h4>Relatórios de Manutenção - ${categoryNames[category]}</h4>`;
            
            // Gera de 3 a 6 relatórios de manutenção
            const numReports = Math.floor(Math.random() * 4) + 3;
            
            for (let i = 0; i < numReports; i++) {
                maintenanceHTML += `
                    <div class="maintenance-item">
                        <h5>${machineTypes[category][Math.floor(Math.random() * machineTypes[category].length)]} #${Math.floor(Math.random() * 20) + 1}</h5>
                        <p><strong>Última Manutenção:</strong> ${Math.floor(Math.random() * 28) + 1}/${Math.floor(Math.random() * 12) + 1}/2024</p>
                        <p><strong>Status:</strong> <span class="status-${statuses[Math.floor(Math.random() * statuses.length)].toLowerCase().replace(' ', '-')}">${statuses[Math.floor(Math.random() * statuses.length)]}</span></p>
                        <p><strong>Prioridade:</strong> ${priorities[Math.floor(Math.random() * priorities.length)]}</p>
                        <p><strong>Descrição:</strong> ${Math.random() > 0.5 ? 'Troca de peças' : 'Ajuste de calibração'} ${Math.random() > 0.5 ? 'preventiva' : 'corretiva'}</p>
                        <p><strong>Técnico Responsável:</strong> Técnico ${['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]}</p>
                    </div>
                `;
            }
            
            maintenanceContent.innerHTML = maintenanceHTML;
        });
    });
    
    // Lucros - Visualização
    const profitViewButtons = document.querySelectorAll('#profits-page .profit-view-btn');
    const profitTableBody = document.querySelector('#profit-table-body');
    let profitChart = null;
    
    profitViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            profitViewButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe active ao botão clicado
            this.classList.add('active');
            
            const viewType = this.getAttribute('data-view');
            updateProfitChart(viewType);
            updateProfitTable(viewType);
        });
    });
    
    // Atualiza o gráfico de lucros
    function updateProfitChart(viewType) {
        const ctx = document.getElementById('profitChart').getContext('2d');
        
        // Destrói o gráfico anterior se existir
        if (profitChart) {
            profitChart.destroy();
        }
        
        let labels, grossData, expensesData, netData;
        
        if (viewType === 'monthly') {
            labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
            grossData = labels.map(() => Math.random() * 300000 + 150000);
            expensesData = labels.map(() => Math.random() * 150000 + 50000);
            netData = grossData.map((gross, i) => gross - expensesData[i]);
        } else if (viewType === 'quarterly') {
            labels = ['1º Trim', '2º Trim', '3º Trim', '4º Trim'];
            grossData = labels.map(() => Math.random() * 900000 + 450000);
            expensesData = labels.map(() => Math.random() * 450000 + 150000);
            netData = grossData.map((gross, i) => gross - expensesData[i]);
        } else { // annual
            labels = ['2019', '2020', '2021', '2022', '2024'];
            grossData = labels.map(() => Math.random() * 3600000 + 1800000);
            expensesData = labels.map(() => Math.random() * 1800000 + 600000);
            netData = grossData.map((gross, i) => gross - expensesData[i]);
        }
        
        profitChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Lucro Bruto',
                        data: grossData,
                        backgroundColor: 'rgba(25, 118, 210, 0.7)',
                        borderColor: 'rgba(25, 118, 210, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Despesas',
                        data: expensesData,
                        backgroundColor: 'rgba(255, 99, 132, 0.7)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Lucro Líquido',
                        data: netData,
                        backgroundColor: 'rgba(75, 192, 192, 0.7)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        type: 'line',
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'R$ ' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += 'R$ ' + context.raw.toLocaleString();
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Atualiza a tabela de lucros
    function updateProfitTable(viewType) {
        let rowsHTML = '';
        
        if (viewType === 'monthly') {
            const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            
            monthNames.forEach(month => {
                const gross = Math.random() * 300000 + 150000;
                const expenses = Math.random() * 150000 + 50000;
                const net = gross - expenses;
                
                rowsHTML += `
                    <tr>
                        <td>${month}</td>
                        <td>R$ ${gross.toFixed(2)}</td>
                        <td>R$ ${expenses.toFixed(2)}</td>
                        <td>R$ ${net.toFixed(2)}</td>
                    </tr>
                `;
            });
        } else if (viewType === 'quarterly') {
            const quarters = ['1º Trimestre', '2º Trimestre', '3º Trimestre', '4º Trimestre'];
            
            quarters.forEach(quarter => {
                const gross = Math.random() * 900000 + 450000;
                const expenses = Math.random() * 450000 + 150000;
                const net = gross - expenses;
                
                rowsHTML += `
                    <tr>
                        <td>${quarter}</td>
                        <td>R$ ${gross.toFixed(2)}</td>
                        <td>R$ ${expenses.toFixed(2)}</td>
                        <td>R$ ${net.toFixed(2)}</td>
                    </tr>
                `;
            });
        } else { // annual
            const years = ['2019', '2020', '2021', '2022', '2024'];
            
            years.forEach(year => {
                const gross = Math.random() * 3600000 + 1800000;
                const expenses = Math.random() * 1800000 + 600000;
                const net = gross - expenses;
                
                rowsHTML += `
                    <tr>
                        <td>${year}</td>
                        <td>R$ ${gross.toFixed(2)}</td>
                        <td>R$ ${expenses.toFixed(2)}</td>
                        <td>R$ ${net.toFixed(2)}</td>
                    </tr>
                `;
            });
        }
        
        profitTableBody.innerHTML = rowsHTML;
    }
    
    // Efeitos no logo
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('click', () => {
            // Volta para a página inicial ao clicar no logo
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('home-page').classList.add('active');
        });
        
        // Efeito de hover sutil
        logoContainer.style.transition = 'transform 0.3s ease';
        logoContainer.addEventListener('mouseenter', () => {
            logoContainer.style.transform = 'scale(1.02)';
        });
        logoContainer.addEventListener('mouseleave', () => {
            logoContainer.style.transform = 'scale(1)';
        });
    }
    
    // Inicializa a página de lucros com a visualização mensal
    updateProfitChart('monthly');
    updateProfitTable('monthly');
    
    // Botão de logout
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', function() {
        alert('Você foi desconectado do sistema skysys.');
    });
});