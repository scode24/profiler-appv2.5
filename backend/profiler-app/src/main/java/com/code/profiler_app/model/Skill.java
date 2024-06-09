package com.code.profiler_app.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Skill {

    private String skillName;
    private int rating;
}
