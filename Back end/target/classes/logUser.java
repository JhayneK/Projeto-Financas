package com.financas.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class LogUser extends EntityId {
    @Column(name = "log_data", columnDefinition = "VARCHAR(MAX)")
    private String log_data;

    //region Getters e Setters
    public String getLog_data() {
        return log_data;
    }

    public void setLog_data(String log_data) {
        this.log_data = log_data;
    }
    //endregion
}
