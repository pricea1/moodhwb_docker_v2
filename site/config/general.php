<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

return array(
    // ...
    '*' => array(
        'useEmailAsUsername' => true,
        'enableCsrfProtection' => true,
        'useEmailAsUsername' => true,
        'setPasswordPath' => array(
            'en_gb' => 'login/set-password',
            'cy_gb' => 'login/set-password'
        ),
        'setPasswordSuccessPath' => array(
            'en_gb' => 'login?status=passwordreset',
            'cy_gb' => 'login?status=passwordreset'
        ),
        'useBugherd' => false,
        'verificationCodeDuration' => 'P4W',
        'omitScriptNameInUrls' => true,
        'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'
    ),
    
    'moodhwb.dev' => array(
//      'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => array(
            'en_gb' => 'http://moodhwb.dev/en/',
            'cy_gb' => 'http://moodhwb.dev/cy/',
        ),
        'useBugherd' => true,
//        'cacheMethod' => 'redis',
        'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'

    ),
    '165.22.117.164' => array(
        'devMode' => true,
       'useCompressedJs' => false,
       'siteUrl' => array(
           'en_gb' => 'http://165.22.117.164/en/',
           'cy_gb' => 'http://165.22.117.164/cy/',
       ),
       'useBugherd' => false,
       'cache' => false,
//        'cacheMethod' => 'redis',
       'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'

   ),
    'dev' => array(
     	'devMode' => true,
	    'useCompressedJs' => false,
        'siteUrl' => array(
	        'en_gb' => 'http://127.0.0.1/en/',
	        'cy_gb' => 'http://127.0.0.1/cy/',
    	),
        'useBugherd' => true,
        'cache' => false,
//        'cacheMethod' => 'redis',
        'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'

    ),
    '192.168.0.24' => array(
//      'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => array(
            'en_gb' => 'https://192.168.0.24/en/',
            'cy_gb' => 'https://192.168.0.24/cy/',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
//        'cacheMethod' => 'redis',
        'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'

    ),
    'stage' => array(
//      'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => array(
            'en_gb' => 'https://moodhwb.madebymoon.com/en/',
            'cy_gb' => 'https://moodhwb.madebymoon.com/cy/',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
//        'cacheMethod' => 'redis',
        'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'
    ),
    'stage.madebymoon.com' =>array(
//      'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => array(
            'en_gb' => 'https://stage.madebymoon.com/en/',
            'cy_gb' => 'https://stage.madebymoon.com/cy/',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
//        'cacheMethod' => 'redis',
        'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'

    ),

    'stage.moodhwb.org' => array(
        'devMode' => true,
        'siteUrl' => array(
            'en_gb' => 'https://stage.moodhwb.org',
            'cy_gb' => 'https://stage.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
        'cacheDuration' => 'P1W',
        'cacheMethod' => 'redis',
        'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'

    ),


    'stage.hwbhwyliau.org' => array(
        'devMode' => true,
        'siteUrl' => array(
            'en_gb' => 'https://stage.moodhwb.org',
            'cy_gb' => 'https://stage.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
        'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'

    ),

    'production' => array(
        'siteUrl' => array(
            'en_gb' => 'https://www.moodhwb.org',
            'cy_gb' => 'https://www.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
    'cacheDuration' => 'P1W',
    'cacheMethod' => 'redis',
    'securityKey' => 'BztZemBp0C4y_mFeqavkvlfIemLaoVkaroot@a59da8de3e86'

    ),

/*
    'www.hwbhwyliau.org' => array(
        'siteUrl' => array(
            'en_gb' => 'https://www.moodhwb.org',
            'cy_gb' => 'https://www.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true
    )
    */
);
