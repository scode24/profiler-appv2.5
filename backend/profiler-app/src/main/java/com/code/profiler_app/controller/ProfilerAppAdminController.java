package com.code.profiler_app.controller;

import com.code.profiler_app.model.ResponseModel;
import com.code.profiler_app.model.UserInfo;
import com.code.profiler_app.services.UserDataManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping("/admin/api/v1")
public class ProfilerAppAdminController {

    @Autowired
    private UserDataManagementService userDataManagementService;

    @GetMapping("/test")
    public String test() {
        return "admin console...";
    }

    @PostMapping("/saveUserInfo")
    public ResponseEntity<ResponseModel> saveUserInfo(@RequestBody UserInfo userInfo) {
        ResponseModel responseModel = null;
        try {
            responseModel = userDataManagementService.saveUserInfo(userInfo);
            return new ResponseEntity<>(responseModel, HttpStatusCode.valueOf(responseModel.getStatusCode()));
        } catch (Exception e) {
            responseModel = new ResponseModel(500, e.getMessage(), null);
            return new ResponseEntity<>(responseModel, HttpStatusCode.valueOf(responseModel.getStatusCode()));
        }
    }
}
