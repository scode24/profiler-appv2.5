package com.code.profiler_app.Repository;

import com.code.profiler_app.model.UserMgmnt;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserMgmntRepository extends MongoRepository<UserMgmnt, Long> {

    Optional<UserMgmnt> findByUsername(String username);
}
