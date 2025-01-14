package com.iupi.iupiback.profiles.controllers;

import com.iupi.iupiback.profiles.dto.request.QuestionRequestDTO;
import com.iupi.iupiback.profiles.dto.response.QuestionResponseDTO;
import com.iupi.iupiback.profiles.mapper.QuestionMapper;
import com.iupi.iupiback.profiles.services.IQuestionService;
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
@RequestMapping("/api/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final IQuestionService service;
    private final QuestionMapper mapper;

    //Búsqueda de encuesta por id
    @GetMapping("{id}")
    public ResponseEntity<QuestionResponseDTO> findById(@PathVariable("id") Integer questionId) {
        return ResponseEntity.ok(mapper.toQuestionResponseDTO(service.findById(questionId)));
    }

    //Guardar encuesta
    @PostMapping
    public ResponseEntity<QuestionResponseDTO> save(@Valid @RequestBody QuestionRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(mapper.toQuestionResponseDTO(service.save(mapper.toQuestion(dto))));
    }

    // Actualizar encuesta
    @PutMapping("/{id}")
    public ResponseEntity<QuestionResponseDTO> update(@Valid @RequestBody QuestionRequestDTO dto, @PathVariable("id") Integer id) {
        return ResponseEntity.ok(mapper.toQuestionResponseDTO(service.updateById(mapper.toQuestion(dto), id)));
    }

    //Eliminar encuesta
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //Listar encuestas
    @GetMapping
    public ResponseEntity<Page<QuestionResponseDTO>> findAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
                                                           @RequestParam(defaultValue = "survey_id") String sortField, @RequestParam(defaultValue = "desc") String sortOrder) {
        List<QuestionResponseDTO> list = service.findQuestions(page,size,sortField,sortOrder).stream().map(mapper::toQuestionResponseDTO).collect(Collectors.toList());
        Page<QuestionResponseDTO> listResponse = new PageImpl<>(list);
        return new ResponseEntity<>(listResponse, HttpStatus.OK);
    }

}
