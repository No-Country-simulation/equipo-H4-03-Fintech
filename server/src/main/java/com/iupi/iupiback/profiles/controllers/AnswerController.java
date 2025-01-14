package com.iupi.iupiback.profiles.controllers;

import com.iupi.iupiback.profiles.dto.request.AnswerRequestDTO;
import com.iupi.iupiback.profiles.dto.response.AnswerResponseDTO;
import com.iupi.iupiback.profiles.mapper.AnswerMapper;
import com.iupi.iupiback.profiles.services.IAnswerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/answers")
@RequiredArgsConstructor
public class AnswerController {
    private final IAnswerService service;
    private final AnswerMapper mapper;

    //Búsqueda de encuesta por id
    @GetMapping("{id}")
    public ResponseEntity<AnswerResponseDTO> findById(@PathVariable("id") Integer answerId) {
        return ResponseEntity.ok(mapper.toAnswerResponseDTO(service.findById(answerId)));
    }

    //Guardar encuesta
    @PostMapping
    public ResponseEntity<AnswerResponseDTO> save(@Valid @RequestBody AnswerRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(mapper.toAnswerResponseDTO(service.save(mapper.toAnswer(dto))));
    }

    // Actualizar encuesta
    @PutMapping("/{id}")
    public ResponseEntity<AnswerResponseDTO> update(@Valid @RequestBody AnswerRequestDTO dto, @PathVariable("id") Integer id) {
        return ResponseEntity.ok(mapper.toAnswerResponseDTO(service.updateById(mapper.toAnswer(dto), id)));
    }

    //Eliminar encuesta
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //Listar encuestas
    @GetMapping
    public ResponseEntity<Page<AnswerResponseDTO>> findAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
                                                           @RequestParam(defaultValue = "question_id") String sortField, @RequestParam(defaultValue = "desc") String sortOrder) {
        List<AnswerResponseDTO> list = service.findAnswers(page,size,sortField,sortOrder).stream().map(mapper::toAnswerResponseDTO).collect(Collectors.toList());
        Page<AnswerResponseDTO> listResponse = new PageImpl<>(list);
        return new ResponseEntity<>(listResponse, HttpStatus.OK);
    }

}
