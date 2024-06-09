package com.code.profiler_app.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Achievement {
    private String name;
    private String reason;
    private String issuingCompany;
    private String issuingYear;
}
