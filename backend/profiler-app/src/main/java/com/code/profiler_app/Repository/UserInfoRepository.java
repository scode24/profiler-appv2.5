package com.code.profiler_app.Repository;

import com.code.profiler_app.model.UserInfo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInfoRepository extends MongoRepository<UserInfo, Long> {

//    @Query("{'user.username': ?0}")
//    Optional<UserInfo> findByUsername(String username);

    Optional<UserInfo> findByUserUsername(String username);
}
