package com.code.profiler_app.services;

import com.code.profiler_app.Repository.UserInfoRepository;
import com.code.profiler_app.model.ResponseModel;
import com.code.profiler_app.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDataManagementService {

    @Autowired
    private UserInfoRepository userInfoRepository;

    public ResponseModel saveUserInfo(UserInfo userInfo){
        Optional<UserInfo> existingUserInfo = userInfoRepository.findByUserUsername(userInfo.getUser().getUsername());
        existingUserInfo.ifPresent(info -> userInfoRepository.delete(info));
        UserInfo newUserInfo = userInfoRepository.insert(userInfo);
        return new ResponseModel(200, "UserInfo added/updated successfully", newUserInfo);
    }

    public ResponseModel fetchUserInfo(String username) {
        Optional<UserInfo> existingUserInfo = userInfoRepository.findByUserUsername(username);
        return existingUserInfo.map(info -> new ResponseModel(200, "UserInfo found successfully", info)).orElseGet(() -> new ResponseModel(404, "UserInfo not found", null));
    }

}
