package br.com.roberto.estudos.backendrevisaojavascriptapi.v1.model;/*
 *  @criado em: 21/10/2020 - {16:30}
 *  @projeto  : backend-revisaojavascript-api
 *  @autor    : roberto
 */

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

public class ListaNegociacao {

    public static List<Negociacao> listaNegociacao;

    public ListaNegociacao(){
        if (listaNegociacao==null) {
            listaNegociacao = new ArrayList<>();
        }
    }

    public void adicionar(Negociacao negociacao){
        ListaNegociacao.listaNegociacao.add(negociacao);
    }

    public void remover(Negociacao negociacao){
        ListaNegociacao.listaNegociacao.remove(negociacao);
    }

    public List<Negociacao> listarSemana(){
        listaNegociacao.clear();

        listaNegociacao.add(new Negociacao(LocalDateTime.of(2016, Month.MAY,16,13,21,32),
                        1,
                        new BigDecimal(150)));

        listaNegociacao.add(new Negociacao(LocalDateTime.of(2016, Month.MAY,16,13,21,32),
                2,
                new BigDecimal(250)));

        listaNegociacao.add(new Negociacao(LocalDateTime.of(2016, Month.MAY,16,13,21,32),
                3,
                new BigDecimal(350)));


        return listaNegociacao;
    }

    public List<Negociacao> listarSemanaAnterior(){

        listaNegociacao.clear();
        listaNegociacao.add(new Negociacao(LocalDateTime.of(2016, Month.MAY,16,13,22,03),
                1,
                new BigDecimal(450)));

        listaNegociacao.add(new Negociacao(LocalDateTime.of(2016, Month.JUNE,9,13,22,03),
                2,
                new BigDecimal(550)));

        listaNegociacao.add(new Negociacao(LocalDateTime.of(2016, Month.MAY,9,13,22,03),
                3,
                new BigDecimal(650)));


        return listaNegociacao;
    }

    public List<Negociacao> listarSemanaRetrasada(){

        listaNegociacao.clear();
        listaNegociacao.add(new Negociacao(LocalDateTime.of(2016, Month.MAY,2,13,22,8),
                1,
                new BigDecimal(750)));

        listaNegociacao.add(new Negociacao(LocalDateTime.of(2016, Month.MAY,2,13,22,3),
                2,
                new BigDecimal(950)));

        listaNegociacao.add(new Negociacao(LocalDateTime.of(2016, Month.JUNE,2,13,22,3),
                3,
                new BigDecimal(950)));

        return listaNegociacao;

    }

}
