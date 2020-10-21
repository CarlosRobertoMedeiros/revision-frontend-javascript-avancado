package br.com.roberto.estudos.backendrevisaojavascriptapi.v1.model;/*
 *  @criado em: 21/10/2020 - {16:27}
 *  @projeto  : backend-revisaojavascript-api
 *  @autor    : roberto
 */

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class Negociacao {

    public Negociacao(LocalDateTime data, Integer quantidade, BigDecimal valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    private LocalDateTime data;
    private Integer quantidade;
    private BigDecimal valor;

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }


}
