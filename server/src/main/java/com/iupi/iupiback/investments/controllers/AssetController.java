package com.iupi.iupiback.investments.controllers;

import com.iupi.iupiback.investments.dto.request.AssetRequest;
import com.iupi.iupiback.investments.dto.response.AssetResponse;
import com.iupi.iupiback.investments.mapper.AssetMapper;
import com.iupi.iupiback.investments.services.IAssetService;
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
@RequestMapping("/api/assets")
@RequiredArgsConstructor
public class AssetController {

    private final IAssetService service;

    private AssetMapper mapper;

    //Búsqueda de objetivo por id
    @GetMapping("/{id}")
    public ResponseEntity<AssetResponse> findById(@PathVariable("id") String goalId) {
        return ResponseEntity.ok(mapper.toResponse(service.findById(goalId)));
    }

    //Guardar objetivo
    @PostMapping
    public ResponseEntity<AssetResponse> save(@Valid @RequestBody AssetRequest dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(mapper.toResponse(service.saveTransactional(dto)));
    }

    // Actualizar objetivo
    @PutMapping("/{id}")
    public ResponseEntity<AssetResponse> update(@Valid @RequestBody AssetRequest dto, @PathVariable("id") String id) {
        return ResponseEntity.ok(mapper.toResponse(service.updateById(mapper.toAsset(dto), id)));
    }

    //Eliminar objetivo
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") String id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //Listar objetivos
    @GetMapping("/portfolio/{id}")
    public ResponseEntity<Page<AssetResponse>> findAll(@PathVariable("id") String portfolioId,
                                                         @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
                                                         @RequestParam(defaultValue = "asset_name") String sortField, @RequestParam(defaultValue = "desc") String sortOrder) {
        List<AssetResponse> list = service.getAssetsByPortfolio(portfolioId, page,size,sortField,sortOrder).stream().map(mapper::toResponse).collect(Collectors.toList());
        Page<AssetResponse> listResponse = new PageImpl<>(list);
        return new ResponseEntity<>(listResponse, HttpStatus.OK);
    }
}
