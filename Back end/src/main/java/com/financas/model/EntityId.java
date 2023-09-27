package com.financas.model;
import javax.persistence.*;

@MappedSuperclass
public class EntityId {
    @id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = (long) id;
    }
}
