package com.financas.model;

import javax.persistense.*;

@Entity
public class LogEdit {
    @Column(name = "logEditData", nullable= false)
    private String logEditData;

    public LogEdit(String logEditData) {
        this.logEditData = logEditData;
    }

    public String getLogEditData() {
        return logEditData;
    }

    public void setLogEditData(String logEditData) {
        this.logEditData = logEditData;
    }
}