package com.code.profiler_app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
public class UserMgmnt {

    private String username;
    private String password;
    private String role;
}
