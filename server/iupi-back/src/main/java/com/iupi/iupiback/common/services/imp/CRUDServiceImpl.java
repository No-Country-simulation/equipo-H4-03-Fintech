package com.iupi.iupiback.common.services.imp;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.ICRUService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public abstract class CRUDServiceImpl<T,ID> implements ICRUService<T,ID> {

    protected abstract IGenericRepo<T , ID> getRepo();

    @Override
    public List<T> findAll() {
        return getRepo().findAll();
    }

    @Override
    public T updateById(T t, ID id) {
        if(getRepo().findById(id).isPresent()){
            return getRepo().save(t);
        } throw new RuntimeException("No se puede actualizar el objeto");
    }

    @Override
    public T findById(ID id) {
        return getRepo().findById(id).orElseThrow(() -> new RuntimeException("No se encontro el objeto con el id"));
    }

    @Override
    public T save(T t) {
        return getRepo().save(t);
    }

    @Override
    public void delete(ID id) {
        getRepo().deleteById(id);
    }
}
