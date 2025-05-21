Feature: Calculadora simples
  Como um usuário do sistema
  Quero poder ser capaz de realizar os calculos de soma, subtração, divisão e multiplicação e receber os meus resultados de forma correta

  Scenario: Fazer soma
    Given que estou na página principal
    When eu digitdo 6 no primeiro campo
    And digito 2 no segundo campo
    And clico no botão "+"
    Then vejo o resultado 8

  Scenario: Fazer subtração
    Given que estou na página principal
    When eu digitdo 8 no primeiro campo
    And digito 2 no segundo campo
    And clico no botão "-"
    Then vejo o resultado 6
