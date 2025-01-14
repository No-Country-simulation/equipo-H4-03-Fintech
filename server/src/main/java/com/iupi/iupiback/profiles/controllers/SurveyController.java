package com.iupi.iupiback.profiles.controllers;

import com.iupi.iupiback.profiles.dto.request.SurveyRequestDTO;
import com.iupi.iupiback.profiles.dto.response.SurveyResponseDTO;
import com.iupi.iupiback.profiles.mapper.SurveyMapper;
import com.iupi.iupiback.profiles.services.ISurveyService;
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
@RequestMapping("/api/survey")
@RequiredArgsConstructor
public class SurveyController {

    private final ISurveyService service;
    private final SurveyMapper mapper;

    //Búsqueda de encuesta por id
    @GetMapping("{id}")
    public ResponseEntity<SurveyResponseDTO> findById(@PathVariable("id") Integer surveyId) {
        return ResponseEntity.ok(mapper.toSurveyResponseDTO(service.findById(surveyId)));
    }

    //Guardar encuesta
    @PostMapping
    public ResponseEntity<SurveyResponseDTO> save(@Valid @RequestBody SurveyRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(mapper.toSurveyResponseDTO(service.save(mapper.toSurvey(dto))));
    }

    // Actualizar encuesta
    @PutMapping("/{id}")
    public ResponseEntity<SurveyResponseDTO> update(@Valid @RequestBody SurveyRequestDTO dto, @PathVariable("id") Integer id) {
        return ResponseEntity.ok(mapper.toSurveyResponseDTO(service.updateById(mapper.toSurvey(dto), id)));
    }

    //Eliminar encuesta
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //Listar encuestas
    @GetMapping
    public ResponseEntity<Page<SurveyResponseDTO>> findAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
                                                         @RequestParam(defaultValue = "title") String sortField, @RequestParam(defaultValue = "desc") String sortOrder) {
        List<SurveyResponseDTO> list = service.findSurveys(page,size,sortField,sortOrder).stream().map(mapper::toSurveyResponseDTO).collect(Collectors.toList());
        Page<SurveyResponseDTO> listResponse = new PageImpl<>(list);
        return new ResponseEntity<>(listResponse, HttpStatus.OK);
    }

}
