package com.financas.model;

public class LogUser extends EntityId {
    private String logData;

    public LogUser(String logData) {
        this.logData = logData;
    }

    public String getLogData() {
        return logData;
    }

    public void setLogData(String logData) {
        this.logData = logData;
    }
}
