package com.financas.model;
import javax.persistence.*;

@MappedSuperclass
public class EntityId {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //region Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    //endregion
}
