package com.iupi.iupiback.profiles.controllers;

import com.iupi.iupiback.auth.config.security.oauth2.users.CurrentUser;
import com.iupi.iupiback.auth.config.security.oauth2.users.UserPrincipal;
import com.iupi.iupiback.profiles.dto.request.GoalRequestDTO;
import com.iupi.iupiback.profiles.dto.response.GoalResponseDTO;
import com.iupi.iupiback.profiles.mapper.GoalMapper;
import com.iupi.iupiback.profiles.services.IGoalService;
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
@RequestMapping("/api/goals")
@RequiredArgsConstructor
public class GoalController {

    private final IGoalService service;

    private final GoalMapper mapper;

    @GetMapping("{id}")
    public ResponseEntity<GoalResponseDTO> findById(@PathVariable("id") String goalId) {
        return ResponseEntity.ok(mapper.toGoalResponseDTO(service.findById(goalId)));
    }

    @PostMapping
    public ResponseEntity<GoalResponseDTO> save(@Valid @RequestBody GoalRequestDTO dto, @CurrentUser UserPrincipal userPrincipal) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(mapper.toGoalResponseDTO(service.saveTransactional(dto,userPrincipal.getId())));
    }

    @PutMapping("/{id}")
    public ResponseEntity<GoalResponseDTO> update(@Valid @RequestBody GoalRequestDTO dto, @PathVariable("id") String id) {
        return ResponseEntity.ok(mapper.toGoalResponseDTO(service.updateById(mapper.toGoal(dto), id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") String id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping("/page")
    public ResponseEntity<Page<GoalResponseDTO>> findAll(@CurrentUser UserPrincipal user,
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "goal_name") String sortField, @RequestParam(defaultValue = "desc") String sortOrder) {
        List<GoalResponseDTO> list = service.getGoalsByUser(user.getId(), page,size,sortField,sortOrder).stream().map(mapper::toGoalResponseDTO).collect(Collectors.toList());
        Page<GoalResponseDTO> listResponse = new PageImpl<>(list);
        return new ResponseEntity<>(listResponse, HttpStatus.OK);
    }

}
