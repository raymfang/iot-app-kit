:robot: I have created a release *beep* *boop*
---


<details><summary>components: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/components-v9.15.0...components-v10.0.0) (2024-02-20)


### Bug Fixes

* **composer:** update Polaris package version ([592c435](https://github.com/raymfang/iot-app-kit/commit/592c4359e325eb4149a0f872b30f87a0305feb5b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/related-table bumped from 9.15.0 to 10.0.0
  * devDependencies
    * @iot-app-kit/source-iotsitewise bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/testing-util bumped from 9.15.0 to 10.0.0
    * eslint-config-iot-app-kit bumped from 9.15.0 to 10.0.0
</details>

<details><summary>core: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/core-v9.15.0...core-v10.0.0) (2024-02-20)


### Features

* async fetchTimeSeriesData ([2b776cc](https://github.com/raymfang/iot-app-kit/commit/2b776ccf73a538abfbcf4a0ba175dca7c2c4aa0c))
* **composer:** support showing flash message ([da7281a](https://github.com/raymfang/iot-app-kit/commit/da7281a84e47325c56071850f6ea49a6eed73233))
* **dashboard:** composite model api calls and updated SDK ([9c23a38](https://github.com/raymfang/iot-app-kit/commit/9c23a383a46895bab05eccc265dc61318c767b49))
* experimental plugins registry; logger and metrics recorder plugins ([95b904f](https://github.com/raymfang/iot-app-kit/commit/95b904f281a860b04e145229c7c70fe4be08cba5))
* fetchTimeSeriesData ([1c65191](https://github.com/raymfang/iot-app-kit/commit/1c65191654c726b66cf1e0bcc2df83d620f6d4a5))


### Bug Fixes

* add request settings to fetchTimeSeriesData ([d7cbd9d](https://github.com/raymfang/iot-app-kit/commit/d7cbd9d8bb5a5f56804a7ebce2c87e944bcb6f2b))
* added experimental plugin exports ([4e44dbd](https://github.com/raymfang/iot-app-kit/commit/4e44dbd83c5734facfe342162ebac8a3fc3a1575))
* **core:** fix for duplicate data per timestamp issue ([9cca8b1](https://github.com/raymfang/iot-app-kit/commit/9cca8b1767584b770fe08d4da24b20c4a0fc7a40))
* **core:** increase cache and min request interval to prevent making many requests for near now data ([403fec9](https://github.com/raymfang/iot-app-kit/commit/403fec94c16a68adbae04134dc4ee69bedb4f4d6))
* fix data-zoom behavior for base chart ([0c66a80](https://github.com/raymfang/iot-app-kit/commit/0c66a8016e2aa827ad3093c3ef89d6437e014d18))
* synchronize intervals when new intervals are created ([cbc0fa6](https://github.com/raymfang/iot-app-kit/commit/cbc0fa69c0aac46f2e63386568a23c4c485c7beb))
* synchronize requests after switching tabs ([14f89d9](https://github.com/raymfang/iot-app-kit/commit/14f89d982887db3cd61886c32ec2aa27997f8964))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @iot-app-kit/jest-config bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/ts-config bumped from 9.15.0 to 10.0.0
    * eslint-config-iot-app-kit bumped from 9.15.0 to 10.0.0
</details>

<details><summary>core-util: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/core-util-v9.15.0...core-util-v10.0.0) (2024-02-20)


### Features

* **dashboard:** composite model api calls and updated SDK ([9c23a38](https://github.com/raymfang/iot-app-kit/commit/9c23a383a46895bab05eccc265dc61318c767b49))
* **dashboard:** new line-scatter-chart ([53768b9](https://github.com/raymfang/iot-app-kit/commit/53768b911a13066b9527c88f0e95a620f0025f7a))
* decimal round of in resource table ([a5da972](https://github.com/raymfang/iot-app-kit/commit/a5da9726649ca81a578efd365ba05d0dbe302b55))


### Bug Fixes

* add more unique colors ([8641b1f](https://github.com/raymfang/iot-app-kit/commit/8641b1f737919b868da7b309cb7ebc6183ef1918))
* bugfix for overlapping colors in color palette ([7b4c95b](https://github.com/raymfang/iot-app-kit/commit/7b4c95b45866548f85b10fee3167a35354d73cfb))
* line charts colors too quickly choose similar colors ([0af5465](https://github.com/raymfang/iot-app-kit/commit/0af5465ffc0a7f587a8e4a53487c8fb56c35d36a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 9.15.0 to 10.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/ts-config bumped from 9.15.0 to 10.0.0
</details>

<details><summary>dashboard: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/dashboard-v9.15.0...dashboard-v10.0.0) (2024-02-20)


###   BREAKING CHANGES

* **dashboard:** widget type change from line-scatter-chart -> xy-plot
* **dashboard:** remove line and scatter widgets

### Features

* ability to toggle property visibility in config panel [#1986](https://github.com/raymfang/iot-app-kit/issues/1986) ([560b776](https://github.com/raymfang/iot-app-kit/commit/560b7765c4a4ae8db6d06e70f69b2276844716a8))
* add CSV download button ([d89b1f8](https://github.com/raymfang/iot-app-kit/commit/d89b1f880491615c023ea84d53b0c843d52315b4))
* add delete confirm modal for widgets ([84fb016](https://github.com/raymfang/iot-app-kit/commit/84fb01663e37ac5c1ba84a08baf75d1b1a7668f0))
* add filtering ability ([51933bc](https://github.com/raymfang/iot-app-kit/commit/51933bc6cc1a76071ae1287ee7f79072c8d4dac7))
* add fixed width and height to the table ([7005009](https://github.com/raymfang/iot-app-kit/commit/7005009b1e325a8f333b281113ce1cf4745b0b19))
* add line style thickness per property ([fb19652](https://github.com/raymfang/iot-app-kit/commit/fb196521ba7b35019828e1c9f2c4383841e4620b))
* added date time formatter in resource explorer table [#2140](https://github.com/raymfang/iot-app-kit/issues/2140) ([10137b7](https://github.com/raymfang/iot-app-kit/commit/10137b780ec3ac1fb3f1dc5d120493345ce20e1a))
* added delete option for empty widget [#2139](https://github.com/raymfang/iot-app-kit/issues/2139) ([bbab890](https://github.com/raymfang/iot-app-kit/commit/bbab89048dc5b43fd92670c7df98bd38043bbe40))
* added empty state for line and scatter chart widgets ([f2662cc](https://github.com/raymfang/iot-app-kit/commit/f2662cc23860d08f1c8fd3cde69e86df4d3c3b6c))
* added line style customization per property ([abe942f](https://github.com/raymfang/iot-app-kit/commit/abe942f7a95458087cd1f7075091ee3acca41ada))
* added the error state for resource explorer tables [#2242](https://github.com/raymfang/iot-app-kit/issues/2242) ([351e142](https://github.com/raymfang/iot-app-kit/commit/351e1420508c37dddb37fb2fe9f2225c51365760))
* added title in bar and status timeline [#2312](https://github.com/raymfang/iot-app-kit/issues/2312) ([c6ea993](https://github.com/raymfang/iot-app-kit/commit/c6ea993c9d50bcd5fe75c7a5ec424d158fdf9c85))
* added widget text in the widget panel [#2036](https://github.com/raymfang/iot-app-kit/issues/2036) ([a46da1d](https://github.com/raymfang/iot-app-kit/commit/a46da1dc2166913bfc9ba81d5eec4388d17399d8))
* async fetchTimeSeriesData ([2b776cc](https://github.com/raymfang/iot-app-kit/commit/2b776ccf73a538abfbcf4a0ba175dca7c2c4aa0c))
* async listAssetPropertiesDescription ([6632db5](https://github.com/raymfang/iot-app-kit/commit/6632db5837e75d8786cb2c2150986d57f4e6ad39))
* auto collapse state for both panels ([fc54b1c](https://github.com/raymfang/iot-app-kit/commit/fc54b1cb71979e48dc5440620577ca8a2adc4be6))
* automatically selecting previously selected workspace or first workspace from options [#2384](https://github.com/raymfang/iot-app-kit/issues/2384) ([c1424a2](https://github.com/raymfang/iot-app-kit/commit/c1424a2b2ac7d7034c748cb221e565a8967c3da8))
* chat legend enhancement [#2277](https://github.com/raymfang/iot-app-kit/issues/2277) ([b1ca8ae](https://github.com/raymfang/iot-app-kit/commit/b1ca8aeda126f09f371e23133fa600d5b56c9b21))
* dashboard: re-introduce status widget icon [#1977](https://github.com/raymfang/iot-app-kit/issues/1977) ([0b62042](https://github.com/raymfang/iot-app-kit/commit/0b6204289d3dd1d0d3627cac4c9dcb0d330d2369))
* **dashboard:** add e2e tests ([a52242e](https://github.com/raymfang/iot-app-kit/commit/a52242e3e687e899058e8477852228dde791dff7))
* **dashboard:** add echart line-scatter-widget ([076f151](https://github.com/raymfang/iot-app-kit/commit/076f15129b4a1e61b4ef57467031210365ef58cb))
* **dashboard:** add logging for custom y-axis ([582fddf](https://github.com/raymfang/iot-app-kit/commit/582fddfa3ccca07e2ffd2b51047d989685a5940c))
* **dashboard:** add logging for query editor ([d115606](https://github.com/raymfang/iot-app-kit/commit/d115606d2e974e1fcdd9111d6c470b97589280cc))
* **dashboard:** add metrics for query editor usage ([e8ac4f9](https://github.com/raymfang/iot-app-kit/commit/e8ac4f9c7a47d9f776ef057cb2c5cf13628b78e9))
* **dashboard:** add model based query support ([b95b60c](https://github.com/raymfang/iot-app-kit/commit/b95b60ccf074069268a8d71071067cfbd8265a20))
* **dashboard:** add widget tile ([13573c5](https://github.com/raymfang/iot-app-kit/commit/13573c59d560e7192159db8751d6818cfebcf531))
* **dashboard:** adding watch mode for dashboard ([bc6fd3a](https://github.com/raymfang/iot-app-kit/commit/bc6fd3aaaa3354d555e644653d4a5081066aa747))
* **dashboard:** change dashboard viewport default from 5m to 10m ([803d9a4](https://github.com/raymfang/iot-app-kit/commit/803d9a4944f6a55cb2e0e9691ddc3e537966c501))
* **dashboard:** composite model api calls and updated SDK ([9c23a38](https://github.com/raymfang/iot-app-kit/commit/9c23a383a46895bab05eccc265dc61318c767b49))
* **dashboard:** csv data hook ([33379af](https://github.com/raymfang/iot-app-kit/commit/33379af40ab79a79ac755be3a7f22f6701129ef6))
* **dashboard:** empty widget configuration panel ([72bc7e3](https://github.com/raymfang/iot-app-kit/commit/72bc7e32a373a724077e1b7ba0d9f671af4495eb))
* **dashboard:** fit and finish for model-based-queries ([1a2bbaf](https://github.com/raymfang/iot-app-kit/commit/1a2bbaf32f58930f89a123684d55fdafb315a9bd))
* **dashboard:** gated CSV download button ([645fb1c](https://github.com/raymfang/iot-app-kit/commit/645fb1cc3fdac5e27369a6ee538e0677ab4eb8b3))
* **dashboard:** json to csv package ([918515d](https://github.com/raymfang/iot-app-kit/commit/918515d698ce63de3e3aea486c1ff5c69a4b6ee7))
* **dashboard:** line symbol ([bba8e8d](https://github.com/raymfang/iot-app-kit/commit/bba8e8d392f73b3e52109bad1557cda4ef00221c))
* **dashboard:** move mock service worker to mock storybook story ([aae9f2b](https://github.com/raymfang/iot-app-kit/commit/aae9f2b2ab0c69417d346dd38515647c6ce43362))
* **dashboard:** new line-scatter-chart ([53768b9](https://github.com/raymfang/iot-app-kit/commit/53768b911a13066b9527c88f0e95a620f0025f7a))
* **dashboard:** query for describing unmodeled data stream ([2d1226d](https://github.com/raymfang/iot-app-kit/commit/2d1226dcc00fd8f4d138151d0aeb4a494d5e119c))
* **dashboard:** update collapsible side panels ([1495451](https://github.com/raymfang/iot-app-kit/commit/149545160551174af83ce3ddb2a61f1a61977c94))
* decimal round of in resource table ([a5da972](https://github.com/raymfang/iot-app-kit/commit/a5da9726649ca81a578efd365ba05d0dbe302b55))
* disable add button when more than one widgets are selected [#2115](https://github.com/raymfang/iot-app-kit/issues/2115) ([c1ec145](https://github.com/raymfang/iot-app-kit/commit/c1ec145eb1cf1a4595124f5602eb2f1feee305e0))
* disable add button when no widget and propertyselected [#2115](https://github.com/raymfang/iot-app-kit/issues/2115) ([276309b](https://github.com/raymfang/iot-app-kit/commit/276309b8934b7b97228e8829c1c9047343c0d968))
* display legend unit conditionally  [#2277](https://github.com/raymfang/iot-app-kit/issues/2277) ([9f6440e](https://github.com/raymfang/iot-app-kit/commit/9f6440e9e06c9040a6be46eab3a9141ad02a0509))
* draw box align with mouse pointer [#2137](https://github.com/raymfang/iot-app-kit/issues/2137) ([a93613a](https://github.com/raymfang/iot-app-kit/commit/a93613ab95c91aed374d2812e098bcc07b1bc46b))
* empty state within the dashboard to help guide users how to create their dashboard ([f59a069](https://github.com/raymfang/iot-app-kit/commit/f59a0693480832cc3af38b8d9addef88309fecce))
* fake sitewise ([5fc9557](https://github.com/raymfang/iot-app-kit/commit/5fc9557d46fc3ed193862940ee058fd0e49f33e4))
* fetchTimeSeriesData ([1c65191](https://github.com/raymfang/iot-app-kit/commit/1c65191654c726b66cf1e0bcc2df83d620f6d4a5))
* fix tabs on config panel present that are unusable [#2308](https://github.com/raymfang/iot-app-kit/issues/2308) ([4d3b6d5](https://github.com/raymfang/iot-app-kit/commit/4d3b6d5fea6b271bfdbce13679b0fa4b4d0cdf60))
* fixed the add and reset buttons to bottom right [#2114](https://github.com/raymfang/iot-app-kit/issues/2114) ([15108b0](https://github.com/raymfang/iot-app-kit/commit/15108b058302a775b0b9a332d0ff901f81f2e676))
* format latest value time in resource explorer [#2140](https://github.com/raymfang/iot-app-kit/issues/2140) ([51be7da](https://github.com/raymfang/iot-app-kit/commit/51be7da3db56e4641526bb4333a622ae8c93e5df))
* handle long properties name in properties section in config panel [#1984](https://github.com/raymfang/iot-app-kit/issues/1984) ([fda011f](https://github.com/raymfang/iot-app-kit/commit/fda011f83e610a14cd6115ebf6aaf88b32589091))
* header design update ([700a913](https://github.com/raymfang/iot-app-kit/commit/700a91366ba57d7f6ca4b2058ee308a7317db9eb))
* integrate query editor ([82c36a1](https://github.com/raymfang/iot-app-kit/commit/82c36a1cf4f7c47b45ba32c1f5e15cdf3e132cb4))
* legend resize ([792b617](https://github.com/raymfang/iot-app-kit/commit/792b6170cc19402f3c49fbd60e4a07dc0890c434))
* lint accessibility ([0db36ef](https://github.com/raymfang/iot-app-kit/commit/0db36ef6a07fe5e0709d17081dffa7d23669e2fe))
* make session token optional for local development ([1a26b36](https://github.com/raymfang/iot-app-kit/commit/1a26b3622d3e8780cc54b1a66fc83aac96ecf2d9))
* missing empty state for workspaces dropdown [#2305](https://github.com/raymfang/iot-app-kit/issues/2305) ([11edf2d](https://github.com/raymfang/iot-app-kit/commit/11edf2d01a4c6406810efbdc1977f2c10e379506))
* preferences for pagination in table widget [#1890](https://github.com/raymfang/iot-app-kit/issues/1890) ([8072232](https://github.com/raymfang/iot-app-kit/commit/8072232240a17274556d208fc22d32a811866517))
* **react-components:** adding a fps display ([48cd9ef](https://github.com/raymfang/iot-app-kit/commit/48cd9efa3e5823086f0b7695886e934cc9303216))
* **react-components:** adding TrendCursor Sync to dashboard ([d046184](https://github.com/raymfang/iot-app-kit/commit/d046184b836e9cb3670b210eb24c4fd91167b52a))
* **react-components:** hide/show properties from legend ([e666cf1](https://github.com/raymfang/iot-app-kit/commit/e666cf1cfba8343d1a5bbb0f38a4341969a18575))
* **react-components:** sync echarts viewport ([e04e040](https://github.com/raymfang/iot-app-kit/commit/e04e04079630361047e82d8564678cd4e5857cdd))
* **react-components:** trendcurors using echarts extension ([a7c6bbe](https://github.com/raymfang/iot-app-kit/commit/a7c6bbe064ae746f024b74d885721a70a06716a2))
* remove drag icon in chat widget ([64e1b89](https://github.com/raymfang/iot-app-kit/commit/64e1b897dc9389055cfd9df9fce01b0415b9e170))
* remove stretch to fit from dashboard [#2255](https://github.com/raymfang/iot-app-kit/issues/2255) ([e8d7778](https://github.com/raymfang/iot-app-kit/commit/e8d77786719cb30c462f1cf67f2fbfc388189490))
* resource explorer table preferences columns visibility [#1980](https://github.com/raymfang/iot-app-kit/issues/1980) ([22d7028](https://github.com/raymfang/iot-app-kit/commit/22d70287dce77ae072e425ccbaa4fc2132b63595))
* **ResourceExplorer:** hide properties table when not needed to be displayed ([0fca5e9](https://github.com/raymfang/iot-app-kit/commit/0fca5e9089ac7af52e1d31b2143acb121cb7869b))
* **ResourceExplorer:** hide properties table when not needed to be displayed ([bcf36b1](https://github.com/raymfang/iot-app-kit/commit/bcf36b1080393ba0d5126d79e38b373ffcbd2442))
* scatter chart is selected the line style dropdown should be disabled for scatter chart [#2427](https://github.com/raymfang/iot-app-kit/issues/2427) ([d407ba3](https://github.com/raymfang/iot-app-kit/commit/d407ba344c41480b5986a8c8eb0ec8e79ade21a8))
* setting the sizes, and sizing behavior of the left and right side panels within the dashboard ([8cec7c0](https://github.com/raymfang/iot-app-kit/commit/8cec7c070ab401d71397676c25037ad28f0168b5))
* side-panels toggle open hit and tooltip on mouseover [#2003](https://github.com/raymfang/iot-app-kit/issues/2003) ([a974964](https://github.com/raymfang/iot-app-kit/commit/a9749645567611a430113071fb2cfcb7bb93b2a3))
* table widget pagination and sortingdisabled ([b727eae](https://github.com/raymfang/iot-app-kit/commit/b727eae8364f19f2e997fa0c9275e1f0a947f854))
* tabs on config panel present that are unusable [#2308](https://github.com/raymfang/iot-app-kit/issues/2308) ([9f0b63d](https://github.com/raymfang/iot-app-kit/commit/9f0b63d81446a1fce4a4635804cff9a6c06c9387))
* unmodeled data streams ([71bebef](https://github.com/raymfang/iot-app-kit/commit/71bebefebdaefc235ec2ec505bc5f4dd0d1c7f31))
* update icons for widget library-952 ([5f7f9ee](https://github.com/raymfang/iot-app-kit/commit/5f7f9ee8274f99b88fd464bd4ee434d0f4126594))
* updated chart initial widget size [#1920](https://github.com/raymfang/iot-app-kit/issues/1920)) ([88218af](https://github.com/raymfang/iot-app-kit/commit/88218afb1aed84e63d08fbad3acacab044c2ab8a))
* updated dashboard background color to grey-125 [#1950](https://github.com/raymfang/iot-app-kit/issues/1950) ([0f81bb2](https://github.com/raymfang/iot-app-kit/commit/0f81bb2240086c9222ab0063dac576927fd407c1))
* widget configuration improvements, per property, and general UX [#2243](https://github.com/raymfang/iot-app-kit/issues/2243) ([94f0490](https://github.com/raymfang/iot-app-kit/commit/94f04906d35b814ce6393e2873f9ffd9c905e0b9))
* xy-plot & bar-chart allow only numerical datatypes [#1952](https://github.com/raymfang/iot-app-kit/issues/1952) ([10b057a](https://github.com/raymfang/iot-app-kit/commit/10b057a1e088ad9ecdc710af73dfd947398659f3))
* xy-plot y axis lable changes [#2378](https://github.com/raymfang/iot-app-kit/issues/2378) ([48389c3](https://github.com/raymfang/iot-app-kit/commit/48389c3e59305525b11b63233c3a79d4a8e3a78d))


### Bug Fixes

* accessibility fixes ([4caa534](https://github.com/raymfang/iot-app-kit/commit/4caa53433d3d9df858ee25d71d3b92b93cdf7617))
* accessible property filter labels ([30554a1](https://github.com/raymfang/iot-app-kit/commit/30554a1f59f2462b1a5334424866f67ee4507455))
* add eslint rule for hooks ([de7cc0d](https://github.com/raymfang/iot-app-kit/commit/de7cc0d94ffdb79d3cb2ce622dd322e6d8497d61))
* add left border to configuration panel ([7f684d1](https://github.com/raymfang/iot-app-kit/commit/7f684d17b2945f67982474ad9d36beaa966999f0))
* add more unique colors ([8641b1f](https://github.com/raymfang/iot-app-kit/commit/8641b1f737919b868da7b309cb7ebc6183ef1918))
* add signigicant digits to xy plot ([70a109e](https://github.com/raymfang/iot-app-kit/commit/70a109e8083b6729313f4f0dc362df0f3cf6ea62))
* add tests for CSV ([28c6ca9](https://github.com/raymfang/iot-app-kit/commit/28c6ca94b6efe55b33a30cd2106f4d5536f8a556))
* added aria label to dashboard threshold delete button ([ff94bb0](https://github.com/raymfang/iot-app-kit/commit/ff94bb0e5c367ec02a572938a08dcf859e4820f5))
* added aria-label to the config panel text link control for accessibility [#2362](https://github.com/raymfang/iot-app-kit/issues/2362) ([a6f9c22](https://github.com/raymfang/iot-app-kit/commit/a6f9c22e40660e8e30f3b1f65f71f968dc4a0cac))
* aggregation and resolution settings ([06207f9](https://github.com/raymfang/iot-app-kit/commit/06207f9204c1a57d390f189e29858b9c8b862b4f))
* bar chart break due to css property of line chart ([512e48c](https://github.com/raymfang/iot-app-kit/commit/512e48c5f61e7ac8b09a25551702136f0a01c918))
* better disabled states and error handling CSV ([3bae192](https://github.com/raymfang/iot-app-kit/commit/3bae19293b7bedd0dcbfafc999cd6ed1e611dccc))
* broken search results disabled state ([38ef2be](https://github.com/raymfang/iot-app-kit/commit/38ef2beb9d7673e8cc0438424631343d5a4eb3ca))
* broken tooltip imports ([8a25332](https://github.com/raymfang/iot-app-kit/commit/8a25332379e647911504cd75ff913f6b911a43c4))
* bugfix for overlapping colors in color palette ([7b4c95b](https://github.com/raymfang/iot-app-kit/commit/7b4c95b45866548f85b10fee3167a35354d73cfb))
* change test id for download button ([88c16b9](https://github.com/raymfang/iot-app-kit/commit/88c16b9b1ca12dca37a910b0ce4d226838fd261c))
* copy paste issue on macos [#2136](https://github.com/raymfang/iot-app-kit/issues/2136) ([b7e8574](https://github.com/raymfang/iot-app-kit/commit/b7e8574d1f3d627694f0b0962565266d2b6ab8dc))
* dashboard settings to set correct columns and rows [#2313](https://github.com/raymfang/iot-app-kit/issues/2313) ([cd952c5](https://github.com/raymfang/iot-app-kit/commit/cd952c5e6462fa25350ccc28eb261a70bfa29d98))
* **dashboard:** bar chart default aggregation+resolution ([44fd991](https://github.com/raymfang/iot-app-kit/commit/44fd99128d13053cd48fae2d8c9562d6d8ab4ef2))
* **dashboard:** bold, italics, underline interactable by keyboard ([ccba8c6](https://github.com/raymfang/iot-app-kit/commit/ccba8c6433967e40b07a6ed78568a8d580def221))
* **dashboard:** bugfix for barchart positioning ([16babf6](https://github.com/raymfang/iot-app-kit/commit/16babf6667c886597d527534ddd7e9b355e2f988))
* **dashboard:** chart respects absolute min and max between data and thresholds ([db16712](https://github.com/raymfang/iot-app-kit/commit/db1671225e300a18765d55a8afd1534640d264de))
* **dashboard:** clear selected properties on asset change ([05f0374](https://github.com/raymfang/iot-app-kit/commit/05f037402d785d9f6d449c88170f2ad91f2735d9))
* **dashboard:** color picker has keyboard focus and can be interacted with ([1e4547e](https://github.com/raymfang/iot-app-kit/commit/1e4547e3aa2bc521c315391cabac569beab10508))
* **dashboard:** composite model tests run correctly ([d2cbaaf](https://github.com/raymfang/iot-app-kit/commit/d2cbaafef6639b84a8762dda9fccf3d3e86fbefd))
* **dashboard:** conditionally start msw for mocked data stories ([b9fb349](https://github.com/raymfang/iot-app-kit/commit/b9fb349546ddc1bca9b2dbc0d934f5769836ae91))
* **dashboard:** correctly update aggregation and resolution configs ([e749d48](https://github.com/raymfang/iot-app-kit/commit/e749d48985f9d9d419a98a299ab933273fb45c85))
* **dashboard:** csv  will download if viewport has no data ([b0cbbad](https://github.com/raymfang/iot-app-kit/commit/b0cbbad5348d4000674cf0e2b1d20e2782428b41))
* **dashboard:** decrease width of property label in config panel to stop overflow of delete button ([ee027e5](https://github.com/raymfang/iot-app-kit/commit/ee027e5d95946b89bebcd5e3bdc3a82aecd60d0b))
* **dashboard:** disable dashboard drag when shift key is pressed ([2e47a3c](https://github.com/raymfang/iot-app-kit/commit/2e47a3cee18d1cbfdb0509f599b3cbc575f2f94a))
* **Dashboard:** fix breaking build due to invalid import ([6690640](https://github.com/raymfang/iot-app-kit/commit/6690640ddc41797a3e1a3bb724974deb2a963db0))
* **dashboard:** fix spacing between widgets without selection box ([7cc590d](https://github.com/raymfang/iot-app-kit/commit/7cc590dd988bf244c430e55e43745a8be344e8d7))
* **dashboard:** fix spacing issues on editable grid ([0529abd](https://github.com/raymfang/iot-app-kit/commit/0529abd18267bf69ea36a2795096d724784ce3bc))
* **dashboard:** fix styling for tile and config panel ([932d2f0](https://github.com/raymfang/iot-app-kit/commit/932d2f0b5e0910069cd030044dbe5cf9d26f7287))
* **dashboard:** fix table item creation ([1c406b6](https://github.com/raymfang/iot-app-kit/commit/1c406b6de03e620fcb2f6c88bd1da256377d178b))
* **dashboard:** fix toggle hide thresholds ([0abb1b2](https://github.com/raymfang/iot-app-kit/commit/0abb1b24d6117ae13e27fe1b1e02ee9684cf0962))
* **dashboard:** for kpi/status disable add of RE when an property is already added ([712c1a7](https://github.com/raymfang/iot-app-kit/commit/712c1a777bc51c69956bfbb855bd0a01a6721e18))
* **dashboard:** for kpi/status disable add of RE when an property is already added ([eff3282](https://github.com/raymfang/iot-app-kit/commit/eff328273955d5e8a4ae815e03855aae6c48e162))
* **dashboard:** improve widget drag and resize ([fcdc586](https://github.com/raymfang/iot-app-kit/commit/fcdc5862fc558f136d510eaa85e241daa61d9988))
* **dashboard:** increase width of property label in config panel to span width of panel ([642f7c6](https://github.com/raymfang/iot-app-kit/commit/642f7c6ad5b50d20009ba21067255aab1e8d4780))
* **dashboard:** kpi/status bug to stop adding more than 1 property ([f68c5eb](https://github.com/raymfang/iot-app-kit/commit/f68c5eb42d34aa3483d3f85fe01dfb5d4e64fb3a))
* **dashboard:** listAssetPropertiesCall for msw + path objects for all assetModels ([b207547](https://github.com/raymfang/iot-app-kit/commit/b20754707774e19e107f1378cecaaba38384e4b3))
* **dashboard:** minor threshold fixes ([5b5c570](https://github.com/raymfang/iot-app-kit/commit/5b5c570f0ab026144e4009663c02ca3e0c948f3c))
* **dashboard:** modeled datastreams are displayed in msw ([a2833a1](https://github.com/raymfang/iot-app-kit/commit/a2833a174ccb8f66b547451f92ff2b6c6194beca))
* **dashboard:** padding for tabs in config panel + remove scroll in threshold panel ([d3f969c](https://github.com/raymfang/iot-app-kit/commit/d3f969c092a271e7b26289d0160e0c4901282b1e))
* **dashboard:** refactor component library to use list elements ([71a0b29](https://github.com/raymfang/iot-app-kit/commit/71a0b29e2b37685c5fcaa861a3c31291018e65ec))
* **dashboard:** remove hide/show from dashboard definition and config panel ([1919341](https://github.com/raymfang/iot-app-kit/commit/191934129f1c64ca52bb5333d882421aeeab91b0))
* **dashboard:** remove viewport from the dashboard state to use viewport hook ([a9011a8](https://github.com/raymfang/iot-app-kit/commit/a9011a8a22e3bc41076fa6fb64065c016282d012))
* **dashboard:** removing all props wont crash chart ([bac2fb6](https://github.com/raymfang/iot-app-kit/commit/bac2fb6debc1364d831c2b93e68a7eafd2b45b9c))
* **dashboard:** selected assets do not deselect on widget selection ([5c717f8](https://github.com/raymfang/iot-app-kit/commit/5c717f8bf57788ae9cac6521807d82622b47ac8a))
* **dashboard:** set initial viewport to 5m ([f7a5684](https://github.com/raymfang/iot-app-kit/commit/f7a568414a772e98ceb03bdac4978173b36ddb47))
* **dashboard:** tc sync is broken in prod ([c357902](https://github.com/raymfang/iot-app-kit/commit/c3579027e3bb3e38af4042bc6749ffb648a62e71))
* **dashboard:** text widget crashed dashboard when resource explorer is open ([337bcaf](https://github.com/raymfang/iot-app-kit/commit/337bcaf3b8ae4b846a5f82180856ce046f1fa719))
* **dashboard:** toggle from hide to show for unmodeled datastreams ([cea7c30](https://github.com/raymfang/iot-app-kit/commit/cea7c30cce8fa685cd9a0a9a8077c4e1d6b9ec4f))
* **dashboard:** update icon path for empty dashboard ([b24a2b5](https://github.com/raymfang/iot-app-kit/commit/b24a2b5752520b7c52a09d47bd7ae660b238139d))
* **dashboard:** update styling for model based query editor ([cb0d969](https://github.com/raymfang/iot-app-kit/commit/cb0d969e528b74c3c7d429a7b4a3335e004af9d0))
* **dashboard:** update unmodeled latest value to timestamp.timeInSeconds ([70bd004](https://github.com/raymfang/iot-app-kit/commit/70bd0048d7e30274c61b41cfc0334362b9f96042))
* **dashboard:** use more descriptive name for the settings label ([2d0b36c](https://github.com/raymfang/iot-app-kit/commit/2d0b36c29cad264f45f3e7178dcd3c296692c69e))
* default resolution and aggregation ([e5afdc0](https://github.com/raymfang/iot-app-kit/commit/e5afdc025b83013de26b5c3dbac1e5db5e8aca53))
* disable options in legend or yaxis section if visible is false [#2467](https://github.com/raymfang/iot-app-kit/issues/2467) ([b4daa17](https://github.com/raymfang/iot-app-kit/commit/b4daa17735a6ebed582c98d292e7b1c261a65dea))
* do not override selected data stream preferences ([02b80fe](https://github.com/raymfang/iot-app-kit/commit/02b80fed798ad859a1e5aa0993ea479aa48e0b38))
* dont move widget when resizing legend ([a7cefce](https://github.com/raymfang/iot-app-kit/commit/a7cefce603e98776b1ab5d8914e929fe73ac7517))
* download button and zoom undo button ([a60a81b](https://github.com/raymfang/iot-app-kit/commit/a60a81b6f6e64b3113b14edcf6efe9fe82ef47f7))
* **echarts:** bugs for demo ([b1e57ee](https://github.com/raymfang/iot-app-kit/commit/b1e57ee4b0d768c0a83be24c55b837a8f0fd950d))
* empty state overflow ([3e073f7](https://github.com/raymfang/iot-app-kit/commit/3e073f72cfd0a47c87bf09d8b20c64ef54907430))
* enable changing resolution and aggregation of unmodeled data streams ([e187898](https://github.com/raymfang/iot-app-kit/commit/e187898fd63872ae11b8592e865fc29959492761))
* firefox dnd ([5fd8b4f](https://github.com/raymfang/iot-app-kit/commit/5fd8b4f4eed0039852305d4ba8ebec1f453d1fbb))
* fix broken synchro-charts widgets ([5e61361](https://github.com/raymfang/iot-app-kit/commit/5e61361084c59bb4ea90ba65ac2016aba99f658e))
* fix data-zoom behavior for base chart ([0c66a80](https://github.com/raymfang/iot-app-kit/commit/0c66a8016e2aa827ad3093c3ef89d6437e014d18))
* fixed property section tooltip gets cut off if property has longer name [#2293](https://github.com/raymfang/iot-app-kit/issues/2293) ([e496e4d](https://github.com/raymfang/iot-app-kit/commit/e496e4d52c566cab3e17e332ef3b587cd9fcc094))
* fixed step after chart type [#1978](https://github.com/raymfang/iot-app-kit/issues/1978) ([546b2a0](https://github.com/raymfang/iot-app-kit/commit/546b2a004a3d8793fd8283a6d69d631fc3ace93d))
* hidden and highlighted datastreams persist correctly ([5a85bb7](https://github.com/raymfang/iot-app-kit/commit/5a85bb7d40d07dce439a1bfa15550d8893089cbd))
* improve properties panel styling ([f3de67e](https://github.com/raymfang/iot-app-kit/commit/f3de67e73c7197c6bf63254c93476475661738b0))
* increase the text widget initial size ([7d7918d](https://github.com/raymfang/iot-app-kit/commit/7d7918d50b10b04f75e0d9265da111a06c482600))
* latest value filtering and sorting ([6610382](https://github.com/raymfang/iot-app-kit/commit/66103826b0e157a737cdc2661c4c8bfa5edcb56f))
* line charts colors too quickly choose similar colors ([0af5465](https://github.com/raymfang/iot-app-kit/commit/0af5465ffc0a7f587a8e4a53487c8fb56c35d36a))
* missing pagination handling for searched model data [#1994](https://github.com/raymfang/iot-app-kit/issues/1994) ([81d5269](https://github.com/raymfang/iot-app-kit/commit/81d5269a0bd0349d95b2495330401623afd5b5b0))
* missing raect key internal space between ([9cbb214](https://github.com/raymfang/iot-app-kit/commit/9cbb214035f1434719cbbb94ac0360103fb232c6))
* msw batchGetAssetPropertyValueHandler response timeInSeconds values ([5869a00](https://github.com/raymfang/iot-app-kit/commit/5869a009550399ab73b882e2f253aa9c10ec1179))
* msw batchGetAssetPropertyValueHistoryHandler timestamp ([ccf21a7](https://github.com/raymfang/iot-app-kit/commit/ccf21a73a1391ac9da3ccceb18916897ef51066e))
* pagination default pagesize is set to 250 and error message update [#2242](https://github.com/raymfang/iot-app-kit/issues/2242) ([3a2d632](https://github.com/raymfang/iot-app-kit/commit/3a2d632e8430fb837656a43b030ef6eb35468417))
* panel resizing issue fix [#2256](https://github.com/raymfang/iot-app-kit/issues/2256) ([21dcb51](https://github.com/raymfang/iot-app-kit/commit/21dcb51fd8b05f4df4b5a8c4d6097ac97073d922))
* pasting at the edge of dashboard should paste widget within the grid [#2141](https://github.com/raymfang/iot-app-kit/issues/2141) ([ad1dde7](https://github.com/raymfang/iot-app-kit/commit/ad1dde7282983d7d6710c25b2399851c0ad03df7))
* programatically linked the color-picker id with color label in configPanelText [#2361](https://github.com/raymfang/iot-app-kit/issues/2361) ([ab05475](https://github.com/raymfang/iot-app-kit/commit/ab0547539bb9b47130c66c0520d7c0bce9cf5aee))
* **react-components:** add echarts extension for handling custom-y-axis ([b481beb](https://github.com/raymfang/iot-app-kit/commit/b481beb1e5a9a014a688d264aa3cb3addc4f51c7))
* **react-components:** fixing the viewport and some styling elements ([7d3526e](https://github.com/raymfang/iot-app-kit/commit/7d3526e34c86b55632a4d5aa0c7029fd1499a48b))
* **react-components:** fixing the xaxis and viewport dependency ([139bcc1](https://github.com/raymfang/iot-app-kit/commit/139bcc15aa219c1906544086ab6bf3d24e4035da))
* **react-components:** pagination over time + tooltip ([ff052c9](https://github.com/raymfang/iot-app-kit/commit/ff052c94fa9f57ac8138d025301a384ab217b258))
* **react-components:** refactor chart to use dataset ([b403789](https://github.com/raymfang/iot-app-kit/commit/b4037897cd4e7169958373bbf61d29c7454706ef))
* **react-components:** toggle legend hides container ([8d0ae53](https://github.com/raymfang/iot-app-kit/commit/8d0ae53981698bc8121cb0e40831b9d61e693075))
* **react-components:** updates for x-axis panning performance ([07a7624](https://github.com/raymfang/iot-app-kit/commit/07a7624d77962c38e7457abea1602082ebf2f5a3))
* **react-components:** updating echarts ux ([ddfc9c8](https://github.com/raymfang/iot-app-kit/commit/ddfc9c8cc15f32a8c307653daf5d2159918e58b2))
* **react-components:** updating echarts with the fixes founf during bug bash ([9f32c21](https://github.com/raymfang/iot-app-kit/commit/9f32c21ae53d99ddac718caa520d9e852a25f499))
* **react-component:** updating TC to have a drag area instead of just drag on the line ([05068bd](https://github.com/raymfang/iot-app-kit/commit/05068bddfd3a7ff0876550a11263496765b51080))
* realistic dev experience on storybook ([377d64a](https://github.com/raymfang/iot-app-kit/commit/377d64a4ead7b0a68d5df47a5df568da7d188021))
* remove size and position settings - [#2249](https://github.com/raymfang/iot-app-kit/issues/2249) ([276a1a1](https://github.com/raymfang/iot-app-kit/commit/276a1a1540087f6c3cc4e8c4c41cd2c7695f10a6))
* remove slashes from property alias when requesting latest in query editor ([fbead83](https://github.com/raymfang/iot-app-kit/commit/fbead83ac6765e4fed27b73925a9c4d460dc5a08))
* remove viewport and query from widget render key ([1587e2a](https://github.com/raymfang/iot-app-kit/commit/1587e2aa05887b1e9b1e486c153e8adc74cfde21))
* remove widget panel from text widget ([0620284](https://github.com/raymfang/iot-app-kit/commit/06202847ff980b851bf8ff836ebb2a239c3d00e7))
* resolved delete button invisible issue [#2164](https://github.com/raymfang/iot-app-kit/issues/2164) ([3ec8743](https://github.com/raymfang/iot-app-kit/commit/3ec8743115848175682e5a8c80bf605d6a2669a7))
* resolved table widget column resize issue ([8b6b418](https://github.com/raymfang/iot-app-kit/commit/8b6b4189601c594ffef9dd6ed915e6ddbf7fa938))
* resolved table widget column resize issue ([08b1993](https://github.com/raymfang/iot-app-kit/commit/08b19932614978cac915e34a27747f72da78c657))
* **ResourceExplorer:** filter out invalid twinmaker execute query search results ([e616be4](https://github.com/raymfang/iot-app-kit/commit/e616be4c6d8e2d8a01b5ba931a57307ea8b7f307))
* **ResourceExplorer:** implement toggling on/off of properties visibility ([8666736](https://github.com/raymfang/iot-app-kit/commit/8666736eb4642cadd7efcedd99fc680b4df17f83))
* restrict [@iot-app-kit](https://github.com/iot-app-kit) imports ([780f404](https://github.com/raymfang/iot-app-kit/commit/780f404f20475dab7d0e21af271b5f3f98defee5))
* style updates and bugfixes for multi y axis ([e11fd3e](https://github.com/raymfang/iot-app-kit/commit/e11fd3eb6629d75b3b2abdb2ad0466d02e66b8ef))
* synchronize batching ([dd0c0c6](https://github.com/raymfang/iot-app-kit/commit/dd0c0c6d0b17f4662ef370633ccd300899f9c106))
* table resize button aria label ([1618d50](https://github.com/raymfang/iot-app-kit/commit/1618d50a713cb1be8b9a74899144ca92cd9ec5f1))
* template asset table disables invalid dataTypes ([7cacc1c](https://github.com/raymfang/iot-app-kit/commit/7cacc1cee19fa9c9d116435d377e4bf820ba9ff9))
* text widget enhancement - 2429 ([0d5a367](https://github.com/raymfang/iot-app-kit/commit/0d5a367c074b12d98aa91a5b5c1ea37e3033c047))
* time machine enable in edit and preview mode ([c30d68b](https://github.com/raymfang/iot-app-kit/commit/c30d68b65dbf4003bc19220fa97a0b9b4b4dac40))
* toggle working linechar ([9ea6117](https://github.com/raymfang/iot-app-kit/commit/9ea61177710b9ece1be169a0c50e1c19fdefb5e6))
* twitchy widget icons [#2143](https://github.com/raymfang/iot-app-kit/issues/2143) ([60e7ad3](https://github.com/raymfang/iot-app-kit/commit/60e7ad306fb184e0be0be0ee9e56e4a6a988c073))
* ungate CSV download feature ([ec11c82](https://github.com/raymfang/iot-app-kit/commit/ec11c82c1b2932a5f7f28d9394f469cac6d68f97))
* unit test fail fix - [#2249](https://github.com/raymfang/iot-app-kit/issues/2249) ([b3a574c](https://github.com/raymfang/iot-app-kit/commit/b3a574c7d443d893aece711813265d94a0ef5ee6))
* updated the resource explorer default width [#2292](https://github.com/raymfang/iot-app-kit/issues/2292) ([149ec60](https://github.com/raymfang/iot-app-kit/commit/149ec60e9055851ca8d7abdd787f2762cdcfc8ea))
* updated the wcag compliance for dashboard resource explorer pane [#2173](https://github.com/raymfang/iot-app-kit/issues/2173) ([26bd618](https://github.com/raymfang/iot-app-kit/commit/26bd6181e4c507360247d6a7cddee7db0ba2c5bd))
* updates for performance issues ([8863b9a](https://github.com/raymfang/iot-app-kit/commit/8863b9a80d7a8284aa4732ed25298d165a769ea9))
* use one timesync for all of dashboard ([c979995](https://github.com/raymfang/iot-app-kit/commit/c979995ec642d0ac8081056a3d2e83dd42a90d18))


### Performance Improvements

* initial Animator implementation ([3b30cd2](https://github.com/raymfang/iot-app-kit/commit/3b30cd2c236704145ac29b2cf0222a28de9a0959))
* use requestAnimationFrame when dragging widgets on the dashboard ([ef3fc4e](https://github.com/raymfang/iot-app-kit/commit/ef3fc4ec1fed1cefa2f8cc58084b1d968eb1a08f))


### Reverts

* filter query on asset models ([c5aa946](https://github.com/raymfang/iot-app-kit/commit/c5aa946584194110cac9313e3150644951635e9c))
* reverting fix(dashboard): remove hide/show from dashboard definition and config panel ([7f63922](https://github.com/raymfang/iot-app-kit/commit/7f6392213d525ec3f5c7534b61323dfc896d112e))


### Miscellaneous Chores

* **dashboard:** change line-scatter-chart to xy-plot ([70593da](https://github.com/raymfang/iot-app-kit/commit/70593da0638b689f55396488def2c84fdc7dac19))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/components bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/core bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/core-util bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/react-components bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/source-iotsitewise bumped from 9.15.0 to 10.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/testing-util bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/ts-config bumped from 9.15.0 to 10.0.0
    * eslint-config-iot-app-kit bumped from 9.15.0 to 10.0.0
</details>

<details><summary>doc-site: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/doc-site-v9.15.0...doc-site-v10.0.0) (2024-02-20)


### Features

* **doc-site:** adding doc-site ([743ca50](https://github.com/raymfang/iot-app-kit/commit/743ca509649a31f11334fbbd2785cce1dbb4b735))


### Bug Fixes

* add doc-site to release-please config ([ccf5086](https://github.com/raymfang/iot-app-kit/commit/ccf5086fc9ef362e7c61c4d02cb3e88aa20b21c5))
* **doc-site:** canvas not recognised automatically ([1e42f58](https://github.com/raymfang/iot-app-kit/commit/1e42f5872f863349b51264526d4b74271e811412))
* testing-util as devDependency of doc-site ([3cc2bb0](https://github.com/raymfang/iot-app-kit/commit/3cc2bb08294244c3f6fd15800892d6402894b434))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from ^9.15.0 to ^10.0.0
    * @iot-app-kit/react-components bumped from ^9.15.0 to ^10.0.0
  * devDependencies
    * @iot-app-kit/testing-util bumped from ^9.15.0 to ^10.0.0
    * eslint-config-iot-app-kit bumped from ^9.15.0 to ^10.0.0
</details>

<details><summary>jest-config: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/jest-config-v9.15.0...jest-config-v10.0.0) (2024-02-20)


### Miscellaneous Chores

* **jest-config:** Synchronize iot-app-kit versions
</details>

<details><summary>react-components: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/react-components-v9.15.0...react-components-v10.0.0) (2024-02-20)


### Features

* add filtering ability ([51933bc](https://github.com/raymfang/iot-app-kit/commit/51933bc6cc1a76071ae1287ee7f79072c8d4dac7))
* add fixed width and height to the table ([7005009](https://github.com/raymfang/iot-app-kit/commit/7005009b1e325a8f333b281113ce1cf4745b0b19))
* changed ui experience of chart legend based on legend position [#2277](https://github.com/raymfang/iot-app-kit/issues/2277) ([de1f147](https://github.com/raymfang/iot-app-kit/commit/de1f14772b614f67156a34ac64300111a6c55126))
* chart fit and finish - match cloudscape colors for axis and labels [#1929](https://github.com/raymfang/iot-app-kit/issues/1929) ([6fe3424](https://github.com/raymfang/iot-app-kit/commit/6fe3424ec90052d2e63a06a34b874958b9c7bf0c))
* charts legend resize drag handle improvements [#2055](https://github.com/raymfang/iot-app-kit/issues/2055) ([0c69b75](https://github.com/raymfang/iot-app-kit/commit/0c69b755e8b1200238dcaac90a44ad07ab222b23))
* charts legend resize drag-handle improvements [#2055](https://github.com/raymfang/iot-app-kit/issues/2055) ([9e9db52](https://github.com/raymfang/iot-app-kit/commit/9e9db524cf1b403c9a64c631751ff862349b7ad2))
* chat legend enhancement [#2277](https://github.com/raymfang/iot-app-kit/issues/2277) ([b1ca8ae](https://github.com/raymfang/iot-app-kit/commit/b1ca8aeda126f09f371e23133fa600d5b56c9b21))
* **composer:** utils to handle model shader component in entity ([95a4be6](https://github.com/raymfang/iot-app-kit/commit/95a4be668b51d413589b16b7edde67fdd40375d1))
* **dashboard:** add colors to trendcursors ([a890c7d](https://github.com/raymfang/iot-app-kit/commit/a890c7db39df1a836312ac4050c41e2f4fdd9f4a))
* **dashboard:** add model based query support ([b95b60c](https://github.com/raymfang/iot-app-kit/commit/b95b60ccf074069268a8d71071067cfbd8265a20))
* **dashboard:** gated CSV download button ([645fb1c](https://github.com/raymfang/iot-app-kit/commit/645fb1cc3fdac5e27369a6ee538e0677ab4eb8b3))
* **dashboard:** new line-scatter-chart ([53768b9](https://github.com/raymfang/iot-app-kit/commit/53768b911a13066b9527c88f0e95a620f0025f7a))
* decimal round of in resource table ([a5da972](https://github.com/raymfang/iot-app-kit/commit/a5da9726649ca81a578efd365ba05d0dbe302b55))
* display legend unit conditionally  [#2277](https://github.com/raymfang/iot-app-kit/issues/2277) ([9f6440e](https://github.com/raymfang/iot-app-kit/commit/9f6440e9e06c9040a6be46eab3a9141ad02a0509))
* **echarts:** allow scroll left and right ([5d2341e](https://github.com/raymfang/iot-app-kit/commit/5d2341e71f531556ac8147e1a0742233992ed82d))
* first click on paginate timeline should move backward from current time duration ([5f9aa42](https://github.com/raymfang/iot-app-kit/commit/5f9aa42aef52d1bade596d0b8cfa1d58d51cce52))
* header design update ([700a913](https://github.com/raymfang/iot-app-kit/commit/700a91366ba57d7f6ca4b2058ee308a7317db9eb))
* legend resize ([792b617](https://github.com/raymfang/iot-app-kit/commit/792b6170cc19402f3c49fbd60e4a07dc0890c434))
* legend table is implemeted using tanstack table ([c92533a](https://github.com/raymfang/iot-app-kit/commit/c92533a342c95618d6dcf7d2a13bdad204bb01de))
* lint accessibility ([0db36ef](https://github.com/raymfang/iot-app-kit/commit/0db36ef6a07fe5e0709d17081dffa7d23669e2fe))
* preferences for pagination in table widget [#1890](https://github.com/raymfang/iot-app-kit/issues/1890) ([8072232](https://github.com/raymfang/iot-app-kit/commit/8072232240a17274556d208fc22d32a811866517))
* **react-components:** adding significant digits to trendcursors ([ef4c987](https://github.com/raymfang/iot-app-kit/commit/ef4c987f5142a7be0ec22aae49a31397999b45e2))
* **react-components:** adding TrendCursor Sync to dashboard ([d046184](https://github.com/raymfang/iot-app-kit/commit/d046184b836e9cb3670b210eb24c4fd91167b52a))
* **react-components:** brush zoom ([bddb7e1](https://github.com/raymfang/iot-app-kit/commit/bddb7e1e7b18a2179678fd6bee6a50d0a978d26d))
* **react-components:** hide/show properties from legend ([e666cf1](https://github.com/raymfang/iot-app-kit/commit/e666cf1cfba8343d1a5bbb0f38a4341969a18575))
* **react-components:** refactoring echarts ([83e505f](https://github.com/raymfang/iot-app-kit/commit/83e505ffaa9d31fe476be4d7f8029b5ae7c5a3ea))
* **react-components:** sync echarts viewport ([e04e040](https://github.com/raymfang/iot-app-kit/commit/e04e04079630361047e82d8564678cd4e5857cdd))
* **react-components:** trendcurors using echarts extension ([a7c6bbe](https://github.com/raymfang/iot-app-kit/commit/a7c6bbe064ae746f024b74d885721a70a06716a2))
* **ResourceExplorer:** hide properties table when not needed to be displayed ([0fca5e9](https://github.com/raymfang/iot-app-kit/commit/0fca5e9089ac7af52e1d31b2143acb121cb7869b))
* table widget pagination and sortingdisabled ([b727eae](https://github.com/raymfang/iot-app-kit/commit/b727eae8364f19f2e997fa0c9275e1f0a947f854))
* updated the chart legend ux [#1930](https://github.com/raymfang/iot-app-kit/issues/1930) ([68b8618](https://github.com/raymfang/iot-app-kit/commit/68b8618226c5f9ab0c5da64f7ad9210459809232))
* updated the chart legend ux(spacing, legend border color, width, tooltip) ([390cbe3](https://github.com/raymfang/iot-app-kit/commit/390cbe3414286bd7cfb1f041a2d21264552e7bd3))
* xy-plot y axis lable changes [#2378](https://github.com/raymfang/iot-app-kit/issues/2378) ([48389c3](https://github.com/raymfang/iot-app-kit/commit/48389c3e59305525b11b63233c3a79d4a8e3a78d))


### Bug Fixes

* accessible property filter labels ([30554a1](https://github.com/raymfang/iot-app-kit/commit/30554a1f59f2462b1a5334424866f67ee4507455))
* add eslint rule for hooks ([de7cc0d](https://github.com/raymfang/iot-app-kit/commit/de7cc0d94ffdb79d3cb2ce622dd322e6d8497d61))
* add signigicant digits to xy plot ([70a109e](https://github.com/raymfang/iot-app-kit/commit/70a109e8083b6729313f4f0dc362df0f3cf6ea62))
* broken tooltip imports ([8a25332](https://github.com/raymfang/iot-app-kit/commit/8a25332379e647911504cd75ff913f6b911a43c4))
* bugfix for overlapping colors in color palette ([7b4c95b](https://github.com/raymfang/iot-app-kit/commit/7b4c95b45866548f85b10fee3167a35354d73cfb))
* chart gesture performance ([cdd52c6](https://github.com/raymfang/iot-app-kit/commit/cdd52c627e99f4e712475b90d2869b16a5684038))
* **CSS-Loader:** updated sass-loader & fixed style ([aee4abc](https://github.com/raymfang/iot-app-kit/commit/aee4abcd22617cd1b28641711a4be2d1bab4e252))
* **dashboard:** chart respects absolute min and max between data and thresholds ([db16712](https://github.com/raymfang/iot-app-kit/commit/db1671225e300a18765d55a8afd1534640d264de))
* **dashboard:** improve widget drag and resize ([fcdc586](https://github.com/raymfang/iot-app-kit/commit/fcdc5862fc558f136d510eaa85e241daa61d9988))
* **dashboard:** remove viewport from the dashboard state to use viewport hook ([a9011a8](https://github.com/raymfang/iot-app-kit/commit/a9011a8a22e3bc41076fa6fb64065c016282d012))
* download button and zoom undo button ([a60a81b](https://github.com/raymfang/iot-app-kit/commit/a60a81b6f6e64b3113b14edcf6efe9fe82ef47f7))
* **echarts:** improved x+y axis min and max ([38741e2](https://github.com/raymfang/iot-app-kit/commit/38741e245b450c7e547b10305349f9652ae1872f))
* fix data-zoom behavior for base chart ([0c66a80](https://github.com/raymfang/iot-app-kit/commit/0c66a8016e2aa827ad3093c3ef89d6437e014d18))
* fix filtered data on zooms ([99e2f90](https://github.com/raymfang/iot-app-kit/commit/99e2f90aecdbaaa354e62e76b22c88a8530c1509))
* fixed property section tooltip gets cut off if property has longer name [#2293](https://github.com/raymfang/iot-app-kit/issues/2293) ([e496e4d](https://github.com/raymfang/iot-app-kit/commit/e496e4d52c566cab3e17e332ef3b587cd9fcc094))
* groupable echarts ([d704292](https://github.com/raymfang/iot-app-kit/commit/d704292964e6434450572154c60863fbdb027dc2))
* hidden and highlighted datastreams persist correctly ([5a85bb7](https://github.com/raymfang/iot-app-kit/commit/5a85bb7d40d07dce439a1bfa15550d8893089cbd))
* immediately change the line chart viewport when updating relative time range ([5ebb2f1](https://github.com/raymfang/iot-app-kit/commit/5ebb2f1597595bf66c63850835e2a64752e4ef9b))
* immediately change the line chart viewport when updating relative time range ([95b5b7d](https://github.com/raymfang/iot-app-kit/commit/95b5b7d80914a757613c3263f7bf0218acb355b4))
* improved zoom and default values for y axis ([112e5c5](https://github.com/raymfang/iot-app-kit/commit/112e5c58d7e3478dec03dfbb2eb52ec315b4690d))
* internal pipeline has issues with lfs, reverting ([968f950](https://github.com/raymfang/iot-app-kit/commit/968f95005c51591d7cb99af323808fd232b8d4e9))
* line chart progresses in time ([15876a8](https://github.com/raymfang/iot-app-kit/commit/15876a86e4d3790e41f917758618b3f11cc948c7))
* make context menu appear on top of chart tooltip ([e1622c8](https://github.com/raymfang/iot-app-kit/commit/e1622c86bf4ead6856e7e1c9be1d5b8a1d6d4d61))
* panning on chart widget moving [#2294](https://github.com/raymfang/iot-app-kit/issues/2294) ([9cefd9a](https://github.com/raymfang/iot-app-kit/commit/9cefd9a2107465ccde1468f1e0e2a271b0d30381))
* react-component Chart story book is broken ([c273ad5](https://github.com/raymfang/iot-app-kit/commit/c273ad529a7d78f887a2b8c64b50f76bfc018fc2))
* **react-components:** add echarts extension for handling custom-y-axis ([b481beb](https://github.com/raymfang/iot-app-kit/commit/b481beb1e5a9a014a688d264aa3cb3addc4f51c7))
* **react-components:** add fallback for property name to id ([a1024d4](https://github.com/raymfang/iot-app-kit/commit/a1024d459fd24d8c7056326706b41ff505eb41ec))
* **react-components:** adding debounce to the echarts zoom handler ([b983385](https://github.com/raymfang/iot-app-kit/commit/b98338508da223bab1a99c28641276ff02c537b5))
* **react-components:** adding handling of Yminmax for TC and fixing styling issues ([1581b9f](https://github.com/raymfang/iot-app-kit/commit/1581b9fb7cb77037fa830eaba07155aa253cfa33))
* **react-components:** clear ymin and ymax was getting emitted on every loop ([8609a48](https://github.com/raymfang/iot-app-kit/commit/8609a487a1b7ba9d4884750a6e6ee8819873a4b1))
* **react-components:** confining tootip to the chart area ([1bff986](https://github.com/raymfang/iot-app-kit/commit/1bff986999dc88a261caed22c3a77aab892219ad))
* **react-components:** echarts grab on canvas update cursor and tooltip ([bfef4e8](https://github.com/raymfang/iot-app-kit/commit/bfef4e878e9a47a9ed1f578767a04b03e6bc8a5e))
* **react-components:** echarts grab on canvas update cursor and tooltip ([a29da3a](https://github.com/raymfang/iot-app-kit/commit/a29da3a08a769137610bc37efde5605bf6b62dc2))
* **react-components:** echarts resize drag fix ([19ccc7e](https://github.com/raymfang/iot-app-kit/commit/19ccc7ee4569aea891b43883a8ba1dedf3ac4fc9))
* **react-components:** fix global and chart store persistence ([83f1345](https://github.com/raymfang/iot-app-kit/commit/83f13452cbf350639cc2cc576d47a26138d58832))
* **react-components:** fix TC behaviour when there is a change in query ([50edcc1](https://github.com/raymfang/iot-app-kit/commit/50edcc1b2131c03c9e30621407a3d3d201825a90))
* **react-components:** fix the mouse events ([7c07a37](https://github.com/raymfang/iot-app-kit/commit/7c07a37eb5e8649a6d967c96b297659caad270a8))
* **react-components:** fixing TCs on data zoom ([379525c](https://github.com/raymfang/iot-app-kit/commit/379525cd1246061398ff8a113963b968466ae11a))
* **react-components:** fixing the duplicate yAxis values ([60073ef](https://github.com/raymfang/iot-app-kit/commit/60073ef7ea4e1167218c8cdecd021bc677d5cc66))
* **react-components:** fixing the prod issue of dashboard throwing exception ([7ecd252](https://github.com/raymfang/iot-app-kit/commit/7ecd2526ed5c07f793ec5e97b1d3eb5595e67a7d))
* **react-components:** fixing the viewport and some styling elements ([7d3526e](https://github.com/raymfang/iot-app-kit/commit/7d3526e34c86b55632a4d5aa0c7029fd1499a48b))
* **react-components:** fixing the xaxis and viewport dependency ([139bcc1](https://github.com/raymfang/iot-app-kit/commit/139bcc15aa219c1906544086ab6bf3d24e4035da))
* **react-components:** hitbox spans entire pagination button ([6a5b2f8](https://github.com/raymfang/iot-app-kit/commit/6a5b2f8eaf237edc4aaae414765f5f186ce09c6a))
* **react-components:** mock date in viewport adapter date tests ([06200dd](https://github.com/raymfang/iot-app-kit/commit/06200dda24e5956c6db0a2b4bfe750cdf53c8592))
* **react-components:** need stop propagation in start and end of resize event ([30e9901](https://github.com/raymfang/iot-app-kit/commit/30e99010bc57e48040ddcac8c41546e745a5a3f9))
* **react-components:** pagination can move forward on first click from relative range ([fcb04f7](https://github.com/raymfang/iot-app-kit/commit/fcb04f73c3bf3af8a467169a3e9cbd6a6743d462))
* **react-components:** pagination over time + tooltip ([ff052c9](https://github.com/raymfang/iot-app-kit/commit/ff052c94fa9f57ac8138d025301a384ab217b258))
* **react-components:** performance fixes for chart component ([403f2bf](https://github.com/raymfang/iot-app-kit/commit/403f2bf6beea75e1e1668e33c60a6149ef1b5436))
* **react-components:** refactor chart to use dataset ([b403789](https://github.com/raymfang/iot-app-kit/commit/b4037897cd4e7169958373bbf61d29c7454706ef))
* **react-components:** refactor legend table into modules ([f5eed70](https://github.com/raymfang/iot-app-kit/commit/f5eed7068b70ae9305782f07b08115294b26a3b7))
* **react-components:** remove data points after a threshold ([cd6a189](https://github.com/raymfang/iot-app-kit/commit/cd6a18913d2c0f3fb8b066dffbdf48f38d6955e4))
* **react-components:** remove padded y axis code ([7e3d365](https://github.com/raymfang/iot-app-kit/commit/7e3d365d07dd4b074c6dda6d2934b7cb05fcde55))
* **react-components:** remove secondary selection state when using TCs or gestures ([3ba4e6a](https://github.com/raymfang/iot-app-kit/commit/3ba4e6a1cc0c2a7fd48eb130f3b72262fcd97ad5))
* **react-components:** removing animation for series lines ([b245995](https://github.com/raymfang/iot-app-kit/commit/b245995766c4f2b83bca219e9d8e6f806912cd6c))
* **react-components:** toggle legend hides container ([8d0ae53](https://github.com/raymfang/iot-app-kit/commit/8d0ae53981698bc8121cb0e40831b9d61e693075))
* **react-components:** trendcursor hotkey indicates addition state ([c9d34e0](https://github.com/raymfang/iot-app-kit/commit/c9d34e0ef4ba891522336f05718d1808442949e3))
* **react-components:** update viewportAdapter tests for month and minutes ([a269626](https://github.com/raymfang/iot-app-kit/commit/a269626bd3e78a8b5f515b8f3d590848e9f70725))
* **react-components:** updates for x-axis panning performance ([07a7624](https://github.com/raymfang/iot-app-kit/commit/07a7624d77962c38e7457abea1602082ebf2f5a3))
* **react-components:** updating echarts ux ([ddfc9c8](https://github.com/raymfang/iot-app-kit/commit/ddfc9c8cc15f32a8c307653daf5d2159918e58b2))
* **react-components:** updating echarts with the fixes founf during bug bash ([9f32c21](https://github.com/raymfang/iot-app-kit/commit/9f32c21ae53d99ddac718caa520d9e852a25f499))
* **react-component:** updating TC to have a drag area instead of just drag on the line ([05068bd](https://github.com/raymfang/iot-app-kit/commit/05068bddfd3a7ff0876550a11263496765b51080))
* relative month test ([5c6e262](https://github.com/raymfang/iot-app-kit/commit/5c6e262b16b8a739c4a4d9e823453094242c67d9))
* remove line chart tweening animation ([d9e894b](https://github.com/raymfang/iot-app-kit/commit/d9e894b0f651ad24dce87d7f7c4dbe28f43f43e0))
* removed tanstack table related code ([c8be85d](https://github.com/raymfang/iot-app-kit/commit/c8be85d919faac44441f4b00aa81ac7dbf215599))
* style updates and bugfixes for multi y axis ([e11fd3e](https://github.com/raymfang/iot-app-kit/commit/e11fd3eb6629d75b3b2abdb2ad0466d02e66b8ef))
* table resize button aria label ([1618d50](https://github.com/raymfang/iot-app-kit/commit/1618d50a713cb1be8b9a74899144ca92cd9ec5f1))
* toggle working linechar ([9ea6117](https://github.com/raymfang/iot-app-kit/commit/9ea61177710b9ece1be169a0c50e1c19fdefb5e6))
* ungate CSV download feature ([ec11c82](https://github.com/raymfang/iot-app-kit/commit/ec11c82c1b2932a5f7f28d9394f469cac6d68f97))
* update dependency to not include styles ([e09651e](https://github.com/raymfang/iot-app-kit/commit/e09651e5c065458a269d8d95d1c9c959c5f95ace))
* update unit test ([2276584](https://github.com/raymfang/iot-app-kit/commit/2276584325c75b8aa823d24588fb589b18876699))
* updated the wcag compliance for dashboard resource explorer pane [#2173](https://github.com/raymfang/iot-app-kit/issues/2173) ([26bd618](https://github.com/raymfang/iot-app-kit/commit/26bd6181e4c507360247d6a7cddee7db0ba2c5bd))
* updates for performance issues ([8863b9a](https://github.com/raymfang/iot-app-kit/commit/8863b9a80d7a8284aa4732ed25298d165a769ea9))
* use datastream id as legend table row key ([b4c11bc](https://github.com/raymfang/iot-app-kit/commit/b4c11bcd40400d4f7eae680d5ab521f00b638f64))
* **video player:** correcting the VideoPlayer export ([18213d7](https://github.com/raymfang/iot-app-kit/commit/18213d7b254355776900c0e6c735ce6a039ac3f5))
* **video-player:** toggle playback mode and update time range ([a033cb0](https://github.com/raymfang/iot-app-kit/commit/a033cb01824ccff6a63eb4e62d019b691b085a0a))
* x-axis toggle will toggle both x and y axis [#1925](https://github.com/raymfang/iot-app-kit/issues/1925) ([58b0dbb](https://github.com/raymfang/iot-app-kit/commit/58b0dbbc72a9dbfd13648a454ea36ac570efd0eb))
* yAxis label collides with yAxis name [#2471](https://github.com/raymfang/iot-app-kit/issues/2471) ([85ac6ac](https://github.com/raymfang/iot-app-kit/commit/85ac6ac4586d560e44cadedbffe5b1a187bd8bb8))


### Reverts

* updated the chart legend ux(spacing, legend border color, width, tooltip) ([6bbe391](https://github.com/raymfang/iot-app-kit/commit/6bbe39103f286ed6f09bd1f4fdd3353dba833e5a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/components bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/core bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/core-util bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/source-iottwinmaker bumped from 9.15.0 to 10.0.0
  * devDependencies
    * @iot-app-kit/core bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/jest-config bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/source-iotsitewise bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/testing-util bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/ts-config bumped from 9.15.0 to 10.0.0
    * eslint-config-iot-app-kit bumped from 9.15.0 to 10.0.0
</details>

<details><summary>related-table: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/related-table-v9.15.0...related-table-v10.0.0) (2024-02-20)


### Miscellaneous Chores

* **related-table:** Synchronize iot-app-kit versions


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @iot-app-kit/jest-config bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/ts-config bumped from 9.15.0 to 10.0.0
    * eslint-config-iot-app-kit bumped from 9.15.0 to 10.0.0
</details>

<details><summary>scene-composer: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/scene-composer-v9.15.0...scene-composer-v10.0.0) (2024-02-20)


###   BREAKING CHANGES

* **composer:** remove deprecated and internal interfaces from public

### Features

* adding docker setup for scene-composer ui tests ([3db0c9b](https://github.com/raymfang/iot-app-kit/commit/3db0c9bf11dcba40782241f3886cd79f1912f00f))
* **component:** allow disable/enable layer auto refresh ([5278b9c](https://github.com/raymfang/iot-app-kit/commit/5278b9c8eafb01510484b75cebd10e05bb921421))
* **component:** utils to handle light component in entity ([26a1494](https://github.com/raymfang/iot-app-kit/commit/26a1494e5787a54f1292408f69ecac514100704e))
* **composer:** add a11y color picker ([e768a88](https://github.com/raymfang/iot-app-kit/commit/e768a884118768b5080e745ef8113a344dd0d80e))
* **composer:** add keyboard nav to floating toolbar ([efd375f](https://github.com/raymfang/iot-app-kit/commit/efd375fc7ba23fd7fe7617783f45a140e464ccdb))
* **composer:** add utils to convert all nodes to entities ([4e305d4](https://github.com/raymfang/iot-app-kit/commit/4e305d4841a10d962c0278f60858297297146570))
* **composer:** append scene node action creates entity for dynamic scene ([4ebe88a](https://github.com/raymfang/iot-app-kit/commit/4ebe88a6db092e4943db702c90961cf57fb100a3))
* **composer:** convert nodes to entities UI ([43f5e66](https://github.com/raymfang/iot-app-kit/commit/43f5e663efb0e517a2f1e0badb369a43438b0675))
* **composer:** enable auto query feature ([661af11](https://github.com/raymfang/iot-app-kit/commit/661af1188f690d6b2a33f26a6105b5fecdc539b9))
* **composer:** render tags from layer ([d9c5191](https://github.com/raymfang/iot-app-kit/commit/d9c519114d3e39c3913eb32b23984f8204b756d8))
* **composer:** save scene level data to scene root entity ([6cabfb5](https://github.com/raymfang/iot-app-kit/commit/6cabfb55de10004b1f0314cb7be931ef3969b09e))
* **composer:** show delete confirmation modal for dynamic scene ([fdc9ef1](https://github.com/raymfang/iot-app-kit/commit/fdc9ef16df97d1528b3f28c96470e513bb9722a7))
* **composer:** support showing flash message ([da7281a](https://github.com/raymfang/iot-app-kit/commit/da7281a84e47325c56071850f6ea49a6eed73233))
* **composer:** support sync matterport tag as entities ([7db178a](https://github.com/raymfang/iot-app-kit/commit/7db178a4aee74cbd299dc115c7cf3786dc376800))
* **composer:** support tag custom icon in entity ([dc07a1d](https://github.com/raymfang/iot-app-kit/commit/dc07a1dc3a2634b4d62de334b42499cd2e6f3060))
* **composer:** utils to handle camera component in entity ([7ad3bf5](https://github.com/raymfang/iot-app-kit/commit/7ad3bf51a7d548edc242a6d2c9de13167ec2d4bb))
* **composer:** utils to handle model shader component in entity ([95a4be6](https://github.com/raymfang/iot-app-kit/commit/95a4be668b51d413589b16b7edde67fdd40375d1))
* **composer:** utils to handle motion indicator component in entity ([4a1a8b4](https://github.com/raymfang/iot-app-kit/commit/4a1a8b4a972670e56363f445aed7038253e5192d))
* **composer:** utils to handle subModelRef component in entity ([d425c57](https://github.com/raymfang/iot-app-kit/commit/d425c5706790575dda50be733fd5a618cbafff0e))
* **dynamic scene:** crud functionalities for model ref ([2314926](https://github.com/raymfang/iot-app-kit/commit/2314926f385c44f76243223839f9d3d4f6325c51))
* **dynamic scenes:** save node updates to entities ([0bb2445](https://github.com/raymfang/iot-app-kit/commit/0bb2445fb39659ca970c51319a42cd2d0ff95360))
* **dynamic scenes:** update entities using dynamic scenes ([8eee582](https://github.com/raymfang/iot-app-kit/commit/8eee582e039a5cb2a3e25c81f822a4ecca95672c))
* **first Person:** proof of using pointer lock for a first person view ([391eddd](https://github.com/raymfang/iot-app-kit/commit/391edddd5ab3c56be2e394aec06346dfbc29b776))
* **propertyName:** add copy button and textarea ([7c0eaf4](https://github.com/raymfang/iot-app-kit/commit/7c0eaf432e40e25a5319a29e7546442d81e8c3dc))
* **scene composer:** added icon picker changes ([8ca53b8](https://github.com/raymfang/iot-app-kit/commit/8ca53b8552f9eb09f107ea43d983a6b47f19fa88))
* **scene composer:** adding data-testid to improve e2e test ([1e5ab86](https://github.com/raymfang/iot-app-kit/commit/1e5ab863f89fcdf66aa7b4c0e3b0f5c77367411e))
* **scene composer:** fix for icon rules and save icon metadata ([0ac8508](https://github.com/raymfang/iot-app-kit/commit/0ac85082391d34731fafa73f826309e66d9f6000))
* **scene composer:** icon picker rule changes ([e126b53](https://github.com/raymfang/iot-app-kit/commit/e126b53371a0c3a03a4e7ff1d48f104c9b99c395))
* **scene composer:** setting up 3D test harness ([df62eef](https://github.com/raymfang/iot-app-kit/commit/df62eefd048a66f327070bc8c90b4c9b964de26e))
* **scene-composer:** enable accelerated raycasting for 3D Tiles ([84d2ce4](https://github.com/raymfang/iot-app-kit/commit/84d2ce4783c74a3792c11009f99cfac888cd848d))
* **scene-composer:** support tag occlusion ([3764013](https://github.com/raymfang/iot-app-kit/commit/376401335e6c4d4646bfc49260e35a41a9a43646))
* **scene:** add asset type filter option for browser callback ([f65d4f0](https://github.com/raymfang/iot-app-kit/commit/f65d4f0d5429dfa25b90208d924bfe3c3e3640df))
* **scene:** add fog settings to scene ([78c6e75](https://github.com/raymfang/iot-app-kit/commit/78c6e756ff7acfeace2be2473ae6c4defcb94af6))
* **scene:** add ground plane button ([c282c41](https://github.com/raymfang/iot-app-kit/commit/c282c41e5f96c403a7cbbea95dc5a759ab2d4193))
* **scene:** enable scene backgrounds ([e630ff2](https://github.com/raymfang/iot-app-kit/commit/e630ff21ef69010e1ac1cac705460e581c0310eb))
* **scene:** move add ground plane to settings ([3b0c59b](https://github.com/raymfang/iot-app-kit/commit/3b0c59b13243892a657f8ed975448babe7a6caec))
* **scene:** textures for backgrounds and planes ([0b2104a](https://github.com/raymfang/iot-app-kit/commit/0b2104ae299f899b88ac4d77696b075793ceed1d))
* set tagStyle flag to true for viewer ([af5357f](https://github.com/raymfang/iot-app-kit/commit/af5357f53e59ed227319c0a37061b4b07b62584e))
* **Tiles3D:** add Tiles3D AssetType and evaluate model type when adding a 3D model to the scene ([eec0f50](https://github.com/raymfang/iot-app-kit/commit/eec0f508caa4b1f6b2c7a84baa4f45bf4dc7195b))
* **TM-source:** add entity APIs to SceneMetadataModule ([1a91084](https://github.com/raymfang/iot-app-kit/commit/1a910844692aa30bbd4b9d1920d415378bcad130))


### Bug Fixes

* **camera:** selecting camera view uses raycast to set better target distance for orbit ([76d9272](https://github.com/raymfang/iot-app-kit/commit/76d927214ae02ca2c1c8657afb9f8d01bf396548))
* **camera:** stop camera view inspector panel from overwriting changes unexpectedly ([37a8122](https://github.com/raymfang/iot-app-kit/commit/37a8122b54ef95f7dca56ad341a5183fd11a05f8))
* **composer:** add aria labels to buttons in hierarchy panel ([24c8c30](https://github.com/raymfang/iot-app-kit/commit/24c8c30594a0961509079bd942763d22d0d9ccdf))
* **composer:** add aria labels to icons ([8a70eb1](https://github.com/raymfang/iot-app-kit/commit/8a70eb13f081b39dae701dfa999e8aa3ce0a8378))
* **composer:** add aria labels to rules panel ([ff78ab0](https://github.com/raymfang/iot-app-kit/commit/ff78ab0831170be7c5bad53cba0c903d20034aaf))
* **composer:** add new translations ([de7249a](https://github.com/raymfang/iot-app-kit/commit/de7249a8a920e1c43faeda4fd94fb57e9d0fc9f3))
* **composer:** associate inputs to labels ([8b64f9a](https://github.com/raymfang/iot-app-kit/commit/8b64f9aa38761ed684be8b9088a8b7edd6bb0681))
* **composer:** autofocus on error, rules panel ([b132e27](https://github.com/raymfang/iot-app-kit/commit/b132e278a00a8729642afeec3382312685877110))
* **composer:** bug fixes for dynamic scene ([10046da](https://github.com/raymfang/iot-app-kit/commit/10046daf2ef3ea2d161321a7794d019db3ccd76f))
* **composer:** bug fixes for dynamic scene ([2f3b396](https://github.com/raymfang/iot-app-kit/commit/2f3b396bc9aa41c2e4df17b0d9a47863db97f211))
* **composer:** cannot delete node entity with child ([a7976bb](https://github.com/raymfang/iot-app-kit/commit/a7976bb55afbc83d0fd3848ef1eb1fd6a81dedbc))
* **composer:** cannot delete scene node of a child and then its parent ([a2e140a](https://github.com/raymfang/iot-app-kit/commit/a2e140ab0ef05975e2ec1d8e36a4d68ad9087911))
* **composer:** create default entity roots ([4b38ea5](https://github.com/raymfang/iot-app-kit/commit/4b38ea598360fdaa4dd3545273dab888963d7bb7))
* **composer:** create existing matterport tag as entities ([0d1d16e](https://github.com/raymfang/iot-app-kit/commit/0d1d16e17c35af067ef1f5f4f41030bfd3897d9a))
* **composer:** custom tag rendered slightly off the center ([0cecac1](https://github.com/raymfang/iot-app-kit/commit/0cecac14f2ff201f3f5eb16446b7aab43acf10ce))
* **composer:** debounce component update to reduce UpdateEntity error ([4f13db1](https://github.com/raymfang/iot-app-kit/commit/4f13db18ae134c7a95c50ed1d855e9e977f59539))
* **composer:** error when switching motion indicator appearance ([c51f135](https://github.com/raymfang/iot-app-kit/commit/c51f13530b36c8a7e1e17d8ea65c4bec515fb16d))
* **composer:** floating toolbar orientation dependent on screen size ([228037d](https://github.com/raymfang/iot-app-kit/commit/228037da8351499be142b75fc6b62aefc9047ee2))
* **composer:** get entityBinding in different query ([b4e4a22](https://github.com/raymfang/iot-app-kit/commit/b4e4a22cebeeb39027052c47bb8647bae836d3c2))
* **composer:** improve load sub model latency ([23ad9ad](https://github.com/raymfang/iot-app-kit/commit/23ad9ada3b89295b66738cdfc297dc6e0bf72a03))
* **composer:** lock 3d tiles lib to working version ([f719bc4](https://github.com/raymfang/iot-app-kit/commit/f719bc4964e454db16d6c746548b37c092692ca3))
* **composer:** matterport tag sync tag style under flag ([83334ce](https://github.com/raymfang/iot-app-kit/commit/83334ce21a089ecff46c86ddfb320f1bafe6011d))
* **composer:** persist new dynamic node world transform ([cb6704f](https://github.com/raymfang/iot-app-kit/commit/cb6704f5b8767bfacad8244415daa2283efd6250))
* **composer:** refactor scene modal rendering ([1d797b1](https://github.com/raymfang/iot-app-kit/commit/1d797b1a6aeab60e45f8e11daf8cd97b9b21033b))
* **composer:** remove deprecated and internal interfaces from public ([07e82b4](https://github.com/raymfang/iot-app-kit/commit/07e82b42963931ddce95362f4a6cca9add6a1423))
* **composer:** remove useCallback from menu event handlers ([0a7c133](https://github.com/raymfang/iot-app-kit/commit/0a7c13336760f2f0548e8c902a95086fb4d27be4))
* **composer:** resize/reposition overlaps on small screens ([64d3855](https://github.com/raymfang/iot-app-kit/commit/64d3855b866ec6f50e7d9891863c1fea801ceabf))
* **composer:** show sync matterport tag status ([2c041c5](https://github.com/raymfang/iot-app-kit/commit/2c041c56d637efd201e615e04f27a6761cc20c4c))
* **composer:** split overlay content into parts ([328a33c](https://github.com/raymfang/iot-app-kit/commit/328a33c0fc3ad80666476099d9e49768fca03b2b))
* **composer:** tag style field is empty when creating a new tag instead of info ([595147b](https://github.com/raymfang/iot-app-kit/commit/595147bc564b9599598c93059bc6ccf62b2c2b7e))
* **composer:** trigger onSceneLoaded after dynamic scene is loaded ([4c9453a](https://github.com/raymfang/iot-app-kit/commit/4c9453a12211a878a850d71eee7cb8bd3d4a5fe3))
* **composer:** update Polaris package version ([592c435](https://github.com/raymfang/iot-app-kit/commit/592c4359e325eb4149a0f872b30f87a0305feb5b))
* **composer:** update property string length limit to 2048 ([a3cb800](https://github.com/raymfang/iot-app-kit/commit/a3cb8009d8547351449bac7c121e67d66971a708))
* **CSS-Loader:** updated sass-loader & fixed style ([aee4abc](https://github.com/raymfang/iot-app-kit/commit/aee4abcd22617cd1b28641711a4be2d1bab4e252))
* fix bug, update test ([24c8c30](https://github.com/raymfang/iot-app-kit/commit/24c8c30594a0961509079bd942763d22d0d9ccdf))
* **icon rules:** align icon-picker layout with target editor ([536f391](https://github.com/raymfang/iot-app-kit/commit/536f3910d2f50cfa41a80e98b43a43f59d0a249f))
* internal pipeline has issues with lfs, reverting ([968f950](https://github.com/raymfang/iot-app-kit/commit/968f95005c51591d7cb99af323808fd232b8d4e9))
* **matterport:** fix zoom to tag ([49a04f8](https://github.com/raymfang/iot-app-kit/commit/49a04f81bc464d20798f219f77f325bde74ad1f6))
* **scene composer:** fix for missing grid ([2a4c4c8](https://github.com/raymfang/iot-app-kit/commit/2a4c4c8b194a2eceebe73dc87d24215836be4a99))
* **scene composer:** removing custom grid line colors ([632f7a2](https://github.com/raymfang/iot-app-kit/commit/632f7a210a80281b1d3c53b0a5de168f8cae9d10))
* **scene composer:** restoring dark mode in stotybook ([94e9ac4](https://github.com/raymfang/iot-app-kit/commit/94e9ac4e48762d5389c1fead82938d5ed90857a3))
* **scene composer:** show correct Icon field for tags with Custom Style ([a2239b8](https://github.com/raymfang/iot-app-kit/commit/a2239b86f31fcfcf138a4e7b2305f80958baa641))
* **scene tags:** fix anchor stems not triggering onWidgetClick ([6945512](https://github.com/raymfang/iot-app-kit/commit/6945512eadbdd8d8bc09977ecce7511fbf136311))
* **scene-composer:** 3D model selection broken on first click ([7ee722a](https://github.com/raymfang/iot-app-kit/commit/7ee722ab3cf1aa4a353e7b05c1a9b53f3ac00c88))
* **scene-composer:** add scroll bar to show all tag icons by default ([15c5dee](https://github.com/raymfang/iot-app-kit/commit/15c5deef876eb6af9d4332f3944aeead31412a59))
* **scene-composer:** fix scene hierarchy in viewer mode ([c8c70fd](https://github.com/raymfang/iot-app-kit/commit/c8c70fdac04d8aab12f5a6a3f19303cb6754d083))
* **scene-composer:** fix sub-model selection ([0a11b9a](https://github.com/raymfang/iot-app-kit/commit/0a11b9a391767fea2d255509ac9377889e812a5c))
* **scene-composer:** restore the grid line colors ([be53320](https://github.com/raymfang/iot-app-kit/commit/be53320c4b553f26d3470dd9bf701fa45b85fd7c))
* **scene-composer:** sync tag icon from Matterport ([e0aa7a7](https://github.com/raymfang/iot-app-kit/commit/e0aa7a72db0dc1bcbc3a9c7c7ae87e4b5c061b84))
* **scene:** add overlay close button back ([24f0d94](https://github.com/raymfang/iot-app-kit/commit/24f0d9427a62ea7174983e10af75fe6f6dcb363a))
* **Scene:** animation components added at correct time behind flag ([da149cc](https://github.com/raymfang/iot-app-kit/commit/da149cc5456f841a98581be82b792f52f062b85a))
* **scene:** comment tweak ([234b703](https://github.com/raymfang/iot-app-kit/commit/234b703f8991166e831b385c2cdf6bfd8685fe2a))
* **scene:** ensure the selected overlay is always the one at front ([7a15943](https://github.com/raymfang/iot-app-kit/commit/7a15943accdbae27059e043cf8a55dda525531c1))
* **scene:** fix camera returning to last target on mode change ([08e608d](https://github.com/raymfang/iot-app-kit/commit/08e608dfffdbdb990beb421ead3a504da607d50f))
* **scene:** fix transform controls being clickable ([b846730](https://github.com/raymfang/iot-app-kit/commit/b846730c0cb4e605d047f6421b0c28472b911cf7))
* **scene:** only show selected tags overlay ([20b7c57](https://github.com/raymfang/iot-app-kit/commit/20b7c578bd6b4e44bf11109e0f55f9212328b812))
* **scene:** remove transform controls from raycast ([9cd9861](https://github.com/raymfang/iot-app-kit/commit/9cd9861768fb538726f22541aa54ef05c0f4adf9))
* **scene:** stop scene composer from forcing dark mode on page ([40ef97b](https://github.com/raymfang/iot-app-kit/commit/40ef97b4a6b2baa376fd129991b4672369631323))
* **tools-iottwinmaker:** update dashboard role to include execute query api ([b63d053](https://github.com/raymfang/iot-app-kit/commit/b63d0537ce247724d0dd73d8d0d1ffba20e0ab5a))
* update component name ([e768a88](https://github.com/raymfang/iot-app-kit/commit/e768a884118768b5080e745ef8113a344dd0d80e))
* update HistoryItemGroup snap ([ff64273](https://github.com/raymfang/iot-app-kit/commit/ff64273d2ec48609a4edb2156a2ea9e4bb04a1b4))
* update package-lock.json ([e768a88](https://github.com/raymfang/iot-app-kit/commit/e768a884118768b5080e745ef8113a344dd0d80e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/react-components bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/related-table bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/source-iottwinmaker bumped from 9.15.0 to 10.0.0
  * devDependencies
    * eslint-config-iot-app-kit bumped from 9.15.0 to 10.0.0
</details>

<details><summary>source-iotsitewise: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/source-iotsitewise-v9.15.0...source-iotsitewise-v10.0.0) (2024-02-20)


### Features

* ability to toggle property visibility in config panel [#1986](https://github.com/raymfang/iot-app-kit/issues/1986) ([560b776](https://github.com/raymfang/iot-app-kit/commit/560b7765c4a4ae8db6d06e70f69b2276844716a8))
* async fetchTimeSeriesData ([2b776cc](https://github.com/raymfang/iot-app-kit/commit/2b776ccf73a538abfbcf4a0ba175dca7c2c4aa0c))
* **dashboard:** add model based query support ([b95b60c](https://github.com/raymfang/iot-app-kit/commit/b95b60ccf074069268a8d71071067cfbd8265a20))
* **dashboard:** composite model api calls and updated SDK ([9c23a38](https://github.com/raymfang/iot-app-kit/commit/9c23a383a46895bab05eccc265dc61318c767b49))
* fetchTimeSeriesData ([1c65191](https://github.com/raymfang/iot-app-kit/commit/1c65191654c726b66cf1e0bcc2df83d620f6d4a5))
* unmodeled data streams ([71bebef](https://github.com/raymfang/iot-app-kit/commit/71bebefebdaefc235ec2ec505bc5f4dd0d1c7f31))


### Bug Fixes

* add request settings to fetchTimeSeriesData ([d7cbd9d](https://github.com/raymfang/iot-app-kit/commit/d7cbd9d8bb5a5f56804a7ebce2c87e944bcb6f2b))
* grab asset composite property correctly ([1c57017](https://github.com/raymfang/iot-app-kit/commit/1c57017f3b3c78c62fc3a3cdfc6f4fa01a09f745))
* prevent fetching ([85a7b35](https://github.com/raymfang/iot-app-kit/commit/85a7b35f9b5303fe037de5636a75827335ffdaba))
* **ResourceExplorer:** implement toggling on/off of properties visibility ([8666736](https://github.com/raymfang/iot-app-kit/commit/8666736eb4642cadd7efcedd99fc680b4df17f83))
* restrict [@iot-app-kit](https://github.com/iot-app-kit) imports ([780f404](https://github.com/raymfang/iot-app-kit/commit/780f404f20475dab7d0e21af271b5f3f98defee5))
* source-iotsitewise batch API options ([6e4d430](https://github.com/raymfang/iot-app-kit/commit/6e4d430a033bbd54eb403a96f04ecb23a7909e36))
* synchronize requests after switching tabs ([14f89d9](https://github.com/raymfang/iot-app-kit/commit/14f89d982887db3cd61886c32ec2aa27997f8964))


### Performance Improvements

* improve raw batching ([263282d](https://github.com/raymfang/iot-app-kit/commit/263282d751d334745ddc3079d6a8959b5cf1e6d9))
* increase batch entry and result size ([cf5e978](https://github.com/raymfang/iot-app-kit/commit/cf5e9785418c801e89cc2afa2a626e16547a8a7c))
* increase batch size ([1fefe81](https://github.com/raymfang/iot-app-kit/commit/1fefe81cecf8bbeffebb5e89b73cab3494beba21))
* prevent duplication of simultaneous data stream metadata requests ([bfbe7b2](https://github.com/raymfang/iot-app-kit/commit/bfbe7b23c968e367423cf8a81504e2773e5460bc))


### Reverts

* "perf: increase batch size" ([636a539](https://github.com/raymfang/iot-app-kit/commit/636a539fcba8c62871b1b60b117ab2881124ac81))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/core-util bumped from 9.15.0 to 10.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/testing-util bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/ts-config bumped from 9.15.0 to 10.0.0
    * eslint-config-iot-app-kit bumped from 9.15.0 to 10.0.0
</details>

<details><summary>source-iottwinmaker: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/source-iottwinmaker-v9.15.0...source-iottwinmaker-v10.0.0) (2024-02-20)


### Features

* **composer:** render tags from layer ([d9c5191](https://github.com/raymfang/iot-app-kit/commit/d9c519114d3e39c3913eb32b23984f8204b756d8))
* **composer:** support showing flash message ([da7281a](https://github.com/raymfang/iot-app-kit/commit/da7281a84e47325c56071850f6ea49a6eed73233))
* **dashboard:** composite model api calls and updated SDK ([9c23a38](https://github.com/raymfang/iot-app-kit/commit/9c23a383a46895bab05eccc265dc61318c767b49))
* **TM-source:** add entity APIs to SceneMetadataModule ([1a91084](https://github.com/raymfang/iot-app-kit/commit/1a910844692aa30bbd4b9d1920d415378bcad130))


### Bug Fixes

* synchronize requests after switching tabs ([14f89d9](https://github.com/raymfang/iot-app-kit/commit/14f89d982887db3cd61886c32ec2aa27997f8964))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 9.15.0 to 10.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 9.15.0 to 10.0.0
    * @iot-app-kit/ts-config bumped from 9.15.0 to 10.0.0
    * eslint-config-iot-app-kit bumped from 9.15.0 to 10.0.0
</details>

<details><summary>testing-util: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/testing-util-v9.15.0...testing-util-v10.0.0) (2024-02-20)


### Features

* **dashboard:** composite model api calls and updated SDK ([9c23a38](https://github.com/raymfang/iot-app-kit/commit/9c23a383a46895bab05eccc265dc61318c767b49))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 9.15.0 to 10.0.0
  * devDependencies
    * @iot-app-kit/ts-config bumped from ^9.15.0 to ^10.0.0
    * eslint-config-iot-app-kit bumped from ^9.15.0 to ^10.0.0
</details>

<details><summary>tools-iottwinmaker: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/tools-iottwinmaker-v9.15.0...tools-iottwinmaker-v10.0.0) (2024-02-20)


### Bug Fixes

* added proper error handling for S3 Bucket ACL issues found by customer, updated README ([bbc0aa3](https://github.com/raymfang/iot-app-kit/commit/bbc0aa388041a76b0c79e6202c44431eeae4a9af))
* **TMDT:** change role name to match console, revert GLB code to fix bug, add error handling for IAM ([66f5d83](https://github.com/raymfang/iot-app-kit/commit/66f5d83d3800e07efd3e54b912dbfbbda4ea7f25))
* **tools-iottwinmaker:** update dashboard role to include execute query api ([b63d053](https://github.com/raymfang/iot-app-kit/commit/b63d0537ce247724d0dd73d8d0d1ffba20e0ab5a))
</details>

<details><summary>ts-config: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/ts-config-v9.15.0...ts-config-v10.0.0) (2024-02-20)


### Miscellaneous Chores

* **ts-config:** Synchronize iot-app-kit versions
</details>

<details><summary>eslint-config: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/eslint-config-v9.15.0...eslint-config-v10.0.0) (2024-02-20)


### Bug Fixes

* restrict [@iot-app-kit](https://github.com/iot-app-kit) imports ([780f404](https://github.com/raymfang/iot-app-kit/commit/780f404f20475dab7d0e21af271b5f3f98defee5))
</details>

<details><summary>root: 10.0.0</summary>

## [10.0.0](https://github.com/raymfang/iot-app-kit/compare/root-v9.15.0...root-v10.0.0) (2024-02-20)


###   BREAKING CHANGES

* **composer:** remove deprecated and internal interfaces from public
* **dashboard:** widget type change from line-scatter-chart -> xy-plot
* **dashboard:** remove line and scatter widgets

### Features

* ability to toggle property visibility in config panel [#1986](https://github.com/raymfang/iot-app-kit/issues/1986) ([560b776](https://github.com/raymfang/iot-app-kit/commit/560b7765c4a4ae8db6d06e70f69b2276844716a8))
* add CSV download button ([d89b1f8](https://github.com/raymfang/iot-app-kit/commit/d89b1f880491615c023ea84d53b0c843d52315b4))
* add delete confirm modal for widgets ([84fb016](https://github.com/raymfang/iot-app-kit/commit/84fb01663e37ac5c1ba84a08baf75d1b1a7668f0))
* add filtering ability ([51933bc](https://github.com/raymfang/iot-app-kit/commit/51933bc6cc1a76071ae1287ee7f79072c8d4dac7))
* add fixed width and height to the table ([7005009](https://github.com/raymfang/iot-app-kit/commit/7005009b1e325a8f333b281113ce1cf4745b0b19))
* add line style thickness per property ([fb19652](https://github.com/raymfang/iot-app-kit/commit/fb196521ba7b35019828e1c9f2c4383841e4620b))
* added date time formatter in resource explorer table [#2140](https://github.com/raymfang/iot-app-kit/issues/2140) ([10137b7](https://github.com/raymfang/iot-app-kit/commit/10137b780ec3ac1fb3f1dc5d120493345ce20e1a))
* added delete option for empty widget [#2139](https://github.com/raymfang/iot-app-kit/issues/2139) ([bbab890](https://github.com/raymfang/iot-app-kit/commit/bbab89048dc5b43fd92670c7df98bd38043bbe40))
* added empty state for line and scatter chart widgets ([f2662cc](https://github.com/raymfang/iot-app-kit/commit/f2662cc23860d08f1c8fd3cde69e86df4d3c3b6c))
* added line style customization per property ([abe942f](https://github.com/raymfang/iot-app-kit/commit/abe942f7a95458087cd1f7075091ee3acca41ada))
* added the error state for resource explorer tables [#2242](https://github.com/raymfang/iot-app-kit/issues/2242) ([351e142](https://github.com/raymfang/iot-app-kit/commit/351e1420508c37dddb37fb2fe9f2225c51365760))
* added title in bar and status timeline [#2312](https://github.com/raymfang/iot-app-kit/issues/2312) ([c6ea993](https://github.com/raymfang/iot-app-kit/commit/c6ea993c9d50bcd5fe75c7a5ec424d158fdf9c85))
* added widget text in the widget panel [#2036](https://github.com/raymfang/iot-app-kit/issues/2036) ([a46da1d](https://github.com/raymfang/iot-app-kit/commit/a46da1dc2166913bfc9ba81d5eec4388d17399d8))
* adding docker setup for scene-composer ui tests ([3db0c9b](https://github.com/raymfang/iot-app-kit/commit/3db0c9bf11dcba40782241f3886cd79f1912f00f))
* adding feature toggle system implementation ([6df3ea0](https://github.com/raymfang/iot-app-kit/commit/6df3ea053ef27a104424d8cb2b12eb0271d4b2f3))
* async fetchTimeSeriesData ([2b776cc](https://github.com/raymfang/iot-app-kit/commit/2b776ccf73a538abfbcf4a0ba175dca7c2c4aa0c))
* async listAssetPropertiesDescription ([6632db5](https://github.com/raymfang/iot-app-kit/commit/6632db5837e75d8786cb2c2150986d57f4e6ad39))
* auto collapse state for both panels ([fc54b1c](https://github.com/raymfang/iot-app-kit/commit/fc54b1cb71979e48dc5440620577ca8a2adc4be6))
* automatically selecting previously selected workspace or first workspace from options [#2384](https://github.com/raymfang/iot-app-kit/issues/2384) ([c1424a2](https://github.com/raymfang/iot-app-kit/commit/c1424a2b2ac7d7034c748cb221e565a8967c3da8))
* changed ui experience of chart legend based on legend position [#2277](https://github.com/raymfang/iot-app-kit/issues/2277) ([de1f147](https://github.com/raymfang/iot-app-kit/commit/de1f14772b614f67156a34ac64300111a6c55126))
* chart fit and finish - match cloudscape colors for axis and labels [#1929](https://github.com/raymfang/iot-app-kit/issues/1929) ([6fe3424](https://github.com/raymfang/iot-app-kit/commit/6fe3424ec90052d2e63a06a34b874958b9c7bf0c))
* charts legend resize drag handle improvements [#2055](https://github.com/raymfang/iot-app-kit/issues/2055) ([0c69b75](https://github.com/raymfang/iot-app-kit/commit/0c69b755e8b1200238dcaac90a44ad07ab222b23))
* charts legend resize drag-handle improvements [#2055](https://github.com/raymfang/iot-app-kit/issues/2055) ([9e9db52](https://github.com/raymfang/iot-app-kit/commit/9e9db524cf1b403c9a64c631751ff862349b7ad2))
* chat legend enhancement [#2277](https://github.com/raymfang/iot-app-kit/issues/2277) ([b1ca8ae](https://github.com/raymfang/iot-app-kit/commit/b1ca8aeda126f09f371e23133fa600d5b56c9b21))
* **component:** allow disable/enable layer auto refresh ([5278b9c](https://github.com/raymfang/iot-app-kit/commit/5278b9c8eafb01510484b75cebd10e05bb921421))
* **component:** utils to handle light component in entity ([26a1494](https://github.com/raymfang/iot-app-kit/commit/26a1494e5787a54f1292408f69ecac514100704e))
* **composer:** add a11y color picker ([e768a88](https://github.com/raymfang/iot-app-kit/commit/e768a884118768b5080e745ef8113a344dd0d80e))
* **composer:** add keyboard nav to floating toolbar ([efd375f](https://github.com/raymfang/iot-app-kit/commit/efd375fc7ba23fd7fe7617783f45a140e464ccdb))
* **composer:** add utils to convert all nodes to entities ([4e305d4](https://github.com/raymfang/iot-app-kit/commit/4e305d4841a10d962c0278f60858297297146570))
* **composer:** append scene node action creates entity for dynamic scene ([4ebe88a](https://github.com/raymfang/iot-app-kit/commit/4ebe88a6db092e4943db702c90961cf57fb100a3))
* **composer:** convert nodes to entities UI ([43f5e66](https://github.com/raymfang/iot-app-kit/commit/43f5e663efb0e517a2f1e0badb369a43438b0675))
* **composer:** enable auto query feature ([661af11](https://github.com/raymfang/iot-app-kit/commit/661af1188f690d6b2a33f26a6105b5fecdc539b9))
* **composer:** render tags from layer ([d9c5191](https://github.com/raymfang/iot-app-kit/commit/d9c519114d3e39c3913eb32b23984f8204b756d8))
* **composer:** save scene level data to scene root entity ([6cabfb5](https://github.com/raymfang/iot-app-kit/commit/6cabfb55de10004b1f0314cb7be931ef3969b09e))
* **composer:** show delete confirmation modal for dynamic scene ([fdc9ef1](https://github.com/raymfang/iot-app-kit/commit/fdc9ef16df97d1528b3f28c96470e513bb9722a7))
* **composer:** support showing flash message ([da7281a](https://github.com/raymfang/iot-app-kit/commit/da7281a84e47325c56071850f6ea49a6eed73233))
* **composer:** support sync matterport tag as entities ([7db178a](https://github.com/raymfang/iot-app-kit/commit/7db178a4aee74cbd299dc115c7cf3786dc376800))
* **composer:** support tag custom icon in entity ([dc07a1d](https://github.com/raymfang/iot-app-kit/commit/dc07a1dc3a2634b4d62de334b42499cd2e6f3060))
* **composer:** utils to handle camera component in entity ([7ad3bf5](https://github.com/raymfang/iot-app-kit/commit/7ad3bf51a7d548edc242a6d2c9de13167ec2d4bb))
* **composer:** utils to handle model shader component in entity ([95a4be6](https://github.com/raymfang/iot-app-kit/commit/95a4be668b51d413589b16b7edde67fdd40375d1))
* **composer:** utils to handle motion indicator component in entity ([4a1a8b4](https://github.com/raymfang/iot-app-kit/commit/4a1a8b4a972670e56363f445aed7038253e5192d))
* **composer:** utils to handle subModelRef component in entity ([d425c57](https://github.com/raymfang/iot-app-kit/commit/d425c5706790575dda50be733fd5a618cbafff0e))
* dashboard: re-introduce status widget icon [#1977](https://github.com/raymfang/iot-app-kit/issues/1977) ([0b62042](https://github.com/raymfang/iot-app-kit/commit/0b6204289d3dd1d0d3627cac4c9dcb0d330d2369))
* **dashboard:** add colors to trendcursors ([a890c7d](https://github.com/raymfang/iot-app-kit/commit/a890c7db39df1a836312ac4050c41e2f4fdd9f4a))
* **dashboard:** add e2e tests ([a52242e](https://github.com/raymfang/iot-app-kit/commit/a52242e3e687e899058e8477852228dde791dff7))
* **dashboard:** add echart line-scatter-widget ([076f151](https://github.com/raymfang/iot-app-kit/commit/076f15129b4a1e61b4ef57467031210365ef58cb))
* **dashboard:** add logging for custom y-axis ([582fddf](https://github.com/raymfang/iot-app-kit/commit/582fddfa3ccca07e2ffd2b51047d989685a5940c))
* **dashboard:** add logging for query editor ([d115606](https://github.com/raymfang/iot-app-kit/commit/d115606d2e974e1fcdd9111d6c470b97589280cc))
* **dashboard:** add metrics for query editor usage ([e8ac4f9](https://github.com/raymfang/iot-app-kit/commit/e8ac4f9c7a47d9f776ef057cb2c5cf13628b78e9))
* **dashboard:** add model based query support ([b95b60c](https://github.com/raymfang/iot-app-kit/commit/b95b60ccf074069268a8d71071067cfbd8265a20))
* **dashboard:** add widget tile ([13573c5](https://github.com/raymfang/iot-app-kit/commit/13573c59d560e7192159db8751d6818cfebcf531))
* **dashboard:** adding watch mode for dashboard ([bc6fd3a](https://github.com/raymfang/iot-app-kit/commit/bc6fd3aaaa3354d555e644653d4a5081066aa747))
* **dashboard:** change dashboard viewport default from 5m to 10m ([803d9a4](https://github.com/raymfang/iot-app-kit/commit/803d9a4944f6a55cb2e0e9691ddc3e537966c501))
* **dashboard:** composite model api calls and updated SDK ([9c23a38](https://github.com/raymfang/iot-app-kit/commit/9c23a383a46895bab05eccc265dc61318c767b49))
* **dashboard:** csv data hook ([33379af](https://github.com/raymfang/iot-app-kit/commit/33379af40ab79a79ac755be3a7f22f6701129ef6))
* **dashboard:** empty widget configuration panel ([72bc7e3](https://github.com/raymfang/iot-app-kit/commit/72bc7e32a373a724077e1b7ba0d9f671af4495eb))
* **dashboard:** fit and finish for model-based-queries ([1a2bbaf](https://github.com/raymfang/iot-app-kit/commit/1a2bbaf32f58930f89a123684d55fdafb315a9bd))
* **dashboard:** gated CSV download button ([645fb1c](https://github.com/raymfang/iot-app-kit/commit/645fb1cc3fdac5e27369a6ee538e0677ab4eb8b3))
* **dashboard:** json to csv package ([918515d](https://github.com/raymfang/iot-app-kit/commit/918515d698ce63de3e3aea486c1ff5c69a4b6ee7))
* **dashboard:** line symbol ([bba8e8d](https://github.com/raymfang/iot-app-kit/commit/bba8e8d392f73b3e52109bad1557cda4ef00221c))
* **dashboard:** move mock service worker to mock storybook story ([aae9f2b](https://github.com/raymfang/iot-app-kit/commit/aae9f2b2ab0c69417d346dd38515647c6ce43362))
* **dashboard:** new line-scatter-chart ([53768b9](https://github.com/raymfang/iot-app-kit/commit/53768b911a13066b9527c88f0e95a620f0025f7a))
* **dashboard:** query for describing unmodeled data stream ([2d1226d](https://github.com/raymfang/iot-app-kit/commit/2d1226dcc00fd8f4d138151d0aeb4a494d5e119c))
* **dashboard:** update collapsible side panels ([1495451](https://github.com/raymfang/iot-app-kit/commit/149545160551174af83ce3ddb2a61f1a61977c94))
* decimal round of in resource table ([a5da972](https://github.com/raymfang/iot-app-kit/commit/a5da9726649ca81a578efd365ba05d0dbe302b55))
* disable add button when more than one widgets are selected [#2115](https://github.com/raymfang/iot-app-kit/issues/2115) ([c1ec145](https://github.com/raymfang/iot-app-kit/commit/c1ec145eb1cf1a4595124f5602eb2f1feee305e0))
* disable add button when no widget and propertyselected [#2115](https://github.com/raymfang/iot-app-kit/issues/2115) ([276309b](https://github.com/raymfang/iot-app-kit/commit/276309b8934b7b97228e8829c1c9047343c0d968))
* display legend unit conditionally  [#2277](https://github.com/raymfang/iot-app-kit/issues/2277) ([9f6440e](https://github.com/raymfang/iot-app-kit/commit/9f6440e9e06c9040a6be46eab3a9141ad02a0509))
* **doc-site:** adding doc-site ([743ca50](https://github.com/raymfang/iot-app-kit/commit/743ca509649a31f11334fbbd2785cce1dbb4b735))
* draw box align with mouse pointer [#2137](https://github.com/raymfang/iot-app-kit/issues/2137) ([a93613a](https://github.com/raymfang/iot-app-kit/commit/a93613ab95c91aed374d2812e098bcc07b1bc46b))
* **dynamic scene:** crud functionalities for model ref ([2314926](https://github.com/raymfang/iot-app-kit/commit/2314926f385c44f76243223839f9d3d4f6325c51))
* **dynamic scenes:** save node updates to entities ([0bb2445](https://github.com/raymfang/iot-app-kit/commit/0bb2445fb39659ca970c51319a42cd2d0ff95360))
* **dynamic scenes:** update entities using dynamic scenes ([8eee582](https://github.com/raymfang/iot-app-kit/commit/8eee582e039a5cb2a3e25c81f822a4ecca95672c))
* **echarts:** allow scroll left and right ([5d2341e](https://github.com/raymfang/iot-app-kit/commit/5d2341e71f531556ac8147e1a0742233992ed82d))
* empty state within the dashboard to help guide users how to create their dashboard ([f59a069](https://github.com/raymfang/iot-app-kit/commit/f59a0693480832cc3af38b8d9addef88309fecce))
* experimental plugins registry; logger and metrics recorder plugins ([95b904f](https://github.com/raymfang/iot-app-kit/commit/95b904f281a860b04e145229c7c70fe4be08cba5))
* fake sitewise ([5fc9557](https://github.com/raymfang/iot-app-kit/commit/5fc9557d46fc3ed193862940ee058fd0e49f33e4))
* fetchTimeSeriesData ([1c65191](https://github.com/raymfang/iot-app-kit/commit/1c65191654c726b66cf1e0bcc2df83d620f6d4a5))
* first click on paginate timeline should move backward from current time duration ([5f9aa42](https://github.com/raymfang/iot-app-kit/commit/5f9aa42aef52d1bade596d0b8cfa1d58d51cce52))
* **first Person:** proof of using pointer lock for a first person view ([391eddd](https://github.com/raymfang/iot-app-kit/commit/391edddd5ab3c56be2e394aec06346dfbc29b776))
* fix tabs on config panel present that are unusable [#2308](https://github.com/raymfang/iot-app-kit/issues/2308) ([4d3b6d5](https://github.com/raymfang/iot-app-kit/commit/4d3b6d5fea6b271bfdbce13679b0fa4b4d0cdf60))
* fixed the add and reset buttons to bottom right [#2114](https://github.com/raymfang/iot-app-kit/issues/2114) ([15108b0](https://github.com/raymfang/iot-app-kit/commit/15108b058302a775b0b9a332d0ff901f81f2e676))
* format latest value time in resource explorer [#2140](https://github.com/raymfang/iot-app-kit/issues/2140) ([51be7da](https://github.com/raymfang/iot-app-kit/commit/51be7da3db56e4641526bb4333a622ae8c93e5df))
* handle long properties name in properties section in config panel [#1984](https://github.com/raymfang/iot-app-kit/issues/1984) ([fda011f](https://github.com/raymfang/iot-app-kit/commit/fda011f83e610a14cd6115ebf6aaf88b32589091))
* header design update ([700a913](https://github.com/raymfang/iot-app-kit/commit/700a91366ba57d7f6ca4b2058ee308a7317db9eb))
* integrate query editor ([82c36a1](https://github.com/raymfang/iot-app-kit/commit/82c36a1cf4f7c47b45ba32c1f5e15cdf3e132cb4))
* legend resize ([792b617](https://github.com/raymfang/iot-app-kit/commit/792b6170cc19402f3c49fbd60e4a07dc0890c434))
* legend table is implemeted using tanstack table ([c92533a](https://github.com/raymfang/iot-app-kit/commit/c92533a342c95618d6dcf7d2a13bdad204bb01de))
* lint accessibility ([0db36ef](https://github.com/raymfang/iot-app-kit/commit/0db36ef6a07fe5e0709d17081dffa7d23669e2fe))
* make session token optional for local development ([1a26b36](https://github.com/raymfang/iot-app-kit/commit/1a26b3622d3e8780cc54b1a66fc83aac96ecf2d9))
* missing empty state for workspaces dropdown [#2305](https://github.com/raymfang/iot-app-kit/issues/2305) ([11edf2d](https://github.com/raymfang/iot-app-kit/commit/11edf2d01a4c6406810efbdc1977f2c10e379506))
* preferences for pagination in table widget [#1890](https://github.com/raymfang/iot-app-kit/issues/1890) ([8072232](https://github.com/raymfang/iot-app-kit/commit/8072232240a17274556d208fc22d32a811866517))
* **propertyName:** add copy button and textarea ([7c0eaf4](https://github.com/raymfang/iot-app-kit/commit/7c0eaf432e40e25a5319a29e7546442d81e8c3dc))
* **react-components:** adding a fps display ([48cd9ef](https://github.com/raymfang/iot-app-kit/commit/48cd9efa3e5823086f0b7695886e934cc9303216))
* **react-components:** adding significant digits to trendcursors ([ef4c987](https://github.com/raymfang/iot-app-kit/commit/ef4c987f5142a7be0ec22aae49a31397999b45e2))
* **react-components:** adding TrendCursor Sync to dashboard ([d046184](https://github.com/raymfang/iot-app-kit/commit/d046184b836e9cb3670b210eb24c4fd91167b52a))
* **react-components:** brush zoom ([bddb7e1](https://github.com/raymfang/iot-app-kit/commit/bddb7e1e7b18a2179678fd6bee6a50d0a978d26d))
* **react-components:** hide/show properties from legend ([e666cf1](https://github.com/raymfang/iot-app-kit/commit/e666cf1cfba8343d1a5bbb0f38a4341969a18575))
* **react-components:** refactoring echarts ([83e505f](https://github.com/raymfang/iot-app-kit/commit/83e505ffaa9d31fe476be4d7f8029b5ae7c5a3ea))
* **react-components:** sync echarts viewport ([e04e040](https://github.com/raymfang/iot-app-kit/commit/e04e04079630361047e82d8564678cd4e5857cdd))
* **react-components:** trendcurors using echarts extension ([a7c6bbe](https://github.com/raymfang/iot-app-kit/commit/a7c6bbe064ae746f024b74d885721a70a06716a2))
* remove drag icon in chat widget ([64e1b89](https://github.com/raymfang/iot-app-kit/commit/64e1b897dc9389055cfd9df9fce01b0415b9e170))
* remove stretch to fit from dashboard [#2255](https://github.com/raymfang/iot-app-kit/issues/2255) ([e8d7778](https://github.com/raymfang/iot-app-kit/commit/e8d77786719cb30c462f1cf67f2fbfc388189490))
* resource explorer table preferences columns visibility [#1980](https://github.com/raymfang/iot-app-kit/issues/1980) ([22d7028](https://github.com/raymfang/iot-app-kit/commit/22d70287dce77ae072e425ccbaa4fc2132b63595))
* **ResourceExplorer:** hide properties table when not needed to be displayed ([0fca5e9](https://github.com/raymfang/iot-app-kit/commit/0fca5e9089ac7af52e1d31b2143acb121cb7869b))
* **ResourceExplorer:** hide properties table when not needed to be displayed ([bcf36b1](https://github.com/raymfang/iot-app-kit/commit/bcf36b1080393ba0d5126d79e38b373ffcbd2442))
* scatter chart is selected the line style dropdown should be disabled for scatter chart [#2427](https://github.com/raymfang/iot-app-kit/issues/2427) ([d407ba3](https://github.com/raymfang/iot-app-kit/commit/d407ba344c41480b5986a8c8eb0ec8e79ade21a8))
* **scene composer:** added icon picker changes ([8ca53b8](https://github.com/raymfang/iot-app-kit/commit/8ca53b8552f9eb09f107ea43d983a6b47f19fa88))
* **scene composer:** adding data-testid to improve e2e test ([1e5ab86](https://github.com/raymfang/iot-app-kit/commit/1e5ab863f89fcdf66aa7b4c0e3b0f5c77367411e))
* **scene composer:** fix for icon rules and save icon metadata ([0ac8508](https://github.com/raymfang/iot-app-kit/commit/0ac85082391d34731fafa73f826309e66d9f6000))
* **scene composer:** icon picker rule changes ([e126b53](https://github.com/raymfang/iot-app-kit/commit/e126b53371a0c3a03a4e7ff1d48f104c9b99c395))
* **scene composer:** setting up 3D test harness ([df62eef](https://github.com/raymfang/iot-app-kit/commit/df62eefd048a66f327070bc8c90b4c9b964de26e))
* **scene-composer:** enable accelerated raycasting for 3D Tiles ([84d2ce4](https://github.com/raymfang/iot-app-kit/commit/84d2ce4783c74a3792c11009f99cfac888cd848d))
* **scene-composer:** support tag occlusion ([3764013](https://github.com/raymfang/iot-app-kit/commit/376401335e6c4d4646bfc49260e35a41a9a43646))
* **scene:** add asset type filter option for browser callback ([f65d4f0](https://github.com/raymfang/iot-app-kit/commit/f65d4f0d5429dfa25b90208d924bfe3c3e3640df))
* **scene:** add fog settings to scene ([78c6e75](https://github.com/raymfang/iot-app-kit/commit/78c6e756ff7acfeace2be2473ae6c4defcb94af6))
* **scene:** add ground plane button ([c282c41](https://github.com/raymfang/iot-app-kit/commit/c282c41e5f96c403a7cbbea95dc5a759ab2d4193))
* **scene:** enable scene backgrounds ([e630ff2](https://github.com/raymfang/iot-app-kit/commit/e630ff21ef69010e1ac1cac705460e581c0310eb))
* **scene:** move add ground plane to settings ([3b0c59b](https://github.com/raymfang/iot-app-kit/commit/3b0c59b13243892a657f8ed975448babe7a6caec))
* **scene:** textures for backgrounds and planes ([0b2104a](https://github.com/raymfang/iot-app-kit/commit/0b2104ae299f899b88ac4d77696b075793ceed1d))
* set tagStyle flag to true for viewer ([af5357f](https://github.com/raymfang/iot-app-kit/commit/af5357f53e59ed227319c0a37061b4b07b62584e))
* setting the sizes, and sizing behavior of the left and right side panels within the dashboard ([8cec7c0](https://github.com/raymfang/iot-app-kit/commit/8cec7c070ab401d71397676c25037ad28f0168b5))
* side-panels toggle open hit and tooltip on mouseover [#2003](https://github.com/raymfang/iot-app-kit/issues/2003) ([a974964](https://github.com/raymfang/iot-app-kit/commit/a9749645567611a430113071fb2cfcb7bb93b2a3))
* table widget pagination and sortingdisabled ([b727eae](https://github.com/raymfang/iot-app-kit/commit/b727eae8364f19f2e997fa0c9275e1f0a947f854))
* tabs on config panel present that are unusable [#2308](https://github.com/raymfang/iot-app-kit/issues/2308) ([9f0b63d](https://github.com/raymfang/iot-app-kit/commit/9f0b63d81446a1fce4a4635804cff9a6c06c9387))
* **Tiles3D:** add Tiles3D AssetType and evaluate model type when adding a 3D model to the scene ([eec0f50](https://github.com/raymfang/iot-app-kit/commit/eec0f508caa4b1f6b2c7a84baa4f45bf4dc7195b))
* **TM-source:** add entity APIs to SceneMetadataModule ([1a91084](https://github.com/raymfang/iot-app-kit/commit/1a910844692aa30bbd4b9d1920d415378bcad130))
* unmodeled data streams ([71bebef](https://github.com/raymfang/iot-app-kit/commit/71bebefebdaefc235ec2ec505bc5f4dd0d1c7f31))
* update icons for widget library-952 ([5f7f9ee](https://github.com/raymfang/iot-app-kit/commit/5f7f9ee8274f99b88fd464bd4ee434d0f4126594))
* updated chart initial widget size [#1920](https://github.com/raymfang/iot-app-kit/issues/1920)) ([88218af](https://github.com/raymfang/iot-app-kit/commit/88218afb1aed84e63d08fbad3acacab044c2ab8a))
* updated dashboard background color to grey-125 [#1950](https://github.com/raymfang/iot-app-kit/issues/1950) ([0f81bb2](https://github.com/raymfang/iot-app-kit/commit/0f81bb2240086c9222ab0063dac576927fd407c1))
* updated the chart legend ux [#1930](https://github.com/raymfang/iot-app-kit/issues/1930) ([68b8618](https://github.com/raymfang/iot-app-kit/commit/68b8618226c5f9ab0c5da64f7ad9210459809232))
* updated the chart legend ux(spacing, legend border color, width, tooltip) ([390cbe3](https://github.com/raymfang/iot-app-kit/commit/390cbe3414286bd7cfb1f041a2d21264552e7bd3))
* widget configuration improvements, per property, and general UX [#2243](https://github.com/raymfang/iot-app-kit/issues/2243) ([94f0490](https://github.com/raymfang/iot-app-kit/commit/94f04906d35b814ce6393e2873f9ffd9c905e0b9))
* xy-plot & bar-chart allow only numerical datatypes [#1952](https://github.com/raymfang/iot-app-kit/issues/1952) ([10b057a](https://github.com/raymfang/iot-app-kit/commit/10b057a1e088ad9ecdc710af73dfd947398659f3))
* xy-plot y axis lable changes [#2378](https://github.com/raymfang/iot-app-kit/issues/2378) ([48389c3](https://github.com/raymfang/iot-app-kit/commit/48389c3e59305525b11b63233c3a79d4a8e3a78d))


### Bug Fixes

* accessibility fixes ([4caa534](https://github.com/raymfang/iot-app-kit/commit/4caa53433d3d9df858ee25d71d3b92b93cdf7617))
* accessible property filter labels ([30554a1](https://github.com/raymfang/iot-app-kit/commit/30554a1f59f2462b1a5334424866f67ee4507455))
* add doc-site to release-please config ([08fb141](https://github.com/raymfang/iot-app-kit/commit/08fb141eee84f97d80082317532c3434aa78d55b))
* add doc-site to release-please config ([ccf5086](https://github.com/raymfang/iot-app-kit/commit/ccf5086fc9ef362e7c61c4d02cb3e88aa20b21c5))
* add eslint rule for hooks ([de7cc0d](https://github.com/raymfang/iot-app-kit/commit/de7cc0d94ffdb79d3cb2ce622dd322e6d8497d61))
* add left border to configuration panel ([7f684d1](https://github.com/raymfang/iot-app-kit/commit/7f684d17b2945f67982474ad9d36beaa966999f0))
* add more unique colors ([8641b1f](https://github.com/raymfang/iot-app-kit/commit/8641b1f737919b868da7b309cb7ebc6183ef1918))
* add request settings to fetchTimeSeriesData ([d7cbd9d](https://github.com/raymfang/iot-app-kit/commit/d7cbd9d8bb5a5f56804a7ebce2c87e944bcb6f2b))
* add signigicant digits to xy plot ([70a109e](https://github.com/raymfang/iot-app-kit/commit/70a109e8083b6729313f4f0dc362df0f3cf6ea62))
* add tests for CSV ([28c6ca9](https://github.com/raymfang/iot-app-kit/commit/28c6ca94b6efe55b33a30cd2106f4d5536f8a556))
* added aria label to dashboard threshold delete button ([ff94bb0](https://github.com/raymfang/iot-app-kit/commit/ff94bb0e5c367ec02a572938a08dcf859e4820f5))
* added aria-label to the config panel text link control for accessibility [#2362](https://github.com/raymfang/iot-app-kit/issues/2362) ([a6f9c22](https://github.com/raymfang/iot-app-kit/commit/a6f9c22e40660e8e30f3b1f65f71f968dc4a0cac))
* added experimental plugin exports ([4e44dbd](https://github.com/raymfang/iot-app-kit/commit/4e44dbd83c5734facfe342162ebac8a3fc3a1575))
* added proper error handling for S3 Bucket ACL issues found by customer, updated README ([bbc0aa3](https://github.com/raymfang/iot-app-kit/commit/bbc0aa388041a76b0c79e6202c44431eeae4a9af))
* aggregation and resolution settings ([06207f9](https://github.com/raymfang/iot-app-kit/commit/06207f9204c1a57d390f189e29858b9c8b862b4f))
* bar chart break due to css property of line chart ([512e48c](https://github.com/raymfang/iot-app-kit/commit/512e48c5f61e7ac8b09a25551702136f0a01c918))
* better disabled states and error handling CSV ([3bae192](https://github.com/raymfang/iot-app-kit/commit/3bae19293b7bedd0dcbfafc999cd6ed1e611dccc))
* broken search results disabled state ([38ef2be](https://github.com/raymfang/iot-app-kit/commit/38ef2beb9d7673e8cc0438424631343d5a4eb3ca))
* broken tooltip imports ([8a25332](https://github.com/raymfang/iot-app-kit/commit/8a25332379e647911504cd75ff913f6b911a43c4))
* bugfix for overlapping colors in color palette ([7b4c95b](https://github.com/raymfang/iot-app-kit/commit/7b4c95b45866548f85b10fee3167a35354d73cfb))
* bump charts core version ([fba03c6](https://github.com/raymfang/iot-app-kit/commit/fba03c600f2e1dc3c5bd199b658174e5de2dcd95))
* **camera:** selecting camera view uses raycast to set better target distance for orbit ([76d9272](https://github.com/raymfang/iot-app-kit/commit/76d927214ae02ca2c1c8657afb9f8d01bf396548))
* **camera:** stop camera view inspector panel from overwriting changes unexpectedly ([37a8122](https://github.com/raymfang/iot-app-kit/commit/37a8122b54ef95f7dca56ad341a5183fd11a05f8))
* change test id for download button ([88c16b9](https://github.com/raymfang/iot-app-kit/commit/88c16b9b1ca12dca37a910b0ce4d226838fd261c))
* chart gesture performance ([cdd52c6](https://github.com/raymfang/iot-app-kit/commit/cdd52c627e99f4e712475b90d2869b16a5684038))
* cloudscape dependency resolution failure ([7b13ed4](https://github.com/raymfang/iot-app-kit/commit/7b13ed40026182e900f654688dfa696111fd5944))
* **composer:** add aria labels to buttons in hierarchy panel ([24c8c30](https://github.com/raymfang/iot-app-kit/commit/24c8c30594a0961509079bd942763d22d0d9ccdf))
* **composer:** add aria labels to icons ([8a70eb1](https://github.com/raymfang/iot-app-kit/commit/8a70eb13f081b39dae701dfa999e8aa3ce0a8378))
* **composer:** add aria labels to rules panel ([ff78ab0](https://github.com/raymfang/iot-app-kit/commit/ff78ab0831170be7c5bad53cba0c903d20034aaf))
* **composer:** add new translations ([de7249a](https://github.com/raymfang/iot-app-kit/commit/de7249a8a920e1c43faeda4fd94fb57e9d0fc9f3))
* **composer:** associate inputs to labels ([8b64f9a](https://github.com/raymfang/iot-app-kit/commit/8b64f9aa38761ed684be8b9088a8b7edd6bb0681))
* **composer:** autofocus on error, rules panel ([b132e27](https://github.com/raymfang/iot-app-kit/commit/b132e278a00a8729642afeec3382312685877110))
* **composer:** bug fixes for dynamic scene ([10046da](https://github.com/raymfang/iot-app-kit/commit/10046daf2ef3ea2d161321a7794d019db3ccd76f))
* **composer:** bug fixes for dynamic scene ([2f3b396](https://github.com/raymfang/iot-app-kit/commit/2f3b396bc9aa41c2e4df17b0d9a47863db97f211))
* **composer:** cannot delete node entity with child ([a7976bb](https://github.com/raymfang/iot-app-kit/commit/a7976bb55afbc83d0fd3848ef1eb1fd6a81dedbc))
* **composer:** cannot delete scene node of a child and then its parent ([a2e140a](https://github.com/raymfang/iot-app-kit/commit/a2e140ab0ef05975e2ec1d8e36a4d68ad9087911))
* **composer:** create default entity roots ([4b38ea5](https://github.com/raymfang/iot-app-kit/commit/4b38ea598360fdaa4dd3545273dab888963d7bb7))
* **composer:** create existing matterport tag as entities ([0d1d16e](https://github.com/raymfang/iot-app-kit/commit/0d1d16e17c35af067ef1f5f4f41030bfd3897d9a))
* **composer:** custom tag rendered slightly off the center ([0cecac1](https://github.com/raymfang/iot-app-kit/commit/0cecac14f2ff201f3f5eb16446b7aab43acf10ce))
* **composer:** debounce component update to reduce UpdateEntity error ([4f13db1](https://github.com/raymfang/iot-app-kit/commit/4f13db18ae134c7a95c50ed1d855e9e977f59539))
* **composer:** error when switching motion indicator appearance ([c51f135](https://github.com/raymfang/iot-app-kit/commit/c51f13530b36c8a7e1e17d8ea65c4bec515fb16d))
* **composer:** floating toolbar orientation dependent on screen size ([228037d](https://github.com/raymfang/iot-app-kit/commit/228037da8351499be142b75fc6b62aefc9047ee2))
* **composer:** get entityBinding in different query ([b4e4a22](https://github.com/raymfang/iot-app-kit/commit/b4e4a22cebeeb39027052c47bb8647bae836d3c2))
* **composer:** improve load sub model latency ([23ad9ad](https://github.com/raymfang/iot-app-kit/commit/23ad9ada3b89295b66738cdfc297dc6e0bf72a03))
* **composer:** lock 3d tiles lib to working version ([f719bc4](https://github.com/raymfang/iot-app-kit/commit/f719bc4964e454db16d6c746548b37c092692ca3))
* **composer:** matterport tag sync tag style under flag ([83334ce](https://github.com/raymfang/iot-app-kit/commit/83334ce21a089ecff46c86ddfb320f1bafe6011d))
* **composer:** persist new dynamic node world transform ([cb6704f](https://github.com/raymfang/iot-app-kit/commit/cb6704f5b8767bfacad8244415daa2283efd6250))
* **composer:** refactor scene modal rendering ([1d797b1](https://github.com/raymfang/iot-app-kit/commit/1d797b1a6aeab60e45f8e11daf8cd97b9b21033b))
* **composer:** remove deprecated and internal interfaces from public ([07e82b4](https://github.com/raymfang/iot-app-kit/commit/07e82b42963931ddce95362f4a6cca9add6a1423))
* **composer:** remove useCallback from menu event handlers ([0a7c133](https://github.com/raymfang/iot-app-kit/commit/0a7c13336760f2f0548e8c902a95086fb4d27be4))
* **composer:** resize/reposition overlaps on small screens ([64d3855](https://github.com/raymfang/iot-app-kit/commit/64d3855b866ec6f50e7d9891863c1fea801ceabf))
* **composer:** show sync matterport tag status ([2c041c5](https://github.com/raymfang/iot-app-kit/commit/2c041c56d637efd201e615e04f27a6761cc20c4c))
* **composer:** split overlay content into parts ([328a33c](https://github.com/raymfang/iot-app-kit/commit/328a33c0fc3ad80666476099d9e49768fca03b2b))
* **composer:** tag style field is empty when creating a new tag instead of info ([595147b](https://github.com/raymfang/iot-app-kit/commit/595147bc564b9599598c93059bc6ccf62b2c2b7e))
* **composer:** trigger onSceneLoaded after dynamic scene is loaded ([4c9453a](https://github.com/raymfang/iot-app-kit/commit/4c9453a12211a878a850d71eee7cb8bd3d4a5fe3))
* **composer:** update Polaris package version ([592c435](https://github.com/raymfang/iot-app-kit/commit/592c4359e325eb4149a0f872b30f87a0305feb5b))
* **composer:** update property string length limit to 2048 ([a3cb800](https://github.com/raymfang/iot-app-kit/commit/a3cb8009d8547351449bac7c121e67d66971a708))
* copy paste issue on macos [#2136](https://github.com/raymfang/iot-app-kit/issues/2136) ([b7e8574](https://github.com/raymfang/iot-app-kit/commit/b7e8574d1f3d627694f0b0962565266d2b6ab8dc))
* **core:** fix for duplicate data per timestamp issue ([9cca8b1](https://github.com/raymfang/iot-app-kit/commit/9cca8b1767584b770fe08d4da24b20c4a0fc7a40))
* **core:** increase cache and min request interval to prevent making many requests for near now data ([403fec9](https://github.com/raymfang/iot-app-kit/commit/403fec94c16a68adbae04134dc4ee69bedb4f4d6))
* **CSS-Loader:** updated sass-loader & fixed style ([aee4abc](https://github.com/raymfang/iot-app-kit/commit/aee4abcd22617cd1b28641711a4be2d1bab4e252))
* dashboard settings to set correct columns and rows [#2313](https://github.com/raymfang/iot-app-kit/issues/2313) ([cd952c5](https://github.com/raymfang/iot-app-kit/commit/cd952c5e6462fa25350ccc28eb261a70bfa29d98))
* **dashboard:** bar chart default aggregation+resolution ([44fd991](https://github.com/raymfang/iot-app-kit/commit/44fd99128d13053cd48fae2d8c9562d6d8ab4ef2))
* **dashboard:** bold, italics, underline interactable by keyboard ([ccba8c6](https://github.com/raymfang/iot-app-kit/commit/ccba8c6433967e40b07a6ed78568a8d580def221))
* **dashboard:** bugfix for barchart positioning ([16babf6](https://github.com/raymfang/iot-app-kit/commit/16babf6667c886597d527534ddd7e9b355e2f988))
* **dashboard:** chart respects absolute min and max between data and thresholds ([db16712](https://github.com/raymfang/iot-app-kit/commit/db1671225e300a18765d55a8afd1534640d264de))
* **dashboard:** clear selected properties on asset change ([05f0374](https://github.com/raymfang/iot-app-kit/commit/05f037402d785d9f6d449c88170f2ad91f2735d9))
* **dashboard:** color picker has keyboard focus and can be interacted with ([1e4547e](https://github.com/raymfang/iot-app-kit/commit/1e4547e3aa2bc521c315391cabac569beab10508))
* **dashboard:** composite model tests run correctly ([d2cbaaf](https://github.com/raymfang/iot-app-kit/commit/d2cbaafef6639b84a8762dda9fccf3d3e86fbefd))
* **dashboard:** conditionally start msw for mocked data stories ([b9fb349](https://github.com/raymfang/iot-app-kit/commit/b9fb349546ddc1bca9b2dbc0d934f5769836ae91))
* **dashboard:** correctly update aggregation and resolution configs ([e749d48](https://github.com/raymfang/iot-app-kit/commit/e749d48985f9d9d419a98a299ab933273fb45c85))
* **dashboard:** csv  will download if viewport has no data ([b0cbbad](https://github.com/raymfang/iot-app-kit/commit/b0cbbad5348d4000674cf0e2b1d20e2782428b41))
* **dashboard:** decrease width of property label in config panel to stop overflow of delete button ([ee027e5](https://github.com/raymfang/iot-app-kit/commit/ee027e5d95946b89bebcd5e3bdc3a82aecd60d0b))
* **dashboard:** disable dashboard drag when shift key is pressed ([2e47a3c](https://github.com/raymfang/iot-app-kit/commit/2e47a3cee18d1cbfdb0509f599b3cbc575f2f94a))
* **Dashboard:** fix breaking build due to invalid import ([6690640](https://github.com/raymfang/iot-app-kit/commit/6690640ddc41797a3e1a3bb724974deb2a963db0))
* **dashboard:** fix spacing between widgets without selection box ([7cc590d](https://github.com/raymfang/iot-app-kit/commit/7cc590dd988bf244c430e55e43745a8be344e8d7))
* **dashboard:** fix spacing issues on editable grid ([0529abd](https://github.com/raymfang/iot-app-kit/commit/0529abd18267bf69ea36a2795096d724784ce3bc))
* **dashboard:** fix styling for tile and config panel ([932d2f0](https://github.com/raymfang/iot-app-kit/commit/932d2f0b5e0910069cd030044dbe5cf9d26f7287))
* **dashboard:** fix table item creation ([1c406b6](https://github.com/raymfang/iot-app-kit/commit/1c406b6de03e620fcb2f6c88bd1da256377d178b))
* **dashboard:** fix toggle hide thresholds ([0abb1b2](https://github.com/raymfang/iot-app-kit/commit/0abb1b24d6117ae13e27fe1b1e02ee9684cf0962))
* **dashboard:** for kpi/status disable add of RE when an property is already added ([712c1a7](https://github.com/raymfang/iot-app-kit/commit/712c1a777bc51c69956bfbb855bd0a01a6721e18))
* **dashboard:** for kpi/status disable add of RE when an property is already added ([eff3282](https://github.com/raymfang/iot-app-kit/commit/eff328273955d5e8a4ae815e03855aae6c48e162))
* **dashboard:** improve widget drag and resize ([fcdc586](https://github.com/raymfang/iot-app-kit/commit/fcdc5862fc558f136d510eaa85e241daa61d9988))
* **dashboard:** increase width of property label in config panel to span width of panel ([642f7c6](https://github.com/raymfang/iot-app-kit/commit/642f7c6ad5b50d20009ba21067255aab1e8d4780))
* **dashboard:** kpi/status bug to stop adding more than 1 property ([f68c5eb](https://github.com/raymfang/iot-app-kit/commit/f68c5eb42d34aa3483d3f85fe01dfb5d4e64fb3a))
* **dashboard:** listAssetPropertiesCall for msw + path objects for all assetModels ([b207547](https://github.com/raymfang/iot-app-kit/commit/b20754707774e19e107f1378cecaaba38384e4b3))
* **dashboard:** minor threshold fixes ([5b5c570](https://github.com/raymfang/iot-app-kit/commit/5b5c570f0ab026144e4009663c02ca3e0c948f3c))
* **dashboard:** modeled datastreams are displayed in msw ([a2833a1](https://github.com/raymfang/iot-app-kit/commit/a2833a174ccb8f66b547451f92ff2b6c6194beca))
* **dashboard:** padding for tabs in config panel + remove scroll in threshold panel ([d3f969c](https://github.com/raymfang/iot-app-kit/commit/d3f969c092a271e7b26289d0160e0c4901282b1e))
* **dashboard:** refactor component library to use list elements ([71a0b29](https://github.com/raymfang/iot-app-kit/commit/71a0b29e2b37685c5fcaa861a3c31291018e65ec))
* **dashboard:** remove hide/show from dashboard definition and config panel ([1919341](https://github.com/raymfang/iot-app-kit/commit/191934129f1c64ca52bb5333d882421aeeab91b0))
* **dashboard:** remove viewport from the dashboard state to use viewport hook ([a9011a8](https://github.com/raymfang/iot-app-kit/commit/a9011a8a22e3bc41076fa6fb64065c016282d012))
* **dashboard:** removing all props wont crash chart ([bac2fb6](https://github.com/raymfang/iot-app-kit/commit/bac2fb6debc1364d831c2b93e68a7eafd2b45b9c))
* **dashboard:** selected assets do not deselect on widget selection ([5c717f8](https://github.com/raymfang/iot-app-kit/commit/5c717f8bf57788ae9cac6521807d82622b47ac8a))
* **dashboard:** set initial viewport to 5m ([f7a5684](https://github.com/raymfang/iot-app-kit/commit/f7a568414a772e98ceb03bdac4978173b36ddb47))
* **dashboard:** tc sync is broken in prod ([c357902](https://github.com/raymfang/iot-app-kit/commit/c3579027e3bb3e38af4042bc6749ffb648a62e71))
* **dashboard:** text widget crashed dashboard when resource explorer is open ([337bcaf](https://github.com/raymfang/iot-app-kit/commit/337bcaf3b8ae4b846a5f82180856ce046f1fa719))
* **dashboard:** toggle from hide to show for unmodeled datastreams ([cea7c30](https://github.com/raymfang/iot-app-kit/commit/cea7c30cce8fa685cd9a0a9a8077c4e1d6b9ec4f))
* **dashboard:** update icon path for empty dashboard ([b24a2b5](https://github.com/raymfang/iot-app-kit/commit/b24a2b5752520b7c52a09d47bd7ae660b238139d))
* **dashboard:** update styling for model based query editor ([cb0d969](https://github.com/raymfang/iot-app-kit/commit/cb0d969e528b74c3c7d429a7b4a3335e004af9d0))
* **dashboard:** update unmodeled latest value to timestamp.timeInSeconds ([70bd004](https://github.com/raymfang/iot-app-kit/commit/70bd0048d7e30274c61b41cfc0334362b9f96042))
* **dashboard:** use more descriptive name for the settings label ([2d0b36c](https://github.com/raymfang/iot-app-kit/commit/2d0b36c29cad264f45f3e7178dcd3c296692c69e))
* default resolution and aggregation ([e5afdc0](https://github.com/raymfang/iot-app-kit/commit/e5afdc025b83013de26b5c3dbac1e5db5e8aca53))
* disable options in legend or yaxis section if visible is false [#2467](https://github.com/raymfang/iot-app-kit/issues/2467) ([b4daa17](https://github.com/raymfang/iot-app-kit/commit/b4daa17735a6ebed582c98d292e7b1c261a65dea))
* do not override selected data stream preferences ([02b80fe](https://github.com/raymfang/iot-app-kit/commit/02b80fed798ad859a1e5aa0993ea479aa48e0b38))
* **doc-site:** canvas not recognised automatically ([1e42f58](https://github.com/raymfang/iot-app-kit/commit/1e42f5872f863349b51264526d4b74271e811412))
* dont move widget when resizing legend ([a7cefce](https://github.com/raymfang/iot-app-kit/commit/a7cefce603e98776b1ab5d8914e929fe73ac7517))
* download button and zoom undo button ([a60a81b](https://github.com/raymfang/iot-app-kit/commit/a60a81b6f6e64b3113b14edcf6efe9fe82ef47f7))
* **echarts:** bugs for demo ([b1e57ee](https://github.com/raymfang/iot-app-kit/commit/b1e57ee4b0d768c0a83be24c55b837a8f0fd950d))
* **echarts:** improved x+y axis min and max ([38741e2](https://github.com/raymfang/iot-app-kit/commit/38741e245b450c7e547b10305349f9652ae1872f))
* empty state overflow ([3e073f7](https://github.com/raymfang/iot-app-kit/commit/3e073f72cfd0a47c87bf09d8b20c64ef54907430))
* enable changing resolution and aggregation of unmodeled data streams ([e187898](https://github.com/raymfang/iot-app-kit/commit/e187898fd63872ae11b8592e865fc29959492761))
* **example:** make sure selection change uses the entity binding component index ([200d0db](https://github.com/raymfang/iot-app-kit/commit/200d0db2171d21d5545a1c7e9d8403ac7bbeae3e))
* **example:** roll back unneeded package json changes ([39f8324](https://github.com/raymfang/iot-app-kit/commit/39f8324495faba3717d29c6076cf5da97649b56c))
* firefox dnd ([5fd8b4f](https://github.com/raymfang/iot-app-kit/commit/5fd8b4f4eed0039852305d4ba8ebec1f453d1fbb))
* fix broken synchro-charts widgets ([5e61361](https://github.com/raymfang/iot-app-kit/commit/5e61361084c59bb4ea90ba65ac2016aba99f658e))
* fix bug, update test ([24c8c30](https://github.com/raymfang/iot-app-kit/commit/24c8c30594a0961509079bd942763d22d0d9ccdf))
* fix data-zoom behavior for base chart ([0c66a80](https://github.com/raymfang/iot-app-kit/commit/0c66a8016e2aa827ad3093c3ef89d6437e014d18))
* fix filtered data on zooms ([99e2f90](https://github.com/raymfang/iot-app-kit/commit/99e2f90aecdbaaa354e62e76b22c88a8530c1509))
* fixed property section tooltip gets cut off if property has longer name [#2293](https://github.com/raymfang/iot-app-kit/issues/2293) ([e496e4d](https://github.com/raymfang/iot-app-kit/commit/e496e4d52c566cab3e17e332ef3b587cd9fcc094))
* fixed step after chart type [#1978](https://github.com/raymfang/iot-app-kit/issues/1978) ([546b2a0](https://github.com/raymfang/iot-app-kit/commit/546b2a004a3d8793fd8283a6d69d631fc3ace93d))
* full UI test suite CI ([72fc3bd](https://github.com/raymfang/iot-app-kit/commit/72fc3bd3c1b4ba62ccda842c0f918d51ec9f4feb))
* grab asset composite property correctly ([1c57017](https://github.com/raymfang/iot-app-kit/commit/1c57017f3b3c78c62fc3a3cdfc6f4fa01a09f745))
* groupable echarts ([d704292](https://github.com/raymfang/iot-app-kit/commit/d704292964e6434450572154c60863fbdb027dc2))
* hidden and highlighted datastreams persist correctly ([5a85bb7](https://github.com/raymfang/iot-app-kit/commit/5a85bb7d40d07dce439a1bfa15550d8893089cbd))
* **icon rules:** align icon-picker layout with target editor ([536f391](https://github.com/raymfang/iot-app-kit/commit/536f3910d2f50cfa41a80e98b43a43f59d0a249f))
* immediately change the line chart viewport when updating relative time range ([5ebb2f1](https://github.com/raymfang/iot-app-kit/commit/5ebb2f1597595bf66c63850835e2a64752e4ef9b))
* immediately change the line chart viewport when updating relative time range ([95b5b7d](https://github.com/raymfang/iot-app-kit/commit/95b5b7d80914a757613c3263f7bf0218acb355b4))
* improve properties panel styling ([f3de67e](https://github.com/raymfang/iot-app-kit/commit/f3de67e73c7197c6bf63254c93476475661738b0))
* improved zoom and default values for y axis ([112e5c5](https://github.com/raymfang/iot-app-kit/commit/112e5c58d7e3478dec03dfbb2eb52ec315b4690d))
* increase the text widget initial size ([7d7918d](https://github.com/raymfang/iot-app-kit/commit/7d7918d50b10b04f75e0d9265da111a06c482600))
* internal pipeline has issues with lfs, reverting ([968f950](https://github.com/raymfang/iot-app-kit/commit/968f95005c51591d7cb99af323808fd232b8d4e9))
* latest value filtering and sorting ([6610382](https://github.com/raymfang/iot-app-kit/commit/66103826b0e157a737cdc2661c4c8bfa5edcb56f))
* line chart progresses in time ([15876a8](https://github.com/raymfang/iot-app-kit/commit/15876a86e4d3790e41f917758618b3f11cc948c7))
* line charts colors too quickly choose similar colors ([0af5465](https://github.com/raymfang/iot-app-kit/commit/0af5465ffc0a7f587a8e4a53487c8fb56c35d36a))
* make context menu appear on top of chart tooltip ([e1622c8](https://github.com/raymfang/iot-app-kit/commit/e1622c86bf4ead6856e7e1c9be1d5b8a1d6d4d61))
* **matterport:** fix zoom to tag ([49a04f8](https://github.com/raymfang/iot-app-kit/commit/49a04f81bc464d20798f219f77f325bde74ad1f6))
* missed rebase markers ([b9e158a](https://github.com/raymfang/iot-app-kit/commit/b9e158a1c723e5f5bd1438d54841737f742c27c9))
* missing pagination handling for searched model data [#1994](https://github.com/raymfang/iot-app-kit/issues/1994) ([81d5269](https://github.com/raymfang/iot-app-kit/commit/81d5269a0bd0349d95b2495330401623afd5b5b0))
* missing raect key internal space between ([9cbb214](https://github.com/raymfang/iot-app-kit/commit/9cbb214035f1434719cbbb94ac0360103fb232c6))
* msw batchGetAssetPropertyValueHandler response timeInSeconds values ([5869a00](https://github.com/raymfang/iot-app-kit/commit/5869a009550399ab73b882e2f253aa9c10ec1179))
* msw batchGetAssetPropertyValueHistoryHandler timestamp ([ccf21a7](https://github.com/raymfang/iot-app-kit/commit/ccf21a73a1391ac9da3ccceb18916897ef51066e))
* pagination default pagesize is set to 250 and error message update [#2242](https://github.com/raymfang/iot-app-kit/issues/2242) ([3a2d632](https://github.com/raymfang/iot-app-kit/commit/3a2d632e8430fb837656a43b030ef6eb35468417))
* panel resizing issue fix [#2256](https://github.com/raymfang/iot-app-kit/issues/2256) ([21dcb51](https://github.com/raymfang/iot-app-kit/commit/21dcb51fd8b05f4df4b5a8c4d6097ac97073d922))
* panning on chart widget moving [#2294](https://github.com/raymfang/iot-app-kit/issues/2294) ([9cefd9a](https://github.com/raymfang/iot-app-kit/commit/9cefd9a2107465ccde1468f1e0e2a271b0d30381))
* pasting at the edge of dashboard should paste widget within the grid [#2141](https://github.com/raymfang/iot-app-kit/issues/2141) ([ad1dde7](https://github.com/raymfang/iot-app-kit/commit/ad1dde7282983d7d6710c25b2399851c0ad03df7))
* prevent fetching ([85a7b35](https://github.com/raymfang/iot-app-kit/commit/85a7b35f9b5303fe037de5636a75827335ffdaba))
* programatically linked the color-picker id with color label in configPanelText [#2361](https://github.com/raymfang/iot-app-kit/issues/2361) ([ab05475](https://github.com/raymfang/iot-app-kit/commit/ab0547539bb9b47130c66c0520d7c0bce9cf5aee))
* react-component Chart story book is broken ([c273ad5](https://github.com/raymfang/iot-app-kit/commit/c273ad529a7d78f887a2b8c64b50f76bfc018fc2))
* **react-components:** add echarts extension for handling custom-y-axis ([b481beb](https://github.com/raymfang/iot-app-kit/commit/b481beb1e5a9a014a688d264aa3cb3addc4f51c7))
* **react-components:** add fallback for property name to id ([a1024d4](https://github.com/raymfang/iot-app-kit/commit/a1024d459fd24d8c7056326706b41ff505eb41ec))
* **react-components:** adding debounce to the echarts zoom handler ([b983385](https://github.com/raymfang/iot-app-kit/commit/b98338508da223bab1a99c28641276ff02c537b5))
* **react-components:** adding handling of Yminmax for TC and fixing styling issues ([1581b9f](https://github.com/raymfang/iot-app-kit/commit/1581b9fb7cb77037fa830eaba07155aa253cfa33))
* **react-components:** clear ymin and ymax was getting emitted on every loop ([8609a48](https://github.com/raymfang/iot-app-kit/commit/8609a487a1b7ba9d4884750a6e6ee8819873a4b1))
* **react-components:** confining tootip to the chart area ([1bff986](https://github.com/raymfang/iot-app-kit/commit/1bff986999dc88a261caed22c3a77aab892219ad))
* **react-components:** echarts grab on canvas update cursor and tooltip ([bfef4e8](https://github.com/raymfang/iot-app-kit/commit/bfef4e878e9a47a9ed1f578767a04b03e6bc8a5e))
* **react-components:** echarts grab on canvas update cursor and tooltip ([a29da3a](https://github.com/raymfang/iot-app-kit/commit/a29da3a08a769137610bc37efde5605bf6b62dc2))
* **react-components:** echarts resize drag fix ([19ccc7e](https://github.com/raymfang/iot-app-kit/commit/19ccc7ee4569aea891b43883a8ba1dedf3ac4fc9))
* **react-components:** fix global and chart store persistence ([83f1345](https://github.com/raymfang/iot-app-kit/commit/83f13452cbf350639cc2cc576d47a26138d58832))
* **react-components:** fix TC behaviour when there is a change in query ([50edcc1](https://github.com/raymfang/iot-app-kit/commit/50edcc1b2131c03c9e30621407a3d3d201825a90))
* **react-components:** fix the mouse events ([7c07a37](https://github.com/raymfang/iot-app-kit/commit/7c07a37eb5e8649a6d967c96b297659caad270a8))
* **react-components:** fixing TCs on data zoom ([379525c](https://github.com/raymfang/iot-app-kit/commit/379525cd1246061398ff8a113963b968466ae11a))
* **react-components:** fixing the duplicate yAxis values ([60073ef](https://github.com/raymfang/iot-app-kit/commit/60073ef7ea4e1167218c8cdecd021bc677d5cc66))
* **react-components:** fixing the prod issue of dashboard throwing exception ([7ecd252](https://github.com/raymfang/iot-app-kit/commit/7ecd2526ed5c07f793ec5e97b1d3eb5595e67a7d))
* **react-components:** fixing the viewport and some styling elements ([7d3526e](https://github.com/raymfang/iot-app-kit/commit/7d3526e34c86b55632a4d5aa0c7029fd1499a48b))
* **react-components:** fixing the xaxis and viewport dependency ([139bcc1](https://github.com/raymfang/iot-app-kit/commit/139bcc15aa219c1906544086ab6bf3d24e4035da))
* **react-components:** hitbox spans entire pagination button ([6a5b2f8](https://github.com/raymfang/iot-app-kit/commit/6a5b2f8eaf237edc4aaae414765f5f186ce09c6a))
* **react-components:** mock date in viewport adapter date tests ([06200dd](https://github.com/raymfang/iot-app-kit/commit/06200dda24e5956c6db0a2b4bfe750cdf53c8592))
* **react-components:** need stop propagation in start and end of resize event ([30e9901](https://github.com/raymfang/iot-app-kit/commit/30e99010bc57e48040ddcac8c41546e745a5a3f9))
* **react-components:** pagination can move forward on first click from relative range ([fcb04f7](https://github.com/raymfang/iot-app-kit/commit/fcb04f73c3bf3af8a467169a3e9cbd6a6743d462))
* **react-components:** pagination over time + tooltip ([ff052c9](https://github.com/raymfang/iot-app-kit/commit/ff052c94fa9f57ac8138d025301a384ab217b258))
* **react-components:** performance fixes for chart component ([403f2bf](https://github.com/raymfang/iot-app-kit/commit/403f2bf6beea75e1e1668e33c60a6149ef1b5436))
* **react-components:** refactor chart to use dataset ([b403789](https://github.com/raymfang/iot-app-kit/commit/b4037897cd4e7169958373bbf61d29c7454706ef))
* **react-components:** refactor legend table into modules ([f5eed70](https://github.com/raymfang/iot-app-kit/commit/f5eed7068b70ae9305782f07b08115294b26a3b7))
* **react-components:** remove data points after a threshold ([cd6a189](https://github.com/raymfang/iot-app-kit/commit/cd6a18913d2c0f3fb8b066dffbdf48f38d6955e4))
* **react-components:** remove padded y axis code ([7e3d365](https://github.com/raymfang/iot-app-kit/commit/7e3d365d07dd4b074c6dda6d2934b7cb05fcde55))
* **react-components:** remove secondary selection state when using TCs or gestures ([3ba4e6a](https://github.com/raymfang/iot-app-kit/commit/3ba4e6a1cc0c2a7fd48eb130f3b72262fcd97ad5))
* **react-components:** removing animation for series lines ([b245995](https://github.com/raymfang/iot-app-kit/commit/b245995766c4f2b83bca219e9d8e6f806912cd6c))
* **react-components:** toggle legend hides container ([8d0ae53](https://github.com/raymfang/iot-app-kit/commit/8d0ae53981698bc8121cb0e40831b9d61e693075))
* **react-components:** trendcursor hotkey indicates addition state ([c9d34e0](https://github.com/raymfang/iot-app-kit/commit/c9d34e0ef4ba891522336f05718d1808442949e3))
* **react-components:** update viewportAdapter tests for month and minutes ([a269626](https://github.com/raymfang/iot-app-kit/commit/a269626bd3e78a8b5f515b8f3d590848e9f70725))
* **react-components:** updates for x-axis panning performance ([07a7624](https://github.com/raymfang/iot-app-kit/commit/07a7624d77962c38e7457abea1602082ebf2f5a3))
* **react-components:** updating echarts ux ([ddfc9c8](https://github.com/raymfang/iot-app-kit/commit/ddfc9c8cc15f32a8c307653daf5d2159918e58b2))
* **react-components:** updating echarts with the fixes founf during bug bash ([9f32c21](https://github.com/raymfang/iot-app-kit/commit/9f32c21ae53d99ddac718caa520d9e852a25f499))
* **react-component:** updating TC to have a drag area instead of just drag on the line ([05068bd](https://github.com/raymfang/iot-app-kit/commit/05068bddfd3a7ff0876550a11263496765b51080))
* realistic dev experience on storybook ([377d64a](https://github.com/raymfang/iot-app-kit/commit/377d64a4ead7b0a68d5df47a5df568da7d188021))
* relative month test ([5c6e262](https://github.com/raymfang/iot-app-kit/commit/5c6e262b16b8a739c4a4d9e823453094242c67d9))
* remove line chart tweening animation ([d9e894b](https://github.com/raymfang/iot-app-kit/commit/d9e894b0f651ad24dce87d7f7c4dbe28f43f43e0))
* remove size and position settings - [#2249](https://github.com/raymfang/iot-app-kit/issues/2249) ([276a1a1](https://github.com/raymfang/iot-app-kit/commit/276a1a1540087f6c3cc4e8c4c41cd2c7695f10a6))
* remove slashes from property alias when requesting latest in query editor ([fbead83](https://github.com/raymfang/iot-app-kit/commit/fbead83ac6765e4fed27b73925a9c4d460dc5a08))
* remove viewport and query from widget render key ([1587e2a](https://github.com/raymfang/iot-app-kit/commit/1587e2aa05887b1e9b1e486c153e8adc74cfde21))
* remove widget panel from text widget ([0620284](https://github.com/raymfang/iot-app-kit/commit/06202847ff980b851bf8ff836ebb2a239c3d00e7))
* removed tanstack table related code ([c8be85d](https://github.com/raymfang/iot-app-kit/commit/c8be85d919faac44441f4b00aa81ac7dbf215599))
* resolved delete button invisible issue [#2164](https://github.com/raymfang/iot-app-kit/issues/2164) ([3ec8743](https://github.com/raymfang/iot-app-kit/commit/3ec8743115848175682e5a8c80bf605d6a2669a7))
* resolved table widget column resize issue ([8b6b418](https://github.com/raymfang/iot-app-kit/commit/8b6b4189601c594ffef9dd6ed915e6ddbf7fa938))
* resolved table widget column resize issue ([08b1993](https://github.com/raymfang/iot-app-kit/commit/08b19932614978cac915e34a27747f72da78c657))
* **ResourceExplorer:** filter out invalid twinmaker execute query search results ([e616be4](https://github.com/raymfang/iot-app-kit/commit/e616be4c6d8e2d8a01b5ba931a57307ea8b7f307))
* **ResourceExplorer:** implement toggling on/off of properties visibility ([8666736](https://github.com/raymfang/iot-app-kit/commit/8666736eb4642cadd7efcedd99fc680b4df17f83))
* restrict [@iot-app-kit](https://github.com/iot-app-kit) imports ([780f404](https://github.com/raymfang/iot-app-kit/commit/780f404f20475dab7d0e21af271b5f3f98defee5))
* **scene composer:** fix for missing grid ([2a4c4c8](https://github.com/raymfang/iot-app-kit/commit/2a4c4c8b194a2eceebe73dc87d24215836be4a99))
* **scene composer:** removing custom grid line colors ([632f7a2](https://github.com/raymfang/iot-app-kit/commit/632f7a210a80281b1d3c53b0a5de168f8cae9d10))
* **scene composer:** restoring dark mode in stotybook ([94e9ac4](https://github.com/raymfang/iot-app-kit/commit/94e9ac4e48762d5389c1fead82938d5ed90857a3))
* **scene composer:** show correct Icon field for tags with Custom Style ([a2239b8](https://github.com/raymfang/iot-app-kit/commit/a2239b86f31fcfcf138a4e7b2305f80958baa641))
* **scene tags:** fix anchor stems not triggering onWidgetClick ([6945512](https://github.com/raymfang/iot-app-kit/commit/6945512eadbdd8d8bc09977ecce7511fbf136311))
* **scene-composer:** 3D model selection broken on first click ([7ee722a](https://github.com/raymfang/iot-app-kit/commit/7ee722ab3cf1aa4a353e7b05c1a9b53f3ac00c88))
* **scene-composer:** add scroll bar to show all tag icons by default ([15c5dee](https://github.com/raymfang/iot-app-kit/commit/15c5deef876eb6af9d4332f3944aeead31412a59))
* **scene-composer:** fix scene hierarchy in viewer mode ([c8c70fd](https://github.com/raymfang/iot-app-kit/commit/c8c70fdac04d8aab12f5a6a3f19303cb6754d083))
* **scene-composer:** fix sub-model selection ([0a11b9a](https://github.com/raymfang/iot-app-kit/commit/0a11b9a391767fea2d255509ac9377889e812a5c))
* **scene-composer:** restore the grid line colors ([be53320](https://github.com/raymfang/iot-app-kit/commit/be53320c4b553f26d3470dd9bf701fa45b85fd7c))
* **scene-composer:** sync tag icon from Matterport ([e0aa7a7](https://github.com/raymfang/iot-app-kit/commit/e0aa7a72db0dc1bcbc3a9c7c7ae87e4b5c061b84))
* **scene:** add overlay close button back ([24f0d94](https://github.com/raymfang/iot-app-kit/commit/24f0d9427a62ea7174983e10af75fe6f6dcb363a))
* **Scene:** animation components added at correct time behind flag ([da149cc](https://github.com/raymfang/iot-app-kit/commit/da149cc5456f841a98581be82b792f52f062b85a))
* **scene:** comment tweak ([234b703](https://github.com/raymfang/iot-app-kit/commit/234b703f8991166e831b385c2cdf6bfd8685fe2a))
* **scene:** ensure the selected overlay is always the one at front ([7a15943](https://github.com/raymfang/iot-app-kit/commit/7a15943accdbae27059e043cf8a55dda525531c1))
* **scene:** fix camera returning to last target on mode change ([08e608d](https://github.com/raymfang/iot-app-kit/commit/08e608dfffdbdb990beb421ead3a504da607d50f))
* **scene:** fix transform controls being clickable ([b846730](https://github.com/raymfang/iot-app-kit/commit/b846730c0cb4e605d047f6421b0c28472b911cf7))
* **scene:** only show selected tags overlay ([20b7c57](https://github.com/raymfang/iot-app-kit/commit/20b7c578bd6b4e44bf11109e0f55f9212328b812))
* **scene:** remove transform controls from raycast ([9cd9861](https://github.com/raymfang/iot-app-kit/commit/9cd9861768fb538726f22541aa54ef05c0f4adf9))
* **scene:** stop scene composer from forcing dark mode on page ([40ef97b](https://github.com/raymfang/iot-app-kit/commit/40ef97b4a6b2baa376fd129991b4672369631323))
* set npm-publish to node v16 ([057eac9](https://github.com/raymfang/iot-app-kit/commit/057eac9f5629be32bf2415fb3f241f715f8150c1))
* source-iotsitewise batch API options ([6e4d430](https://github.com/raymfang/iot-app-kit/commit/6e4d430a033bbd54eb403a96f04ecb23a7909e36))
* style updates and bugfixes for multi y axis ([e11fd3e](https://github.com/raymfang/iot-app-kit/commit/e11fd3eb6629d75b3b2abdb2ad0466d02e66b8ef))
* synchronize batching ([dd0c0c6](https://github.com/raymfang/iot-app-kit/commit/dd0c0c6d0b17f4662ef370633ccd300899f9c106))
* synchronize intervals when new intervals are created ([cbc0fa6](https://github.com/raymfang/iot-app-kit/commit/cbc0fa69c0aac46f2e63386568a23c4c485c7beb))
* synchronize requests after switching tabs ([14f89d9](https://github.com/raymfang/iot-app-kit/commit/14f89d982887db3cd61886c32ec2aa27997f8964))
* table resize button aria label ([1618d50](https://github.com/raymfang/iot-app-kit/commit/1618d50a713cb1be8b9a74899144ca92cd9ec5f1))
* template asset table disables invalid dataTypes ([7cacc1c](https://github.com/raymfang/iot-app-kit/commit/7cacc1cee19fa9c9d116435d377e4bf820ba9ff9))
* testing-util as devDependency of doc-site ([3cc2bb0](https://github.com/raymfang/iot-app-kit/commit/3cc2bb08294244c3f6fd15800892d6402894b434))
* text widget enhancement - 2429 ([0d5a367](https://github.com/raymfang/iot-app-kit/commit/0d5a367c074b12d98aa91a5b5c1ea37e3033c047))
* time machine enable in edit and preview mode ([c30d68b](https://github.com/raymfang/iot-app-kit/commit/c30d68b65dbf4003bc19220fa97a0b9b4b4dac40))
* **TMDT:** change role name to match console, revert GLB code to fix bug, add error handling for IAM ([66f5d83](https://github.com/raymfang/iot-app-kit/commit/66f5d83d3800e07efd3e54b912dbfbbda4ea7f25))
* toggle working linechar ([9ea6117](https://github.com/raymfang/iot-app-kit/commit/9ea61177710b9ece1be169a0c50e1c19fdefb5e6))
* **tools-iottwinmaker:** update dashboard role to include execute query api ([b63d053](https://github.com/raymfang/iot-app-kit/commit/b63d0537ce247724d0dd73d8d0d1ffba20e0ab5a))
* twitchy widget icons [#2143](https://github.com/raymfang/iot-app-kit/issues/2143) ([60e7ad3](https://github.com/raymfang/iot-app-kit/commit/60e7ad306fb184e0be0be0ee9e56e4a6a988c073))
* ungate CSV download feature ([ec11c82](https://github.com/raymfang/iot-app-kit/commit/ec11c82c1b2932a5f7f28d9394f469cac6d68f97))
* unit test fail fix - [#2249](https://github.com/raymfang/iot-app-kit/issues/2249) ([b3a574c](https://github.com/raymfang/iot-app-kit/commit/b3a574c7d443d893aece711813265d94a0ef5ee6))
* update component name ([e768a88](https://github.com/raymfang/iot-app-kit/commit/e768a884118768b5080e745ef8113a344dd0d80e))
* update dependency to not include styles ([e09651e](https://github.com/raymfang/iot-app-kit/commit/e09651e5c065458a269d8d95d1c9c959c5f95ace))
* update HistoryItemGroup snap ([ff64273](https://github.com/raymfang/iot-app-kit/commit/ff64273d2ec48609a4edb2156a2ea9e4bb04a1b4))
* update package-lock.json ([e768a88](https://github.com/raymfang/iot-app-kit/commit/e768a884118768b5080e745ef8113a344dd0d80e))
* update test run command for ui tests ([a5d0433](https://github.com/raymfang/iot-app-kit/commit/a5d043316bf32e0a97897af7d5c3c06ff33e8299))
* update unit test ([2276584](https://github.com/raymfang/iot-app-kit/commit/2276584325c75b8aa823d24588fb589b18876699))
* updated the resource explorer default width [#2292](https://github.com/raymfang/iot-app-kit/issues/2292) ([149ec60](https://github.com/raymfang/iot-app-kit/commit/149ec60e9055851ca8d7abdd787f2762cdcfc8ea))
* updated the wcag compliance for dashboard resource explorer pane [#2173](https://github.com/raymfang/iot-app-kit/issues/2173) ([26bd618](https://github.com/raymfang/iot-app-kit/commit/26bd6181e4c507360247d6a7cddee7db0ba2c5bd))
* updates for performance issues ([8863b9a](https://github.com/raymfang/iot-app-kit/commit/8863b9a80d7a8284aa4732ed25298d165a769ea9))
* use datastream id as legend table row key ([b4c11bc](https://github.com/raymfang/iot-app-kit/commit/b4c11bcd40400d4f7eae680d5ab521f00b638f64))
* use one timesync for all of dashboard ([c979995](https://github.com/raymfang/iot-app-kit/commit/c979995ec642d0ac8081056a3d2e83dd42a90d18))
* **V1011333107:** vulnerbility in fast-xml-parser dependabot couldn't resolve ([73d0e79](https://github.com/raymfang/iot-app-kit/commit/73d0e79b8d567d27e32ce947682b47c9885f9deb))
* **video player:** correcting the VideoPlayer export ([18213d7](https://github.com/raymfang/iot-app-kit/commit/18213d7b254355776900c0e6c735ce6a039ac3f5))
* **video-player:** toggle playback mode and update time range ([a033cb0](https://github.com/raymfang/iot-app-kit/commit/a033cb01824ccff6a63eb4e62d019b691b085a0a))
* x-axis toggle will toggle both x and y axis [#1925](https://github.com/raymfang/iot-app-kit/issues/1925) ([58b0dbb](https://github.com/raymfang/iot-app-kit/commit/58b0dbbc72a9dbfd13648a454ea36ac570efd0eb))
* yAxis label collides with yAxis name [#2471](https://github.com/raymfang/iot-app-kit/issues/2471) ([85ac6ac](https://github.com/raymfang/iot-app-kit/commit/85ac6ac4586d560e44cadedbffe5b1a187bd8bb8))


### Performance Improvements

* improve raw batching ([263282d](https://github.com/raymfang/iot-app-kit/commit/263282d751d334745ddc3079d6a8959b5cf1e6d9))
* increase batch entry and result size ([cf5e978](https://github.com/raymfang/iot-app-kit/commit/cf5e9785418c801e89cc2afa2a626e16547a8a7c))
* increase batch size ([1fefe81](https://github.com/raymfang/iot-app-kit/commit/1fefe81cecf8bbeffebb5e89b73cab3494beba21))
* initial Animator implementation ([3b30cd2](https://github.com/raymfang/iot-app-kit/commit/3b30cd2c236704145ac29b2cf0222a28de9a0959))
* prevent duplication of simultaneous data stream metadata requests ([bfbe7b2](https://github.com/raymfang/iot-app-kit/commit/bfbe7b23c968e367423cf8a81504e2773e5460bc))
* use requestAnimationFrame when dragging widgets on the dashboard ([ef3fc4e](https://github.com/raymfang/iot-app-kit/commit/ef3fc4ec1fed1cefa2f8cc58084b1d968eb1a08f))


### Reverts

* "perf: increase batch size" ([636a539](https://github.com/raymfang/iot-app-kit/commit/636a539fcba8c62871b1b60b117ab2881124ac81))
* filter query on asset models ([c5aa946](https://github.com/raymfang/iot-app-kit/commit/c5aa946584194110cac9313e3150644951635e9c))
* reverting fix(dashboard): remove hide/show from dashboard definition and config panel ([7f63922](https://github.com/raymfang/iot-app-kit/commit/7f6392213d525ec3f5c7534b61323dfc896d112e))
* updated the chart legend ux(spacing, legend border color, width, tooltip) ([6bbe391](https://github.com/raymfang/iot-app-kit/commit/6bbe39103f286ed6f09bd1f4fdd3353dba833e5a))


### Miscellaneous Chores

* **dashboard:** change line-scatter-chart to xy-plot ([70593da](https://github.com/raymfang/iot-app-kit/commit/70593da0638b689f55396488def2c84fdc7dac19))
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).