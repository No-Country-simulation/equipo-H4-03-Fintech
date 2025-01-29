package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import com.iupi.iupiback.common.exception.NotFoundException;
import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.dto.request.AnswerRequestDTO;
import com.iupi.iupiback.profiles.dto.request.FinancialProfileRequestDTO;
import com.iupi.iupiback.profiles.mapper.AnswerMapper;
import com.iupi.iupiback.profiles.models.Answer;
import com.iupi.iupiback.profiles.models.FinancialProfile;
import com.iupi.iupiback.profiles.repositories.IAnswerRepo;
import com.iupi.iupiback.profiles.repositories.IFinancialProfileRepo;
import com.iupi.iupiback.profiles.services.IFinancialProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FinancialProfileServiceImpl extends CRUDServiceImpl<FinancialProfile,String> implements IFinancialProfileService {

    private final IFinancialProfileRepo repo;
    private final IUserRepo userRepo;
    private final IAnswerRepo answerRepo;
    private final AnswerMapper answerMapper;

    @Override
    protected IGenericRepo<FinancialProfile, String> getRepo() {
        return repo;
    }

    @Override
    public FinancialProfile saveTransactional(FinancialProfileRequestDTO financialProfile, String userId) {
        User user = userRepo.findById(userId).orElseThrow(()->new NotFoundException("User not found"));
        FinancialProfile financialProfileEntity = new FinancialProfile();
        financialProfileEntity.setRiskProfile(financialProfile.getRiskProfile());
        financialProfileEntity.setSes(financialProfile.getSes());
        financialProfileEntity.setTypeInvestment(financialProfile.getTypeInvestment());
        financialProfileEntity.setUser(user);
        return repo.save(financialProfileEntity);
    }

    @Override
    public Page<FinancialProfile> getAllFinancialProfiles(int page, int size, String sortField, String sortOrder) {
        Pageable pageable = PageRequest.of(page, size, getSort(sortField, sortOrder));
        return repo.findAll(pageable);
    }

    @Override
    public FinancialProfile getMyFinancialProfile(String userId) {
        return repo.findByUserId(userId).orElseThrow(()->new NotFoundException("Usuario no tiene perfil financiero"));
    }

    @Override
    public FinancialProfile saveSurveyAnswers(String userId, List<AnswerRequestDTO> answerRequestDTOs) {
        FinancialProfile financialProfile = repo.findByUserId(userId).orElseThrow(() -> new RuntimeException("Perfil financiero no encontrado para el usuario: " + userId));

        // Mapear los DTOs a entidades Answer
        List<Answer> answers = answerRequestDTOs.stream()
                .map(answerMapper::toAnswer)
                .toList();

        // Establecer las respuestas al perfil financiero
        financialProfile.setAnswers(answers);

        // Guardar las respuestas en la base de datos
        answerRepo.saveAll(answers);

        // Guardar el perfil financiero con las respuestas
        return repo.save(financialProfile);
    }

    private Sort getSort(String sortField, String sortOrder) {
        Sort sort = Sort.by(sortField);
        if (sortOrder.equalsIgnoreCase("desc")) {
            sort = sort.descending();
        } else {
            sort = sort.ascending();
        }
        return sort;
    }
}
