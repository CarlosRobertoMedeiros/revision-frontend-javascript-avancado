package br.com.roberto.estudos.backendrevisaojavascriptapi.v1.controller;
/*
 *  @criado em: 21/10/2020 - {16:18}
 *  @projeto  : backend-revisaojavascript-api
 *  @autor    : roberto
 */


import br.com.roberto.estudos.backendrevisaojavascriptapi.v1.model.ListaNegociacao;
import br.com.roberto.estudos.backendrevisaojavascriptapi.v1.model.Negociacao;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/v1/negociacoes", produces = MediaType.APPLICATION_JSON_VALUE)
public class NegociacoesController {

    @GetMapping("/semana")
    public ResponseEntity<List<Negociacao>> listarSemana(){
        ListaNegociacao listaNegociacao = new ListaNegociacao();
        return ResponseEntity.ok().body(listaNegociacao.listarSemana());
    }

    @GetMapping("/anterior")
    public ResponseEntity<List<Negociacao>> listarSemanaAnterior(){
        ListaNegociacao listaNegociacao = new ListaNegociacao();
        return ResponseEntity.ok().body(listaNegociacao.listarSemanaAnterior());
    }

    @GetMapping("/retrasada")
    public ResponseEntity<List<Negociacao>> listarSemanaRetrasada(){
        ListaNegociacao listaNegociacao = new ListaNegociacao();
        return ResponseEntity.ok().body(listaNegociacao.listarSemanaRetrasada());
    }
}
