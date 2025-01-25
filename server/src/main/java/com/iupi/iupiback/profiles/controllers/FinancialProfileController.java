package com.iupi.iupiback.profiles.controllers;

import com.iupi.iupiback.auth.config.security.oauth2.users.CurrentUser;
import com.iupi.iupiback.auth.config.security.oauth2.users.UserPrincipal;
import com.iupi.iupiback.profiles.dto.request.AnswerRequestDTO;
import com.iupi.iupiback.profiles.dto.request.FinancialProfileRequestDTO;
import com.iupi.iupiback.profiles.dto.response.FinancialProfileResponseDTO;
import com.iupi.iupiback.profiles.mapper.FinancialProfileMapper;

import com.iupi.iupiback.profiles.services.IFinancialProfileService;
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
@RequestMapping("/financial-profile")
@RequiredArgsConstructor
public class FinancialProfileController {

    private final IFinancialProfileService service;
    private final FinancialProfileMapper mapper;

    //Búsqueda de objetivo por id
    @GetMapping("user/{id}")
    public ResponseEntity<FinancialProfileResponseDTO> findById(@PathVariable("id") String FinancialProfileId) {
        return ResponseEntity.ok(mapper.toFinancialProfileResponseDTO(service.findById(FinancialProfileId)));
    }
    //Búsqueda de objetivo por id
    @GetMapping("/me")
    public ResponseEntity<FinancialProfileResponseDTO> findById(@CurrentUser UserPrincipal userPrincipal) {
        return ResponseEntity.ok(mapper.toFinancialProfileResponseDTO(service.getMyFinancialProfile(userPrincipal.getId())));
    }
    //Guardar objetivo
    @PostMapping
    public ResponseEntity<FinancialProfileResponseDTO> save(@Valid @RequestBody FinancialProfileRequestDTO dto, @CurrentUser UserPrincipal userPrincipal) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(mapper.toFinancialProfileResponseDTO(service.saveTransactional(dto,userPrincipal.getId())));
    }

    // Actualizar objetivo
    @PutMapping("/{id}")
    public ResponseEntity<FinancialProfileResponseDTO> update(@Valid @RequestBody FinancialProfileRequestDTO dto, @PathVariable("id") String id) {
        return ResponseEntity.ok(mapper.toFinancialProfileResponseDTO(service.updateById(mapper.toFinancialProfile(dto), id)));
    }

    //Eliminar objetivo
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") String id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //Listar objetivos
    @GetMapping
    public ResponseEntity<Page<FinancialProfileResponseDTO>> findAll(
                                                         @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
                                                         @RequestParam(defaultValue = "financial_profile_id") String sortField, @RequestParam(defaultValue = "desc") String sortOrder) {
        List<FinancialProfileResponseDTO> list = service.getAllFinancialProfiles(page,size,sortField,sortOrder).stream().map(mapper::toFinancialProfileResponseDTO).collect(Collectors.toList());
        Page<FinancialProfileResponseDTO> listResponse = new PageImpl<>(list);
        return new ResponseEntity<>(listResponse, HttpStatus.OK);
    }

    @PostMapping("/{userId}/survey")
    public ResponseEntity<FinancialProfileResponseDTO> saveSurveyAnswers(@PathVariable String userId, @RequestBody List<AnswerRequestDTO> answers){
        return ResponseEntity.status(HttpStatus.CREATED).body(mapper.toFinancialProfileResponseDTO(service.saveSurveyAnswers(userId,answers)));
    }
}
