package com.financas.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class LogEdit extends EntityId {
    @Column(name = "log_edit_data", columnDefinition = "VARCHAR(MAX)")
    private String log_edit_data;

    //region Getters e Setters
    public String getLog_edit_data() {
        return log_edit_data;
    }

    public void setLog_edit_data(String log_edit_data) {
        this.log_edit_data = log_edit_data;
    }
    //endregion
}
