package com.code.profiler_app.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseModel {

    private int statusCode;
    private String message;
    private UserInfo userInfo;

}
