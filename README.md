# react-native-github-client-graphql
A react native project with a basic github user login authentication using the [Github v3 REST API](https://developer.github.com/v3/), to validate and authenticate the user email and password to get an `OAuth Access Token` from a [Github OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) that i've created in my personal developer settings panel called [React Native Github Client](https://github.com/settings/applications/976282). After that, we will use this OAuth token to make calls to the new [Github GraphQL API](https://developer.github.com/v4/) using the [Apollo GraphQL Client](https://www.apollographql.com/docs/react/).

The main idea of the project is to use the Github GraphQL API and get the logged user repository list and profile information to show these two informations in a [bottom tav navigator](https://reactnavigation.org/docs/en/tab-based-navigation.html).

The project contains tests using `Jest`, focused on the components and the login redux actions. The components test will generate `snapshots` that can be updated when component changes are made.

The main project libraries are `graphql`, `apollo-boost`, `react-apollo`, `React Navigation`, and `Jest`. The redux content of the project is used only to help interact with the [Github v3 REST API](https://developer.github.com/v3/) to fetch the login authentication call.

## Run The Project
Clone this repository and run the command:
```shell
npm install
```
and then run the commands for each platform:
### Android
`react-native run-android`
### iOS
`react-native run-ios`

## Run Tests
Run the command:
```shell
npm test
```
You're also able to run a specific test by running this command for example:
```shell
npm test 'ActionLogin-test'
```
To update a component snapshot, run this command for example:
```shell
npm test -- -u 'LocationListItem-test'
```

## Screenshots
![alt text](https://lh3.googleusercontent.com/Wxi5EGw_eEROz8nSAZAzivASNqQGPo7ajOXGNsGGf63uRN-gtigETFVgwOyEDXpeSGqDayGttc3phPFrAF33LDB9CBprqjpZHjnSXluffMQt8YkgI9xVtYuP66jGFdbIzUxN2NRMs6G3tmCNGzTk13cgPZlsVAxvmq8QTIH-__cmzxTZZHBscUYOJ2oHD-A8ltsq9RxCLv72mwBjDNLvb6Za8oHepE0KpThLWvZemnN6S8L7sf4L8sk-TL0UfJD8ERmwc57CwJN4Jt2RoaCeyJUyy88AC3vuSi6xEBHe7QfYu7ceAi5jJJwTWPYhPZB5LZDhDodTmc0rHt6HSpWveYm17RtH9ZdWyXptHoL2tdEKu7rAXYJQxZiLbBHPzPj-nspkMnJQu9tnE4hdFJnO03et0qUBg6hUFdvIwU301rtZdKWIK1dAsoY3q2IdbPZ9atbir0NqgKY4LtEoBg6KLfGnZ4bjwbfqIWNQoQpGkwFUmDxCo36iC-0aAImTuExx1zKdbEQsNWDCSOXG4bY2hO0mYSKVTIwQdNkRwm2XTLEJNPyA1U2I1bNDOG-1aR_zgiyQLGN5rweOrgNYnoMhdYuBABiFPtASU05aM0gcDP_7Jdr1HcF5VkxY9he-KfzAZW28QFAIRteLW6C4nkOwRWQr=w353-h626-no)

![alt text](https://lh3.googleusercontent.com/92xO6iqH2ivkZmLdAJ6Jx9Px5okik6gjHyt5tGnfUF2fGi40QRFf8uigByCfLjDj2XFJE40FmblyzgP_KntKdIzJhAB_hVtWN-qQIq4aQYHBwYA7guDifWC-ZXTnLVpQAPI1jlaUJ05vanlaOQO779o9SYCH-DOzWwNg-H-msYiinNZ-aVwj8HDBRQWjL6V4dsimK2xvFKTDgPRUsRbNOszS9pEH8xLbGGB4bLpDg5s7lwlKpBhnYwvIchGSNoF2aNS8CoOM5NJPnXS0i1cBE7g02LeU41wMb-HcP9B26UCErMPP4sXyflKV5Wov8kR_n6cUVrLs772YxZxgiDaTLnmNVmc_PO08nlLKZ_3RqI9-E1kT2HYDHml-dv6U4M16eUzD-wRCdy3q4VaXKXtkyjbRIzLK78nS5ON3IqW5FEJAXX47DVM2cx20_AyZ9EjMx1w0HC3ETH25rFYHGt_x5ezO8F4jA4tpc1x205nwIbtZycNjeq-UtdT6P94eeuFg3Q-aiIGXnlMB_Ji3C2YuCnbPvoPUooiNlfty-7hrsIKGz_ToqmD9rn2-ErkiO_hkkxROgOKqEFtDibYOQMiooxthONMLSq9UWkHNubeDOquBjef6BzN5lb8ABCm2YscuYjVCRUJR4WqlKgtYvMb7HlKP=w353-h626-no)

![alt text](https://lh3.googleusercontent.com/S4y-_K4Ho7pJkORIaBJKVpT1xPXtni1RYOMjcGpJLVWpv71Y5J-2j0LCLa80eeaR7XRHoat-z1kkQmQK-D8TfY3xAVgZoHCPYNu01qxuDjYwIuYbdkCcKjbyEKOkUPu2G76Gd6dC2skLJW16GR9D09QL8n5yAWBa4e8t7kPAVNpT-yTwK7o4zx35cOssAAfRFM-mCoDMrXxLq8A6n6tQX_NmFT3EaIh_xe--5PwoBa0PIsxKJrqiwDxw-HcC9VK8ZWAQvefMOrRCrraFTKZ4plJDYHqhQJ4wybEMdcD-ewOAA0p3nadnbtesiD9AaIb8PX15pH8XiDRzabaEpgX3993I26XoVsqELTlZzYvnpGjpbBZM-gik_XO1uA1Em2PeSCe2s70abI_JrJAxEOMwlOjMS3Y-0uuDkajmgGhhyzD0rGvMm9O-o4mTxz8MvsMf91VOJMtZSrM5WdMBJHKSPXF0rncyo0yILAxgT9C_c8hQt29qDdWCUe_75__kc5B1M-zPoY1mMUs7dSnvRmWek0YScD1_tn38BTi5733EN5SykDlmcVPY43oDN-uCmmQ4-y7_QeUPYyxLl8Dc1TiYSE022CoelmWsW_EFQQWQUm8tXemoCfMbmzgaoG_KmV1HRUE4g7oUunRmUJ6Zsj-rThTq=w353-h626-no)

