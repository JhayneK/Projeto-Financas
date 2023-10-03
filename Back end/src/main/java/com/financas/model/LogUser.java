package com.financas.model;
import javax.persistense.*;

@Entity
public class LogUser extends EntityId {
    @Column(name = "logData", nullable= false)
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
