package com.code.profiler_app.controller;

import com.code.profiler_app.model.ResponseModel;
import com.code.profiler_app.model.UserInfo;
import com.code.profiler_app.services.UserDataManagementService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1")
@RestController
@CrossOrigin
public class ProfilerAppController {

    @Autowired
    private UserDataManagementService userDataManagementService;

    @PostMapping("/saveUserInfo")
    public ResponseEntity<ResponseModel> saveUserInfo(@RequestBody UserInfo userInfo){
        ResponseModel responseModel = null;
        try{
            responseModel = userDataManagementService.saveUserInfo(userInfo);
            return new ResponseEntity<>(responseModel, HttpStatusCode.valueOf(responseModel.getStatusCode()));
        }catch (Exception e){
            responseModel = new ResponseModel(500, e.getMessage(), null);
            return new ResponseEntity<>(responseModel, HttpStatusCode.valueOf(responseModel.getStatusCode()));
        }
    }

    @GetMapping("/fetchUserInfo/{username}")
    public ResponseEntity<ResponseModel> fetchUserInfo(@PathVariable String username){
        ResponseModel responseModel = null;
        try{
            responseModel = userDataManagementService.fetchUserInfo(username);
            return new ResponseEntity<>(responseModel, HttpStatusCode.valueOf(responseModel.getStatusCode()));
        }catch (Exception e){
            responseModel = new ResponseModel(500, e.getMessage(), null);
            return new ResponseEntity<>(responseModel, HttpStatusCode.valueOf(responseModel.getStatusCode()));
        }
    }
}
