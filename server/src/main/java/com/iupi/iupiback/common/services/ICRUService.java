package com.iupi.iupiback.common.services;

import java.util.List;
import java.util.Optional;

public interface ICRUService <T,ID>{
    List<T> findAll();
    T updateById(T t,ID id);
    T findById(ID id);
    T save(T t);
    void delete(ID id);
}
