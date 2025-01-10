package com.iupi.iupiback.auth.config.security.oauth2.users;

import java.util.Map;

public class UserInfoOAuth {
    private Map<String, Object> attributes;

    public UserInfoOAuth(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public String getId() {
        return (String) attributes.get("id");
    }

    public String getName() {
        return (String) attributes.get("given_name");
    }

    public String getEmail() {
        return (String) attributes.get("email");
    }

    public String getLastName() { return (String) attributes.get("family_name"); }

    public String getImageUrl() {
        if (attributes.containsKey("picture")) {
            Map<String, Object> pictureObj = (Map<String, Object>) attributes.get("picture");
            if (pictureObj.containsKey("data")) {
                Map<String, Object> dataObj = (Map<String, Object>) pictureObj.get("data");
                if (dataObj.containsKey("url")) {
                    return (String) dataObj.get("url");
                }
            }
        }
        return null;
    }
}
