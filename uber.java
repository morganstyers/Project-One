//
//https://m.uber.com/ul/?client_id=<CLIENT_ID>&action=setPickup&pickup[latitude]=37.775818&pickup[longitude]=-122.418028&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=37.802374&dropoff[longitude]=-122.405818&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d

//Adding the sdk source
class dependencies {
    compile 'com.uber.sdk:rides:0.5.2'
}

// Creating a session using a server token
class SessionConfig { SessionConfiguration config = new SessionConfiguration.Builder()
    .setClientId("QkKgQVPcctW8VgG1-9Yeqv9WAIw61Kmn")
    .setServerToken("JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAH4AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAzAAAABwAAAAEAAAAEAAAANzWAeq_wd2FP2HXVRxEY2enAAAAHbBTDBcs_d0zhxpAbdugBAnhy2Jl6J5e60bOZTFH0FcPXMrLrr-4YHUgQnLZflm8tI3Bf1BkA_ghfZyCNpn2UNqDqXmt5CowIDN8-ZL01cscX5pOzFkKZBpeYn8h7iBkq_DD90rv1r1RsdVqznc-vQ2jfB5gYLxzZZ2DXayopPpekMKXED-bDSmFmcjHsfezDwPxlBEk9aDBNlKJ4cP3W5motwJwItwADAAAAAjUTtKe_n1aqB0C8iQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU")
    .build();

ServerTokenSession session = new ServerTokenSession(config));
}

// creating a session using OAuth2Flow
class Oauth{ SessionConfiguration config = new SessionConfiguration.Builder()
    .setClientId("QkKgQVPcctW8VgG1-9Yeqv9WAIw61Kmn")
    .setClientSecret("zdnGBR2lTqolmxX16pN2LOqedcbw0TuT2WooCQ7D")
    .setScopes(profile,request)
    .setRedirectUri(redirectUri)
    .build();
    
OAuth2Credentials credentials = new OAuth2Credentials.Builder()
    .setSessionConfiguration(config)
    .build();
}
//Get authorization from the user
String authorizationUrl = credentials.getAuthorizationUrl();

