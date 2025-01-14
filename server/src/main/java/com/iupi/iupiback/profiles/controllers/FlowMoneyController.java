package com.iupi.iupiback.profiles.controllers;

import com.iupi.iupiback.auth.config.security.oauth2.users.CurrentUser;
import com.iupi.iupiback.auth.config.security.oauth2.users.UserPrincipal;
import com.iupi.iupiback.profiles.dto.request.FlowMoneyRequestDTO;
import com.iupi.iupiback.profiles.dto.response.FlowMoneyResponseDTO;
import com.iupi.iupiback.profiles.mapper.FlowMoneyMapper;
import com.iupi.iupiback.profiles.services.IFlowMoneyService;
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
@RequestMapping("/api/flow-money")
@RequiredArgsConstructor
public class FlowMoneyController {

    private final IFlowMoneyService service;
    private final FlowMoneyMapper mapper;

    //Búsqueda de objetivo por id
    @GetMapping("{id}")
    public ResponseEntity<FlowMoneyResponseDTO> findById(@PathVariable("id") String flowMoneyId) {
        return ResponseEntity.ok(mapper.toFlowMoneyResponseDto(service.findById(flowMoneyId)));
    }

    //Guardar Flujo de dinero por usuario
    @PostMapping
    public ResponseEntity<FlowMoneyResponseDTO> save(@Valid @RequestBody FlowMoneyRequestDTO dto, @CurrentUser UserPrincipal userPrincipal) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(mapper.toFlowMoneyResponseDto(service.saveTransactional(dto,userPrincipal.getId())));
    }

    // Actualizar flujo de dinero
    @PutMapping("/{id}")
    public ResponseEntity<FlowMoneyResponseDTO> update(@Valid @RequestBody FlowMoneyRequestDTO dto, @PathVariable("id") String id) {
        return ResponseEntity.ok(mapper.toFlowMoneyResponseDto(service.updateById(mapper.toFlowMoney(dto), id)));
    }

    //Eliminar flujo de dinero
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") String id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //Listar Flujos de Dinero por usuario
    @GetMapping("/user")
    public ResponseEntity<Page<FlowMoneyResponseDTO>> findAllFlowMoneyByUser(@CurrentUser UserPrincipal user,
                                                         @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
                                                         @RequestParam(defaultValue = "date") String sortField, @RequestParam(defaultValue = "desc") String sortOrder) {
        List<FlowMoneyResponseDTO> list = service.getFlowMoneyByUser(user.getId(), page,size,sortField,sortOrder).stream().map(mapper::toFlowMoneyResponseDto).collect(Collectors.toList());
        Page<FlowMoneyResponseDTO> listResponse = new PageImpl<>(list);
        return new ResponseEntity<>(listResponse, HttpStatus.OK);
    }

    //Listar todos los Flujos de dinero por usuario
    @GetMapping
    public ResponseEntity<Page<FlowMoneyResponseDTO>> findAllFlowMoney(
                                                              @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
                                                              @RequestParam(defaultValue = "user_id") String sortField, @RequestParam(defaultValue = "desc") String sortOrder) {
        List<FlowMoneyResponseDTO> list = service.getAllFlowMoney( page,size,sortField,sortOrder).stream().map(mapper::toFlowMoneyResponseDto).collect(Collectors.toList());
        Page<FlowMoneyResponseDTO> listResponse = new PageImpl<>(list);
        return new ResponseEntity<>(listResponse, HttpStatus.OK);
    }
}
