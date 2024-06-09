package com.code.profiler_app.model;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
@ToString
public class UserInfo {

    @Id
    private String id;

    private User user;
    private List<PreviousCompanyInfo> previousCompaniesInfo;
    private List<Achievement> achievements;
    private List<Skill> skills;
    private List<Project> projects;
}
