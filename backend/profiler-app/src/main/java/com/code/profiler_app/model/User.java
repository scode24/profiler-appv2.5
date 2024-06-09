package com.code.profiler_app.model;

import lombok.Data;

import java.util.List;

@Data
public class User {

    private String name;
    private String username;
    private String email;
    private String imageUrl;
    private String about;
    private String address;
    private String phNo;
    private List<SocialLink> socialLinks;
}
