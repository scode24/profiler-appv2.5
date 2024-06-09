package com.code.profiler_app.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class PreviousCompanyInfo {
    private String name;
    private String workingYears;
    private String experience;
}
